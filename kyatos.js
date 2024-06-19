
//poem


const poembutton = document.querySelector("#poembtn");
const poemarea = document.querySelector("#mypoem");

function loopPoem() {

    let selectedpoems = [
        "<strong>Dream Interpretation</strong><br><br>If one is born a boy — become a moth.<br>If one is born a girl — become a moth.<br>If one is born a son — become smoke.<br>If one is born a daughter — become fire.<br>If one is born a moth — become a girl.<br>If one is born a means — become a god.<br>If one is born a memory — become paper.<br>If one is born a motive — become a moth.<br>If one is born a gun — become a girl.<br>If one is born a mother — become a girl.<br>If one is born accused — become a god.<br>If one is born afraid — become a mother.<br><br>If one dreams<br>Of their mother, it means memory<br>Is over. It is now<br>Impossible to say if I was born.<br>The two witnesses don't talk. They don't remember<br>One of them<br>Lying there, pushing<br>The other one out. There is no blood<br>Between them. No one can say<br>I was born. I appeared.<br>Now that I haven't been born<br>I cannot dream of my mother.<br><br>If one dreams<br>Of their daughter, it means the gods<br>Have come to collect their dues. It is now<br>A field we're standing in<br>Looking at each other for the first time.<br>We don't recognise<br>Each other. We know in an instant<br>Who we are.<br>I know I am a girl.<br>You know you are a god.<br>You have come to collect me, and I am<br>Ready to be returned.<br><br> —<br><br><em>Quarterly Literary Review Singapore, Vol. 22 No. 3 Jul 2023</em><br><br><br></br>",
        "<strong>January 2021</strong><br><br>Language can still save you. First:<br>Train your voice to fill a fridge<br>Train the fridge to freeze speech<br><br>Yesterday we will thaw tomorrow<br>A predilection for astrology<br><br>A handbag made of python leather<br>A lampshade folded from a piece of paper<br><br>Devotion walks on two legs into the woods<br>But here I am mimicking metaphor<br><br>Unzip your handbag and say something<br>An addiction to verbs<br><br>Language is a bed of needles<br><br>Natural talent is nothing without hard work<br>Life is nothing without needles<br><br>—<br><br><em>Quarterly Literary Review Singapore, Vol. 20 No. 1 Jan 2021</em><br><br><br>",
        "<strong>Inheritance</strong><br><br>If you are lucky, language pierces the surface<br><br>Of your heart to deliver some invisible pulse, tender<br>Instruction on how to endure its own beating<br><br>Another day. Everything I know about violence<br>I learnt here. The way one word blasted me<br><br>Wide open. I planted my head in the mud and waited<br>For spring. I willed petals out of my cheeks. I watered<br><br>Each fingernail by licking it. I meant<br>To flower at all cost. In his experiments, monk Mendel<br><br>Cross-pollinated pea plants for two generations<br>At a time, establishing a theory of inheritance<br><br>Still used today. But Mendel never used the word<br>Heredity in his paper. He was interested in hybrids.<br><br>His generations of pea proved the presence<br>Of dominant & recessive traits. I speak both<br><br>But am far better at one, for example.<br>For example, they made it so through policy.<br><br>In my family, we pull live rabbits out of<br>Our mouths trying to apologise. The question<br><br>I hold down spews forth as vomit: remnants of lunch<br>Constellate signs of this week's fortune,<br><br>If only I knew how to read. But I use words<br>like <em>assemblage</em>, <em>urtext</em>, <em>cursory</em>, <em>McSpicy</em>,<br><br><em>coterminous</em>, <em>love</em>, <em>demiurge</em>,<em> susurrating subaltern</em>.<br><em>Semiotics</em> & <em>ecology</em>. <em>I</em> & <em>dream</em>. I share<br><br>A bed with words, my mouth buckling into babble.<br><br>If you are lucky, language pierces the surface<br>Of your heart to deliver some invisible pulse, tender<br><br>Instruction on how to endure its own beating<br>Another day. I looked up hybridity and found Mendel<br><br>Kneeling in his garden. How many flowers grow<br>From thirty thousand garden pea plants?<br><br>I asked Mendel but he couldn't say.<br><br>—<br><br><em>Quarterly Literary Review Singapore, Vol. 22 No. 3 Jul 2023</em><br><br><br>"
    ]
    
    for (poem of selectedpoems) {
            poemarea.innerHTML = poem;
        }
        
}

poembutton.addEventListener("click", loopPoem);


//divine

const divinations = [
    "The dream seeps quietly through the grass, staining the soles of children's shoes. Undetected, it only asks for your patience. In time, everything and everyone you know will change beyond recognition, even yourself.", 
    "As much as it is unlikely, the probability of occurrence is not zero. Would you gamble on that sliver? Is it a gut feeling or a calculation? Perhaps fortune still favours the bold.<br><br>Tomorrow, I think I shall visit my mother, who lives on an island to the East, cocooned by her families of servants in an ever-sedimenting maze of selfhood. She spent years on every personality test and diagnostic assessment and arrived at perfect knowledge of self, each thread so clear she can weave entirely new stories about herself whenever she likes. Losing nothing in the process. She has nothing left to predict or gamble on. She has made a god of herself.<br><br> Me? Everything ahead of me is a sea of fog. So I live like a sailor. I know where the wind is blowing right now. But I cannot predict where it will be tomorrow. I carry no certainty on me. That's why my life is light as foam.", 
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
