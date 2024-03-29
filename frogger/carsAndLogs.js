//fills in water blue and street back
function fill_bg() {
    ctx.fillStyle = '#191970';
    ctx.fillRect(0, 0, 399, 280);
	ctx.fillStyle = '#000000';
    ctx.fillRect(0, 307, 399, 280);
}

//draws the background: The purple street, the green finish line, & the title
function draw_bg() {
    title = ctx.drawImage(sprites, 13, 11, 321, 34, 0, 0, 399, 34);
    greenTop = ctx.drawImage(sprites, 0, 53, 399, 56, 0, 53, 399, 53);
    purpleTop = ctx.drawImage(sprites, 0, 117, 399, 37, 0, 272, 399, 37);
	purpleBot = ctx.drawImage(sprites, 0, 117, 399, 37, 0, 473, 399, 37);
}

function redraw_bg() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    fill_bg();
	draw_bg();
}

//draws the stats at the bottom of the game
//including lives left, level, score, and highscore
function draw_stats(numFrogs, lvl, score, highsc) {
    for (i=0; i<numFrogs; i++){
	    ctx.drawImage(sprites, 12, 333, 18, 24, i*18, 511, 18, 24);
        }
	ctx.fillStyle = "green";
	ctx.font = "bold 18px Arial";
	ctx.fillText("Level "+ lvl, 324, 529);
	ctx.fillText("Score: "+ score, 2, 560);
	ctx.fillText("Highscore: "+highsc, 120, 560);
	ctx.fillText("Time: "+ timer, 260, 560);
}

//draws all five lanes of vehicles
function draw_vehicles(){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 307, 399, 280);
	ctx.drawImage(sprites, 0, 117, 399, 37, 0, 473, 399, 37);
    draw_trucks(10);
    draw_cars1(5);
    draw_cars2();
    draw_cars3();
    draw_cars4();
	draw_stats(lives, 1, score, 0);
}

function draw_trucks(s){
    if (t1<=-778) {
	   t1=0;
	} else {
	   t1-=s;
	}
	if (t2<=-458) {
	   t2=0;
	} else {
	   t2-=s;
	 }
	ctx.drawImage(sprites, 105, 303, 47, 16, 728 + t1, 348, 47, 16);
	ctx.drawImage(sprites, 105, 303, 47, 16, 398 + t2, 348, 47, 16);
	vehicle[0].x=728+t1;
	vehicle[1].x=348+t2;
	
}
function draw_cars1(s){
  //  redraw_bg();
    if (x1<=-438) {
	   x1=0;
	} else {
	   x1-=s;
	 }
	 if (y1<=-538) {
	   y1=0;
	} else {
	   y1-=s;
	 }
	 if (z1<=-678) {
	   z1=0;
	} else {
	   z1-=s;
	 }
    ctx.drawImage(sprites, 81, 264, 24, 25, 398 + x1, 315, 24, 25);
	ctx.drawImage(sprites, 81, 264, 24, 25, 508 + y1, 315, 24, 25);
	ctx.drawImage(sprites, 81, 264, 24, 25, 648 + z1, 315, 24, 25);	
	vehicle[2].x=398+x1;
	vehicle[3].x=508+y1;
	vehicle[4].x=648+z1;
}
function draw_cars2(s) {
    if (x2>=460) {
	   x2=0;
	} else {
	   x2+=10;
	}
	if (y2>=640) {
	   y2=0;
	} else {
	   y2+=10;
	 }
    ctx.drawImage(sprites, 44, 263, 28, 28, -30 + x2, 375, 28, 28);
	ctx.drawImage(sprites, 44, 263, 28, 28, -200 + y2, 375, 28, 28);
    vehicle[5].x=-30+x2;
	vehicle[6].x=-200+y2;
}
function draw_cars3(){
  if (x3<=-438) {
	   x3=0;
	} else {
	   x3-=3;
	}
	 if (y3<=-550) {
	   y3=0;
	} else {
	   y3-=3;
	}
	 if (z3<=-690) {
	   z3=0;
	} else {
	   z3-=3;
	}
    ctx.drawImage(sprites, 6, 265, 34, 22, 398 + x3, 410, 34, 22);
	ctx.drawImage(sprites, 6, 265, 34, 22, 510 + y3, 410, 34, 22);
	ctx.drawImage(sprites, 6, 265, 34, 22, 650 + z3, 410, 34, 22);
	vehicle[7].x=348+x3;
	vehicle[8].x=510+y3;
	vehicle[9].x=650+z3;
}
function draw_cars4(){

   if (x4>=460) {
	   x4=0;
	} else {
	   x4+=6;
	}
	if (y4>=530) {
	   y4=0;
	} else {
	   y4+=6;
	 }
	ctx.drawImage(sprites, 70, 300, 28, 22, -30 + x4, 445, 28, 22);
	ctx.drawImage(sprites, 70, 300, 28, 22, -190 + y4, 445, 28, 22);
	vehicle[10].x=-30+x4;
	vehicle[11].x=-190+y4;
}

//draws the logs
function draw_logs() {
    ctx.fillStyle = '#191970';
    ctx.fillRect(0, 0, 399, 280);
    ctx.drawImage(sprites, 13, 11, 321, 34, 0, 0, 399, 34);
    ctx.drawImage(sprites, 0, 53, 399, 56, 0, 53, 399, 53);
    draw_log1();
    draw_log2();
    draw_log3();
}
function draw_log1(){
       a1-=5;
       b1-=5;
	   
    for (var i=1; i<7; i++){
		if(a1<=-1283)
		   a1=198;
		if(b1<=-983)
		   b1=248;
        ctx.drawImage(sprites, 7, 221, 83, 40, (200*i)+a1, 105, 83, 40);
	    ctx.drawImage(sprites, 7, 221, 83, 40, (150*i) + b1, 205, 83, 40);
	}
}
function draw_log2(){
   a2-=7;
   b2-=7;
   for (var i=1; i<6 ; i++){
        if(a2<=-1425)
	        a2=148;
        if(b2<=-1825)
            b2=48;
		ctx.drawImage(sprites, 9, 153, 175, 44, (250*i) + a2, 135,  175, 44);
		ctx.drawImage(sprites, 9, 153, 175, 44, (330*i) + b2, 235, 175, 44);
	}
}
function draw_log3(){
	a3-=4;
	for (var i=1; i<6 ; i++){
	    if (a3<=-1616)
		    a3=98;
	    ctx.drawImage(sprites, 7, 187, 116, 42, (300*i)+ a3, 170, 116, 42);
	 }
 }

function draw_fly(m, n){
    ctx.drawImage(sprites, 138, 234, 20, 20, m, n, 20, 20);
}

