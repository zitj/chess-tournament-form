console.log('We are connected!');

const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
let formValue = {};

const patterns = {
    name: /^([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]){2,} ([A-Za-z.!@?#"$%&:;()đšžćč *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]){3,}$/i,
    phone: /^(\+381) ?(60|61|62|63|64|65|66|69|67|68|16) ?\d{6,}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,9})?$/
}

const validate = (field, regex) =>{
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e)=>{
        validate(e.target,patterns[e.target.attributes.name.value]);
        formValue[e.target.attributes.name.value] = e.target.value;
    })
})

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(formValue)
    
    
});