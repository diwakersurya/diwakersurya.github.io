import { lazy, Suspense } from 'react';
import { education, profile, recognition, skills, work } from './data/resume';
import Projects from './components/Projects';
import styles from './App.module.css';

const Scene = lazy(() => import('./components/Scene'));

export default function App() {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.scene}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.name}>
            Diwaker
            <br />
            Singh
          </h1>
          <p className={styles.role}>
            {profile.role} at SenseHQ, {profile.location}
          </p>
          <p className={styles.summary}>{profile.summary}</p>
          <nav className={styles.links} aria-label="Contact">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
          </nav>
        </div>
        <p className={styles.hint}>Each block is a company, each dot a project I shipped there. Click a block to read about it.</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section} aria-labelledby="work">
          <h2 id="work" className={styles.heading}>Work</h2>
          <ol className={styles.timeline}>
            {work.map((job, i) => (
              <li key={job.company} id={`job-${i}`} className={styles.job}>
                <p className={styles.years}>
                  {job.start === job.end ? job.start : `${job.start} to ${job.end}`}
                </p>
                <div>
                  <h3 className={styles.company}>{job.company}</h3>
                  <p className={styles.title}>
                    {job.title}, {job.place}
                  </p>
                  <ul className={styles.highlights}>
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} aria-labelledby="skills">
          <h2 id="skills" className={styles.heading}>Toolbox</h2>
          <dl className={styles.skills}>
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section} aria-labelledby="projects">
          <h2 id="projects" className={styles.heading}>Hobby projects</h2>
          <p className={styles.lede}>
            My professional work is closed-source. These are small things I tinker with on weekends, from my public GitHub.
          </p>
          <Projects />
        </section>

        <section className={styles.section} aria-labelledby="more">
          <h2 id="more" className={styles.heading}>Recognition and education</h2>
          <ul className={styles.facts}>
            {recognition.map((r) => (
              <li key={r.what}>
                <strong>{r.what}</strong>, {r.where}, {r.when}
              </li>
            ))}
            <li>
              <strong>{education.degree}</strong>, {education.school}, {education.when}
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Want to talk frontend architecture? Write to <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </footer>
    </>
  );
}
