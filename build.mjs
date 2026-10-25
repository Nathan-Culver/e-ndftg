import fs from 'node:fs';
fs.mkdirSync('dist',{recursive:true});
for(const f of ['index.html','styles.css','app.js','help.js','engine.js','data.js','ai.js','storage.js','sw.js','icon.svg','manifest.webmanifest'])fs.copyFileSync(f,'dist/'+f);
if(fs.existsSync('docs'))fs.cpSync('docs','dist/docs',{recursive:true});
console.log('Built static game in dist/.');
