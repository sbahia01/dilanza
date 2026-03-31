// 1. DICIONÁRIO DE TRADUÇÃO
const content = {
    PT: {
        price: "R$ 490,00", buy: "COMPRAR AGORA", details: "VER DETALHES", hide: "OCULTAR",
        blackTitle: "CAMISA PIMA - PRETA", whiteTitle: "CAMISA PIMA - BRANCA",
        desc: "Algodão Pima Peruano premium. Toque sedoso, durabilidade extrema e brilho natural."
    },
    EN: {
        price: "$ 90.00", buy: "BUY NOW", details: "VIEW DETAILS", hide: "HIDE",
        blackTitle: "PIMA T-SHIRT - BLACK", whiteTitle: "PIMA T-SHIRT - WHITE",
        desc: "Premium Peruvian Pima Cotton. Silky touch, extreme durability, and natural luster."
    }
};

let currentLang = 'PT';

// 2. FUNÇÕES GERAIS E TRADUÇÃO
function changeLang(lang) {
    currentLang = lang;
    const t = content[lang];
    
    if(document.getElementById('brandName')) {
        // Atualiza elementos da index se existirem
        if(document.getElementById('titleBlack')) {
            document.getElementById('titleBlack').innerText = t.blackTitle;
            document.getElementById('titleWhite').innerText = t.whiteTitle;
            document.getElementById('priceBlack').innerText = t.price;
            document.getElementById('priceWhite').innerText = t.price;
        }
        document.querySelectorAll('.buy-btn').forEach(b => b.innerText = t.buy);
        document.getElementById('btnPT').className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
        document.getElementById('btnEN').className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';
    }
}

// Expandir descrição na Index
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

// Navegação para página de compra
function goToProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product.html';
}

// 3. FUNÇÕES ESPECÍFICAS DA PÁGINA DE PRODUTO
function loadProductDetails() {
    const product = localStorage.getItem('selectedProduct') || 'black';
    const isBlack = product === 'black';

    const imgEl = document.getElementById('mainProductImage');
    const titleEl = document.getElementById('productTitle');
    const breadEl = document.getElementById('breadName');
    const idEl = document.getElementById('prodId');

    if (imgEl) imgEl.src = isBlack ? 'camisa-preta.webp' : 'camisa-branca.webp';
    if (titleEl) titleEl.innerText = isBlack ? 'CAMISA PIMA - PRETA' : 'CAMISA PIMA - BRANCA';
    if (breadEl) breadEl.innerText = isBlack ? 'Preta' : 'Branca';
    if (idEl) idEl.innerText = isBlack ? '24939842' : '24939843';
}

// Seleção de tamanho realista
function selectSize(btn) {
    // Remove seleção de todos os botões no container
    const allButtons = document.querySelectorAll('.size-btn');
    allButtons.forEach(b => b.classList.remove('selected'));
    
    // Adiciona ao botão clicado
    btn.classList.add('selected');
}
