canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_images_array = ["http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631120305209E02_DXXX.jpg",
"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486271176EDR_F0481570NCAM00322M_.JPG",
"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NLB_486264973EDR_S0481570NCAM00546M_.JPG",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631090503669C00_DXXX.jpg"];

random_number = Math.floor(Math.random()*5);

roverwidth = 100;
roverheight = 100;

background_image = nasa_images_array[random_number];
console.log("background_image = "+ background_image);
rover_image = "rover.png";

roverx = 10;
rovery = 10;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image; 
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_imgTag, roverx, rovery, roverwidth, roverheight);
}

window.addEventListener("keydown", mykeyDown);
function mykeyDown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == '37')
    {
        left();
        console.log("left");
    }

    if(keypressed == '38')
    {
        up();
        console.log("up");
    }

    if(keypressed == '39')
    {
        right();
        console.log("right");
    }

    if(keypressed == '40')
    {
        down();
        console.log("down");
    }
}

function left()
{
    if(roverx >= 0)
    {
        roverx = roverx - 10;
        console.log("When Left Is Pressed, x ="+ roverx + "y ="+ rovery);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(roverx <= 700)
    {
        roverx = roverx + 10;
        console.log("When Right Is Pressed, x ="+ roverx + "y ="+ rovery);
        uploadBackground();
        uploadrover();
    }
}

function up()
{
    if(rovery >= 0)
    {
        rovery = rovery - 10;
        console.log("When Up pressed, x ="+ roverx + "y ="+ rovery);
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if(rovery <= 500)
    {
        rovery = rovery + 10;
        console.log("When Down pressed, x ="+ roverx + "y ="+ rovery);
        uploadBackground();
        uploadrover();
    }
}

