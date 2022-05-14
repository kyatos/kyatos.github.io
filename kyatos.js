const poems = [
    "The escalator lifts me out of the train station, propelling me forward to fall into step with other commuters. Our avatars brush past one another bearing our faces, our features relaxed, even placid. We smile at one another as we leave the public transport system. We walk into orange panels of light cast down from the sky, broken up by void deck pillars. Central Air System (CAS) vents mark the walls like the teeth of mouths pulled into awkward smiles. <br><br>My legs move briskly even as my head turns to linger on the light. I feel an itch just under my sternum. As I give up on the sunset and pull my gaze back into pace with my legs, I reach to touch that bone between my breasts. I give it a scratch even though I know the itch is too far in. <br><br>Rain sounds play through the chips in my ears, broken up intermittently by soft beeps that mark new messages. The album, produced by OpenSpaceX and backed by scientific research, is designed to keep the listener serene (“emotionally-equipped to face an ever-changing world”). Last year, SMRT ran trials where this album was played in trains and stations as a way of curbing rising cases of physical altercations amongst commuters, but the results had not been shared with the public, and the album was never played again. <br><br>I listen to the pitter-patter and smile. As thunder rumbles softly in the distance of the soundtrack, I steer out of the void deck to look up at the sky. <br><br>A Grabbot is already at the door when I reach.It’s lined up along a row of others, each parked in front of a housing unit.There are gaps here and there where deliveries have already been collected by the residents — a security concern. After being passed through the National Report & Vote(RV) process, the issue had been quickly addressed by Grab in its latest notifications. <em>We apologise deeply for causing anxiety and distress. We will resolve this very soon.Until then, we ask for your patience and understanding.</em><br><br>I open up the bot and take out the tiffin carrier, turning the bot’s red LED light green.As I step into my home, the pink wash of light that had been flooding the living room turns a soft orange.The house system beeps: “Grow mode off.” I slide back first onto the sofa, hugging the carrier against me with one arm.I open up my Grab app to watch the route replay of my meal. <br><br>Multiple animated figures in green walk cheerfully across a darker green map, each representing the movement of an ingredient from its point of harvest or death to the nearest hawker pod and finally to my home. As the green figures meet at the hawker pod, they fuse into a single figure which then, in Transformer-esque choreography, folds into the silhouette of a compact Grabbot. All parts contained in one efficient entity.<br><br><hr><br>Excerpt from <em>Edible Life - Prologue</em>, published in <em>Mackerel</em> as part of <em>Hawker! Hawker!</em> (Singapore Art Week 2022)",
    "<strong>January 2021</strong><br><br>Language can still save you. First:<br><br>Train your voice to fill a fridge<br>Train the fridge to freeze speech<br><br>Yesterday we will thaw tomorrow<br>A predilection for astrology<br><br>A handbag made of python leather<br>A lampshade folded from a piece of paper<br><br>Devotion walks on two legs into the woods<br>But here I am mimicking metaphor<br><br>Unzip your handbag and say something<br>An addiction to verbs<br><br>Language is a bed of needles<br><br>Natural talent is nothing without hard work<br>Life is nothing without needles<br><br><hr><br>First published in <em>Quarterly Literary Review Singapore</em> Vol. 20 No.1 Jan 2021",
    "Debates on the 'Tech Cold War' between the U.S. and China are often fraught with alarmist either/or binaries. It's Western libertarianism or Eastern authoritarianism; us or them; win or lose; do or die. And the media is keeping score . Principal to the ongoing trade war is artificial intelligence (AI), the trophy at the end of the tunnel of geopolitical one-upping, the prized proof of dominance over the future through its technologies. More crucially, AI presents the promise of heightened control over data and people.<br><br>Analyses thus far have focused on three key factors influencing the development of AI: talent, funding, and hardware. While China leads in funding due to immense government support, it lags behind the U.S. in hardware, as well as its pool of talent. However, China's large volume of data for machine learning, a result of millions of users and lax policies on privacy, is often cited as a key advantage. This is especially potent when coupled with the government’s laissez-faire ethics in terms of AI implementation, especially controversial when it comes to facial recognition technology.<br><br>Yet an additional factor needs to be considered, namely the effect of East Asian culture on the development of AI. Although I can only extrapolate in broad strokes, given the historical 'Othering' and essentialising of the East by the West, the effect of culture in East Asia necessitates an urgent discussion of cultural clichés.<br><br>When it comes to the legacy of such stereotypes, Japan rises above China as a both romanticised and demonised counterpoint to the West. Its dual image in the Western imagination has remained equivocal through the post-war decades, and continues to proliferate today. This binary logic is apparent in <em>The Chrysanthemum and the Sword</em>, the 1946 landmark study of Japanese culture by American anthropologist Ruth Benedict. In it, the Japanese are described as 'both aggressive and unaggressive, both militaristic and aesthetic, both insolent and polite, rigid and adaptable, submissive and resentful of being pushed around, loyal and treacherous, brave and timid, conservative and hospitable to new ways'. This ambivalence is also echoed by Yoshinobu Hakutani, who wrote that 'Japan is perceived to be a culture buttressed by its unique national philosophy and arts'. Japan thus presents as 'an object of fantasy to the West' which attracts and repels, comforts and threatens.<br><br><hr><br>Excerpt of <em>I, Robomancer: Japan, Buddhism, and Artificial Intelligence</em>, first published in <em>SO-FAR</em> (December 2019).",
    "<strong>Untitled</strong><br><em>for N</em><br><br>do I love — I do. you are a glass idol<br>blown full with smoke. do I love<br>your eyes, which to my eyes are orbs<br>in which something like ice is seen through.<br>fish underneath, hearts slowed. I long<br>to cut a lock of your hair. to kiss<br>(faintly, so you do not notice,) your cheek.<br>the ceiling high with my love. the smoke<br>opens like a wound. air ruptures, releasing<br>a birth-slick body (me) vibrating like a phone call.<br>the fish are melting. the fish are melting.<br>their scales your eyelashes. their eyes your eyes.<br>wet after all, when you wake to a click<br>on the other end. swimming pools. ponds<br>with bobbing bodies. the cold that shivers you<br>pull up into air. the fish now pools. the fish<br>now air, now cloud. fish mouths gaping<br>to release smoke, then to suck again.<br><br><hr><br>First published in <em>Quarterly Literary Review Singapore</em> Vol. 18 No. 3 Jul 2019. Also published in <em>slow dream machine</em>, my first book of poems."
]

// key variables

const button = document.querySelector("#poembtn");
const poem = document.querySelector("#poemhere");


// key individual functions

const randomPoem = () => {
    const rando = Math.floor(Math.random() * 4);
    poem.innerHTML = poems[rando];
}

button.addEventListener("click", randomPoem);