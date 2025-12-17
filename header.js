let header = document.getElementById("header");
header.innerHTML = `
  <style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ba4146;
        font-family: "Outfit", sans-serif;
        border-radius: 4px;
    }

    .header a {
        padding: 30px 20px;
        color: #fde1d5;
        text-decoration: none;
        font-size: 20px;
        border-radius: 20px;
    }

        .header-right a:hover {
        background-color: #fde1d5;
        color:#ba4146;
    }

  



   
    // }
  </style>

  <div class="header">
      <a href="index.html" class="logo"><img src ="logo.png" width="120" height="80"></a>
      <div class="header-right">
          <a href="../comedy file/comedy.html">Items</a>
          <a href="../romance file/romance.html">Astheatic Quiz</a>
          <a href="../animation file/animation.html"></a>
              </div>
  </div>
`;

