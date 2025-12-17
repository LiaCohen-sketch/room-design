  const texts = [
    "Your Mother",
    "Your Father",
    "Your Sister",
    "Your Brother",
    "Your son", 
    "Your Daughter",
    "Your Aunt",
    "Your Uncle",
    "Your Grandmother",
    "Your Grandfather",
  ];

  let index = 0;
  const textElement = document.getElementById("changingText");

  setInterval(() => {
    textElement.style.opacity = 0;

    setTimeout(() => {
      textElement.textContent = texts[index];
      textElement.style.opacity = 1;
      index = (index + 1)   % texts.length;
    }, 500);
  }, 2000);

