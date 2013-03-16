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
	ctx.fillText("Highscore: "+highsc, 120, 530);
   
	ctx.fillText("Time: ", 220, 560); 
	if (timer >= -10000) {
	time_left = Math.round(150-(timer/10000));
    ctx.fillRect(275, 548, time_left, 12);
	}
}

//draws all five lanes of vehicles
function draw_vehicles(sp){
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 307, 399, 280);
	ctx.drawImage(sprites, 0, 117, 399, 37, 0, 473, 399, 37);
    draw_trucks(sp+10);
    draw_cars1(sp+5);
    draw_cars2(sp+10);
    draw_cars3(sp+3);
    draw_cars4(sp+6);
	draw_stats(lives, lvl, score, highsc);
}

function draw_trucks(s){
    if (t1<=-775) {
	   t1=0;
	} else {
	   t1-=s;
	}
	if (t2<=-445) {
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
    if (x1<=-422) {
	   x1=0;
	} else {
	   x1-=s;
	 }
	 if (y1<=-532) {
	   y1=0;
	} else {
	   y1-=s;
	 }
	 if (z1<=-672) {
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
	   x2+=s;
	}
	if (y2>=640) {
	   y2=0;
	} else {
	   y2+=s;
	 }
    ctx.drawImage(sprites, 44, 263, 28, 28, -30 + x2, 375, 28, 28);
	ctx.drawImage(sprites, 44, 263, 28, 28, -200 + y2, 375, 28, 28);
    vehicle[5].x=-30+x2;
	vehicle[6].x=-200+y2;
}
function draw_cars3(s){
  if (x3<=-438) {
	   x3=0;
	} else {
	   x3-=s;
	}
	 if (y3<=-550) {
	   y3=0;
	} else {
	   y3-=s;
	}
	 if (z3<=-690) {
	   z3=0;
	} else {
	   z3-=s;
	}
    ctx.drawImage(sprites, 6, 265, 34, 22, 398 + x3, 410, 34, 22);
	ctx.drawImage(sprites, 6, 265, 34, 22, 510 + y3, 410, 34, 22);
	ctx.drawImage(sprites, 6, 265, 34, 22, 650 + z3, 410, 34, 22);
	vehicle[7].x=348+x3;
	vehicle[8].x=510+y3;
	vehicle[9].x=650+z3;
}
function draw_cars4(s){
   if (x4>=460) {
	   x4=0;
	} else {
	   x4+=s;
	}
	if (y4>=530) {
	   y4=0;
	} else {
	   y4+=s;
	 }
	ctx.drawImage(sprites, 70, 300, 28, 22, -30 + x4, 445, 28, 22);
	ctx.drawImage(sprites, 70, 300, 28, 22, -190 + y4, 445, 28, 22);
	vehicle[10].x=-30+x4;
	vehicle[11].x=-190+y4;
}

//draws the logs
function draw_logs(log_sp) {
    ctx.fillStyle = '#191970';
    ctx.fillRect(0, 0, 399, 280);
    ctx.drawImage(sprites, 13, 11, 321, 34, 0, 0, 399, 34);
    ctx.drawImage(sprites, 0, 53, 399, 56, 0, 53, 399, 53);
    draw_log1(log_sp + 5);
    draw_log2(log_sp + 7);
    draw_log3(log_sp + 4);
}
function draw_log1(speed){
       a1-=speed;
       b1-=speed;
    for (var i=1; i<7; i++){
		if(a1<=-1283)  //when logs go off screen
		   a1=198;
		if(b1<=-983)
		   b1=248;
        ctx.drawImage(sprites, 7, 221, 83, 40, (200*i)+a1, 105, 83, 40);
	    ctx.drawImage(sprites, 7, 221, 83, 40, (150*i) + b1, 205, 83, 40);
	    log1[i-1].x = (200*i)+a1;
	    log1[i-1].speed = speed;
		log1[i+5].x = (150*i)+b1;
		log1[i+5].speed = speed;
	}
	
}
function draw_log2(speed){
   a2-=speed;
   b2-=speed;
   for (var i=1; i<6 ; i++){
        if(a2<=-1425)
	        a2=148;
        if(b2<=-1825)
            b2=48;
		ctx.drawImage(sprites, 7, 153, 178, 44, (250*i) + a2, 135,  178, 44);
		ctx.drawImage(sprites, 7, 153, 178, 44, (330*i) + b2, 235, 178, 44);
	    log2[i-1].x = (250*i)+a2;
	    log2[i-1].speed = (250*i)+a2;
		log2[i+4].x = (330*i)+b2;
		log2[i+4].speed = (330*i)+b2;
	}
}
function draw_log3(speed){
	a3-=speed;
	for (var i=1; i<6 ; i++){
	    if (a3<=-1616)
		    a3=98;
	    ctx.drawImage(sprites, 7, 187, 116, 42, (300*i)+ a3, 170, 116, 42);
	    log3[i-1].x =(300*i)+a3;
	    log3[i-1].speed =speed;
		
	}
 }

//redraw the fly somewhere random on the canvas
function move_fly() {
    fly.x = (Math.random() * (canvas.width));
    fly.y = Math.floor((Math.random() * 485));
    m = fly.x;
	n = fly.y;
	draw_fly();
}
function draw_fly(){
    ctx.drawImage(sprites, 138, 234, 20, 20, m, n, 20, 20);
}
//redraw lady frog somewhere random on the canvas
function move_lady() {
    lady.x = (Math.random() * (canvas.width));
    lady.y = Math.floor((Math.random() * 485));
    ladyx = lady.x;
	ladyy = lady.y;
	draw_lady();
}
function draw_lady(){
    ctx.drawImage(sprites, 231, 405, 30, 28, ladyx, ladyy, 30, 28);
}

