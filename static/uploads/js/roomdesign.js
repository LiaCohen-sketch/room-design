
  const texts = [
    "Your Mother.",
    "Your Father.",
    "Your Sister.",
    "Your Brother.",
    "Your Son.",
    "Your Daughter.",
    "Your Aunt.",
    "Your Uncle.",
    "You.",
  ];

  let index = 0;
  const textSpan = document.getElementById("changingText");

  setInterval(() => {
    textSpan.style.opacity = 0;

    setTimeout(() => {
      textSpan.textContent = texts[index];
      textSpan.style.opacity = 1;
      index = (index + 1) % texts.length;
    }, 500);
  }, 2000);

function quiz() {
  window.location.href = "/quiz";
}

function homePage(){
  window.location.href = "/index.html";
}