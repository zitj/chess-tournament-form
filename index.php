<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="style/style.css" />
		<script src="js/validation.js" defer></script>
		<title>ПРИЈАВА ЗА ТУРНИР</title>
	</head>
	<body>
		<form action="submit" method="">
			<p id="formHeading">Пријава за турнир</p>
			<div class="inputHolder">
				<label for="name">Име и презиме</label>
				<input type="text" name="name" placeholder="Унесите име и презиме" />
				<span>Име и презиме морају бити одвојени размаком</span>
			</div>
			<div class="inputHolder">
				<label for="phone">Број телефона</label>
				<input type="text" name="phone" placeholder="+381 60 7555333" />
				<span>Број мора почети са +381 и садржати минимум 8 бројева</span>
			</div>
			<div class="inputHolder">
				<label for="email">E-mail адреса</label>
				<input type="email" name="email" placeholder="primer@gmail.com" />
				<span>Email мора садржати симбол @ нпр. korisnik@gmail.com</span>
			</div>
			<button type="submit">ПОШАЉИ</button>
		</form>
	</body>
</html>
