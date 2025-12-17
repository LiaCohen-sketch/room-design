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
        height: 90px;
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

  </style>
  <div class="header">
      <a href="index.html" class="logo"><img src ="../static/uploads/images/logo.png" width="170" height="80"></a>
      <div class="header-right">
          <a href="">Items</a>
          <a  onclick = "quiz()">Your Design Quiz</a>
              </div>
  </div>
      <script src="../static/uploads/roomdesign.js"></script>

`;

