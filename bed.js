img= ""
var modelStatus= ""

function preload() {
    img= loadImage("bed.jpg");
}

function setup() {
    canvas= createCanvas(400, 247)
    canvas.center()
    objectDetector= ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML= "Detecting Objects"
}

function modelLoaded() {
    console.log("model loaded")
    modelStatus= true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }

    else {
        console.log(results)
    }
}

function draw() {

}