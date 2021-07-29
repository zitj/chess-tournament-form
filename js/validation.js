let typingTimer;

const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
let formValue = {};
let formValid = false;

const patterns = {
	name: /^([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]){2,} ([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]){3,}$/i,
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

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		clearTimeout(typingTimer);
		typingTimer = setTimeout(() => {
			validate(e.target, patterns[e.target.attributes.name.value]);
			formValidityCheck();
		}, 300);

		formValue[e.target.attributes.name.value] = e.target.value;
	});

	input.addEventListener('keydown', (e) => {
		clearTimeout(typingTimer);
	});
});

btn.addEventListener('click', (e) => {
	e.preventDefault();
	if (formValid) {
		form.submit();
	}
});
