# Implementation coverage — 0.1.0

This record is part of the deliverable. The requested outcome is a comprehensive, precise first-edition reproduction. **That outcome has not been achieved or certified by this alpha.** The current game is playable, and the outstanding issues below must not be hidden behind claims of full parity.

## Sources and edition

Authoritative rules reference supplied by the user:
https://board-game-rules.com/wp-content/uploads/2025/01/eclipse-new-dawn-for-the-galaxy_Official-Rules.pdf

Downloaded rulebook SHA-256: `bd13229470079df4df34fb2c6b1126172985b89b856984f5fb9f46a160370b79`.
It is identical to the revised first-edition rulebook used during research. This is **New Dawn**, not Second Dawn: nine rounds, original technology categories and original faction resource starts. No expansions are included.

The user's inventory and rulebook differ: the inventory states 264 population cubes and reputation distribution 12×1, 9×2, 7×3, 4×4; the supplied rulebook describes 33 population cubes per player and 11×1, 9×2, 7×3, 5×4 reputation. Current rules data follows the PDF. Physical-printing differences need confirmation before claiming component parity.

## Present systems

| System | Present behavior | Verification / limits |
| --- | --- | --- |
| Setup | 2–6 players; solo or shared-device hotseat; seven species choices; shuffled three-ring stacks; center and home sectors | Exact home/sector faces and opposing board-side pairing need verification |
| Rounds | Nine rounds, Action → Combat → Upkeep → Cleanup; first pass sets next starter | Final scoring and resource tie-break are present |
| Influence | Discs used for sectors, actions and reactions; increasing upkeep; research adds discs | Full track values are provisional until component comparison |
| Explore | Frontier eligibility; ring-specific draw; rotation/placement or discard; optional control; reshuffle discards; Ancient defenders/discovery | Individual sector layouts are reconstructed, not exact printed tiles |
| Influence action | Two moves; claim or withdraw; two colony refreshes | A disc cannot currently be transferred directly sector-to-sector in a single move; withdraw then claim consumes two moves |
| Colony ships | Three ready ships, Planta four; free colony operations during own turn / before upkeep; advanced squares; wild and Orbital resource choices | Gray-cube return and fully occupied population-track edge cases require additional work |
| Research | All 24 first-edition technologies; 96-tile shared bag; setup and refresh counts; category discounts/minimums; no duplicates; seven-track limit | Some minimum cost values require component-image verification |
| Special technologies | Advanced squares; Starbase/Orbital/Monolith unlocks; Nanorobots; Robotics; Quantum Grid; Artifact Key; Wormhole Generator | Artifact Key currently chooses one resource type for all artifact groups; independent choices per artifact remain outstanding |
| Upgrade | Individual slots; printed defaults under overlays; free removal; install limit; research locks; aggregate stats; energy balance; drive constraints; shared instant refit | Exact faction-specific printed blueprints and ancient-part values are provisional |
| Build | Materials paid; normal/reaction counts; faction modifiers; piece limits; owned-sector requirement; one Orbital and Monolith per sector; structures permanent | Mechanema prices are provisional. Structures and ship-part tiles use unlimited virtual replacements as in revised rules |
| Movement | Per-ship movement; drive range; wormhole connectivity; repeated movement of one ship; excess-ship pinning; GCDS pins all; immobile Starbases | Jump Drive behavior requires exact part verification |
| Passing | Passed status; Move/Build/Upgrade reactions; one operation per reaction; no reaction Nanorobots bonus; action phase ends immediately when all pass | Normal/reaction action choices share engine validation |
| Diplomacy | Four-plus player requirement; neighboring full wormholes; ambassador/cube exchange; reputation-space pressure; treaty break by entry; singleton Traitor and −2 VP | Human may propose to AI or accepted local player; AI does not proactively negotiate; return-cube choices need expansion |
| Combat order | Descending sector number; reverse entry pairings; owner and neutrals fight last; initiative groups; defender wins ties | Ancients/GCDS and Draco coexistence present; advanced multi-party scenarios need more tests |
| Weapons | One missile phase; repeat cannon rounds; typed 1/2/4 damage dice; natural 1/6; targeting and shields; indivisible die assignment; persistent hull damage | Human hit allocation and optional automatic allocation are present |
| Retreat | Declared by class instead of attacking; executes next class activation; ships can be shot before leaving; adjacent controlled clear-sector restriction | If the chosen destination becomes invalid, alternate-destination handling needs work |
| Stalemate | Missile-only stalemate retreats attacker if possible, otherwise removes attackers | Choice of alternate retreat location is currently automated |
| Population attack | One cannon bombardment after space combat; no missiles; Neutron Bombs; Planta vulnerability; graveyards; permanent structures | Human currently cannot specify cube-destruction priority through the UI; engine accepts priority indices |
| Conquest | Optional influence placement after clearing population; old disc returned; discovery reward | Claims can be declined |
| Reputation | Kill awards and participation; retreat participation penalty; draw maximum five; select one; replace existing reputation; ambassadors protected | Entry-order draws and sequential tile return implemented; public score displays do not preserve hidden reputation information |
| Discoveries | All 21 draw categories; keep 2 VP or use resources, free cruiser, cheapest tech, ancient part | Ancient parts enter inventory; immediate installation without an Upgrade action remains outstanding |
| Upkeep | Colony opportunity; money income/upkeep; mandatory affordability; resource conversions; sector withdrawal; Science/Materials income; collapse | Gray-cube reassignment, exact track overflow and collapse edge cases need more verification |
| Cleanup | Return action discs and graveyards; colony refresh; market draw; next starter | Damage repaired after combat |
| Scoring | Sectors, reputation, ambassadors, discoveries, Monoliths, technology tracks, species bonuses, Traitor; stored-resource tie-break | Hidden information is displayed publicly in local UI; exact tied-winner presentation needs expansion |
| AI | Easy/Normal/Hard; legal orders through same engine; free colonies; exploration/research/refit/build/move/pass; battles/retreat/upkeep | Heuristic, no resource cheats; no expert-strength guarantee or strategic diplomacy |
| Saves | Autosave + rolling backup; three manual slots; JSON export/import; full RNG/action/combat state | Browser-local, not cloud-synced; hostile/corrupt file validation can be expanded |
| Context help | Tap/keyboard ? popovers across resources, actions, map, population, technology, blueprints, combat, diplomacy, saves and setup; current-state explanations; next-step banner with navigation to relevant controls | Help pauses automatic processing while open and preserves modal form values; does not alter game rules or save format |
| Mobile UI | Responsive navy/coral Situation Room interface; navigation; draggable/pinch map; sector inspector; research, blueprints, civilization, council, chronicle | Tested in desktop browser and narrow frame; not on physical Android/iOS devices |
| Offline | Relative URLs; manifest; static asset service-worker cache | Offline requires a prior successful cached visit and browser support |

