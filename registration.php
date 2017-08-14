<?php
require 'vars.php';

if(isset($_POST["first_name"]) && 
   isset($_POST["last_name"]) && 
   isset($_POST["school"]) && 
   isset($_POST["tshirt"]) && 
   isset($_POST["email"]) && 
   isset($_POST["diet"]) &&
   isset($_POST["file"]
  ) {
     
  $firstName = $_POST["first_name"];
  $lastName = $_POST["last_name"];
  $school = $_POST["school"];
  $email = $_POST["email"];
  $tshirt = $_POST["tshirt"];
  $diet = $_POST["diet"];
  $file = $_POST["file"];
     
} else {
  echo "not all info given"; 
  die();
}
  //connect
$conn = new mysqli($servername, $dbuser, $dbpassword, $database) 
  
if($conn->connect_error) {
  echo "unable to connect to database";
  die();
}

//prepare statement
if(!$stmt = $conn->prepare("INSERT INTO applicants (firstName, lastName, school, email, tshirt, diet, file) VALUES (?, ?, ?, ?, ?, ?, ?)")) {
  echo 'statement prepared incorrectly';
  die();
}

if(!$stmt->bind_param("sssssss", $firstName, $lastName, $school, $email, $tshirt, $diet, $file)) {
  echo 'cannot bind statement'
}
   
if(!$stmt->execute()) {
  echo 'success';
} else {
  echo 'statement cannot be executed'
}

?>