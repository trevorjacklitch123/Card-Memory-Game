<?php
    //create short variable names
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];

    //data to be able to connect to the database
    $user = 'root';
    $pass = 'VoCDHMWfGsFP2hsK';
    $db = 'website';

    //remove slashes if it is enabled and escape/sanitize dangerous chars in input
    if(get_magic_quotes_gpc()){
      $username = removeSlashes($username);
      $password = removeSlashes($password);
      $email = removeSlashes($email);
      $firstName = removeSlashes($firstName);
      $lastName = removeSlashes($lastName);
    }
    $username = mysqli_real_escape_string($dbc, $username);
    $password = mysqli_real_escape_string($dbc, $password);
    $email = mysqli_real_escape_string($dbc, $email);
    $firstName = mysqli_real_escape_string($dbc, $firstName);
    $lastName = mysqli_real_escape_string($dbc, $lastName);

    //try to connect to the database
    @ $dbc = new mysqli('localhost', $user, $pass, $db) or die("Unable to connect");
    if(mysqli_connect_errno()){
      echo "Could not connect to database! Sorry for the inconvenience!";
      exit;
    }

    //make sure the user has entered some type of data into each variable
    if(!$username || !$password || !$email || !$firstName || !$lastName){
      echo "You have not entered all of the required information.<br/>" .
           "Please go back and try again";
           exit;
    }

    //Checks to see if the username & email are both unique in the database
    $uniqueInfoQuery = "SELECT * FROM login WHERE username = '$username' OR email = '$email' LIMIT 1";
    $uniqueInfoQueryResult = $dbc->query($uniqueInfoQuery);
    $user = mysqli_fetch_assoc($uniqueInfoQueryResult);
    if ($user){
      if ($user['username'] === $username){
        echo "Username already exists!";
        exit;
      }

      if ($user['email'] === $email){
        echo "Email already exists!");
        exit;
      }
  }

    //generate salt for hash, and generate hash with the password and salt
    function generateRandomString($nbLetters){
      $randomString="";
      $charUniverse="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for($i=0; $i<$nbLetters; $i++){
         $randInt=rand(0,61);
          $randChar=$charUniverse[$randInt];
          $randomString=$randomString.$randChar;
      }
      return $randomString;
    }
    $salt = generateRandomString(16);
    $hash = hash('sha256', $password + $salt);

    //prepare the sql insert statement
    $sql = "INSERT INTO login (username, email, firstName, lastName, salt, hash) VALUES('$username', '$email', '$firstName', '$lastName', '$salt', '$hash')";

    //insert data into database
    $result = $dbc->query($sql);
    if($result){
      echo "Isertion successful!";
    }
    else {
      echo "Insertion not successful! Account not created!";
    }
?>
