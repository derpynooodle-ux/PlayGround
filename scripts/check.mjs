import { spawnSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const roots = ['src', 'scripts'];
const files = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (entry.endsWith('.js') || entry.endsWith('.mjs')) files.push(path);
  }
};

for (const root of roots) walk(root);
for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (result.status !== 0) {
    console.error(`Syntax check failed: ${relative(process.cwd(), file)}`);
    console.error(result.stderr);
    process.exit(1);
  }
}
console.log(`Syntax check passed for ${files.length} files.`);
