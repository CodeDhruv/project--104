Webcam.set({
    width :400,
    height : 450,
    image_format : 'png',
    png_quality : 90 
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    webcam.span (function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/74JU7cN-E/model.json", modelLoaded);

function modelLoaded(){
    console.log("modelLoaded!");
}