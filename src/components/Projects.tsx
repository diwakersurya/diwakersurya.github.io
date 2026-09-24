import { startTransition, useEffect, useRef, useState, ViewTransition } from 'react';
import { projects, type Project } from '../data/resume';
import styles from './Projects.module.css';

// Opening a project morphs its row into the detail sheet via a shared
// ViewTransition name; only one of the two carries the name at a time.

const open = (set: (p: Project | null) => void, p: Project | null) => startTransition(() => set(p));

function Meta({ p }: { p: Project }) {
  return (
    <p className={styles.meta}>
      {p.language}
    </p>
  );
}

function Detail({ p, onClose }: { p: Project; onClose: () => void }) {
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <ViewTransition name={`project-${p.name}`}>
        <article className={styles.sheet} role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(e) => e.stopPropagation()}>
          <h3 id="project-title" className={styles.sheetTitle}>{p.title}</h3>
          <Meta p={p} />
          <p className={styles.detail}>{p.detail}</p>
          <p className={styles.tags}>{p.tags.join(', ')}</p>
          <div className={styles.actions}>
            {p.homepage && <a href={p.homepage}>Open live site</a>}
            <a href={p.url}>View source on GitHub</a>
            <button ref={close} type="button" className={styles.close} onClick={onClose}>
              Close
            </button>
          </div>
        </article>
      </ViewTransition>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const lastRow = useRef<HTMLButtonElement | null>(null);
  const onClose = () => {
    open(setSelected, null);
    lastRow.current?.focus();
  };

  return (
    <>
      <ul className={styles.list}>
        {projects.map((p) => {
          const row = (
            <button
              type="button"
              className={styles.row}
              onClick={(e) => {
                lastRow.current = e.currentTarget;
                open(setSelected, p);
              }}
            >
              <span className={styles.rowTitle}>{p.title}</span>
              <span className={styles.blurb}>{p.blurb}</span>
              <Meta p={p} />
            </button>
          );
          return <li key={p.name}>{selected?.name === p.name ? row : <ViewTransition name={`project-${p.name}`}>{row}</ViewTransition>}</li>;
        })}
      </ul>
      {selected && <Detail p={selected} onClose={onClose} />}
    </>
  );
}
