const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const emailMessage = document.getElementById('emailMessage');

let arrayOfEmails = [];

let formValue = {};
let formValid = false;

const patterns = {
	name: /^([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}\u0400-\u04FF]){2,} ([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}\u0400-\u04FF]){3,}$/i,
	phone: /^(\+381) ?(60|61|62|63|64|65|66|69|67|68|16) ?(\d{1,}) ?(\d{1,}) ?(\d{1,})?$/,
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,9})?$/,
};

const httpGet = (url, callback) => {
	const request = new XMLHttpRequest();

	request.open('get', url, true);

	request.onload = () => {
		callback(request);
	};

	request.send();
};

const validate = (field, regex) => {
	if (regex.test(field.value)) {
		field.className = 'valid';
	} else {
		field.className = 'invalid';
	}
	if (field.value === '') {
		field.classList.remove('invalid');
	}
};

const formValidityCheck = () => {
	let counter = 0;

	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].classList.value === 'valid') {
			counter++;
		}
	}

	counter === 3 ? (formValid = true) : (formValid = false);

	formValid ? btn.classList.add('valid') : btn.classList.remove('valid');
};

const uniqueEmailCheck = (value) => {
	arrayOfEmails.forEach((email) => {
		if (email === value) {
			formValid = false;
			inputs[2].classList.remove('valid');
			inputs[2].classList.add('invalid');
			emailMessage.innerText = 'Корисник са овим e-мејлом већ постоји';
		}
	});
};

const addingInvalidClassOnSubmit = () => {
	inputs.forEach((input) => {
		if (!input.classList.contains('valid')) input.classList.add('invalid');
		if (input.classList.contains('invalid')) {
			input.classList.add('shake');
			input.addEventListener('animationend', () => {
				input.classList.remove('shake');
			});
		}
	});
};

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		validate(e.target, patterns[e.target.attributes.name.value]);
		formValue[e.target.attributes.name.value] = e.target.value;

		if (e.target.attributes.name.value === 'email') {
			emailMessage.innerText = 'Email мора садржати симбол @ нпр. korisnik@gmail.com';
			uniqueEmailCheck(e.target.value);
		}

		formValidityCheck();
	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	formValid ? form.submit() : addingInvalidClassOnSubmit();
});

httpGet('php/data.php', (request) => {
	if (request.response) {
		arrayOfEmails = request.responseText.replace(/['"\]\[]+/g, '').split(',');
	} else {
		alert('Дошло је до грешке.');
	}
});
