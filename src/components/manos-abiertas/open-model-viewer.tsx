/**
 * Manos Abiertas · Visor local de maquetas 3D.
 * Filosofía: el modelo permanece en el navegador; solo se aceptan copias
 * autorizadas en formatos abiertos de visualización (GLB, OBJ y STL).
 */
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, FileUp, Info, RotateCcw, ShieldCheck, TriangleAlert } from 'lucide-react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MAX_MODEL_BYTES = 50 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = ['glb', 'obj', 'stl'];

type ViewerRuntime = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  model?: THREE.Object3D;
  frame: number;
};

function getExtension(fileName: string) {
  return fileName.split('.').pop()?.toLowerCase() ?? '';
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    mesh.geometry?.dispose?.();
    const material = mesh.material;
    const materials = Array.isArray(material) ? material : [material];
    materials.forEach((item) => item?.dispose?.());
  });
}

export function OpenModelViewer() {
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const runtimeRef = useRef<ViewerRuntime | null>(null);
  const [message, setMessage] = useState('Elige una maqueta 3D local en formato GLB, OBJ o STL.');
  const [modelName, setModelName] = useState<string | null>(null);

  const frameModel = useCallback((model: THREE.Object3D, runtime: ViewerRuntime) => {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const largestSide = Math.max(size.x, size.y, size.z, 1);
    const distance = largestSide * 1.8;

    runtime.controls.target.copy(center);
    runtime.camera.position.set(center.x + distance, center.y + distance * 0.7, center.z + distance);
    runtime.camera.near = Math.max(largestSide / 1000, 0.01);
    runtime.camera.far = Math.max(largestSide * 100, 1000);
    runtime.camera.updateProjectionMatrix();
    runtime.controls.update();
  }, []);

  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b1220');
    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 10000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(0, 0, 0);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x122033, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);
    const grid = new THREE.GridHelper(30, 30, 0x385575, 0x20354a);
    grid.position.y = -0.01;
    scene.add(grid);

    const resize = () => {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 320);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const runtime: ViewerRuntime = { scene, camera, renderer, controls, frame: 0 };
    runtimeRef.current = runtime;
    const animate = () => {
      runtime.frame = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(runtime.frame);
      resizeObserver.disconnect();
      if (runtime.model) disposeObject(runtime.model);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      runtimeRef.current = null;
    };
  }, []);

  const loadFile = useCallback(async (file: File) => {
    const runtime = runtimeRef.current;
    const extension = getExtension(file.name);
    if (!runtime) return;
    if (!ACCEPTED_EXTENSIONS.includes(extension)) {
      setMessage('Formato no compatible. Exporta una copia autorizada como GLB, OBJ o STL.');
      return;
    }
    if (file.size > MAX_MODEL_BYTES) {
      setMessage('El archivo supera 50 MB. Simplifica la maqueta o exporta una copia de presentación más ligera.');
      return;
    }

    setMessage(`Abriendo ${file.name}. El archivo se procesa solo en este navegador.`);
    try {
      const data = await file.arrayBuffer();
      let object: THREE.Object3D;

      if (extension === 'glb') {
        object = await new Promise<THREE.Object3D>((resolve, reject) => {
          new GLTFLoader().parse(data, '', (gltf) => resolve(gltf.scene), reject);
        });
      } else if (extension === 'obj') {
        object = new OBJLoader().parse(new TextDecoder().decode(data));
      } else {
        const geometry = new STLLoader().parse(data);
        geometry.computeVertexNormals();
        object = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({ color: 0x9cc7e6, metalness: 0.12, roughness: 0.55 }),
        );
      }

      if (runtime.model) {
        runtime.scene.remove(runtime.model);
        disposeObject(runtime.model);
      }
      runtime.model = object;
      runtime.scene.add(object);
      frameModel(object, runtime);
      setModelName(file.name);
      setMessage(`${file.name} está abierto localmente. Arrastra para girar; usa la rueda para acercar o alejar.`);
    } catch {
      setMessage('No se pudo abrir el archivo. Prueba una exportación simple, revisa que no esté dañada y conserva el original.');
    }
  }, [frameModel]);

  const resetView = () => {
    const runtime = runtimeRef.current;
    if (runtime?.model) {
      frameModel(runtime.model, runtime);
      setMessage('Vista restablecida.');
    }
  };

  return (
    <div className="space-y-4">
      <Card className="border-sky-500/20 bg-sky-500/5">
        <CardContent className="space-y-3 p-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-sky-500/10 p-2 text-sky-700 dark:text-sky-300"><Box className="h-5 w-5" /></div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-semibold">Visor local de maquetas 3D</h2>
                <Badge variant="outline">GLB · OBJ · STL</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Abre una copia autorizada para explicarla o revisarla. El archivo no se sube a Manos Abiertas y el visor no certifica cálculos, mediciones ni cumplimiento profesional.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="overflow-hidden rounded-xl border bg-slate-950 shadow-inner">
          <div ref={canvasHostRef} className="h-[360px] w-full" role="img" aria-label={modelName ? `Maqueta 3D local abierta: ${modelName}` : 'Área de visualización 3D vacía'} />
          <div className="border-t border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-200" aria-live="polite">{message}</div>
        </div>

        <Card>
          <CardContent className="space-y-4 p-4">
            <div className="space-y-2">
              <h3 className="font-semibold">1. Exporta una copia</h3>
              <p className="text-xs text-muted-foreground">Desde tu herramienta autorizada, crea una copia de presentación como GLB, OBJ o STL. Para BIM, conserva y valida el IFC como archivo de intercambio.</p>
            </div>
            <label className="block">
              <span className="sr-only">Seleccionar maqueta 3D local</span>
              <input
                type="file"
                accept=".glb,.obj,.stl,model/gltf-binary,model/stl"
                className="sr-only"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void loadFile(file);
                  event.currentTarget.value = '';
                }}
              />
              <span className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                <FileUp className="h-4 w-4" /> Abrir modelo local
              </span>
            </label>
            <Button type="button" variant="outline" className="w-full gap-2" onClick={resetView} disabled={!modelName}>
              <RotateCcw className="h-4 w-4" /> Restablecer vista
            </Button>
            <div className="space-y-2 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
              <div className="flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /><span>Procesamiento local: no hay carga al servidor desde esta herramienta.</span></div>
              <div className="flex gap-2"><Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" /><span>IFC es el intercambio abierto recomendado para BIM; este prototipo se centra en maquetas ligeras para navegador.</span></div>
              <div className="flex gap-2"><TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" /><span>Retira datos sensibles y confirma permisos antes de compartir una copia del proyecto.</span></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
