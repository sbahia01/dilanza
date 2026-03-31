// 1. Banco de Dados de Conteúdo (Traduções)
const content = {
    PT: {
        price: "R$ 490,00", 
        buy: "COMPRAR AGORA", 
        details: "VER DETALHES", 
        hide: "OCULTAR",
        blackTitle: "CAMISA PIMA - PRETA", 
        whiteTitle: "CAMISA PIMA - BRANCA",
        desc: "Algodão Pima Peruano premium. Toque sedoso, durabilidade extrema e brilho natural."
    },
    EN: {
        price: "$ 90.00", 
        buy: "BUY NOW", 
        details: "VIEW DETAILS", 
        hide: "HIDE",
        blackTitle: "PIMA T-SHIRT - BLACK", 
        whiteTitle: "PIMA T-SHIRT - WHITE",
        desc: "Premium Peruvian Pima Cotton. Silky touch, extreme durability, and natural luster."
    }
};

let currentLang = 'PT';

// 2. Funções da Página Principal (Index)
function changeLang(lang) {
    currentLang = lang;
    const t = content[lang];
    
    // Atualiza títulos e preços se os elementos existirem na página
    if(document.getElementById('titleBlack')) {
        document.getElementById('titleBlack').innerText = t.blackTitle;
        document.getElementById('titleWhite').innerText = t.whiteTitle;
        document.getElementById('priceBlack').innerText = t.price;
        document.getElementById('priceWhite').innerText = t.price;
    }
    
    document.querySelectorAll('.buy-btn').forEach(b => b.innerText = t.buy);
    
    // Atualiza botões de idioma
    const btnPT = document.getElementById('btnPT');
    const btnEN = document.getElementById('btnEN');
    if(btnPT && btnEN) {
        btnPT.className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
        btnEN.className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';
    }
}

function toggleDetails(color) {
    const id = color === 'black' ? 'descBlack' : 'descWhite';
    const btnId = color === 'black' ? 'btnDetailBlack' : 'btnDetailWhite';
    const el = document.getElementById(id);
    const btn = document.getElementById(btnId);

    if (el.style.opacity === "1") {
        el.style.opacity = "0";
        btn.innerText = content[currentLang].details;
    } else {
        el.innerText = content[currentLang].desc;
        el.style.opacity = "1";
        btn.innerText = content[currentLang].hide;
    }
}

function goToProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product.html';
}

// 3. Funções da Página de Produto (Novo)
function loadProductDetails() {
    const product = localStorage.getItem('selectedProduct') || 'black';
    const isBlack = product === 'black';

    // Captura os elementos de forma segura
    const mainImg = document.getElementById('mainProductImage');
    const pTitle = document.getElementById('productTitle');
    const bread = document.getElementById('breadName');
    const pPrice = document.getElementById('productPrice');
    const detColor = document.getElementById('detailColor');
    const pId = document.getElementById('prodId');

    if (mainImg) mainImg.src = isBlack ? 'camisa-preta.webp' : 'camisa-branca.webp';
    if (pTitle) pTitle.innerText = isBlack ? 'CAMISA PIMA PREMIUM - PRETA' : 'CAMISA PIMA PREMIUM - BRANCA';
    if (bread) bread.innerText = isBlack ? 'PRETA' : 'BRANCA';
    if (pPrice) pPrice.innerText = 'R$ 490,00';
    if (detColor) detColor.innerText = isBlack ? 'Preto' : 'Branco';
    if (pId) pId.innerText = isBlack ? 'DLZ-001-BLK' : 'DLZ-002-WHT';
}

function selectSize(btn) {
    // Remove a classe 'selected' de todos os botões de tamanho
    const buttons = btn.parentElement.querySelectorAll('button');
    buttons.forEach(b => {
        b.style.borderColor = '#e5e5e5';
        b.style.background = '#fff';
        b.style.color = '#000';
    });
    
    // Aplica o estilo de selecionado ao botão clicado
    btn.style.borderColor = '#000';
    btn.style.background = '#f9f9f9';
}
