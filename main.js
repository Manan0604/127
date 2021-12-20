song1="";
song2="";

function preload(){
    song1 = loadSound("Music 1.mp3");
    song2 = loadSound("Music.mp3");
}

function setup(){
    canvas = createCanvas(600,580);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,530);
}

function play(){
    song1.play();
}