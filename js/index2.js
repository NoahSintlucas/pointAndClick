document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;

const sec = 1000;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterCharacter = document.getElementById("counterCharacter");

const door1Img = document.getElementById("door1Img");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        switch (e.target.id) {
            case "door1Img":
                //something insert here
                if(door1Img.style.opacity == 0){
                    showSpeech(mainCharacterSpeech, characterAudio, "I'm standing in front of a locked door.<br> I should move, I look stupid as hell...");
                }else{
                    showSpeech(mainCharacterSpeech, characterAudio, "yes");
                }
                break;
            case "door2":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "Here is your goddamn key...<br> Now let me fucking rest...");
                door1Img.style.opacity =1;
                break;
            case "tree":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "Nice tree... looking good.. You come here often? nudge nudge...");
                break;
            case "statue":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "What a boring ass statue...");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "No you are boring..");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "AAAAH what the fuck! You can talk?.");
                setTimeout(showSpeech, 12 * sec, counterSpeech, counterAudio, "Stop screaming, you look weird, look Between the graves for the key to the locked door behind me..");
                setTimeout(showSpeech, 20 * sec, mainCharacterSpeech, characterAudio, "YOU CAN TALK?!?!?!.");
                setTimeout(showSpeech, 24 * sec, counterSpeech, counterAudio, "I SAID STOP SCREAMING!..");
                setTimeout(showSpeech, 28 * sec, mainCharacterSpeech, characterAudio, "Allright allright ill look.....");
                break;
            default:
                // do something when it doesn't have a case

                break;
        }
    }
}

function showSpeech(targetBubble, targetAudio, dialogue) {
    //trigger speech bubble and audio
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialogue;
    targetAudio.currentTime = 0;
    targetAudio.play();
    //stop after 4 seconds the dialogue bubble and audio
    setTimeout(hideSpeech, 4 * sec, targetBubble, targetAudio);
}

function hideSpeech(targetBubble, targetAudio) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
}
