// 1. DICIONÁRIO DE TRADUÇÃO COMPLETO
const content = {
    PT: {
        price: "R$ 490,00",
        buy: "ADICIONAR AO CARRINHO",
        details: "VER DETALHES",
        hide: "OCULTAR",
        blackTitle: "CAMISA PIMA - PRETA",
        whiteTitle: "CAMISA PIMA - BRANCA",
        desc: "Algodão Pima Peruano premium. Toque sedoso, durabilidade extrema e brilho natural.",
        selectionText: "SELECIONE O TAMANHO (BR):",
        deliveryText: "Previsão de entrega: 2 a 5 dias úteis. Devoluções gratuitas em até 30 dias.",
        detailsTitle: "OS DETALHES",
        highlightsTitle: "Destaques",
        compositionTitle: "Composição",
        washingTitle: "Instruções de lavagem",
        washingDesc: "Lavar à mão ou máquina (ciclo delicado). Ler manual do usuário."
    },
    EN: {
        price: "$ 90.00",
        buy: "ADD TO CART",
        details: "VIEW DETAILS",
        hide: "HIDE",
        blackTitle: "PIMA T-SHIRT - BLACK",
        whiteTitle: "PIMA T-SHIRT - WHITE",
        desc: "Premium Peruvian Pima Cotton. Silky touch, extreme durability, and natural luster.",
        selectionText: "SELECT SIZE (US):",
        deliveryText: "Estimated delivery: 2 to 5 business days. Free returns within 30 days.",
        detailsTitle: "THE DETAILS",
        highlightsTitle: "Highlights",
        compositionTitle: "Composition",
        washingTitle: "Washing instructions",
        washingDesc: "Hand wash or machine wash (delicate cycle). Read user manual."
    }
};

let currentLang = localStorage.getItem('userLang') || 'PT';

// 2. FUNÇÃO DE TRADUÇÃO (PRESERVA A INTEGRIDADE DO SITE)
function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('userLang', lang);
    const t = content[lang];
    
    // Atualiza botões de idioma
    if(document.getElementById('btnPT')) {
        document.getElementById('btnPT').className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
        document.getElementById('btnEN').className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';
    }

    // Atualiza textos da Página Principal (se estiver nela)
    if(document.getElementById('titleBlack')) {
        document.getElementById('titleBlack').innerText = t.blackTitle;
        document.getElementById('titleWhite').innerText = t.whiteTitle;
        document.getElementById('priceBlack').innerText = t.price;
        document.getElementById('priceWhite').innerText = t.price;
        document.querySelectorAll('.buy-btn').forEach(b => b.innerText = t.buy);
        document.querySelectorAll('.detail-btn').forEach(b => {
            if(b.innerText !== content['PT'].hide && b.innerText !== content['EN'].hide) {
                b.innerText = t.details;
            }
        });
    }

    // Atualiza textos da Página de Produto (se estiver nela)
    if(document.getElementById('productTitle')) {
        const product = localStorage.getItem('selectedProduct') || 'black';
        document.getElementById('productTitle').innerText = (product === 'black') ? t.blackTitle : t.whiteTitle;
        document.getElementById('productPrice').innerText = t.price;
        document.querySelector('.size-selector span').innerText = t.selectionText;
        document.querySelector('.buy-btn').innerText = t.buy;
        document.querySelector('.farfetch-details h3').innerText = t.detailsTitle;
        // Atualiza labels técnicas
        const labels = document.querySelectorAll('.details-grid strong');
        if(labels.length > 0) {
            labels[0].innerText = t.highlightsTitle;
            labels[1].innerText = t.compositionTitle;
            labels[2].innerText = t.washingTitle;
        }
    }
}

// 3. LÓGICA DE NAVEGAÇÃO E DETALHES
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

// 4. CARREGAMENTO DINÂMICO (PÁGINA DE PRODUTO)
function loadProductDetails() {
    const product = localStorage.getItem('selectedProduct') || 'black';
    const isBlack = product === 'black';

    const imgEl = document.getElementById('mainProductImage');
    const breadEl = document.getElementById('breadName');
    const idEl = document.getElementById('prodId');

    if (imgEl) imgEl.src = isBlack ? 'camisa-preta.webp' : 'camisa-branca.webp';
    if (breadEl) breadEl.innerText = isBlack ? (currentLang === 'PT' ? 'Preta' : 'Black') : (currentLang === 'PT' ? 'Branca' : 'White');
    if (idEl) idEl.innerText = isBlack ? '24939842' : '24939843';

    changeLang(currentLang); // Aplica a tradução correta ao carregar
}

// 5. SELEÇÃO DE TAMANHO (CORREÇÃO SOLICITADA)
function selectSize(btn) {
    const allButtons = document.querySelectorAll('.size-btn');
    allButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}
