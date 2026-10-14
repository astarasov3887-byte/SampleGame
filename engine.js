class BattleEngine {
  constructor(left, right, settings) {
    this.teams = [this.prepare(left, 0), this.prepare(right, 1)]; this.settings = settings;
    this.round = 1; this.turn = 0; this.log = []; this.events = []; this.started = Date.now();
    const roll = [Math.ceil(Math.random()*100), Math.ceil(Math.random()*100)];
    this.firstRoll = roll;
    this.activeTeam = settings.firstTurn === 'speed' ? (Math.max(...this.teams[0].map(h=>h.speed)) >= Math.max(...this.teams[1].map(h=>h.speed)) ? 0 : 1) : (roll[0] >= roll[1] ? 0 : 1);
  }
  prepare(team, side) { return team.map((h,i)=>({...h, uid:`${side}-${i}-${h.id}`, hp:h.health, defending:false, stunned:0, enraged:0, damage:0, received:0, attacks:0, crits:0, alive:true})); }
  living(side) { return this.teams[side].filter(h=>h.alive); }
  current() { return this.activeTeam; }
  alive(team, uid) { return this.teams[team].find(h=>h.uid===uid && h.alive); }
  selectDefault(side) { return this.living(side)[0]; }
  damage(source, target, multiplier=1) {
    const crit = this.settings.criticals && Math.random()<.16; const rage = source.enraged ? 1.35 : 1;
    const raw = source.attack * multiplier * rage * (crit?1.65:1) - target.defense * (target.defending?.52:.28);
    const dmg = Math.max(8, Math.round(raw)); target.hp=Math.max(0,target.hp-dmg); target.received+=dmg; source.damage+=dmg; source.attacks++; if(crit)source.crits++;
    if(!target.hp){target.alive=false; this.events.push(`⚡ ${source.name} eliminated ${target.name}.`);} return {dmg,crit};
  }
  act(actor, action, target) {
    if(actor.stunned){actor.stunned--; this.write(`${actor.icon} ${actor.name} опутан и пропускает ход.`); return this.endTurn();}
    actor.defending=false; let message='';
    if(action==='attack') { const r=this.damage(actor,target); message=`${actor.icon} ${actor.name} атакует ${target.icon} ${target.name}: −${r.dmg} HP${r.crit?' · КРИТ!':''}`; }
    if(action==='defend') { actor.defending=true; message=`${actor.icon} ${actor.name} занимает оборонительную позицию.`; }
    if(action==='pass') message=`${actor.icon} ${actor.name} пропускает ход.`;
    if(action==='special') {
      const a=actor.ability;
      if(a.effect==='heal') { const ally=target; const amount=Math.min(a.amount,ally.health-ally.hp); ally.hp+=amount; message=`${actor.icon} ${actor.name}: ${a.name} восстанавливает ${ally.name} на ${amount} HP.`; }
      else { const r=this.damage(actor,target,a.power); message=`${actor.icon} ${actor.name}: ${a.name} → ${target.name}: −${r.dmg} HP${r.crit?' · КРИТ!':''}`;
        if(a.effect==='stun' && target.alive && Math.random()<(a.chance||.35)){target.stunned=1; message+=' · ОГЛУШЕНИЕ!'; this.events.push(`${actor.name} stunned ${target.name}.`);}
        if(a.effect==='rage'){actor.enraged=2; message+=' · ЯРОСТЬ +35%!'; this.events.push(`${actor.name} entered RAGE MODE.`);}
        if(a.effect==='defend'){actor.defending=true; message+=' · ЗАЩИТА!';}
      }
    }
    this.write(message); if(actor.enraged) actor.enraged--; return this.endTurn();
  }
  write(text){this.log.unshift({round:this.round,text});}
  endTurn(){const winner=this.winner(); if(winner!==null)return {winner}; this.activeTeam=1-this.activeTeam; this.turn++; if(this.activeTeam===0)this.round++; if(this.round>this.settings.maxRounds)return {winner:this.scoreWinner(),limit:true}; return {winner:null};}
  winner(){if(!this.living(0).length)return 1;if(!this.living(1).length)return 0;return null;}
  scoreWinner(){return this.living(0).reduce((a,h)=>a+h.hp,0)>=this.living(1).reduce((a,h)=>a+h.hp,0)?0:1;}
}
window.BattleEngine=BattleEngine;

