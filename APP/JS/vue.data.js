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
    	ERR: [],
		MSG: ""
	},//	END Data
	created: function(){ },//	END Create
	computed: {	
	},//	END COMPUTED
	methods: {
		acCal:function(type, data, tgtAC){
			var status = "",
				toHit = (21 - (tgtAC - data.MOD)) *5; 
			if( toHit >= 60){status = "dkg"}
			else if(toHit < 60 && toHit >= 55){ status = "g"}
			else if(toHit < 55 && toHit >= 50){ status = "o"}
			else if(toHit < 50 && toHit >= 45){ status = "y"}
			else{status = "r"}

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
			this.npc.info.push({
				name:"",
				AC:10,
				MOD:0,
				ATKs:1,
				q:1
			});
		},
		createNPC: function(){
			//	add aray to npc.data
			//	add AC to and re cal npc.avgAC
			//	att to npc.toalNumAtk
			//	 create chart
		},
		toHit: function(tgtAC, myMOD){
			// ((21 - (AC - MOD)) *5) OR ((21 - (AC - MOD)) / 20) * 100

			// Players need to be 55%+			
			// Baddies need to be 50%-
			var chanceToHit = (21 - (tgtAC - myMOD)) *5;
			return chanceToHit;
		}
  	}//	END METHOD
})