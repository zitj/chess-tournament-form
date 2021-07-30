<?php

header('Content-type: application/json');


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "insert";
$arrayOfEmails = array();

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT id, name, phone, email FROM form";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      $arrayOfEmails[] = $row['email'];
    }
  } else {
    echo "0 results";
  }
  $spona = 'Ja sam spona koja spaja php i JavaScript';
  echo json_encode($arrayOfEmails);
  $conn->close();




?>