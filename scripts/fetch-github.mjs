// Pulls live stats for the curated repos into src/data/github.json.
// Runs in CI before build; the committed JSON keeps local builds working offline.
import { writeFile } from 'node:fs/promises';

const USER = 'diwakersurya';
const REPOS = [
  'magic-move-code',
  'agent-taste',
  'mac-dnd-categoriser',
  'svelte-accordion',
  'image-server-canvas',
  'auto-login-extension',
  'sandbox',
  'click-to-copy',
  'chrome-gist-extension',
];

const headers = { Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const get = async (path) => {
  const res = await fetch(`https://api.github.com/${path}`, { headers });
  if (!res.ok) throw new Error(`${path}: ${res.status} ${await res.text()}`);
  return res.json();
};

const user = await get(`users/${USER}`);
const repos = await Promise.all(
  REPOS.map(async (name) => {
    const r = await get(`repos/${USER}/${name}`);
    return {
      name: r.name,
      url: r.html_url,
      homepage: r.homepage || null,
      description: r.description,
      language: r.language,
      pushedAt: r.pushed_at,
    };
  }),
);

const data = {
  fetchedAt: new Date().toISOString(),
  profile: { login: user.login, avatar: user.avatar_url, publicRepos: user.public_repos, since: user.created_at },
  repos,
};
await writeFile(new URL('../src/data/github.json', import.meta.url), JSON.stringify(data, null, 2) + '\n');
console.log(`wrote ${repos.length} repos`);
