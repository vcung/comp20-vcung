function draw() {
    canvas = document.getElementById("simple");
        // Check if canvas is supported on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        img = new Image();
        img.src = "pacman10-hp-sprite.png";
        img.onload = function () {
		ctx.drawImage(img, 321, 1, 465, 136, 0, 0, 786, 280);
        window.onload.draw();
        }
	}
    else {
        alert('Sorry, canvas is not supported on your browser!');
    }
}

	