song_1= "";
song_2="";
leftWristX= 0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){

song_1= loadSound("Song1.mp3");
song_2=loadSound("Song2.mp3");

}

function setup(){

    canvas= createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(gotposes, modelloaded);
    poseNet.on('poses', gotposes);
}

function modelloaded(){
    console.log("poseNet is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function gotposes(results){
if(results.length > 0){
    console.log(results);
    leftWristX.results[0].pose.leftWrist.x;
    leftWristY.results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + "leftWristY= " + leftWristY);

    rightWristX.results[0].pose.rightWrist.x;
    rightWristY.results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}
}