const herName = "Khushi";
const yourName = "Sanjay";
 
// 🎤 MIC BLOW
async function startMic() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    const source = ctx.createMediaStreamSource(stream);
 
    source.connect(analyser);
    analyser.fftSize = 256;
 
    const data = new Uint8Array(analyser.frequencyBinCount);
 
    function detect() {
        analyser.getByteFrequencyData(data);
        let volume = data.reduce((a,b)=>a+b)/data.length;
 
        if(volume > 60){
            document.getElementById("candles").innerText="💨";
            document.getElementById("micStatus").innerText="Candles blown 🎉";
            return;
        }
        requestAnimationFrame(detect);
    }
    detect();
}
 
// ✍️ DRAG CUT
const canvas = document.getElementById("cutCanvas");
const ctx = canvas.getContext("2d");
 
canvas.width = 220;
canvas.height = 150;
 
let drawing=false, cutDone=false;
 
canvas.addEventListener("mousedown",()=>drawing=true);
canvas.addEventListener("mouseup",()=>{drawing=false;if(!cutDone){cutCake();cutDone=true;}});
canvas.addEventListener("mousemove",draw);
 
function draw(e){
    if(!drawing) return;
    ctx.lineWidth=3;
    ctx.strokeStyle="white";
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX,e.offsetY);
}
 
// 🎂 CUT EFFECT
function cutCake(){
    document.getElementById("cakeLeft").style.transform="translateX(-40px)";
    document.getElementById("cakeRight").style.transform="translateX(40px)";
 
    document.getElementById("cakeMessage").innerText=
        `Cake cut for ${herName} ❤️`;
 
    startSlideshow();
}
 
// 📸 SLIDESHOW + 🎶 MUSIC
const images=["photo1.jpg","photo2.jpg"];
let i=0;
 
function startSlideshow(){
    document.getElementById("slideshow").style.display="block";
    document.getElementById("music").play();
 
    setInterval(()=>{
        document.getElementById("slide").src=images[i];
        i=(i+1)%images.length;
    },2000);
 
    // show proposal after 8 sec
    setTimeout(()=>{
        document.getElementById("proposal").style.display="block";
    },8000);
}
 
// 💍 PROPOSAL
function yes(){
    alert("I love you forever ❤️");
}
 
function no(){
    alert("Think again 😜❤️");
}