song ="";
song2="";
leftWristX=0;
leftWristY= 0;
rightWristX=0;
rightWristY= 0;
function preload()
{
song = loadSound("");
song2=("");
}
function setup() {
canvas = createCanvas(600,500);
canvas.center();
    
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('PoseNet is Initialized');
 }

 function gotPoses(results)
{
    if(results.length>0){
    console.log(results);
    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreleftWrist = " + scoreLeftWrist);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    rightWristY=results[0].pose.rightWrist.y;
    }
}
function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreRightWrist > 0.2) {
    
    circle(rightWristX,rightWristY,20);
    }
}
    