const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
   menu.classList.toggle('ativo');
   NavMenu.classList.toggle('ativo'); 
})

const emailInput = document.querySelector('#email')
const nameInput = document.querySelector('#name')
const empresaInput = document.querySelector('#empresa')
const assuntoInput = document.querySelector('#assunto')
const areaInput = document.querySelector('#area')
const submitButton = document.querySelector('#botao')


const errorMessage = document.querySelector('.msg')

submitButton.addEventListener('click', (e) => {
   e.preventDefault()

   const emailValue = emailInput.value;
   const nameValue = nameInput.value;
   const empresaValue = empresaInput.value;
   const assuntoValue = assuntoInput.value;
   const areaValue = areaInput.value;

   if (nameValue === '' || emailValue === '' || empresaValue === '' || assuntoValue === '' || areaValue === '' ) {
      errorMessage.textContent = "Por favor, preencha todos os campos!"
      errorMessage.classList="error";
   } else {
      errorMessage.textContent = "Dados enviados com sucesso!"
      errorMessage.classList="success";
   }
})