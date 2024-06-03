const divinations = [
    "The dream seeps quietly through the grass, staining the soles of children's shoes. Undetected, it only asks for your patience. In time, everything and everyone you know will change beyond recognition, even yourself.", 
    "As much as it is unlikely, the probability of occurrence is not zero. Would you gamble on that sliver? Is it a gut feeling or a calculation? Perhaps fortune still favours the bold.<br><br>Tomorrow, I think I shall visit my mother, who lives on an island to the East, cocooned by her families of servants in an ever-sedimenting maze of selfhood. She spent years on every personality test and diagnostic assessment and arrived at perfect knowledge of herself, each thread so clear she can weave entirely new stories about herself whenever she likes. Losing nothing in the process. She has nothing left to predict or gamble on. She has made a god of herself.<br><br> Me? Everything ahead of me is a sea of fog. So I live like a sailor. I know where the wind is blowing right now. But I cannot predict where it will be tomorrow. I carry no certainty on me. That's why my life is light as foam.", 
    "Guan Yin smiles in lieu of an answer.",  
    "The reason why the lights still worked was because each dawn the residents took turns to pedal on the DIY bike generators parked just outside the mall entrance. The bikes were lined up neatly, such that when they were mostly occupied, the whole thing resembled a Community Centre exercise class.<br><br>When Rachel realized this, she arrived at the next residential town hall with a 8-lesson plan for a Stationary Bike Course. Pei Ci, who was perched on the cashier counter of the Popular bookstore they held the town halls in, leaped down in excitement.<br><br>'Exercise releases endorphins,' she said, with a tone of finality.", 
    "You won't be alone for much longer.", 
    "Away from the noise, it's possible that you'll make a different decision.", 
    "Give it time.",
    "Yes.",
    "No.",
    "Maybe.",
    "You'll find your answer on a walk.",
    "The issue with prediction or prophecy is that no one knows for sure. And yet some things, once known, become true because they provoke or propel us to make them so. Yet at the heart of it, we don't know. Or: we know very little, and usually the same bare facts — that life is full and limited; that all things change even if their governing laws do not; that some things are probable but we can always be surprised; and that ultimately we will all die.",
    "Will the answer really help you?",
    "There is no more to be known about the situation. You must make your decision without further information."
]

const button = document.querySelector("#divinebtn");
const fortune = document.querySelector("#fortune");

const randomDivine = () => {
    const rando = Math.floor(Math.random() * 14);
    fortune.innerHTML = divinations[rando];
}

button.addEventListener("click", randomDivine);