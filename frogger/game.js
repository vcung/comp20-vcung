time = new Date();
timer = time.getMinutes();
x=0;
y=0;
keyDown = [];

//initiates game
function init_game() {
//initiates gamefunction init_game() {
    canvas = document.getElementById("game");
        // Check if canvas is supported on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        sprites = new Image();
        sprites.src = "assets/frogger_sprites.png";
        sprites.onload = function () {
		    init_stats();
			x=0;
			y=0;
			frog_home=0;
			fill_bg();
			draw_bg();
		    draw_stats(lives, lvl, score, highsc);
			init_coords();
		    draw_vehicles();
			draw_logs();
            draw_frog(0, 0);
		    start_game(lives);	
		}
    } else {
        alert('Sorry, canvas is not supported on your browser!');
    }
} 
//draws the frog the player controls
function draw_frog(x, y){
    ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 485 + y, 24, 17);
}
function hop_up() {
      ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 485 + y, 24, 17);
      ctx.drawImage(sprites, 45, 365, 22, 27, 175 + x, 485 + y, 22, 27);
	 // ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 485 + y, 24, 17);
}
function hop_down() {
      ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 485 + y, 24, 17);
      ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 485 + y, 24, 17);
}

//starts the game loop
function start_game(lives){
  /* if (document.addEventListener)
   {
   document.addEventListener("keyup", frogup, false);
   document.addEventListener("keydown", frogup, false);
	*/
	addEventListener("keyup", function(event) {
	    delete keyDown[event.keyCode];	
	} , false);
	addEventListener("keydown", function(event) {
	    keyDown[event.keyCode] = true;
	} , false);
	game_loop = setInterval(game_loop, 190);
}
function game_loop() {
    if (lives != 0) {
        timer = timer + time.getMinutes();
        var now = Date.now();
        var diffInTime = now - then;
	    update(diffInTime / 1000);
	    then=now;
    }
    else {
		 lost_game();
    }
}
then = Date.now();
 
function detect_collision() {
	for(var i = 1; i<3;i++){
	    if (frogtop>=car[i].bottom){
	        lost_life();
	    }
	}
}

function fell_into_water() {

}
 
/*
function frogup(change) {
	   redraw_bg();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x, y-=70*change);
	}
function frogdown(change) {
	   redraw_bg();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x, y+=70*change);
	}
	
function frogleft(change) { // Player holding left
		 redraw_bg();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x-=70*change, y);
	}
function frogright(change) { // Player holding right
		 redraw_bg();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x+=70*change, y);
	}*/
function update(change) {
    redraw_bg();
	draw_logs();
	draw_vehicles();
	draw_frog(x,y);
    if (38 in keyDown) { //up key pressed
	    if(y>-405)  {
			redraw_bg();
			draw_logs();
			draw_vehicles();
			draw_frog(x, y-=70*change);
		  //  y-=70*change;
			//draw_frog();
			score +=10;
			if (y<-390){
			    frog_home +=1;
				if (frog_home==5) {
				    score +=1000;
					//implement next level
				}
				else {
				    score +=50;
				}
			}
		}
	}
	if (40 in keyDown) { //down key pressed
	    if (y<0){
		    redraw_bg();
	        draw_logs();
	        draw_vehicles();
	        draw_frog(x, y+=70*change);
	        score+=10;
	   }
    }	
	if (37 in keyDown) {	// left key pressed
	   if (x>-175){
		   redraw_bg();
		   draw_logs();
		   draw_vehicles();
		   draw_frog(x-=70*change, y);
		   score+=10;
	   }
	}
	if (39 in keyDown) { // right key pressed
	   if (x<196) {
		   redraw_bg();
		   draw_logs();
		   draw_vehicles();
		   draw_frog(x+=70*change, y);
		   score+=10;
		   }
	}

	draw_stats(lives, lvl, score, 0, timer);
	//when there are collisions
	detect_collision();
}
 
function detect_collision(){
    for (var i=0; i<12;i++) {
	    if (has_collided(vehicle[i])){
		     lost_life();
			 x=0;
			 y=0;
			 draw_frog();
	    }
	}
}
function has_collided(obj) {
    frogx= 175 + x;
	frogy= 485 + y;	 
	frogh=24;
	frogw=17;
	 //collision from right
	if (frogx + frogw < obj.x) {
      return false;
    }
	//front-on collision
    if (frogy + frogh < obj.y) {
      return false;
    }
	//collision from left
    if (frogx > obj.x + obj.w) {
      return false;
    }
    //collision from bottom
    if (frogy > obj.y + obj.h){
      return false;
    }
    return true;
}

function fell_into_water() {

}
function lost_life(){
	lives--;
	draw_stats(lives, lvl, score, highsc);
}

function lost_game() {
    
	if (score>highsc){
	    highsc = score;
	}
	x=0;
	y=0;
	score = 0;
	lives = 4;
	lvl =1;
    draw_stats(lives, lvl, score, highsc);
	

}