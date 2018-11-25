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
    <?php include "header.php"; ?></div>
    <form id="SuitForm">
      <input id="spades" type="checkbox" checked /> All Spades<br>
      <input id="clubs" type="checkbox" /> All Clubs<br>
      <input id="diamonds" type="checkbox" /> All Diamonds<br>
      <input id="hearts" type="checkbox" /> All Hearts<br>
      <input id="submit" type="submit" value="Start Memory Game!">
    </form>
    <div id="reactContainer"></div>













    <!-- React & ReactDOM CDN's not suitable for production, but used for development -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

    <!-- Babel CDN also not suitable for production, but used for development -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <!-- Load React container component -->
    <script src="react/container.js" type="text/babel"></script>
  </body>
</html>
