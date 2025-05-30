alert("!!Epilepsy warning!!");
document.body.style.overflow = "hidden";

let container = document.createElement("div");
container.style.width = "50%";
container.style.color = "red";
container.style.textAlign = "center";
container.style.fontSize = "75px";
container.style.fontFamily = "monospace";
container.style.backgroundColor = "#000";
container.style.margin = "auto";
container.style.position = "absolute";
container.style.left = "50%";
container.style.top = "10%"; 
container.style.transform = "translateX(-50%)"; 
container.innerHTML = "Launching nuke in <span id='countdown'>5</span>";

document.body.appendChild(container);

let time = 0;
let countdownEl = document.getElementById("countdown");

function updateCountdown() {
    countdownEl.textContent = time;
    if (time > 0) {
        time--;
        setTimeout(updateCountdown, 1000);
    } else {
        container.remove();
        let interval = 200;
        let explosions = setInterval(spawnExplosion, interval);

        setTimeout(spin, 5000);
        setTimeout(epilepsy, 8000);
        setTimeout(() => {
            document.body.style.animation = ""; // Stop animations
        }, 10000);
        setTimeout(() => {
            clearInterval(explosions);
            textSpawning = setInterval(spawnText, interval);
        }, 10000);
        setTimeout(() => {
            clearInterval(textSpawning)
            document.body.innerHTML = ""; // Clear the screen
            document.querySelectorAll('*').forEach(el => {
                el.style.animation = ""; // Stop spinning
            });            
            let finalNuke = document.createElement("img");
            finalNuke.src = "https://media1.tenor.com/m/jYfP3Nj30agAAAAC/kaboom-explosion.gif";
            finalNuke.style.width = "100vw";
            finalNuke.style.height = "100vh";
            finalNuke.style.position = "absolute";
            finalNuke.style.top = "0";
            document.body.appendChild(finalNuke);
        }, 12000);
        setTimeout(() =>{
            close();
        }, 14000)
    }
}

function spawnExplosion() {
    let explosion = document.createElement("img");
    explosion.style.width = "750px";
    explosion.style.height = "750px";
    explosion.src = "https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif";
    explosion.style.position = "absolute";
    explosion.style.left = Math.random() * (window.innerWidth - 400) + "px";
    explosion.style.top = Math.random() * (window.innerHeight - 400) + "px";
    document.body.appendChild(explosion);

    setTimeout(() => {
        explosion.remove();
    }, 500);
}

function spin(){
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'spin 2s linear infinite';
    });
    document.styleSheets[0].insertRule(`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`, 0);
    
}

function epilepsy() {
    let flashingInterval = setInterval(() => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
    }, 100);
    
    setTimeout(() => clearInterval(flashingInterval), 5000); // Stop after 5s
}

function spawnText() {
    let text = document.createElement("div");
    text.style.backgroundColor = "";
    text.style.position = "absolute";
    text.style.fontSize = "100px";
    text.style.fontWeight = "bold";
    text.style.color = "red";
    text.style.textAlign = "center";
    text.textContent = "HA HA HA";
    text.style.left = Math.random() * (window.innerWidth - 500) + "px";
    text.style.top = Math.random() * (window.innerHeight - 500) + "px";
    document.body.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 500);
}

updateCountdown();
