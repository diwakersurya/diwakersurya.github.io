import { lazy, startTransition, Suspense, useState, ViewTransition } from 'react';
import { kinds, work, type Kind } from '../data/resume';
import styles from './Work.module.css';

// Markers live in the three.js chunk; a flat coloured dot stands in until it loads.
const Marker = lazy(() => import('./WorkMarkers').then((m) => ({ default: m.Marker })));

function Dot({ kind, active }: { kind: Kind; active?: boolean }) {
  return (
    <Suspense fallback={<span className={styles.dot} style={{ background: `var(--k-${kind})` }} />}>
      <Marker kind={kind} active={active} />
    </Suspense>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<Kind | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const toggle = (k: Kind) => startTransition(() => setFilter((f) => (f === k ? null : k)));

  return (
    <>
      <div className={styles.legend} role="group" aria-label="Show only one kind of work">
        {(Object.keys(kinds) as Kind[]).map((k) => (
          <button key={k} type="button" className={styles.kind} aria-pressed={filter === k} onClick={() => toggle(k)}>
            <Dot kind={k} active={filter === k} />
            {kinds[k]}
          </button>
        ))}
      </div>
      <ol className={styles.timeline}>
        {work.map((job, i) => {
          const shown = job.highlights.filter((h) => !filter || h.kind === filter);
          if (!shown.length) return null;
          return (
            <ViewTransition key={job.company}>
              <li id={`job-${i}`} className={styles.job}>
                <p className={styles.years}>{job.start === job.end ? job.start : `${job.start} to ${job.end}`}</p>
                <div>
                  <h3 className={styles.company}>{job.company}</h3>
                  <p className={styles.title}>
                    {job.title}, {job.place}
                  </p>
                  <ul className={styles.highlights}>
                    {shown.map((h) => (
                      <ViewTransition key={h.text}>
                        <li onMouseEnter={() => setHovered(h.text)} onMouseLeave={() => setHovered(null)}>
                          <Dot kind={h.kind} active={hovered === h.text} />
                          <span>{h.text}</span>
                        </li>
                      </ViewTransition>
                    ))}
                  </ul>
                </div>
              </li>
            </ViewTransition>
          );
        })}
      </ol>
    </>
  );
}
