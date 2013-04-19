time = new Date();
timer = time.getMinutes();
x=0;
y=0;
keyDown = [];

//initiates game
function init_game() {
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
		        draw_vehicles(0);
			draw_logs(0);
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

//updates game if user has not won.
function game_loop() {
    if (lives != 0) {
        timer = timer + time.getMinutes();
        var now = Date.now();
        var diffInTime = now - then;	
		redraw_bg();
		draw_logs(log_speed);
		draw_vehicles(veh_speed);
		draw_frog(x,y);
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
	if (frog_on_log) {
	    move_with_log(on_log);
	}
    if (38 in keyDown) { //up key pressed
	    if(y>-405)  {
			y -=70*change;
			if (y<-390){
			    frog_home +=1;
				if (frog_home>=5) {
				    score +=1000;
					next_level();
				}
				else {
				    score +=50;
				}
			}
		}
	}
	if (40 in keyDown) { //down key pressed
	    if (y<0){
	        y+=70*change;
	        score+=10;
	   }
    }	
	if (37 in keyDown) {	// left key pressed
	   if (x>-175){
		   x-=70*change;
		   score+=10;
	   }
	}
	if (39 in keyDown) { // right key pressed
	   if (x<196) {
		   x+=70*change;
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
	if (y<-215){
	    frog_on_log=false;
		var i = 0;
	//	for (var i=0; i<12;i++) {
	    while ((!frog_on_log)&&i<12){
		    fell_into_water(log1[i]);
		/*(	if (fell_into_water(log1[i])){
				 lost_life();
				 x=0;
				 y=0;
				 draw_frog();
				 return;
			}*/
			i++;
		}    
		if (!frog_on_log){
		    var i = 0;
		    while ((!frog_on_log)&&i<10) {
		//	for (var i=0; i<10;i++) {
			fell_into_water(log2[i]);
			fell_into_water(log3[i]);
			//if (frog_on_log){
				//break;
			//}
			/*	if (fell_into_water(log2[i])||fell_into_water(log3[i])){
					 lost_life();
					 x=0;
					 y=0;
					 draw_frog();
					 return;
				}*/
				i++;
			}
	
			if (!frog_on_log){
				lost_life();
				x=0;
				y=0;
				draw_frog();
			}
		}
	}
}

//returns true if frogger has collided with given object
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
	var frogTop = frogy+ frogh;
	
	//check if frog is on log
    if ((frogx + frogw >= obj.x)&&(frogx <= obj.x + obj.w)) {
         if ((frogy <= obj.y + obj.h)&&(frogy + frogh >= obj.y)) {
             frog_on_log = true;
             on_log = obj;
	    // return false;		 
	}
    }
	
   // return true;
}

//updates stats to reflect loss of life
function lost_life(){
	lives--;
	draw_stats(lives, lvl, score, highsc);
}
//resets game, updates highscore if appropriate
function lost_game() {
    score += Math.round(time_left*10);
    if (score>highsc){
        highsc = score;
    }
    x=0;
    y=0;
    score = 0;
    lives = 4;
    lvl =1;
    veh_speed = 0;
    log_speed = 0;
    frog_on_log = false;
    timer = 0;
    time = new Date();
    draw_stats(lives, lvl, score, highsc);
}

//moves frog at same pace and direction as log it is on
function move_with_log(log) {
   // x = x + log.speed;
	
}

//player gets another life if they scored an additional 10000
function get_life() {
    if (score >= (prev_score + 10000)) {
         if (lives < 4) {
             lives++;
	     draw_stats(lives, lvl, score, highsc);
	}	
   prev_score = score;
   }
}

//increases speed of cars and logs, updates game for new level
function next_level(){
    score += Math.round(time_left*10);
    x=0;
    y=0;
    lvl++;
    veh_speed+=2;
    log_speed+=2;
    frog_on_log = false;
    draw_stats(lives, lvl, score, highsc);
    timer = 0;
    time = new Date();
}
