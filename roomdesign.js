
  const texts = [
    "Your Mother.",
    "Your Father.",
    "Your Sister.",
    "Your Brother.",
    "Your son.",
    "Your Daughter.",
    "Your Aunt.",
    "Your Uncle.",
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



