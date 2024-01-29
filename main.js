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


function Predict(){
    img1 = document.getElementById("snap1")
    classifier.classify(img1, gotResults)
}

function gotResults(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("resultGesture").innerHTML = result[0].label
        prediction = result[0].label
        
        console.log(result[0].label)

        document.getElementById("resultConfidence").innerHTML = (result[0].confidence*100).toFixed(2) + "%"

        Speak()

        if(result[0].label=="Thumbs Up"){
            document.getElementById("resultEmoji").innerHTML = "👍"
        }

        if(result[0].label=="Fine"){
            document.getElementById("resultEmoji").innerHTML = "👌"
        }


        if(result[0].label=="Peace"){
            document.getElementById("resultEmoji").innerHTML = "✌"
        }
    }
}

function Speak(){
    s = window.speechSynthesis;
    d1 = "I think the hand gesture you're doing is a " + prediction + " sign"
    u = new SpeechSynthesisUtterance(d1)
    u.rate = 0.5
    s.speak(u)
}