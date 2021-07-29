var FG = new Vue({
  	el: '#app',
	MSG: {
		gameCard:''
	},
  	data: {
		players:{
			info:[{	name:"",AC:10,MOD:0,ATKs:1, lvl:1}],	// FORMAT NAME, AC, MOD, #ATK, lvl
			avgAC:0,
			totalNumAtk:0
		},
		npcs:{
			info:[{name:"",	AC:10,	MOD:0,	ATKs:1, q:1}],	// FORMAT NAME, quantity, AC, MOD, #ATK
			avgAC:0,
			totalNumAtk:0
		},
		lvlPoints:[
			[25, 50, 75, 100],
			[50, 100, 150, 200],
			[75, 150, 225, 400],
			[125, 250, 375, 500],
			[250, 500, 750, 1100],
			[300, 600, 900, 1400],
			[350, 750, 1100, 1700],
			[450, 900, 1400, 2100],
			[550, 1100, 1600, 2400],
			[600, 12000, 1900, 2800],
			[800, 1600, 2400, 3600],
			[1000, 2000, 3000, 4500],
			[1250, 2200, 3800, 5700],
			[1250, 2500, 3800, 5700],
			[1400, 2800, 4300, 6400],
			[1600, 3200, 4800, 7200],
			[2000, 3900, 5900, 8800],
			[2100, 4200, 6300, 9500],
			[2400, 4900, 7300, 10900],
			[2800, 5700, 8500, 12700],
		],
    	ERR: [],
		MSG: {
			compare: "",
			xpPoint: ""
		},
		show:{
			moreInfo:{
				p2e: false,
				xp: false
			}
		}
	},//	END Data
	computed: {
		xpPointCal: function(){
			var l = this.players.info.length,
				lvl = 0,
				totalPoints = {easy:0, med:0, hard:0, deadly:0},
				self = this;
			for(i=0; i < l;i++){
				lvl = this.players.info[i].lvl - 1;
				totalPoints.easy = totalPoints.easy + self.lvlPoints[lvl][0];
				totalPoints.med = totalPoints.med + self.lvlPoints[lvl][1];
				totalPoints.hard = totalPoints.hard + self.lvlPoints[lvl][2];
				totalPoints.deadly = totalPoints.deadly + self.lvlPoints[lvl][3];
			}
			return "Easy: " + totalPoints.easy + " Medium: " + totalPoints.med + " Hard: " + totalPoints.hard + " Deadly: " + totalPoints.deadly;
		},
		copmareNumATKs: function(){
			var pl = this.players.info.length,
				nl = this.npcs.info.length
				status = "g",
				msg = "Please enter data for Players and NPC's",
				pt = 0,
				nt = 0;
			for(pi=0; pi < pl;pi++){
				pt = pt + (this.players.info[pi].ATKs * 1);
			}
			for(ni=0; ni < nl;ni++){
				nt = nt + (this.npcs.info[ni].ATKs * this.npcs.info[ni].q);
			}

			var dif = nt - pt;
			if (dif < 0) {
				dif = -dif;
			}

			if(nt >= pt && dif <= 1){
				status = 'y';
				MSG = "<i class=\"fas fa-exclamation-triangle yFont\"></i>WARNING<i class=\"fas fa-exclamation-triangle yFont\"></i>: NPC's have " + nt + " actions and Players have " + pt + " actions";
			}else if(nt > pt && dif > 1){
				status = 'r';
				MSG = "<i class=\"fas fa-exclamation-triangle rFont\"></i>DANGER<i class=\"fas fa-exclamation-triangle rFont\"></i>: NPC's have " + nt + " actions and Players have " + pt + " actions";
			}else{
				MSG = "Players have " + nt + " actions and NPC's have " + pt + " actions. You are golden"
			}
			return MSG;
		}
	},//	END COMPUTED
	methods: {
		acAVG: function(group){
			var self = this;
			var l = 0;
			if(group === "p"){ l = self.players.info.length;}
			if(group === "n"){ l = self.npcs.info.length;}
			var t = 0,
				L = 0,
				qL = 0;
			for(i=0; i < l;i++){
				if(group === "p"){t = t + self.players.info[i].AC;}
				if(group === "n"){
					var ql = self.npcs.info[i].q;
					for(qi=0; qi < ql; qi++){
						t = t + (self.npcs.info[i].AC * self.npcs.info[i].q) ;
					}					
					qL = qL + (ql - 1);					
				}
			}
			l = l +qL;
			if(l > 0){return Math.round(t / l);} else{ return l}			
		},
		atkTotal:function(group){			
			if(group === "p"){var l = this.players.info.length;}
			if(group === "n"){var l = this.npcs.info.length;}
			var t = 0;
			for(i=0; i < l;i++){
				if(group === "p"){t = t + (this.players.info[i].ATKs * 1);}
				if(group === "n"){t = t + (this.npcs.info[i].ATKs * this.npcs.info[i].q);}
			}
			return t;
		},
		acCal:function(type, data, tgtAC, group){
			var status = "",
				toHit = (21 - (tgtAC - data.MOD)) *5; 
			if(group === "p"){
				if( toHit >= 60){status = "dkg"}
				else if(toHit < 60 && toHit >= 55){ status = "g"}
				else if(toHit < 55 && toHit >= 50){ status = "o"}
				else if(toHit < 50 && toHit >= 45){ status = "y"}
				else{status = "r"}
			}else if(group === "n"){			
				if( toHit >= 50){status = "r"}
				else if(toHit < 50 && toHit >= 48){ status = "y"}
				else if(toHit < 48 && toHit >= 45){ status = "o"}
				else if(toHit < 45 && toHit >= 40){ status = "g"}
				else{status = "dkg"}
			}
			if(type === 1){return toHit;}
			if(type === 2){return status;}
		},
		addPlayer: function(){
			this.players.info.push({
				name:"",
				AC:10,
				MOD:0,
				ATKs:1,
				lvl:1
			});
		},
		addNPC: function(){
			this.npcs.info.push({
				name:"",
				AC:10,
				MOD:0,
				ATKs:1,
				q:1
			});
		},
		toHit: function(tgtAC, myMOD){
			// ((21 - (AC - MOD)) *5) OR ((21 - (AC - MOD)) / 20) * 100

			// Players need to be 55%+			
			// Baddies need to be 50%-
			var chanceToHit = (21 - (tgtAC - myMOD)) *5;
			return chanceToHit;
		},
		removeCharcter: function(toon, type){
			if(type === 'p'){
				this.players.info.splice(this.players.info.indexOf(toon), 1);
			}
			if(type === 'n'){
				this.npcs.info.splice(this.npcs.info.indexOf(toon), 1);
			}
		},
		toggleAbout: function(aboutTitle){
			var self = this;
			switch (aboutTitle){
				case 'p2e':
					if(self.show.moreInfo.p2e === false){
						self.show.moreInfo.p2e = true;
					}else{ self.show.moreInfo.p2e = false}
					break;
				case 'xp':
					if(self.show.moreInfo.xp === false){
						self.show.moreInfo.xp = true;
					}else{ self.show.moreInfo.xp = false}
					break;
			}
		}//*/
  	}//	END METHOD
})