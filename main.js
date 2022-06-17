nosex=0;
nosey=0;
lwX=0;
rwX=0;
difference=0;

function preload(){}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(300,300);

    poseNet=ml5.poseNet(video, modalLoaded);
    poseNet.on('pose',gotPoses);
}
function modalLoaded(){
    console.log("Modal is loaded...")
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("X is : "+x+"Y is : "+y);

        lwX=results[0].pose.leftWrist.x;
        rwX=results[0].pose.rightWrist.x;
        difference=floor(lwX-rwX);
        console.log("Right : "+rwX+"  Left : "+rwX);
}
}