//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
accident_image = "accident.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 250;






function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground();
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar();
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if (greencar_y >= 0)
    {

        greencar_y = greencar_y - 10;
        console.log("When the Up arrow key is pressed, X = " + greencar_x + ", Y = "+ greencar_y);
        uploadBackground();
        uploadgreencar();

    }
}

function down()
{
    if (greencar_y <= 300)
    {

        greencar_y = greencar_y + 10;
        console.log("When the Down arrow key is pressed, X = " + greencar_x + ", Y = "+ greencar_y);
        uploadBackground();
        uploadgreencar();

    }
}

function left()
{
    if(greencar_x >= 0)
    {

        greencar_x = greencar_x - 10;
        console.log("When the Left arrow key is pressed, X = " + greencar_x + ", Y = " + greencar_y);
        uploadBackground();
        uploadgreencar();

    }
}


function right()
{
    if (greencar_x <= 700)
    {

        greencar_x = greencar_x + 10;
        console.log("When the Right arrow key is pressed, X = " + greencar_x + ", Y = " + greencar_y);
        uploadBackground();
        uploadgreencar();

    }
}





