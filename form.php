<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trevor's Website</title>
    <link rel="stylesheet" href="css/header.css">
    <script src="js/jquery.js"></script>
  </head>
  <body>
    <?php include "header.php"; ?>
      <form action="login.php" method="post">
        <p>Username</p>
        <input type="text" name="username" placeholder="Please enter a username"></input>
        <p>Password</p>
        <input type="password" name="password" placeholder="Please enter a password"></input>
        <br>
        <input type="submit" value="Submit">
      </form>
      <form action="createAccount.php" method="post">
        <p>Username</p>
        <input type="text" name="username" placeholder="Please enter a username"></input>
        <p>Password</p>
        <input type="password" name="password" placeholder="Please enter a password"></input>
        <p>Email Address</p>
        <input type="email" name="email" placeholder="example@domain.com"></input>
        <p>First Name</p>
        <input type="text" name="firstName" placeholder="Please enter your first name"></input>
        <p>Last Name</p>
        <input type="text" name="lastName" placeholder="Please enter your last name"></input>
        <br>
        <input type="submit" value="Submit">
      </form>
    </div>
  </body>
</html>
