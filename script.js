// --- CONFIGURAÇÃO DE DADOS E IDIOMAS (MANTENDO A INTEGRIDADE TOTAL) ---
const content = {
    PT: { blackTitle: "CAMISA PIMA - PRETA", whiteTitle: "CAMISA PIMA - BRANCA", price: "R$ 490,00" },
    EN: { blackTitle: "PIMA COTTON T-SHIRT - BLACK", whiteTitle: "PIMA COTTON T-SHIRT - WHITE", price: "$ 90.00" }
};

let currentLang = 'PT';
let currentColor = 'black';

// --- AQUI ESTÁ A MUDANÇA: COLOQUE O NOME EXATO DOS ARQUIVOS QUE VOCÊ SUBIU ---
const images = {
    black: "camisa-preta.png",
    white: "camisa-branca.png"
};

// --- FUNÇÃO DE TROCA DE COR (SEM CORTES) ---
function changeColor(color) {
    currentColor = color;
    updateUI();
}

// --- FUNÇÃO DE TROCA DE IDIOMA ---
function changeLang(lang) {
    currentLang = lang;
    updateUI();
}

// --- FUNÇÃO DE ATUALIZAÇÃO GERAL (MANTENDO A INTEGRIDADE) ---
function updateUI() {
    const data = content[currentLang];
    const imgElement = document.getElementById('productImage');
    
    // Aplica uma transição suave de Fade para manter o padrão de luxo
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        imgElement.src = images[currentColor];
        document.getElementById('productTitle').innerText = (currentColor === 'black') ? data.blackTitle : data.whiteTitle;
        document.getElementById('productPrice').innerText = data.price;
        imgElement.style.opacity = 1;
    }, 300); // 300ms é o tempo da transição
}
