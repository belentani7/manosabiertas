import { NextResponse } from "next/server";
import { createValidationEnvelope } from "@/server/domain/pvc-envelope";
import { validateSpheres1To6 } from "@/server/application/pvc-validator";

export async function POST(request: Request) {
  const traceId = "trace-hand-" + Math.random().toString(36).substring(2, 9);
  const startTime = performance.now();

  try {
    const body = await request.json().catch(() => ({}));
    const spheres = validateSpheres1To6(body, traceId);

    // Simulação do pipeline de rastreamento de 50 perfis e nós A/B/C
    const profileId = body.profileId || "P01";
    const initialNme = typeof body.nme === "number" ? body.nme : 0.035;

    let correctedNme = initialNme;
    let nodeApplied = "NONE";

    if (correctedNme > 0.01) {
      if (correctedNme > 0.03) {
        correctedNme *= 0.5; // Node A: Kinematic constraints
        nodeApplied = "NODE_A_KINEMATIC_CONSTRAINTS";
      } else if (correctedNme > 0.02) {
        correctedNme *= 0.6; // Node B: Temporal filtering / jitter
        nodeApplied = "NODE_B_TEMPORAL_FILTERING";
      } else {
        correctedNme *= 0.55; // Node C: CLAHE / luminance adaptation
        nodeApplied = "NODE_C_LUMINANCE_ADAPTATION";
      }
    }

    const passed = correctedNme <= 0.01;
    const processingTimeMs = performance.now() - startTime;

    const resultData = {
      profileId,
      initialNme,
      correctedNme: Number(correctedNme.toFixed(4)),
      targetNme: 0.01,
      score10outof10: passed,
      nodeApplied,
      processingTimeMs: Number(processingTimeMs.toFixed(2)),
    };

    const envelope = createValidationEnvelope(resultData, spheres, traceId);
    return NextResponse.json(envelope, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    return NextResponse.json(
      {
        status: "FAILED",
        traceId,
        error: { code: "PVC-500", message: errorMessage, layer: "HandTrackingPipeline" },
      },
      { status: 500 }
    );
  }
}
