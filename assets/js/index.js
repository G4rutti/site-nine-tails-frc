const eletrica = document.getElementById('eletrica')
const mecanica = document.getElementById('mecanica')
const programacao = document.getElementById('programacao')
const social = document.getElementById('social')

const aparecerEletrica = () => {
    eletrica.style.display = 'inline'
    mecanica.style.display = 'none'
    programacao.style.display = 'none'
    social.style.display = 'none'
}

const aparecerMecanica = () => {
    eletrica.style.display = 'none'
    mecanica.style.display = 'inline'
    programacao.style.display = 'none'
    social.style.display = 'none'
}

const aparecerProgramacao = () => {
    eletrica.style.display = 'none'
    mecanica.style.display = 'none'
    programacao.style.display = 'inline'
    social.style.display = 'none'
}

const aparecerSocial = () => {
    eletrica.style.display = 'none'
    mecanica.style.display = 'none'
    programacao.style.display = 'none'
    social.style.display = 'inline'
}