export type ValidationStatus = "PASSED" | "FAILED" | "WARNING" | "BYPASSED";

export interface ValidationSphereResult {
  sphereId: number;
  sphereName: string;
  status: ValidationStatus;
  message: string;
  code: string;
  timestamp: string;
  details?: Record<string, unknown>;
}

export interface ValidationEnvelope<T = unknown> {
  validationId: string;
  traceId: string;
  timestamp: string;
  version: string;
  status: ValidationStatus;
  spheres: ValidationSphereResult[];
  data: T;
  error?: {
    code: string;
    message: string;
    layer: string;
  };
}

export function createValidationEnvelope<T>(
  data: T,
  spheres: ValidationSphereResult[],
  traceId: string = "trace-" + Math.random().toString(36).substring(2, 9)
): ValidationEnvelope<T> {
  const failed = spheres.some((s) => s.status === "FAILED");
  const status: ValidationStatus = failed ? "FAILED" : "PASSED";
  const firstError = spheres.find((s) => s.status === "FAILED");

  return {
    validationId: "val-" + Math.random().toString(36).substring(2, 9),
    traceId,
    timestamp: new Date().toISOString(),
    version: "Ω-Max-1.0.0",
    status,
    spheres,
    data,
    error: firstError
      ? {
          code: firstError.code,
          message: firstError.message,
          layer: firstError.sphereName,
        }
      : undefined,
  };
}
