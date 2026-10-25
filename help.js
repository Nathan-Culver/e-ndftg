import * as E from './engine.js';
import {SPEC,TECH,PART,SHIPS} from './data.js';
const topic=(title,text,steps=[])=>({title,text,steps});
export const HELP={
 overview:topic('How to progress','Aim for the most victory points after nine rounds. You take one action at a time, alternating with the other civilizations.',[
 'Start with Explore to reveal space near your home. Rotate and place the sector, and take control if eligible.',
 'Select a sector you control and tap an empty population square to use a colony ship. More population increases future production.',
 'Finish action ends only your current action. On your next turn you can take another action. Pass when you want to stop normal actions for this round.',
 'When everyone passes, resolve combat and upkeep. Cleanup returns action discs, refreshes colony ships and starts the next round.'
 ]),
 map:topic('Galaxy map','Select a hex to inspect its population, ships and available commands. The larger panel is the selected sector.',[
 'Drag to pan. Pinch or use + / − to zoom; Fit map restores the overview.',
 'Explore reveals dashed frontier hexes. Move highlights destinations only after you select one of your ships.',
 'The short lines at hex edges are wormholes. The colored dot identifies the sector’s controller. ✦ indicates Ancient defenders.'
 ]),
 money:topic('Money and upkeep','Money pays your civilization’s influence cost at the end of the round. The large number is stored Money; + per round is income, not an immediate grant.',[
 'More controlled sectors and more actions use influence discs and can increase upkeep.',
 'Before passing, compare stored Money + income against projected upkeep. If short at upkeep, trade other resources or withdraw sector influence.'
 ]),
 science:topic('Science','Spend stored Science on technologies in Research. Science production is collected during upkeep.',[
 'Begin a Research action, then buy an available technology you can afford.',
 'Technologies already on the same track reduce later prices, but every technology has a minimum cost.'
 ]),
 materials:topic('Materials','Spend stored Materials to construct ships and structures. Materials production arrives during upkeep.',[
 'Begin Build, select a sector you control, open Construction and choose a piece.',
 'A colony square can increase future Materials production; colonizing does not immediately add stored Materials.'
 ]),
 influence:topic('Influence action','Move up to two influence discs: claim eligible vacant sectors or withdraw from sectors you control. This action can also refresh up to two used colony ships.',[
 'Choose Influence, select the sector on the map, then use Place influence or Withdraw influence in its panel.',
 'A claim needs an available disc and a legal connection or your ship in the sector. Hostile ships block the claim.',
 'Withdrawn sectors immediately return their population. Use Refresh colony ships if needed, then Finish action.'
 ]),
 upkeep:topic('Influence discs and upkeep','Controlled sectors, actions and reactions use discs from your influence track. Fewer available discs expose a higher Money upkeep cost.',[
 'Your available discs limit the actions and claims you can take. Projected upkeep already includes actions taken this round.',
 'Action discs return at Cleanup. Sector discs stay committed until you withdraw or lose control.'
 ]),
 explore:topic('Explore','Discover a sector in an unexplored space adjacent to your influence or an eligible ship.',[
 'Choose Explore, then tap a dashed frontier hex on the map.',
 'In the reveal, rotate until a wormhole connects legally. Place the sector or discard it. Claiming it uses another influence disc.',
 'Ancients normally prevent immediate control. After placement, use colony ships if you claimed it, then Finish action.'
 ]),
 research:topic('Research action','Buy technologies from the shared supply with stored Science.',[
 'Choose Research or Begin research. Available purchases appear on the Research screen.',
 'Each purchase uses one of this action’s research operations. Hydran Progress can buy two; most species can buy one.',
 'Read the technology’s ? for its current cost or why its purchase is unavailable. Finish action when done.'
 ]),
 technology:topic('Technology tracks','Military, Grid and Nano are separate research tracks. Owning technologies on one track discounts further purchases on that track.',[
 'The displayed Science price includes your current discount and the technology’s minimum price.',
 'You cannot research the same technology twice, and each track holds seven. Four or more technologies on a track can score victory points.'
 ]),
 upgrade:topic('Upgrade action','Change ship blueprints by installing parts. Every ship of that class changes immediately; parts themselves cost no resources.',[
 'Choose Upgrade, then open Shipyard. Use the slot menus to draft a design.',
 'Keep total Energy at zero or above and keep a drive on every mobile ship. Starbases cannot have drives.',
 'Apply blueprint commits the parts and uses upgrade operations. Finish action ends the action; unsaved menu edits do not apply themselves.'
 ]),
 blueprint:topic('Fleet blueprints','Each ship class has its own shared design. The numbers above the slots are the totals for that design.',[
 'Start an Upgrade action to edit slots. Choosing a printed part removes its upgrade overlay and restores the printed default.',
 'Apply blueprint validates and commits the design. Changes affect existing ships as well as future builds.',
 'The construction price is paid only when you build a ship, not when you edit its blueprint.'
 ]),
 energy:topic('Energy balance','Sources produce Energy; weapons, drives and some computers or shields consume it. The displayed total is production minus demand.',[
 'A valid blueprint has zero or positive Energy. A negative total prevents applying the design.',
 'Install a stronger source or replace a demanding part to balance the design.'
 ]),
 initiative:topic('Initiative','Ship classes activate in descending initiative during combat. The defender acts first on a tie. Drives and some computers add initiative.'),
 hull:topic('Hull and damage','The displayed Hull total is the damage needed to destroy the ship: one base hit plus the absorption provided by its Hull parts. Damage persists through combat and is repaired after the Combat phase.'),
 drive:topic('Movement value','A ship movement can travel this many connected hexes. Choose Move, select a ship in its sector panel, then tap a highlighted destination. Each ship movement uses one operation; moving the same ship again uses another.'),
 computer:topic('Computers','Add the computer total to a weapon die roll when checking a hit. Subtract the target’s shields. A modified result of 6 or more hits; a natural 6 always hits and a natural 1 always misses.'),
 shield:topic('Shields','Subtract the target’s shield total from the attacker’s die roll plus computer bonus. Shields make hits harder; they do not absorb damage after a hit. A natural 6 still hits.'),
 build:topic('Build action','Construct ships or permanent structures in sectors you control, paying their Materials cost.',[
 'Choose Build, select a controlled sector on the map and open Construction in its panel.',
 'Choose a quantity and a ship or structure. Respect the action’s remaining builds, piece supply and technology requirements.',
 'You may build again while operations remain, or choose Finish action. Construction does not end your action automatically.'
 ]),
 move:topic('Move action','Move individual ships through the wormhole network. A movement is one ship travelling up to its drive value.',[
 'Choose Move, select a sector containing your ships, then press Select beside one mobile ship in its panel.',
 'Tap a highlighted destination on the map to move that ship. Repeat while movement operations remain.',
 'Hostile ships pin an equal number of your ships; excess ships can leave. Starbases cannot move. Entering a diplomatic partner’s forces or sector breaks relations.',
 'Space battles happen after everyone passes, not immediately when a ship enters.'
 ]),
 pass:topic('Pass or finish action?','Finish action hands over your current turn without ending your round. Pass gives up further normal actions for this round.',[
 'If you want to Explore, Research or Influence again this round, finish the current action and wait for your next turn.',
 'After passing you can take only one-operation Move, Build or Upgrade reactions on later turns, each costing another disc.',
 'The first player to pass starts the next round. Once everyone has passed, Combat starts immediately.'
 ]),
 finish:topic('Finish action','Use this after completing the operations you want from the current action. The next civilization then takes its turn.',[
 'Unused operations from this action are not carried forward. You may finish early.',
 'This does not mean Pass. You can take another normal action on your next turn if you have not passed and can spare a disc.',
 'Resolve a revealed sector or pending discovery/reputation choice before continuing.'
 ]),
 colonies:topic('Colony ships','Each ready colony ship places one population cube on an eligible empty square in a sector you control. This increases future production.',[
 'During your action, select your sector and tap an empty square. You can also use remaining colony ships before paying upkeep.',
 'A gray square lets you choose the production type; an Orbital accepts Money or Science. Starred squares need the matching advanced technology.',
 'Colony ships refresh at Cleanup. Influence can also refresh up to two used colony ships. Colonizing does not use an action disc.'
 ]),
 population:topic('Population squares','Filled squares contain population. Empty squares can be colonized if you control the sector, have a ready colony ship and meet any technology requirement.',[
 '◈ Money, ⬡ Science and ▰ Materials are separate production tracks. Gray ◇ accepts any one; ◎ Orbital accepts Money or Science.',
 'A ★ marks an advanced square: research Advanced Economy, Advanced Labs or Advanced Mining for its resource color.',
 'A gray or disabled square may be occupied, require technology, lack an available cube, or be unavailable outside your turn.'
 ]),
 ships:topic('Ships in the selected sector','Ships belong to the civilization shown by their color. The row lists remaining durability, initiative and movement.',[
 'To move one, start Move first and press Select beside a mobile ship you own. Then choose a highlighted map destination.',
 'If Select is unavailable, it may not be your action turn or Move is not active. Hostile ships can pin your ships and remove legal destinations.'
 ]),
 wormholes:topic('Wormholes','The short marks at hex edges are connection points. Normally both touching edges need a wormhole for exploring, moving and influencing. Wormhole Generator permits a connection on either side.'),
 artifact:topic('Ancient artifacts','An artifact marker is different from an unclaimed discovery. Artifact Key grants resources for artifacts you control when you research it; simply controlling an artifact does not produce resources every round.'),
 combat:topic('Resolve combat','After all players pass, contested sectors are resolved. Missiles fire once, then cannon engagement rounds repeat until one side is gone.',[
 'When it is your activation, use Roll weapons, or Declare retreat if a legal retreat is offered.',
 'After rolling, select each die and an eligible target. If it cannot hit, use No hit — discard. Each die damages only one ship.',
 'Continue advances to the next engagement round. Auto-resolve combat lets the game handle combat choices for you; switch it off to choose manually.'
 ]),
 hits:topic('Assign rolled dice','Choose a die, then press Hit beside an eligible target. Only ships that this roll can hit are offered.',[
 'Yellow dice deal 1 damage, orange 2 and red 4. One die’s damage cannot be divided between ships.',
 'Natural 6 always hits; 1 always misses. Otherwise use roll + computer − target shield, needing at least 6.',
 'Resolve every die. Discard a miss, or discard a die voluntarily if you do not want to assign it.'
 ]),
 retreat:topic('Declare retreat','Retreat replaces firing for an entire ship class. Survivors leave on that class’s next activation, so enemies can still shoot them before they escape.',[
 'Choose an adjacent sector you control, connected by a legal wormhole, with no hostile ships.',
 'Retreat is available during cannon engagements. A sector with only your ship and no influence disc is not a valid retreat destination.'
 ]),
 bombardment:topic('Population attack','After space battles, remaining ships attack enemy population once with their cannons. Missiles do not fire at population. Resolve population attack performs the rolls; Neutron Bombs and Planta vulnerability apply automatically.'),
 conquest:topic('Claim after combat','When enemy population has been cleared, the surviving fleet may place an influence disc to control the sector.',[
 'Place influence commits a disc and can award its discovery. Leave unclaimed skips control without removing your ships.',
 'Control increases possible score and allows colonization or construction, but can increase upkeep.'
 ]),
 discovery:topic('Discovery choice','A discovery can be kept for 2 final victory points or used for the benefit printed in this choice.',[
 'Use the discovery applies resources, a cruiser, a free cheapest available technology, or an Ancient part according to the revealed reward.',
 'Make this choice before continuing your action or combat. Closing its window does not resolve it; use Resolve choice to reopen it.'
 ]),
 reputation:topic('Combat reputation','Combat awards a draw of up to five reputation tiles. Keep one and return the others.',[
 'If your reputation spaces are full, choose an existing reputation tile to replace or return the new tile. Ambassadors cannot be discarded.',
 'Select a new tile, choose any required replacement and press Confirm reputation to continue.'
 ]),
 payUpkeep:topic('Pay upkeep and continue','Use remaining colony ships first if you wish. Collect & pay upkeep then applies Money income minus influence cost and collects Science and Materials.',[
 'If you cannot pay, Trade resources for Money or select controlled sectors and Withdraw influence until you can afford upkeep. Withdrawing also reduces population production.',
 'After every civilization pays, Cleanup runs automatically and the next round begins. After round nine, final scores are shown.'
 ]),
 trade:topic('Trade resources','Bank conversion exchanges resources at your species’ trade rate. The number of trades is how many units you receive, not how many you give.',[
 'For example, at 2:1, three trades give 6 units of the source and receive 3 of the destination.',
 'Trade here is with the bank; resources are not transferred to another player.'
 ]),
 diplomacy:topic('Council and ambassadors','Diplomatic exchanges are used with four to six civilizations. Your controlled sectors must share a full wormhole connection.',[
 'Exchange ambassadors to give each player a population-track benefit and an ambassador worth 1 VP. The incoming ambassador occupies a reputation-track space.',
 'Entering a partner’s controlled sector or fleet breaks relations and gives the attacker the −2 VP Traitor card.',
 'If the button is disabled, check player count, whether it is your turn, and whether relations already exist.'
 ]),
 score:topic('Victory points','After nine rounds, the highest score wins. Stored resource totals break a tie. You do not need to destroy every opponent.',[
 'Score controlled sectors, reputation, ambassadors, kept discoveries, controlled Monoliths, technology-track progress and species bonuses.',
 'Civilization shows the score breakdown. The Traitor card costs 2 VP. Ships and unspent resources normally do not directly score points.'
 ]),
 saves:topic('Save and load','Accepted orders autosave in this browser. Save & load also has three labeled slots and a rolling backup.',[
 'Export file downloads a JSON save you can keep or move to another phone or computer. Import file restores it and pauses AI.',
 'Browser saves belong to this site, browser and device. Keep exported files because browser data can be cleared.'
 ]),
 ai:topic('AI and pause controls','Easy, Normal and Hard change opponent decision policies, not their starting resources.',[
 'AI takes its turn automatically. Pause stops automatic AI orders so you can inspect the board; Resume AI lets it continue.',
 'Opening a help tip or dialog temporarily stops the automatic timer. Closing it resumes normal processing without changing your saved game.',
 'AI pace and opponent difficulty can be changed in Menu → AI & display settings.'
 ]),
 chronicle:topic('Galactic chronicle','This records actions, discoveries, movement and phase changes. Read the newest entries to see what the AI just did or why the board changed.'),
 setup:topic('Start a game','Solo vs AI lets you control one civilization against opponents. Local hotseat shares this device between commanders.',[
 'Choose two to six civilizations. Alien species cannot be duplicated. Each AI can have its own difficulty.',
 'The optional seed repeats the starting shuffle. Begin the first dawn starts round one; you can save or export at any time.'
 ])
};
export function getHelp(s,id,key){const p=s.players[id];let value=HELP[key]||HELP.overview;const steps=[...value.steps];let context='';
 if(key.startsWith('tech:')){const t=TECH[key.slice(5)];if(!t)return HELP.technology;const cost=E.techCost(p,t),count=p.tech.filter(x=>TECH[x].track===t.track).length;value=topic(t.name,t.effect,[`Your price: ${cost} Science. Base ${t.cost}; minimum ${t.min}. You have ${p.resources.science} stored Science.`,`Supply: ${s.supply[t.id]||0} tile(s). You have ${count}/7 technologies on its ${t.track} track.`]);
 context=p.tech.includes(t.id)?'Already researched: you cannot buy this technology again.':!s.supply[t.id]?'No tile is currently in supply; later Cleanup draws may add one.':count>=7?'This technology track is full.':s.phase!=='action'||s.turn!==id?'Wait for your action turn.':s.active?.type!=='research'?'Begin a Research action before buying a technology.':s.active.left<1?'No purchases remain in this action. Choose Finish action.':p.resources.science<cost?'You need more Science. You can trade resources or finish the action without buying.':'This purchase is available. Select Research on the tile to buy it.';
 return{...value,context};}
 if(key.startsWith('part:')){const part=PART[key.slice(5)];if(!part)return HELP.blueprint;return topic(part.name,`${part.energy>0?`Produces ${part.energy}`:part.energy<0?`Consumes ${-part.energy}`:'Uses no'} Energy. ${part.tech?`Requires ${TECH[part.tech].name}.`:part.ancient?'Available only from its discovery.':'No research prerequisite.'}`,[...part.cannons?.map(d=>`One cannon die dealing ${d} damage on a hit.`)||[],...part.missiles?.map(d=>`One opening missile die dealing ${d} damage on a hit.`)||[],...['hull','shield','computer','move','initiative'].filter(k=>part[k]).map(k=>`Adds ${part[k]} ${k}.`),'Changing a slot is a draft until you press Apply blueprint.']);}
 if(key.startsWith('species:')){const v=SPEC[key.slice(8)];return v?topic(v.name,v.summary,[`Normal action limits: Explore ${v.explore}, Influence 2 disc moves, Research ${v.research}, Upgrade ${v.upgrade} new parts, Build ${v.build} pieces, Move ${v.move} ship movements.`,`Colony ships: ${v.colony}. Bank trade rate: ${v.trade}:1.`]):HELP.overview;}
 if(['explore','influence','research','upgrade','build','move'].includes(key))context=s.phase!=='action'?'Normal actions are used only in the Action phase.':s.turn!==id?'It is another civilization’s turn. Wait for your turn.':s.pending.length?'Resolve the pending discovery or reputation choice first.':s.exploration?'Place or discard your revealed sector before continuing.':s.active&&s.active.type!==key?`Your ${s.active.type} action is still open. Choose Finish action before starting a different action.`:s.active?.type===key?`${s.active.left} operation(s) remain in your current ${key} action.`:p.passed&&!['build','upgrade','move'].includes(key)?'You already passed this round. Only Build, Move and Upgrade reactions are available.':E.discs(s,id)<1?'No influence discs remain. Pass or skip your reaction.':`A ${p.passed?'reaction':'normal action'} commits one influence disc. Its resource costs, if any, are paid separately.`;
 if(key==='money')context=`Stored ${p.resources.money} + income ${E.income(s,id,'money')} − projected upkeep ${E.upkeep(s,id)} = ${p.resources.money+E.income(s,id,'money')-E.upkeep(s,id)} Money after upkeep, before further actions or changes.`;
 if(key==='upkeep')context=`${E.discs(s,id)} discs available; ${E.controlled(s,id).length} sectors controlled; ${p.actions.length} action/reaction discs committed; projected cost ${E.upkeep(s,id)} Money.`;
 if(key==='colonies')context=`${p.colony}/${SPEC[p.species].colony} colony ships ready. ${E.availableColonies(s,id).length?'Eligible population choices are available.':'No eligible empty population choices are available right now.'}`;
 return{...value,steps,context};
}
const guide=(title,text,help,cta=null)=>({title,text,help,cta});
export function getGuidance(s,{player=0,view='galaxy',moving=null,paused=false,autoCombat=false}={}){const p=s.players[player],q=s.pending[0];
 if(q){if(s.players[q.owner]?.ai)return guide(paused?'AI is paused':'AI is resolving a choice',paused?'Resume AI to let it finish its discovery or reputation decision.':'No command is needed from you while the AI makes this choice.','ai',paused?{cmd:'toggle-pause',label:'Resume AI'}:null);const rep=q.kind==='reputation';return guide(rep?'Choose a reputation tile':'Resolve your discovery',rep?'Select one drawn tile, choose a replacement if your track is full, and confirm.':'Choose the discovery benefit or keep 2 VP. This choice must be resolved before play continues.',rep?'reputation':'discovery',{cmd:'pending',label:'Resolve choice'});}
 if(s.phase==='ended')return guide('The game is complete','The winner and final scores are available. Review your score breakdown or start a new game.','score',{cmd:'score',label:'View scores'});
 let bot=false;if(s.phase==='action')bot=s.players[s.turn]?.ai;else if(s.phase==='upkeep')bot=s.players[s.upkeepIndex]?.ai;else if(s.phase==='conquest')bot=s.players[s.conquestOwner]?.ai;else if(s.phase==='bombardment')bot=s.players[s.bombardOwner]?.ai;else if(s.phase==='combat'){const b=s.battle,g=E.combatGroup(s),owner=b?.dice[0]?.owner??g?.owner;bot=autoCombat||typeof owner==='string'||s.players[owner]?.ai;}
 if(paused&&bot)return guide('AI is paused','Resume AI when you are ready for automatic turns or combat to continue.','ai',{cmd:'toggle-pause',label:'Resume AI'});
 if(bot)return guide(s.phase==='combat'?'Resolving combat':'Opponent’s turn','No command is needed from you right now. You can inspect the board and read help while the opponent acts.','ai');
 if(s.phase==='combat'){const b=s.battle;if(b?.dice.length)return guide('Assign each rolled die','Select a die, then an eligible Hit target. If the roll cannot hit, discard it. Resolve every die to continue.','hits',{cmd:'show-phase',label:'Show combat controls'});return guide('Activate the next ships','Use Roll weapons to fire, or Continue between engagement rounds. Declare retreat if you want to withdraw a ship class.','combat',{cmd:'show-phase',label:'Show combat controls'});}
 if(s.phase==='bombardment')return guide('Resolve the population attack','Space combat is over here. Resolve the surviving fleet’s one population attack to continue.','bombardment',{cmd:'bombard',label:'Resolve population attack'});
 if(s.phase==='conquest')return guide('Choose whether to control this sector','Place influence to claim it, or Leave unclaimed to continue without spending a disc.','conquest',{cmd:'show-phase',label:'Show conquest controls'});
 if(s.phase==='upkeep'){const id=s.upkeepIndex,net=s.players[id].resources.money+E.income(s,id,'money')-E.upkeep(s,id);if(net<0&&!E.controlled(s,id).length&&s.players[id].resources.science<SPEC[s.players[id].species].trade&&s.players[id].resources.materials<SPEC[s.players[id].species].trade)return guide('Your civilization cannot fund upkeep','No controlled sectors or bank trades remain to cover the deficit. Civilization collapse records your score and lets the game continue.','payUpkeep',{cmd:'collapse',label:'Civilization collapse'});if(net<0)return guide('Cover your upkeep deficit',`You need ${-net} more Money. Trade resources or withdraw influence from controlled sectors until you can pay.`,'payUpkeep',{cmd:'trade',label:'Trade resources'});return guide('Use colonies, then pay upkeep','You may use ready colony ships first. Collect & pay upkeep finishes your upkeep and advances to the next civilization.','payUpkeep',{cmd:'upkeep',label:'Collect & pay upkeep'});}
 if(s.phase!=='action')return guide('Follow the phase controls','Resolve the choice shown above the board to continue.','overview');
 if(s.turn!==player)return guide('Another commander’s turn','On a shared device, let the active local commander make their decision.','overview');
 if(s.exploration)return guide('Place or discard the revealed sector','Open the reveal, rotate to a legal wormhole connection, then place it or discard it.','explore',{cmd:'reveal',label:'Open explored sector'});
 const ac=s.active;if(ac){if(ac.left===0)return guide('Finish this action','Your operations are complete. You can still colonize eligible worlds or trade; then Finish action hands over the turn.','finish',{cmd:'finish',label:'Finish action'});const next={explore:['Choose an unexplored space','Tap a dashed frontier hex on the galaxy map to reveal a sector.','galaxy'],influence:['Move influence or refresh colony ships','Select a vacant sector to claim or your sector to withdraw. You may also refresh up to two colony ships.','galaxy'],research:['Choose a technology to research','Buy an available technology with stored Science. Use its ? to check its effect, price or why Research is disabled.','research'],upgrade:['Edit and apply a blueprint','Choose ship parts in the slot menus, keep Energy nonnegative, then press Apply blueprint. Finish action when done.','shipyard'],build:['Choose where and what to build','Select a sector you control on the map. Open Construction in its panel and choose a piece and quantity.','galaxy'],move:[moving?'Choose a highlighted destination':'Select a ship to move',moving?'Tap a highlighted map hex to move the selected ship.':'Select a sector containing your ships, then use Select beside one mobile ship in its panel.','galaxy']}[ac.type];return guide(next[0],`${next[1]} ${ac.left} operation(s) remain.`,ac.type,view!==next[2]?{view:next[2],label:'Open '+(next[2]==='galaxy'?'galaxy map':next[2]==='shipyard'?'Shipyard':'Research')}:{cmd:ac.type==='research'?'show-research':ac.type==='upgrade'?'show-blueprints':ac.type==='build'||ac.type==='move'&&!moving?'show-sector':'show-map',label:ac.type==='research'?'Show technologies':ac.type==='upgrade'?'Show blueprints':ac.type==='build'?'Show sector controls':ac.type==='move'&&!moving?'Show selected sector':'Show galaxy map'});}
 if(p.passed)return guide('React or wait for the next round','You have passed. You may take a one-operation Build, Move or Upgrade reaction, or Skip reaction. Normal actions return next round.','pass',{cmd:'show-actions',label:'Show reaction orders'});
 if(E.discs(s,player)<1)return guide('No influence discs remain','Pass to end normal actions this round. Committed action discs return during Cleanup.','pass',{cmd:'pass',label:'Pass'});
 if(view==='research')return guide('Begin research to buy a technology','Browsing the market does not start an action. Use Begin research, then choose an available technology you can afford.','research',{cmd:'start-research',label:'Begin research'});
 if(view==='shipyard')return guide('Begin an Upgrade action to edit ships','Browsing blueprints does not change your fleet. Begin upgrade, edit slots and Apply blueprint before finishing the action.','upgrade',{cmd:'start-upgrade',label:'Begin upgrade'});
 return guide('Choose your next action','Explore expands the map; colonize controlled worlds for future production; Research, Upgrade, Build and Move prepare your fleet. Finish each action; Pass only when you want to stop normal actions this round.','overview',{cmd:'show-actions',label:'Show action choices'});
}
