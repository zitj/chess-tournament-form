<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname ="insert";


$conn = mysqli_connect($server, $username, $password, $dbname);


    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    
    $query = "insert into form(name, phone, email) values('$name', '$phone', '$email')";

    $run = mysqli_query($conn,$query) or die(mysqli_error());

    if($run){
        echo "Form submitted successfully";
    }else{
        echo "Form not submitted";
    }


?>