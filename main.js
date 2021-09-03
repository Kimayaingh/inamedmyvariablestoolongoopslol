idkwhatpartofthebodythisisithinkmaybebelowthenoseidkX=0;
idkwhatpartofthebodythisisithinkmaybebelowthenoseidkY=0;

function preload(){
clown_noze=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

    
}

function modelLoaded(){
  
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        idkwhatpartofthebodythisisithinkmaybebelowthenoseidkX=results[0].pose.nose.x-50;
        idkwhatpartofthebodythisisithinkmaybebelowthenoseidkY=results[0].pose.nose.y-50;

        console.log("nose x=" + idkwhatpartofthebodythisisithinkmaybebelowthenoseidkX);
        console.log("nose y=" + idkwhatpartofthebodythisisithinkmaybebelowthenoseidkY );
      
    }
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);


image(clown_noze,idkwhatpartofthebodythisisithinkmaybebelowthenoseidkX,idkwhatpartofthebodythisisithinkmaybebelowthenoseidkY,30,30);
}

function take_Snapshot(){
    save("filterapp.jpg");
}