<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname ="insert";


$conn = mysqli_connect($server, $username, $password, $dbname);


    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
      
      $sql = "SELECT id, name, phone, email FROM form";

      $result = $conn->query($sql);
      
      if ($result->num_rows > 0) {
      
        while($row = $result->fetch_assoc()) {
      
            if($email == $row["email"]){
                echo "Е-mail адреса већ постоји!";
                return;
            }
            else{
                $query = "insert into form(name, phone, email) values('$name', '$phone', '$email')";
                $run = mysqli_query($conn,$query) or die(mysqli_error());
                echo "Успешно сте се пријавили!";
            }
        }
      } else {
        echo "0 results";
      }

      $conn->close();
    
?>