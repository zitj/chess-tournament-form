<?php

include('db_connection.php');

$arrayOfEmails = array();

header('Content-type: application/json');

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