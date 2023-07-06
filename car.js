img = "";
Status = "";
function setup(){
    canvas = createCanvas(640,430);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modealLoaded);
    document.getElementById("status").innerHTML =  "Status : Detecting Ojects";

}

function preload(){
    img = loadImage('car.jpg');
}

function draw(){
    image(img, 0, 0,640,430);
    
}
function modealLoaded() 
{
    console.log("Model Loaded!");
    Status=true;
    objectDetector.detect(img,gotResult);
    
} 
