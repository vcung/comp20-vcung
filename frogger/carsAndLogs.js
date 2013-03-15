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
    redraw_bg();
    draw_trucks();
    draw_cars1();
    draw_cars2();
    draw_cars3();
    draw_cars4();
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



