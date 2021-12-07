document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}     
);   

document.querySelector('#login-button').addEventListener('click', validation)
const email = document.querySelector('#email') 
const password = document.querySelector('#password')

function validation() {
	if (email.value == 0 || password.value == 0) {
		alert('[ERRO] Campos vazios!')
	} else if (email.value.indexOf('@') == -1) {
		alert('[ERRO] Email inválido!')
	} 
}

document.querySelector('#register-btn').addEventListener('click', validationRegistration)
const registerName = document.querySelector('#namec')
const registerEmail = document.querySelector('#emailc')
const registerPassword = document.querySelector('#passwordc')
const registerConfirmPassword = document.querySelector('#confirmPassword')

function validationRegistration() {
		if (registerName.value == 0 || registerEmail.value == 0 || registerPassword.value == 0 || registerConfirmPassword.value == 0) 
		{
			alert('[ERRO] Campos vazios!')
		}  
		else if (registerName.value.length < 3)
		{
			alert('[ERRO] Digite um nome válido!')
		}
		else if (registerPassword.value.length < 7) 
		{
			alert("[ERRO] A senha deve ter, no mínimo, 7 caracteres!")
		} 
		else if (registerEmail.value.includes('@') == false) {
			alert('[ERRO] Coloque um email válido!')
		}

		if (registerPassword.value != registerConfirmPassword.value) {
			alert('[ERRO] As senhas não conferem!')
		}
}	