import fs from 'node:fs';
const exp=src=>[...src.matchAll(/export\s+(?:const|function)\s+(\w+)/g)].map(m=>m[1]);
function module(name,filename,imports=''){const raw=fs.readFileSync(filename,'utf8'),names=exp(raw),source=raw.replace(/^import[^\n]*\n/gm,'').replace(/export\s+(const|function)\s/g,'$1 ');return `const ${name}=(()=>{${imports}\n${source}\nreturn {${names.join(',')}};})();\n`;}
let code=module('__data','data.js');
code+=module('__engine','engine.js','const {SPEC,SPECIES,TECH,TECHS,PART,SHIPS,RES,DIRS,INCOME,UPKEEP,DISCOUNT,COLORS}=__data;');
code+=module('__ai','ai.js','const E=__engine; const {TECHS,TECH,PART,RES,SHIPS,SPEC}=__data;');
code+=module('__storage','storage.js','const {validateSave}=__engine;');
const app=fs.readFileSync('app.js','utf8').replace(/^import[^\n]*\n/gm,'').replace("if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});",'');
code+=`(()=>{const E=__engine;const {aiOrder}=__ai;const {TITLE,SPECIES,SPEC,TECHS,TECH,SHIPS,PARTS,PART,RES,INCOME,COLORS,RULES}=__data;const {saveGame,loadGame,saveInfo,parseImport,exportText}=__storage;\n${app}\n})();`;
const icon='data:image/svg+xml;base64,'+fs.readFileSync('icon.svg').toString('base64');
let html=fs.readFileSync('index.html','utf8').replace('<link rel="stylesheet" href="styles.css">',`<style>${fs.readFileSync('styles.css','utf8')}</style>`).replace('<link rel="manifest" href="manifest.webmanifest">','').replace('href="icon.svg"',`href="${icon}"`).replace('<script type="module" src="app.js"></script>',`<script type="module">${code.replaceAll('</script','<\\/script').replaceAll('src="icon.svg"',`src="${icon}"`)}</script>`);
const target=process.argv[2]||'E-NDftG.html';fs.writeFileSync(target,html);console.log('Created standalone game: '+target);
