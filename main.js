//https://teachablemachine.withgoogle.com/models/z5JNTfGMd/model.json

prediction = " "

Webcam.set({
    width: 300, height: 225, image_format: "png", png_quality: 90
})

camera = document.getElementById("camera")

Webcam.attach("#camera")

function take_Snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="snap1" src="' + data_uri + '"/>'
    })
}

console.log(ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z5JNTfGMd/model.json", model_loaded)

function model_loaded(){
    console.log("model.loaded")
}