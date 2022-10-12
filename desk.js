Status = "";
image = "";

function preload() {
    image = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    modal = ml5.objectDetector("cosossd", modalLoaded);
    document.getElementById("status").innerHTML = "Detecting objects";
}

function modalLoaded() {
    Status = true;
    modal.detect(image, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);

    }
    console.log(results);
    objects = results;
}    