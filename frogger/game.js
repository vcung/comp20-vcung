		time = new Date();
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
		ctx.font = "bold 20px Arial";
		ctx.fillText("Level "+ lvl, 324, 529);
		ctx.fillText("Score: "+ score, 2, 560);
		ctx.fillText("Highscore: "+highsc, 100, 560);
        ctx.fillText("Time: "+ timer, 260, 560);
		ctx.fillText("Time: "+ timer, 260, 560);
}
//draws the frog the player controls
function draw_frog(x, y){
   //frog = new Image();
   ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 521 + y, 24, 17);
}
function move_frog(x, y) {
   //ctx.drawImage(frog, 175 + x, 521 + y, 24, 17);
}

//redraws cars at given intervals
function move_cars(speed) {
 
 //setInterval(draw_vehicles, speed);
 /*
 setInterval(draw_cars2, 190);
 setInterval(draw_cars1, 190);
 setInterval(draw_trucks, 190);
 setInterval(draw_cars4, 190);
 setInterval(draw_cars3, 190);
*/
}

//initiates game
function init_game() {
    canvas = document.getElementById("game");
        // Check if canvas is supported on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
		lives = 5;
        sprites = new Image();
        sprites.src = "assets/frogger_sprites.png";
	    
        sprites.onload = function () {
		    
			fill_bg();
			draw_bg();
			
		    draw_stats(lives, 1, 0, 0);
			init_coords();
		   // move_cars(190);
		    draw_vehicles();
			draw_logs();
            draw_frog(0, 0);
	    				
			setInterval(timer_stat, 190);
		    start_game(lives);	
	
		}
    } else {
        alert('Sorry, canvas is not supported on your browser!');
    }
}
function timer_stat(){

}
timer = time.getMinutes();
x=0;
y=0;
//starts the game loop
keyDown = [];
function start_game(lives){

  /* if (document.addEventListener)
   {
   document.addEventListener("keyup", frogup, false);
   document.addEventListener("keydown", frogup, false);
   document.addEventListener("keyup", frogup, false);
   document.addEventListener("keyup", frogup, false);

	*/
	addEventListener("keyup", function(event) {
	    delete keyDown[event.keyCode];
		
	} , false);
	addEventListener("keydown", function(event) {
	    keyDown[event.keyCode] = true;
		
	} , false);
	game_loop = setInterval(game_loop, 130);
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
		 reset_game();
    }
}
then = Date.now();
 

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
//draw_stats(lives, 1, 0, 0, timer);
    redraw_bg();
	draw_logs();
	draw_vehicles();
    if (38 in keyDown) { //up key pressed
	    redraw_bg();
		draw_logs();
	    draw_vehicles();
	    draw_frog(x, y-=70*change);
	}
	if (40 in keyDown) { //down key pressed
	   redraw_bg();
	   draw_logs();
	   draw_vehicles();
	   draw_frog(x, y+=70*change);
	}
	
	if (37 in keyDown) {	// left key pressed
	   redraw_bg();
	   draw_logs();
	   draw_vehicles();
	   draw_frog(x-=70*change, y);
	}
	if (39 in keyDown) { // right key pressed
	   redraw_bg();
	   draw_logs();
	   draw_vehicles();
	   draw_frog(x+=70*change, y);
	}
	draw_stats(lives, 1, 0, 0, timer);
	//when there are collisions
	
}
function init_coords() {
init_car_coords();
	init_log_coords();
//	setInterval(draw_logs, delay);
}
