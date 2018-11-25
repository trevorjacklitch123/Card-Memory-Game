<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trevor's Website</title>
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/cardGame.css">
    <script src="js/jquery.js"></script>
  </head>
  <body>
    <?php include "header.php"; ?>
    </div>
    <form>
      <input type="radio" name="numSuits" value="1 Suit" checked /> 1 Suit<br>
      <input type="radio" name="numSuits" value="2 Suits" /> 2 Suits<br>
      <input type="radio" name="numSuits" value="3 Suits" /> 3 Suits<br>
      <input type="radio" name="numSuits" value="4 Suits" /> 4 Suits<br>
      <input type="submit" value="Launch Game">
    </form>
    <div id="grid-container">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card" id="FiveDiamonds"></div>
    </div>
  </body>
</html>
