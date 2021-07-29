const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
let formValue = {};
let formValid = false;

const patterns = {
	name: /^([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}\u0400-\u04FF]){2,} ([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]){3,}$/i,
	phone: /^(\+381) ?(60|61|62|63|64|65|66|69|67|68|16) ?(\d{1,}) ?(\d{1,}) ?(\d{1,})?$/,
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,9})?$/,
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
	if (counter === 3) {
		formValid = true;
		btn.classList.add('valid');
	} else {
		formValid = false;
		btn.classList.remove('valid');
	}
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
		formValidityCheck();
		formValue[e.target.attributes.name.value] = e.target.value;
	});
});

btn.addEventListener('click', (e) => {
	e.preventDefault();
	if (formValid) {
		form.submit();
	} else {
		addingInvalidClassOnSubmit();
	}
});
