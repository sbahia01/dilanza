// 1. DICIONÁRIO DE TRADUÇÃO ROBUSTO (PT / EN)
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
        washingDesc: "Lavar à mão ou máquina (ciclo delicado). Consultar etiqueta interna."
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
        washingDesc: "Hand wash or machine wash (delicate cycle). Check internal label."
    }
};

// Recupera idioma salvo ou define padrão
let currentLang = localStorage.getItem('userLang') || 'PT';

// 2. SISTEMA DE TRADUÇÃO DINÂMICO
function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('userLang', lang); // Salva preferência do usuário
    const t = content[lang];
    
    // Atualiza botões de idioma na interface
    const btnPT = document.getElementById('btnPT');
    const btnEN = document.getElementById('btnEN');
    if(btnPT && btnEN) {
        btnPT.className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
        btnEN.className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';
    }

    // --- ATUALIZAÇÃO DA PÁGINA INICIAL (INDEX) ---
    if(document.getElementById('titleBlack')) {
        document.getElementById('titleBlack').innerText = t.blackTitle;
        document.getElementById('titleWhite').innerText = t.whiteTitle;
        document.getElementById('priceBlack').innerText = t.price;
        document.getElementById('priceWhite').innerText = t.price;
        
        document.querySelectorAll('.buy-btn').forEach(b => {
            b.innerText = t.buy;
        });

        // Garante que o botão de detalhes não mude se estiver em modo "OCULTAR"
        document.querySelectorAll('.detail-btn').forEach(b => {
            if(b.innerText !== content['PT'].hide && b.innerText !== content['EN'].hide) {
                b.innerText = t.details;
            }
        });
    }

    // --- ATUALIZAÇÃO DA PÁGINA DE PRODUTO (PRODUCT) ---
    const productTitle = document.getElementById('productTitle');
    if(productTitle) {
        const product = localStorage.getItem('selectedProduct') || 'black';
        productTitle.innerText = (product === 'black') ? t.blackTitle : t.whiteTitle;
        
        document.getElementById('productPrice').innerText = t.price;
        
        const selText = document.querySelector('.size-selector span');
        if(selText) selText.innerText = t.selectionText;
        
        const buyBtn = document.querySelector('.buy-btn');
        if(buyBtn) buyBtn.innerText = t.buy;
        
        const detTitle = document.querySelector('.farfetch-details h3');
        if(detTitle) detTitle.innerText = t.detailsTitle;

        // Tradução dos Títulos Técnicos (Strong)
        const labels = document.querySelectorAll('.details-grid strong');
        if(labels.length >= 3) {
            labels[0].innerText = t.highlightsTitle;
            labels[1].innerText = t.compositionTitle;
            labels[2].innerText = t.washingTitle;
        }
    }
}

// 3. INTERAÇÕES DE UI (EXPANDIR / NAVEGAR)
function toggleDetails(color) {
    const id = color === 'black' ? 'descBlack' : 'descWhite';
    const btnId = color === 'black' ? 'btnDetailBlack' : 'btnDetailWhite';
    const el = document.getElementById(id);
    const btn = document.getElementById(btnId);

    if (!el || !btn) return;

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

// 4. CARREGAMENTO DA PÁGINA DE COMPRA (ESTILO FARFETCH)
function loadProductDetails() {
    const product = localStorage.getItem('selectedProduct') || 'black';
    const isBlack = product === 'black';

    const imgEl = document.getElementById('mainProductImage');
    const breadEl = document.getElementById('breadName');
    const idEl = document.getElementById('prodId');

    // Configura elementos visuais baseados na escolha do usuário
    if (imgEl) imgEl.src = isBlack ? 'camisa-preta.webp' : 'camisa-branca.webp';
    if (breadEl) breadEl.innerText = isBlack ? (currentLang === 'PT' ? 'Preta' : 'Black') : (currentLang === 'PT' ? 'Branca' : 'White');
    if (idEl) idEl.innerText = isBlack ? '24939842' : '24939843';

    // Dispara a tradução para garantir que a página abra no idioma correto
    changeLang(currentLang);
}

// 5. SELEÇÃO DE TAMANHO (CORREÇÃO DE FUNCIONAMENTO)
function selectSize(btn) {
    // Remove a seleção visual de todos os botões do grupo
    const allButtons = document.querySelectorAll('.size-btn');
    allButtons.forEach(b => b.classList.remove('selected'));
    
    // Aplica a classe de seleção ao botão clicado
