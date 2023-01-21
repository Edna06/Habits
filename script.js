const form = document.querySelector('form')
// inicialiando a biblioteca
const nlwSetup = new NLWSetup(form) //criando uum novo obj NLW setup e colocando aqui 
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save) //toda ve que meu formulário sofrer uma modificação, essa função vai rodar

function add() {
// verificar se o dia já existe 
const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
const dayExists = nlwSetup.dayExists(today)

if(dayExists == true) {
  alert('O dia já está registrado! ❌')
  return
}


nlwSetup.addDay(today)
alert('Adicionado com sucesso! ✅')
}

function save() {
localStorage.setItem("NLWSetup@haits", JSON.stringify(nlwSetup.data))
//para verificar no meu console.log, asta eu digitar localStorage
}
  
const data = JSON.parse(localStorage.getItem("NLWSetup@haits")) || {} //para que não dê erro quando eu entrar na aplicação pela primeira vez
  // carregando os dados do local storage 
  //tranformar o texto em objeto novamente

nlwSetup.setData(data)
nlwSetup.load()













