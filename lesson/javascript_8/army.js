var army = [];

function Soldier(name) {
	this.name = name;
	this.hp = 100;
	this.ammo = 300;
	this.cage = 30;
	this.medkit = 2;
	this.shoot = function() {
		if(this.cage > 0) {
			this.cage--;
		}
	};
	this.reload = function() {
		if(this.ammo > 0) {
			var ammos = Math.min(30, this.ammo);
			this.cage += ammos;
			this.ammo -= ammos;
		}
	};
	this.heal = function() {
		if(this.medkit > 0) {
			var hps = Max.min(100, this.hp + 50);
			this.hp += hps;
			this.medkit--;
		}
	};
}



for(var i = 0; i < 200; i++) {
	army.push(new Soldier('Thomas'));
	army[i].shoot();
}