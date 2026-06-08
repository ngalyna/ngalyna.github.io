#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const domain = (process.argv[2] || 'mcngalyna.id.vn').replace(/^https?:\/\//, '').replace(/\/$/, '');
const root = path.resolve(__dirname, '..');
const oldOrigin = 'https://ngalyna.github.io';
const newOrigin = `https://${domain}`;
const today = new Date().toISOString().slice(0, 10);

const files = ['index.html', 'robots.txt', 'sitemap.xml'];

function read(file){
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function write(file, content){
  fs.writeFileSync(path.join(root, file), content);
}

for(const file of files){
  if(!fs.existsSync(path.join(root, file))){
    throw new Error(`Missing ${file}`);
  }
}

let index = read('index.html');
index = index.split(`${oldOrigin}/`).join(`${newOrigin}/`);
index = index.split(oldOrigin).join(newOrigin);
write('index.html', index);

let robots = read('robots.txt');
robots = robots.split(`${oldOrigin}/sitemap.xml`).join(`${newOrigin}/sitemap.xml`);
write('robots.txt', robots);

let sitemap = read('sitemap.xml');
sitemap = sitemap.split(`${oldOrigin}/`).join(`${newOrigin}/`);
sitemap = sitemap.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${today}</lastmod>`);
write('sitemap.xml', sitemap);

write('CNAME', `${domain}\n`);

console.log(`Prepared custom domain: ${domain}`);
console.log('Updated: index.html, robots.txt, sitemap.xml, CNAME');
console.log('Next: git diff, test locally, commit, push, then enforce HTTPS in GitHub Pages.');
