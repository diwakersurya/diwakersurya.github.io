import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Line, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { work } from '../data/resume';
import styles from './Scene.module.css';

// The hero graph is the career itself: company nodes chained oldest to newest,
// each with its key projects branching off, and signals running along the edges
// the way a workflow run moves through a builder canvas.

type Node = { id: string; label: string; pos: THREE.Vector3; kind: 'company' | 'project'; jobId?: string };
type Edge = { curve: THREE.QuadraticBezierCurve3; kind: Node['kind'] };

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const css = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

function buildGraph() {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const jobs = [...work].reverse();
  const bend = (a: THREE.Vector3, b: THREE.Vector3, lift: number) =>
    new THREE.QuadraticBezierCurve3(
      a,
      a
        .clone()
        .lerp(b, 0.5)
        .add(new THREE.Vector3(0, lift, 0)),
      b,
    );

  let prev: THREE.Vector3 | null = null;
  jobs.forEach((job, i) => {
    const pos = new THREE.Vector3(-3.2 + i * 1.65, -1.5 + i * 0.75, Math.sin(i * 1.4) * 1.1);
    nodes.push({
      id: job.company,
      label: `${job.company.split(' ')[0]}, ${job.start}`,
      pos,
      kind: 'company',
      jobId: `job-${jobs.length - 1 - i}`,
    });
    if (prev) edges.push({ curve: bend(prev, pos, 0.6), kind: 'company' });
    prev = pos;

    job.projects.forEach((p, j) => {
      const a = (j / job.projects.length) * Math.PI * 2 + i;
      const ppos = pos.clone().add(new THREE.Vector3(Math.cos(a) * 1.05, Math.sin(a) * 0.8 + 0.25, Math.sin(a) * 0.7));
      nodes.push({ id: `${job.company}/${p}`, label: p, pos: ppos, kind: 'project' });
      edges.push({ curve: bend(pos, ppos, 0.25), kind: 'project' });
    });
  });
  return { nodes, edges };
}

const { nodes, edges } = buildGraph();
const tmp = new THREE.Vector3();

function Pulse({ curve, color, speed, offset }: { curve: THREE.Curve<THREE.Vector3>; color: string; speed: number; offset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    ref.current?.position.copy(curve.getPoint((clock.elapsedTime * speed + offset) % 1));
  });
  return (
    <mesh ref={ref} position={curve.getPoint(offset)}>
      <sphereGeometry args={[0.05, 12, 12]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}

type Labels = React.RefObject<(HTMLSpanElement | null)[]>;

function Graph({ hovered, setHovered, labels }: { hovered: string | null; setHovered: (id: string | null) => void; labels: Labels }) {
  const colors = useMemo(() => ({ cobalt: css('--cobalt'), amber: css('--amber'), line: css('--line') }), []);
  const group = useRef<THREE.Group>(null);

  useFrame(({ pointer, clock, camera, size }) => {
    const g = group.current;
    if (!g) return;
    const drift = reducedMotion ? 0 : Math.sin(clock.elapsedTime * 0.15) * 0.12;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, -0.35 + pointer.x * 0.35 + drift, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 0.1 - pointer.y * 0.15, 0.05);
    g.updateMatrixWorld();
    // ponytail: plain DOM labels projected per frame; drei <Html> races with React 19.3 roots.
    nodes.forEach((n, i) => {
      const el = labels.current[i];
      if (!el) return;
      tmp
        .copy(n.pos)
        .setY(n.pos.y + (n.kind === 'company' ? 0.38 : 0.2))
        .applyMatrix4(g.matrixWorld)
        .project(camera);
      el.style.transform = `translate(-50%, -100%) translate(${((tmp.x + 1) / 2) * size.width}px, ${((1 - tmp.y) / 2) * size.height}px)`;
    });
  });

  return (
    <group ref={group}>
      {edges.map((e, i) => (
        <Line
          key={i}
          points={e.curve.getPoints(40)}
          color={e.kind === 'company' ? colors.cobalt : colors.line}
          lineWidth={e.kind === 'company' ? 2 : 1}
        />
      ))}
      {!reducedMotion &&
        edges.map((e, i) => (
          <Pulse
            key={i}
            curve={e.curve}
            color={e.kind === 'company' ? colors.amber : colors.cobalt}
            speed={e.kind === 'company' ? 0.35 : 0.22}
            offset={(i * 0.37) % 1}
          />
        ))}
      {nodes.map((n) => {
        const active = hovered === n.id;
        const events = {
          onPointerOver: (ev: { stopPropagation: () => void }) => {
            ev.stopPropagation();
            setHovered(n.id);
            document.body.style.cursor = n.jobId ? 'pointer' : '';
          },
          onPointerOut: () => {
            setHovered(null);
            document.body.style.cursor = '';
          },
          onClick: () => n.jobId && document.getElementById(n.jobId)?.scrollIntoView(),
        };
        return n.kind === 'company' ? (
          <RoundedBox
            key={n.id}
            position={n.pos}
            args={[0.36, 0.36, 0.36]}
            radius={0.08}
            scale={(n.jobId === 'job-0' ? 1.4 : 1) * (active ? 1.2 : 1)}
            {...events}
          >
            <meshStandardMaterial color={colors.cobalt} roughness={0.35} metalness={0.1} />
          </RoundedBox>
        ) : (
          <mesh key={n.id} position={n.pos} scale={active ? 1.5 : 1} {...events}>
            <sphereGeometry args={[0.08, 20, 20]} />
            <meshStandardMaterial color={colors.amber} roughness={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Scene() {
  const [hovered, setHovered] = useState<string | null>(null);
  const labels = useRef<(HTMLSpanElement | null)[]>([]);
  return (
    <div className={styles.wrap}>
      <Canvas
        className={styles.canvas}
        camera={{ position: [0, 0.3, 10], fov: 40 }}
        dpr={[1, 2]}
        frameloop={reducedMotion ? 'demand' : 'always'}
        aria-hidden
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 5, 4]} intensity={1.6} />
        <Bounds fit clip observe margin={1.05}>
          <Graph hovered={hovered} setHovered={setHovered} labels={labels} />
        </Bounds>
      </Canvas>
      <div className={styles.labels} aria-hidden>
        {nodes.map((n, i) => (
          <span
            key={n.id}
            ref={(el) => {
              labels.current[i] = el;
            }}
            className={hovered === n.id ? styles.labelActive : n.kind === 'company' ? styles.label : styles.hidden}
          >
            {n.label}
          </span>
        ))}
      </div>
    </div>
  );
}
