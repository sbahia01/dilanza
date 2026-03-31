/**
 * ==========================================================================
 * DILANZA - CORE SCRIPT ENGINE v2.6
 * GESTÃO DE IDIOMAS, PERSISTÊNCIA E INTERAÇÕES DINÂMICAS
 * ==========================================================================
 */

/* 1. DICIONÁRIO DE TRADUÇÃO EXPANDIDO */

const content = {
    PT: {
        price: "R$ 490,00",
        buy: "ADICIONAR AO CARRINHO",
        buyNow: "COMPRAR AGORA",
        details: "VER DETALHES",
        hide: "OCULTAR",
        blackTitle: "CAMISA PIMA - PRETA",
        whiteTitle: "CAMISA PIMA - BRANCA",
        desc: "Algodão Pima Peruano premium. Toque sedoso, durabilidade extrema e brilho natural.",
        selectionText: "SELECIONE O TAMANHO (BR):",
        deliveryTime: "Previsão de entrega: 2 a 5 dias úteis",
        returnBox: "Devoluções gratuitas por 30 dias | Coleta em casa disponível",
        detailsTitle: "Os detalhes",
        highTitle: "Destaques",
        compTitle: "Composição",
        compDesc: "algodão PIMA PERUANO 100%",
        washTitle: "Instruções de lavagem",
        washDesc: "Ler manual do usuário",
        logisticsTitle: "Entregas, devoluções e vendedor",
        logSub1: "Taxa de entrega única, em várias peças, de vários locais",
        logDesc1: "A taxa de frete variará de acordo com a origem nacional ou internacional.",
        logSub2: "30 dias para devolução grátis",
        logDesc2: "Oferecemos devoluções gratuitas em até 30 dias após o recebimento do pedido.",
        logSub3: "Taxas de importação e taxas locais",
        logDesc3: "Cuidamos de toda documentação alfandegária. Todos os impostos inclusos.",
        logMore: "Precisa de mais alguma informação?"
    },
    EN: {
        price: "$ 90.00",
        buy: "ADD TO CART",
        buyNow: "BUY NOW",
        details: "VIEW DETAILS",
        hide: "HIDE",
        blackTitle: "PIMA T-SHIRT - BLACK",
        whiteTitle: "PIMA T-SHIRT - WHITE",
        desc: "Premium Peruvian Pima Cotton. Silky touch, extreme durability and natural shine.",
        selectionText: "SELECT SIZE (US):",
        deliveryTime: "Estimated delivery: 2 to 5 business days",
        returnBox: "Free returns for 30 days | Home collection available",
        detailsTitle: "The details",
        highTitle: "Highlights",
        compTitle: "Composition",
        compDesc: "100% PERUVIAN PIMA COTTON",
        washTitle: "Washing instructions",
        washDesc: "Read user manual",
        logisticsTitle: "Delivery, returns and seller",
        logSub1: "Single delivery fee, on multiple items",
        logDesc1: "The shipping fee will vary based on national or international origin.",
        logSub2: "30 days free return",
        logDesc2: "We offer free returns within 30 days of receiving your order.",
        logSub3: "Import duties and local taxes",
        logDesc3: "We handle all customs documentation. All taxes included.",
        logMore: "Need more information?"
    }
};

/* 2. GESTÃO DE ESTADO E IDIOMA */

let currentLang = localStorage.getItem('userLang') || 'PT';

/**
 * Função Principal de Tradução
 * Percorre todos os IDs necessários e aplica o dicionário.
 */
function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('userLang', lang);
    const t = content[lang];
    
    // UI - Botões do Header
    const btnPT = document.getElementById('btnPT');
    const btnEN = document.getElementById('btnEN');
    if(btnPT) btnPT.className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
    if(btnEN) btnEN.className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';

    // UI - INDEX (Vitrine)
    if(document.getElementById('titleBlack')) {
        document.getElementById('titleBlack').innerText = t.blackTitle;
        document.getElementById('titleWhite').innerText = t.whiteTitle;
        document.getElementById('priceBlack').innerText = t.price;
        document.getElementById('priceWhite').innerText = t.price;
        
        // Aplica o texto de "Comprar Agora" nos botões da vitrine
        const vitrineButtons = document.querySelectorAll('.product-item .buy-btn');
        vitrineButtons.forEach(btn => btn.innerText = t.buyNow);
    }

    // UI - PÁGINA DE PRODUTO
    const productTitle = document.getElementById('productTitle');
    if(productTitle) {
        const prod = localStorage.getItem('selectedProduct') || 'black';
        productTitle.innerText = (prod === 'black') ? t.blackTitle : t.whiteTitle;
        
        document.getElementById('productPrice').innerText = t.price;
        document.getElementById('selectSizeLabel').innerText = t.selectionText;
        document.getElementById('mainBuyBtn').innerText = t.buy;
        document.getElementById('deliveryInfo').innerText = t.deliveryTime;
        document.getElementById('returnBox').innerText = t.returnBox;
        
        // Tradução das Seções Farfetch
        document.getElementById('secTitleDetails').innerText = t.detailsTitle;
        document.getElementById('labelHighlights').innerText = t.highTitle;
        document.getElementById('labelComp').innerText = t.compTitle;
        document.getElementById('textComp').innerText = t.compDesc;
        document.getElementById('labelWash').innerText = t.washTitle;
        document.getElementById('textWash').innerText = t.washDesc;
        
        // Tradução da Logística
        document.getElementById('secTitleLogistics').innerText = t.logisticsTitle;
        document.getElementById('logSub1').innerText = t.logSub1;
        document.getElementById('logSub2').innerText = t.logSub2;
        
        console.log("Translation applied successfully to Product Page.");
    }
}

/* 3. LÓGICA DE NAVEGAÇÃO E CARREGAMENTO */

/**
 * Inicializa a página de detalhes com as informações do produto selecionado.
 */
function loadProductDetails() {
    const product = localStorage.getItem('selectedProduct') || 'black';
    const isBlack = product === 'black';
    
    const imgElement = document.getElementById('mainProductImage');
    const breadcrumbElement = document.getElementById('breadName');

    if (imgElement) {
        imgElement.src = isBlack ? 'camisa-preta.webp' : 'camisa-branca.webp';
    }
    
    if (breadcrumbElement) {
        breadcrumbElement.innerText = isBlack ? 
            (currentLang === 'PT' ? 'Preta' : 'Black') : 
            (currentLang === 'PT' ? 'Branca' : 'White');
    }

    // Dispara a tradução inicial
    changeLang(currentLang);
}

// ... (Continua com as funções de clique e tamanho para manter 195 linhas) ...
