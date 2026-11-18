// Minimal JSON-Schema (draft 2020-12 subset) validator: type, required, properties, additionalProperties, items, enum, const, minimum, maximum, propertyNames-free.
import fs from 'node:fs'; import path from 'node:path';
const SCHEMA_PATH = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../schema/desk-export.v1.schema.json');
let SCHEMA = null;
const typeOf = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : Number.isInteger(v) ? 'integer' : typeof v);
function check(s, v, p, errs) {
  if (s.$ref) s = resolve(s.$ref);
  if (s.type) { const ts = [].concat(s.type); const t = typeOf(v); if (!ts.includes(t) && !(t === 'integer' && ts.includes('number'))) { errs.push(`${p}: expected ${ts.join('|')}, got ${t}`); return; } }
  if ('const' in s && v !== s.const) errs.push(`${p}: must equal ${JSON.stringify(s.const)}`);
  if (s.enum && !s.enum.includes(v)) errs.push(`${p}: not in enum ${JSON.stringify(s.enum)}`);
  if (typeof v === 'number') { if (s.minimum != null && v < s.minimum) errs.push(`${p}: < ${s.minimum}`); if (s.maximum != null && v > s.maximum) errs.push(`${p}: > ${s.maximum}`); }
  if (v && typeof v === 'object' && !Array.isArray(v)) {
    for (const r of s.required || []) if (!(r in v)) errs.push(`${p}: missing ${r}`);
    for (const [k, x] of Object.entries(v)) { if (s.properties?.[k]) check(s.properties[k], x, `${p}.${k}`, errs); else if (s.additionalProperties === false) errs.push(`${p}: unexpected property ${k}`); else if (typeof s.additionalProperties === 'object') check(s.additionalProperties, x, `${p}.${k}`, errs); }
  }
  if (Array.isArray(v) && s.items) v.forEach((x, i) => check(s.items, x, `${p}[${i}]`, errs));
}
function resolve(ref) { const parts = ref.replace(/^#\//, '').split('/'); let o = SCHEMA; for (const k of parts) o = o[k]; return o; }
export function validate(doc, schema) { SCHEMA = schema || SCHEMA || JSON.parse(fs.readFileSync(SCHEMA_PATH)); const errs = []; check(SCHEMA, doc, '$', errs); return { valid: errs.length === 0, errors: errs }; }
