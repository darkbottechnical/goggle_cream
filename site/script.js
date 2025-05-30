const f = document.getElementById('searchbar');
const q = document.getElementById('search');
const shortcuts = document.getElementById('shortcuts');
const google = 'https://www.google.com/search?q=';
const messages = ["Your local therapist!", "Your local anti-therapist!", "Why are you here???", "From nerds, for nerds, but if you're not a nerd, too bad.",
  "Fun fact: Bananas are berries, but strawberries aren't.",
  "Fun fact: Turtles can breathe out of their rear ends.",
  "Why do you people bake cookies but cook bacon?",
  "Fun fact: The guy that invests all your money is conveniently called a broker.",
  "Fun fact: \"Apart\"ments are stuck together.",
  "If vegetarians eat vegetables, what do humanitarians eat?",
  "Loading the loading screen...",
  "Injecting virus, give me a second... ;)",
  "Sychronizing with clone 13692 in Multiverse 12683e15",
  "Maybe you should touch some grass.",
  "Interesting...", "Feeling (un)lucky?", "Not sure what that's for...", "LOOK BEHIND YOU XD", "Inside your walls. Hey, how else am I here?",
  "Goggles friendly!", "CoOkIe wAs hErE.>", "https://youtube.com/watch?v=dQw4w9WgXcQ", "Custard cream would be better.", "Hmmm what text should I put here",
  "Fun fact: Most discord users think that pineapple and pizza is the most cursed food combo.",
  "Hello to the hippopotomonstrosesquippedaliophobics!",
  "We need to build a (fire)wall.",
  "It's not a bug, it's a feature!!!",
  "Unicorns are real(ly not real)",
  "Have you ever thought about how FPS characters don't blink?", "I mean sour cream",
  "Bannanas aren't yellow.",
  "An apple a day DOES keep the doctor away - but only if you can throw it hard.",
  "Sure, I can help you out. window.close()",
  "Reports show that birthdays are good for you. The more you have, the longer you live.",
  "Say \"racecar\" backwards.",
  "Fun fact: Eating one banana exposes you to more radiation than a dental X-ray.",
  "Fun fact: Wombat poop is cube-shaped.",
  "Get a life.", ];

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.location.href = url;
  win.focus();
}

f.addEventListener('submit', submitted);

document.addEventListener('DOMContentLoaded', function () {
  const savedBackground = localStorage.getItem('backgroundImage');
  const shortcuts = localStorage.getItem('shortcuts');
  if (savedBackground) {
    document.body.style.backgroundImage = `url(${savedBackground})`;
  }
  const rng = Math.floor(Math.random() * 100);
  let message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("mainrntext").textContent = message;
  if (rng >= 95) {
    q.setAttribute("placeholder", "SURGE GOGGLE OAR TYKE AH YOU ARE EL");
  }

});

document.getElementById('upload-button').addEventListener('click', function () {
  document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const backgroundImage = e.target.result;
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      localStorage.setItem('backgroundImage', backgroundImage);
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('remove-button').addEventListener('click', function () {
  document.body.style.backgroundImage = '';
  localStorage.removeItem('backgroundImage');
});

document.body.onload = function (e) {
  document.body.style.opacity = 1;
};

function getIP()
{
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      document.getElementById("textlogo").textContent = data.ip;
    })
    .catch(error => {
      console.error("Error fetching IP address:", error);
})
}

document.getElementById("fun").addEventListener('click', getIP);



