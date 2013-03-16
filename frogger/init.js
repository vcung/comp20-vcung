
function init_stats() {
    home_frogs = 0;
	lives = 4;
	lvl=1;
	score=0;
	highsc=0;
	prev_score = 0;
	frog_on_log = false;
    on_log= null;
}

function init_car_coords(){
    t1=-59;
	t2=-59;
	x1=-103;
	y1=-103;
	z1=-103;
	x2=163;
	y2=163;
	x3=-47;
	y3=-47;
	z3=-47;
	x4=73;
	y4=73;
	
	vehicle = new Object;
	for (var i=0; i< 20; i++) {
	    vehicle[i]= new Object;
	}
	var j=0;
	for (j; j< 2; j++) { //set properties for trucks
		vehicle[j].w = 47;
		vehicle[j].h = 16;
		vehicle[j].y = 348;
	}
	for (j=j; j< 5; j++) { //set properties for car1's
		vehicle[j].w = 24 ; 
		vehicle[j].h = 25;
		vehicle[j].y = 315;
	}
	for (j=j; j< 7; j++) { //set properties forcar2's
		vehicle[j].w = 28; 
		vehicle[j].h = 28;
		vehicle[j].y = 375;
	}
	for (j=j; j< 10; j++) { //set properties for car3's
		vehicle[j].w = 34; 
		vehicle[j].h = 22;
		vehicle[j].y = 410;
	}
	for (j=j; j< 12; j++) { //set properties for car4's
		vehicle[j].w = 28;
		vehicle[j].h = 22;
		vehicle[j].y = 445;
	}	
}
function init_log_coords(){
    a1=0;
    b1=0;
    a2=0;
    b2=0;
    a3=0;
	//log = new Object;
	log1 = new Object;
	log2 = new Object;
	log3 = new Object;
	for (var i = 0; i<12;i++) {
	    log1[i] = new Object;
		log2[i] = new Object;
		log3[i] = new Object;
	}

	for (var j=0; j< 12; j++) { //set properties for log1s
		log1[j].w = 83;
		log1[j].h = 40;
		if(j<6) {
		    log1[j].y = 105; }
		else {
		    log1[j].y = 205;}
	}	
	for (var j=0; j< 10; j++) { //set properties for log2s
		log2[j].w = 178;
		log2[j].h = 44;
		if(j<5){
		    log2[j].y = 135;}
		else {
		    log2[j].y = 235;}
	}	
	for (var j=0; j< 10; j++) { //set properties for log3s
		log3[j].w = 116;
		log3[j].h = 42;
		log3[j].y = 170;
	}	
}
function init_coords() {
    init_car_coords();
	init_log_coords();
}
function init_fly() {
	fly = new Object;
	fly.w = 20
	fly.h = 20
	fly.x = Math.floor((Math.random() * (canvas.width))+1);
	fly.y = Math.floor((Math.random() * 485)+100);
	m = fly.x;
	n = fly.y;
}

function init_lady() {
	lady = new Object;
	lady.w = 30
	lady.h = 28
	lady.x = Math.floor((Math.random() * (canvas.width))+1);
	lady.y = Math.floor((Math.random() * 485)+100);
	ladyx = lady.x;
	ladyy = lady.y;
}
