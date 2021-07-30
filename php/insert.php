<?php

  include('db_connection.php');


    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $query = "insert into form(name, phone, email) values('$name', '$phone', '$email')";
    $run = mysqli_query($conn,$query) or die(mysqli_error());

    $conn->close();
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style/style.css">
  <title>Пријава успешна</title>
</head>
<body>
  <div id="successPanel">
    <h1>Успешно сте се пријавили!</h1>
    <p>Контактираћемо Вас у најскоријем року.<p>
    <img src="https://lkc.org.rs/wp-content/uploads/2019/06/lkc-logo-top.png" alt="logo kulturni centar">
  </div>
    <script>
      setTimeout(()=>{
        window.location.href = "https://lkc.org.rs/";
      },3000)
    </script>
</body>
</html>