## Assets and components

The three sector decks have all printed IDs (101–108, 201–211, 301–318) and correct deck counts. **Their wormholes, resource squares, Ancient counts, discoveries, artifact markers and printed points are not verified transcriptions.** The implementation currently uses reconstructed patterns. Exact scans or a verified full table are required to replace these.

Starting sectors, faction blueprints, some numeric tracks and all six Ancient-part values also need component-face verification. The original illustrations, miniatures, board textures, info cards and graphic layouts are not reproduced. Vector planets, ship silhouettes, symbols and an interface were created for this application.

The following physical components are represented by software state instead of copied images: discs, population cubes, storage markers, damage markers, dice, round/start markers, colony readiness, summary/reaction state, Traitor and reputation. Crowded-hex markers are unnecessary because the inspector lists every ship. This is automation of physical bookkeeping, not a verified reproduction of their printed assets.

## Validation

`node --test tests/*.test.mjs` checks setup pools, immutable invalid-order rejection, builds and tech requirements, one-operation reactions, legal exploration, energy/drives and refits, research costs, trade rates, natural dice results, graveyard timing, bankruptcy rejection and JSON state round trips. It also plays complete seeded two- and six-player all-AI games on all three difficulties and checks resource non-negativity.

Browser QA covers starting a solo game, issuing Explore, map pointer interaction, legal reveal/placement, research/navigation, saves and narrow-layout inspection. This is not an exhaustive certification against every board-game edge case.

## Remaining requirements for precise completion

1. Obtain and transcribe every component face and every faction board side; resolve printing differences.
2. Replace all reconstructed data and compare catalog counts and values to scans.
3. Complete the explicit outstanding player choices listed above.
4. Add conformance scenarios for all species, multi-party battles, pinning, all diplomatic/reputation layouts, bankruptcy and population reallocation.
5. Review actual phone use and save-file handling across Android/iOS and desktop browsers.
6. Do not describe this release as comprehensively exact until these checks pass.
