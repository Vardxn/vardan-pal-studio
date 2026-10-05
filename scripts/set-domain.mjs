import { readFileSync, writeFileSync } from 'node:fs';

const domain = process.argv[2];
if (!domain || /[\/\s]/.test(domain)) {
  console.error('Usage: node scripts/set-domain.mjs example.in');
  process.exit(1);
}
const files = ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'assets/js/premium.js', 'assets/js/analytics.js'];
for (const f of files) {
  try {
    const s = readFileSync(f, 'utf8');
    if (s.includes('YOUR-DOMAIN')) {
      writeFileSync(f, s.replaceAll('YOUR-DOMAIN', domain));
      console.log('updated', f);
    }
  } catch { /* file missing, skip */ }
}
