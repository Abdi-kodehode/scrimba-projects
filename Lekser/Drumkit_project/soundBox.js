const keyboard = [
    {key: "w", soundName: "Clap", sounds: new Audio("Sounds/clap.wav")},
    {key: "a", soundName: "Hihat", sounds: new Audio("Sounds/hihat.wav")},
    {key: "s", soundName: "Kick", sounds: new Audio("Sounds/kick.wav")},
    {key: "d", soundName: "Openhat", sounds: new Audio("Sounds/openhat.wav")},
    {key: "ArrowUp", soundName: "Ride", sounds: new Audio("Sounds/ride.wav")},
    {key: "ArrowLeft", soundName: "Snare", sounds: new Audio("Sounds/snare.wav")},
    {key: "ArrowDown", soundName: "Tink", sounds: new Audio("Sounds/tink.wav")},
    {key: "ArrowRight", soundName: "Tom", sounds: new Audio("Sounds/tom.wav")}
]

console.log(keyboard)

document.body.addEventListener("keydown", (e) => {
    // console.log(e.key)
    keyboard.forEach(arrayElement => { // arrayElement = soundObj, just naming it to remember object in an array
        if (e.key === arrayElement.key) {
            arrayElement.sounds.play()
            document.getElementById('soundId').innerHTML = arrayElement.soundName
        }
    })
    // soundName(e.key)
})

