import {validateSave} from './engine.js';
export const SAVE_KEY='endftg.autosave.v1';
export function saveGame(state,slot='auto',label=''){const key=slot==='auto'?SAVE_KEY:`endftg.slot.${slot}`;const data={savedAt:new Date().toISOString(),label:label.slice(0,60),game:state};const old=localStorage.getItem(key);if(slot==='auto'&&old)localStorage.setItem('endftg.backup.v1',old);localStorage.setItem(key,JSON.stringify(data));return data;}
export function loadGame(slot='auto'){const key=slot==='auto'?SAVE_KEY:slot==='backup'?'endftg.backup.v1':`endftg.slot.${slot}`;const raw=localStorage.getItem(key);if(!raw)return null;const v=JSON.parse(raw);return{...v,game:validateSave(v.game)};}
export function saveInfo(slot='auto'){try{const data=loadGame(slot);return data?{savedAt:data.savedAt,label:data.label,round:data.game.round,phase:data.game.phase}:null;}catch{return null;}}
export function parseImport(text){if(text.length>5_000_000)throw Error('Save file exceeds the 5 MB limit.');const v=JSON.parse(text);return validateSave(v.game||v);}
export const exportText=state=>JSON.stringify({application:'E:NDftG',exportedAt:new Date().toISOString(),game:state},null,2);
