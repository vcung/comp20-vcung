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
	
}
function draw_vehicles(){
   // redraw_bg();
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 307, 399, 280);
	ctx.drawImage(sprites, 0, 117, 399, 37, 0, 473, 399, 37);
    draw_trucks();
    draw_cars1();
    draw_cars2();
    draw_cars3();
    draw_cars4();
	draw_stats(lives, 1, 0, 0);
}
function draw_trucks(){
 //   redraw_bg();
    if (t1<=-778) {
	   t1=0;
	} else {
	   t1-=10;
	}
	if (t2<=-458) {
	   t2=0;
	} else {
	   t2-=10;
	 }
	ctx.drawImage(sprites, 105, 303, 47, 16, 728 + t1, 348, 47, 16);
	ctx.drawImage(sprites, 105, 303, 47, 16, 398 + t2, 348, 47, 16);
}
function draw_cars1(){
  //  redraw_bg();
    if (x1<=-438) {
	   x1=0;
	} else {
	   x1-=3;
	 }
	 if (y1<=-538) {
	   y1=0;
	} else {
	   y1-=3;
	 }
	 if (z1<=-678) {
	   z1=0;
	} else {
	   z1-=3;
	 }
    ctx.drawImage(sprites, 81, 264, 24, 25, 398 + x1, 315, 24, 25);
	ctx.drawImage(sprites, 81, 264, 24, 25, 508 + y1, 315, 24, 25);
	ctx.drawImage(sprites, 81, 264, 24, 25, 648 + z1, 315, 24, 25);	
}
function draw_cars2() {
   // redraw_bg();
    if (x2>=460) {
	   x2=0;
	} else {
	   x2+=15;
	}
	if (y2>=640) {
	   y2=0;
	} else {
	   y2+=15;
	 }
    ctx.drawImage(sprites, 44, 263, 28, 28, -30 + x2, 375, 28, 28);
	ctx.drawImage(sprites, 44, 263, 28, 28, -200 + y2, 375, 28, 28);
    draw_frog(x, y);
}
function draw_cars3(){
 //     redraw_bg();
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
}
function draw_cars4(){
 //   redraw_bg();
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
}
function init_log_coords(){
    a1=0;
    b1=0;
    a2=0;
    b2=0;
    a3=0;
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
    for (var i=1; i<6 ; i++){
        ctx.drawImage(sprites, 7, 221, 83, 40, (200*i) + a1, 105, 83, 40);
	    ctx.drawImage(sprites, 7, 221, 83, 40, (140*i) + b1, 205, 83, 40);
	}
}
function draw_log2(){
   a2-=5;
   b2-=5;
   for (var i=1; i<6 ; i++){
		ctx.drawImage(sprites, 9, 153, 175, 44, (250*i) + a2, 135,  175, 44);
		ctx.drawImage(sprites, 9, 153, 175, 44, (330*i) + b2, 235, 175, 44);
	}
}
function draw_log3(){
	a3-=5;
	for (var i=1; i<6 ; i++){
	    ctx.drawImage(sprites, 7, 187, 116, 42, (300*i)+ a3, 170, 116, 42);
	 }
 }



