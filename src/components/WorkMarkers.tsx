import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, RoundedBox, View } from '@react-three/drei';
import * as THREE from 'three';
import type { Kind } from '../data/resume';
import styles from './WorkMarkers.module.css';

// Every bullet marker is a drei <View>: a DOM box whose 3D contents are drawn
// by one shared fixed canvas, so twenty markers cost one WebGL context.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const css = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const star = (() => {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 0.26 : 0.6;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    s[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.22, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2 });
  g.center();
  return g;
})();

function Shape({ kind, active }: { kind: Kind; active: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const color = useMemo(() => css(`--k-${kind}`), [kind]);
  useFrame((_, dt) => {
    const g = ref.current;
    if (!g) return;
    if (!reducedMotion) {
      g.rotation.y += dt * (active ? 3 : 0.6);
      g.rotation.x += dt * (active ? 1.2 : 0.2);
    }
    g.scale.setScalar(THREE.MathUtils.lerp(g.scale.x, active ? 1.25 : 1, 0.15));
  });
  const material = <meshStandardMaterial color={color} roughness={0.3} metalness={0.15} />;
  return (
    <group ref={ref} rotation={[0.4, 0.3, 0]}>
      {kind === 'led' && (
        <mesh>
          <coneGeometry args={[0.5, 0.95, 4]} />
          {material}
        </mesh>
      )}
      {kind === 'architected' && (
        <mesh>
          <octahedronGeometry args={[0.6]} />
          {material}
        </mesh>
      )}
      {kind === 'built' && (
        <RoundedBox args={[0.72, 0.72, 0.72]} radius={0.12}>
          {material}
        </RoundedBox>
      )}
      {kind === 'modernised' && (
        <mesh>
          <torusGeometry args={[0.4, 0.16, 16, 40]} />
          {material}
        </mesh>
      )}
      {kind === 'recognised' && <mesh geometry={star}>{material}</mesh>}
    </group>
  );
}

export function Marker({ kind, active = false }: { kind: Kind; active?: boolean }) {
  return (
    <View className={styles.marker}>
      <PerspectiveCamera makeDefault position={[0, 0, 2.3]} fov={40} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 3, 3]} intensity={2} />
      <Shape kind={kind} active={active} />
    </View>
  );
}

export default function MarkerCanvas() {
  return (
    <Canvas className={styles.canvas} eventSource={document.getElementById('root')!} dpr={[1, 2]} aria-hidden>
      <View.Port />
    </Canvas>
  );
}
