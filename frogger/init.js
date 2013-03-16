
function init_stats() {
    home_frogs = 0;
	lives = 4;
	lvl=1;
	score=0;
	highsc=0;
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
	log = new Object;
	for (var i = 0; i<20;i++) {
	    log[i] = new Object;
	}
	var j=0;
	for (j; j< 12; j++) { //set properties for log1s
		log[j].w = 83;
		log[j].h = 40;
		log[j].y = 105;
	}	
	for (j=j; j< 12; j++) { //set properties for log2s
		log[j].w = 175;
		log[j].h = 44;
		log[j].y = 135;
	}	
	for (j=j; j< 12; j++) { //set properties for log3s
		log[j].w = 116;
		log[j].h = 42;
		log[j].y = 170;
	}	
}
function init_coords() {
    init_car_coords();
	init_log_coords();
}

