img = "";
Status = "";
objects = "";
function setup(){
    canvas = createCanvas(640,430);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modealLoaded);
    document.getElementById("status").innerHTML =  "Status : Detecting Ojects";

}

function preload(){
    img = loadImage('beadroom.jpg');
}

function draw() {
    if (Status != undefined) {
          image(img, 0, 0, 640, 420);
      for (var i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
  
        fill(255, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
  }
function modealLoaded() 
{
    console.log("Model Loaded!");
    Status=true;
    objectDetector.detect(img,gotResult);
    
} 
function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }