const mensagens = [
    "O sucesso chegará em breve, continue perseverando!",
    "Grandes realizações demandam tempo e paciência",
    "Não deixe que o medo te impeça de tentar algo novo",
    "Você é mais forte do que imagina, acredite em si mesmo!",
    "A sorte está ao seu lado, confie em suas escolhas",
    "O fracasso é apenas uma oportunidade para recomeçar com mais sabedoria",
    "Aproveite cada momento da sua jornada, o destino é a jornada em si",
    "Lembre-se: o que importa não é o destino, mas sim a jornada",
    "Não desista, seus esforços serão recompensados",
    "Você é capaz de superar qualquer obstáculo, acredite em seu potencial"
];

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const fortuneCookie = document.getElementById("fortune-cookie")
const newCookieBtn = screen2.querySelector("button")
const mensagemDaSorte = screen2.querySelector("p")

// Inicialização
getNewCookie()

// Eventos
fortuneCookie.addEventListener('click', handleOpenCookie)
newCookieBtn.addEventListener('click', handleNewCookie)

// Funções
function getNewCookie() {
    mensagemDaSorte.innerText = mensagens[Math.floor(Math.random() * mensagens.length)];
}

function handleOpenCookie() {
    toggleScreen()
}

function handleNewCookie() {
    getNewCookie()
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}