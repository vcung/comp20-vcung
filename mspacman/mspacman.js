function draw() {
    canvas = document.getElementById("bg");
        // Check if canvas is supported on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        img = new Image();
        img.src = "pacman10-hp-sprite.png";
        img.onload = function () {
		ctx.drawImage(img, 321, 1, 465, 136, 0, 0, 786, 280);
		ctx.drawImage(img, 99, 60, 21, 17, 4, 30, 35, 30);
		ctx.drawImage(img, 101, 142, 17, 16, 9, 50, 25, 25);
		
        window.onload.draw();
        }
	} 
    else {
        alert('Sorry, canvas is not supported on your browser!');
    }
}

	