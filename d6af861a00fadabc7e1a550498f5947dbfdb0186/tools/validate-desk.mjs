#!/usr/bin/env node
// node tools/validate-desk.mjs [data/desk.json]
import fs from 'node:fs'; import { validate } from './validate.mjs';
const f = process.argv[2] || 'data/desk.json'; const r = validate(JSON.parse(fs.readFileSync(f, 'utf8')));
if (r.valid) console.log(`VALID ${f}`); else { console.error(`INVALID ${f}\n  ` + r.errors.join('\n  ')); process.exit(1); }
