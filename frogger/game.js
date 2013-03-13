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
    fill_bg();
	draw_bg();
}
//draws the stats at the bottom of the game
//including lives left, level, score, and highscore
function draw_stats(numFrogs, lvl, score, highsc,time) {
    for (i=0; i<numFrogs; i++){
	    ctx.drawImage(sprites, 12, 333, 18, 24, i*18, 511, 18, 24);
        }
		ctx.fillStyle = "green";
		ctx.font = "bold 20px Arial";
		ctx.fillText("Level "+ lvl, 324, 529);
		ctx.fillText("Score: "+ score, 2, 560);
		ctx.fillText("Highscore: "+highsc, 100, 560);
        ctx.fillText("Time: "+ time, 260, 560);
}
//draws the frog the player controls
function draw_frog(x, y){
   //frog = new Image();
   ctx.drawImage(sprites, 11, 369, 24, 17, 175 + x, 521 + y, 24, 17);
}
function move_frog(x, y) {
   //ctx.drawImage(frog, 175 + x, 521 + y, 24, 17);
}
//draws the cars
function draw_cars(){
    ctx.drawImage(sprites, 81, 264, 24, 25, 202, 328, 24, 25);
	ctx.drawImage(sprites, 105, 303, 47, 16, 232, 340, 47, 16);
}

//draws the logs
function draw_logs() {
    ctx.drawImage(sprites, 6, 228, 85, 24, 40, 112, 85, 24);
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
			
		    draw_stats(lives, 1, 0, 0, 0);
		    draw_cars();
		    draw_logs();
            draw_frog(0, 0);
	    	set_speeds();			
		    start_game(lives);	
	
          main_loop();
		}
    } else {
        alert('Sorry, canvas is not supported on your browser!');
    }
}
timer = time.getMinutes();
x=0;
y=0;
//starts the game loop
keyDown = [];
function start_game(lives){

   addEventListener("keyup", function(event) {
	    delete keyDown[event.keyCode];
		
	} , false);
	addEventListener("keydown", function(event) {
	    keyDown[event.keyCode] = true;
		
	} , false);
//	}
}
function main_loop() {
if (lives != 0) {
timer = timer + time.getMinutes();
var now = Date.now();
var delta = now - then;

	update(delta / 1000);
	then=now;
}

}
then = Date.now();
 setInterval(main_loop, 1);

function update(change) {
//draw_stats(lives, 1, 0, 0, timer);
if (38 in keyDown) {
	   redraw_bg();
	   draw_cars();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x, y-=70*change);
	}
	if (40 in keyDown) {
	   redraw_bg();
	   draw_cars();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x, y+=70*change);
	}
	if (37 in keyDown) { // Player holding left
		 redraw_bg();
	   draw_cars();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x-=70*change, y);
	}
	if (39 in keyDown) { // Player holding right
		 redraw_bg();
	   draw_cars();
		    draw_logs();
			draw_stats(lives, 1, 0, 0, timer);
	   draw_frog(x+=70*change, y);
	}
	//when there are collisions
	
}
function set_speeds() {
	delay = 70;
	setInterval(draw_cars, delay);
	setInterval(draw_logs, delay);
}
