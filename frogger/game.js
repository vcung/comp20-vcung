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
			frogh=24;
	        frogw=17;
			init_fly();
			setInterval(move_fly, 2000);
			init_lady();
			setInterval(move_lady, 3000);
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
      ctx.drawImage(sprites, 45, 365, 22, 27, 175 + x, 485 + y, 22, 27);
}
function hop_down() {
      ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 485 + y, 24, 17);
      ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 485 + y, 24, 17);
}

//starts the game loop
function start_game(lives){
	addEventListener("keyup", function(event) {
	    delete keyDown[event.keyCode];	
	} , false);
	addEventListener("keydown", function(event) {
	    keyDown[event.keyCode] = true;
	} , false);
	game_loop = setInterval(game_loop, 160);
}
function game_loop() {
    if (lives != 0) {
        timer = timer + time.getMinutes();
        var now = Date.now();
        var diffInTime = now - then;
	    update(diffInTime / 1000);
		get_life();
		draw_fly(m, n);
		draw_lady(ladyx, ladyy);
	    then=now;
    }
    else {
		 lost_game();
    }
}
then = Date.now();
 
function update(change) {
    redraw_bg();
	draw_logs();
	draw_vehicles();
	if (frog_on_log) {
	    move_with_log(on_log);
	}
	draw_frog(x,y);
	
    if (38 in keyDown) { //up key pressed
	    if(y>-405)  {
			redraw_bg();
			draw_logs();
			draw_vehicles();
			draw_frog(x, y-=70*change);
			score +=10;
			if (y<-390){
			    frog_home +=1;
				if (frog_home>=5) {
				    score +=1000;
					//next_level();
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
	draw_stats(lives, lvl, score, highsc);
	detect_collision();
}

function detect_collision(){
    if (has_collided(fly)) {
	   move_fly();
	   score+=200;
	}
    if (has_collided(lady)){
	   move_lady();
	   score+=200;
	}
    for (var i=0; i<12;i++) {
	    if (has_collided(vehicle[i])){
		     lost_life();
			 x=0;
			 y=0;
			 draw_frog();
			 return;
	    }
	}
	if (y<-210){
    for (var i=0; i<12;i++) {
	    if (fell_into_water(log1[i])){
		     lost_life();
			 x=0;
			 y=0;
			 draw_frog();
			 return;
	    }
	}    
	for (var i=0; i<10;i++) {
	    if (fell_into_water(log2[i])||fell_into_water(log3[i])){
		     lost_life();
			 x=0;
			 y=0;
			 draw_frog();
			 return;
	    }
	}
	}
}
function has_collided(obj) {
    frogx= 175 + x;
	frogy= 485 + y;	 
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
//checks if frog is on log
//returns true if frog is on log, false otherwise
function fell_into_water(obj) {
    frogx= 175 + x;
	frogy= 485 + y;	
	 //collision from right
	if ((frogx + frogw > obj.x)&&(frogy + frogh > obj.y)) {
	    if ((frogx < obj.x + obj.w)&&(frogy < obj.y + obj.h)) {
             frog_on_log = true;
	         on_log = obj;
			 return false;		 
		}
    }
	
    return true;
}
function lost_life(){
	lives--;
	draw_stats(lives, lvl, score, highsc);
}

function lost_game() {
    score += time_left*10;
	if (score>highsc){
	    highsc = score;
	}
	x=0;
	y=0;
	score = 0;
	lives = 4;
	lvl =1;
	frog_on_log = false;
    draw_stats(lives, lvl, score, highsc);
}
function move_with_log(log) {
    x = x - log.speed;
}

function get_life() {
    if (score >= (prev_score + 10000)) {
	    if (lives < 4) {
		    lives++;
			draw_stats(lives, lvl, score, highsc);
		}	
        prev_score = score;
	}
}

function next_level(){}
