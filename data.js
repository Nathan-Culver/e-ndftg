export const TITLE='E:NDftG';
export const COLORS=['#60c3f3','#ef617e','#b8d773','#f2c46d','#bd9cee','#ecedf6'];
export const RES=['money','science','materials'];
export const DIRS=[[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]];
export const INCOME=[2,3,4,6,8,10,12,15,18,21,24,28,32];
// Index is the number of influence discs absent from the thirteen-circle track.
export const UPKEEP=[0,0,0,1,2,3,5,7,10,13,17,21,25,30,35,40,45];
export const DISCOUNT=[0,1,2,3,4,6,8,10];
const tech=(id,name,track,cost,min,count,effect)=>({id,name,track,cost,min,count,effect});
export const TECHS=[
tech('neutron','Neutron Bombs','military',2,2,5,'Destroy enemy population without rolling after space combat.'),
tech('starbase','Starbase','military',4,3,5,'Build stationary Starbases.'),
tech('plasma','Plasma Cannon','military',6,4,5,'Unlock Plasma Cannon ship parts.'),
tech('phase','Phase Shield','military',8,5,4,'Unlock Phase Shield ship parts.'),
tech('mining','Advanced Mining','military',10,6,4,'Colonize advanced Materials squares.'),
tech('tachyonSource','Tachyon Source','military',12,6,3,'Unlock Tachyon Source ship parts.'),
tech('missile','Plasma Missile','military',14,7,3,'Unlock Plasma Missile ship parts.'),
tech('gluon','Gluon Computer','military',16,8,3,'Unlock Gluon Computer ship parts.'),
tech('gauss','Gauss Shield','grid',2,2,5,'Unlock Gauss Shield ship parts.'),
tech('improved','Improved Hull','grid',4,3,5,'Unlock Improved Hull ship parts.'),
tech('fusionSource','Fusion Source','grid',6,4,5,'Unlock Fusion Source ship parts.'),
tech('positron','Positron Computer','grid',8,5,4,'Unlock Positron Computer ship parts.'),
tech('economy','Advanced Economy','grid',10,6,4,'Colonize advanced Money squares.'),
tech('tachyonDrive','Tachyon Drive','grid',12,6,3,'Unlock Tachyon Drive ship parts.'),
tech('antimatter','Antimatter Cannon','grid',14,7,3,'Unlock Antimatter Cannon ship parts.'),
tech('quantum','Quantum Grid','grid',16,8,3,'Add two influence discs to your influence track.'),
tech('nanorobots','Nanorobots','nano',2,2,5,'Build one extra ship or structure per normal Build action.'),
tech('fusionDrive','Fusion Drive','nano',4,3,5,'Unlock Fusion Drive ship parts.'),
tech('robotics','Advanced Robotics','nano',6,4,5,'Add one influence disc to your influence track.'),
tech('orbital','Orbital','nano',8,5,4,'Build Orbitals; each holds a Money or Science population cube.'),
tech('labs','Advanced Labs','nano',10,6,4,'Colonize advanced Science squares.'),
tech('monolith','Monolith','nano',12,6,3,'Build Monoliths, each worth 3 VP on a controlled sector.'),
tech('artifact','Artifact Key','nano',14,7,3,'Immediately collect five resources of one type per artifact you control.'),
tech('wormhole','Wormhole Generator','nano',16,8,3,'Use connections with a wormhole on either side of an edge.')];
const part=(id,name,energy,stats={},tech=null)=>({id,name,energy,...stats,tech});
export const PARTS=[
part('ion','Ion Cannon',-1,{cannons:[1]}),part('electron','Electron Computer',0,{computer:1}),
part('nuclearDrive','Nuclear Drive',-1,{move:1,initiative:1}),part('hull','Hull',0,{hull:1}),
part('nuclearSource','Nuclear Source',3),part('plasma','Plasma Cannon',-2,{cannons:[2]},'plasma'),
part('missile','Plasma Missile',0,{missiles:[2,2]},'missile'),
part('positron','Positron Computer',-1,{computer:2,initiative:1},'positron'),
part('gluon','Gluon Computer',-2,{computer:3,initiative:2},'gluon'),
part('antimatter','Antimatter Cannon',-4,{cannons:[4]},'antimatter'),
part('improved','Improved Hull',0,{hull:2},'improved'),
part('gauss','Gauss Shield',0,{shield:1},'gauss'),part('phase','Phase Shield',-1,{shield:2},'phase'),
part('fusionDrive','Fusion Drive',-2,{move:2,initiative:2},'fusionDrive'),
part('tachyonDrive','Tachyon Drive',-3,{move:3,initiative:3},'tachyonDrive'),
part('fusionSource','Fusion Source',6,{},'fusionSource'),part('tachyonSource','Tachyon Source',9,{},'tachyonSource'),
part('axion','Axion Computer',0,{computer:3,initiative:1,ancient:true}),
part('hypergrid','Hypergrid Source',11,{ancient:true}),part('shard','Shard Hull',0,{hull:3,ancient:true}),
part('conifold','Conifold Field',-2,{shield:3,ancient:true}),
part('ionTurret','Ion Turret',0,{cannons:[1,1],ancient:true}),
part('jumpDrive','Jump Drive',-2,{move:3,initiative:3,jump:true,ancient:true})];
export const PART=Object.fromEntries(PARTS.map(p=>[p.id,p]));
export const TECH=Object.fromEntries(TECHS.map(p=>[p.id,p]));
export const SHIPS={
 interceptor:{name:'Interceptor',short:'INT',cost:3,limit:8,slots:4,initiative:2,parts:['ion','nuclearDrive','nuclearSource',null]},
 cruiser:{name:'Cruiser',short:'CRU',cost:5,limit:4,slots:6,initiative:1,parts:['ion','nuclearDrive','nuclearSource','electron','hull',null]},
 dreadnought:{name:'Dreadnought',short:'DRD',cost:8,limit:2,slots:8,initiative:0,parts:['ion','ion','nuclearDrive','nuclearSource','electron','hull','hull',null]},
 starbase:{name:'Starbase',short:'STA',cost:3,limit:4,slots:5,initiative:4,energy:3,tech:'starbase',parts:['ion','electron','hull','hull',null]},
 orbital:{name:'Orbital',short:'ORB',cost:5,limit:22,tech:'orbital'},
 monolith:{name:'Monolith',short:'MON',cost:10,limit:22,tech:'monolith'}
};
export const SPECIES=[
{id:'terran',name:'Terran Federation',home:'Sol',tag:'Versatile civilization',start:[2,3,3],tech:[],trade:2,move:3,build:2,upgrade:2,explore:1,research:1,colony:3,discs:13,rep:4,ambassadorOnly:1,shared:4,summary:'Three ship movements. Flexible 2:1 trade. One dedicated ambassador space.'},
{id:'eridani',name:'Eridani Empire',home:'Epsilon Eridani',tag:'The ancient empire',start:[26,2,4],tech:['gauss','fusionDrive','plasma'],trade:3,move:2,build:2,upgrade:2,explore:1,research:1,colony:3,discs:11,rep:4,shared:4,summary:'Begin with 26 Money, three technologies and two reputation tiles. Two fewer influence discs.'},
{id:'hydran',name:'Hydran Progress',home:'Beta Hydri',tag:'Scientific ascendance',start:[2,5,2],tech:['labs'],trade:3,move:2,build:2,upgrade:2,explore:1,research:2,colony:3,discs:13,rep:3,ambassadorOnly:1,shared:3,summary:'Research up to two technologies in one action. Begin with Advanced Labs.'},
{id:'planta',name:'Planta',home:'Cygnus',tag:'A living constellation',start:[4,4,4],tech:['starbase'],trade:3,move:2,build:2,upgrade:2,explore:2,research:1,colony:4,discs:13,rep:3,ambassadorOnly:1,shared:3,summary:'Explore two sectors per action. Four colony ships. +1 VP per sector; population is vulnerable to enemy ships.'},
{id:'draco',name:'Descendants of Draco',home:'Draco',tag:'Heirs of the Ancients',start:[2,4,3],tech:[],trade:3,move:2,build:2,upgrade:2,explore:1,research:1,colony:3,discs:13,rep:4,shared:4,summary:'Draw two sectors and choose one. Coexist with Ancients; +1 VP for every surviving Ancient on the board.'},
{id:'mechanema',name:'Mechanema',home:'Auriga',tag:'Intelligence, engineered',start:[3,3,3],tech:['positron'],trade:3,move:2,build:3,upgrade:3,explore:1,research:1,colony:3,discs:13,rep:4,shared:4,summary:'Build three ships or structures and upgrade three parts. Reduced ship construction costs.'},
{id:'orion',name:'Orion Hegemony',home:'Orion',tag:'Masters of the fleet',start:[3,3,5],tech:['neutron','gauss'],trade:4,move:2,build:2,upgrade:2,explore:1,research:1,colony:3,discs:13,rep:5,repOnly:1,shared:4,summary:'Start with a Cruiser. Enhanced ship blueprints and an expanded reputation track.'}
];
export const SPEC=Object.fromEntries(SPECIES.map(s=>[s.id,s]));
export const RULES=[
['The nine-round game','Each round: Action → Combat → Upkeep → Cleanup. Most victory points after round nine wins; total stored resources break a tie.'],
['Influence and actions','Each normal action or reaction takes an influence disc from your track. Discs placed on sectors also leave your track. The exposed influence cost is paid at upkeep. Action discs return at Cleanup.'],
['Explore','Draw from the ring you explore. Rotate and place the sector with a legal wormhole connection to one of your discs or unpinned ships, or discard it. You may claim an undefended sector with another influence disc.'],
['Influence','Move up to two discs to legal vacant sectors or withdraw discs from sectors. Withdrawing returns their population. Also refresh up to two colony ships.'],
['Research','Buy a tile in the shared supply. Discount is based on technologies already on its track, bounded by its minimum price. You cannot research a technology twice.'],
['Upgrade','Remove any part overlays and install up to your upgrade limit. Printed parts reappear when an overlay is removed. Designs must balance energy and every mobile ship needs a drive. All ships of a type change immediately.'],
['Build','Build ships and structures in your controlled sectors. Pay Materials and respect physical limits. One Orbital and one Monolith per sector. Starbases, Orbitals and Monoliths require their technologies.'],
['Move and pinning','A movement moves one ship up to its drive value through wormhole connections. Each hostile ship pins one of yours; excess ships can leave. GCDS pins every ship. Starbases cannot move.'],
['Passing and reactions','First to pass starts the next round. On later turns a passed player may react: one ship movement, one build, or one installed upgrade part, spending a disc. When all players pass, Action ends immediately.'],
['Colony ships and population','During your action and before upkeep, flip a colony ship to colonize one empty square on a controlled sector. Advanced squares need the matching technology. Gray squares accept any resource; Orbitals accept Money or Science.'],
['Diplomacy','Only in games of four or more. Adjacent controlled sectors with a wormhole connection allow exchanging ambassadors, each carrying a cube from its owner. Ambassadors occupy reputation spaces and grant 1 VP. Entering a partner’s sector or fleet breaks relations and gives the attacker the −2 VP Traitor card.'],
['Combat','Resolve sectors in descending sector-number order. Last entrants fight first; the owner and neutral defenders fight last. Missiles fire once, then cannon volleys repeat by initiative; defenders win ties. Computers add and shields subtract from rolls. A 6 always hits, 1 always misses. Each die damages only one target; damage beyond Hull destroys it.'],
['Retreat','Choose retreat instead of firing a ship type. On that group’s next activation all surviving ships of that type leave for an adjacent sector you control with no hostile ships. They can be shot before escaping.'],
['Reputation and conquest','Draw up to five reputation tiles per sector: one for participation (unless all surviving ships retreated), plus kill awards. Keep one. After all space battles, surviving ships bombard enemy population once with cannons. An emptied sector may be claimed.'],
['Upkeep and bankruptcy','Use remaining colony ships, then receive Money income and pay influence upkeep. Trade resources or abandon sectors if you cannot pay. Receive Science and Materials after paying upkeep. Cleanup returns graveyard cubes and action discs, refreshes colony ships and adds research tiles.'],
['Victory points','Sector values + reputation + ambassadors + 2 per saved discovery + 3 per controlled Monolith + technology tracks (4/5/6/7 tiles score 1/2/3/5 VP) + species bonuses − 2 for Traitor.']
];
