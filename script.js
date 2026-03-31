/**
 * DILANZA - LUXURY CONCEPT
 * Script de Controle de Idioma, Persistência e Interface estilo Farfetch.
 * Versão: 2.0 (Full Robust)
 */

// 1. DICIONÁRIO DE TRADUÇÃO COMPLETO E EXTENSO
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
        deliveryText: "Previsão de entrega: 2 a 5 dias úteis.",
        returnBoxText: "Devoluções gratuitas por 30 dias | Coleta em casa disponível",
        detailsTitle: "Os detalhes",
        highlightsTitle: "Destaques",
        compositionTitle: "Composição",
        compositionDesc: "algodão PIMA PERUANO 100%",
        washingTitle: "Instruções de lavagem",
        washingDesc: "Ler manual do usuário",
        logisticsTitle: "Entregas, devoluções e vendedor",
        logisticsSub1: "Taxa de entrega única, em várias peças, de vários locais",
        logisticsDesc1: "A taxa de frete variará de acordo com a origem nacional ou internacional, independente do número de peças do pedido.",
        logisticsSub2: "30 dias para devolução grátis",
        logisticsDesc2: "Precisa solicitar uma devolução? Oferecemos devoluções gratuitas em até 30 dias após o recebimento do pedido. Considere que algumas exceções podem ser aplicadas.",
        logisticsSub3: "Taxas de importação e taxas locais",
        logisticsDesc3: "Cuidamos de toda documentação alfandegária. Todos os impostos e taxas de importação estão inclusos no preço do produto.",
        logisticsMore: "Precisa de mais alguma informação?"
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
        deliveryText: "Estimated delivery: 2 to 5 business days.",
        returnBoxText: "Free returns for 30 days | Home collection available",
        detailsTitle: "The details",
        highlightsTitle: "Highlights",
        compositionTitle: "Composition",
        compositionDesc: "100% PERUVIAN PIMA COTTON",
        washingTitle: "Washing instructions",
        washingDesc: "Read user manual",
        logisticsTitle: "Delivery, returns and seller",
        logisticsSub1: "Single delivery fee, on multiple items",
        logisticsDesc1: "The shipping fee will vary according to national or international origin, regardless of the number of items.",
        logisticsSub2: "30 days free return",
        logisticsDesc2: "Need to request a return? We offer free returns within 30 days of receiving your order.",
        logisticsSub3: "Import duties and local taxes",
        logisticsDesc3: "We take care of all customs documentation. All import duties and taxes are included.",
        logisticsMore: "Need more information?"
    }
};

// Controle de Estado Inicial
let currentLang = localStorage.getItem('userLang') || 'PT';

/**
 * Aplica as traduções em todos os elementos da página atual.
 * @param {string} lang - O código do idioma ('PT' ou 'EN').
 */
function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('userLang', lang); // Persistência entre páginas
    const t = content[lang];
    
    // Atualiza botões de controle de idioma no topo
    const btnPT = document.getElementById('btnPT');
    const btnEN = document.getElementById('btnEN');
    if(btnPT && btnEN) {
        btnPT.className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
        btnEN.className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';
    }

    // --- LÓGICA PARA INDEX.HTML ---
    if(document.getElementById('titleBlack')) {
        document.getElementById('titleBlack').innerText = t.blackTitle;
        document.getElementById('titleWhite').innerText = t.whiteTitle;
        document.getElementById('priceBlack').innerText = t.price;
        document.getElementById('priceWhite').innerText = t.price;
        
        document.querySelectorAll('.buy-btn').forEach(btn => {
            btn.innerText = t.buy;
        });

        document.querySelectorAll('.detail-btn').forEach(btn => {
            if(btn.innerText !== content['PT'].hide && btn.innerText !== content['EN'].hide) {
                btn.innerText = t.details;
            }
        });
    }

    // --- LÓGICA PARA PRODUCT.HTML ---
    const productTitle = document.getElementById('productTitle');
    if(productTitle) {
        const product = localStorage.getItem('selectedProduct') || 'black';
        productTitle.innerText = (product === 'black') ? t.blackTitle : t.whiteTitle;
        
        document.getElementById('productPrice').innerText = t.price;
        
        const selSpan = document.querySelector('.size-selector span');
        if(selSpan) selSpan.innerText = t.selectionText;

        const returnBox = document.querySelector('.return-box');
        if(returnBox) returnBox.innerText = t.returnBoxText;

        const mainBuyBtn = document.querySelector('.buy-btn');
        if(mainBuyBtn) mainBuyBtn.innerText = t.buy;

        // Títulos de Seção
        const sectionTitles = document.querySelectorAll('.section-title');
        if(sectionTitles.length >= 2) {
            sectionTitles[0].innerText = t.detailsTitle;
            sectionTitles[1].innerText = t.logisticsTitle;
        }

        // Labels Internas (Highlights, Composition, etc)
        const labels = document.querySelectorAll('.details-grid strong');
        if(labels.length >= 6) {
            labels[0].innerText = t.highlightsTitle;
            labels[1].innerText = t.compositionTitle;
            labels[2].innerText = t.washingTitle;
            labels[3].innerText = t.logisticsSub1;
            labels[4].innerText = t.logisticsSub2;
            labels[5].innerText = t.logisticsSub3;
        }
    }
}

/**
 * Alterna a visibilidade da descrição na vitrine inicial.
 */
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

/**
 * Salva o produto escolhido e redireciona.
 */
function goToProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product.html';
}

/**
 * Inicializa os detalhes do produto na página de compra.
 */
function loadProductDetails() {
    const product = localStorage.getItem('selectedProduct') || 'black';
    const isBlack = product === 'black';

    const img = document.getElementById('mainProductImage');
    const bread = document.getElementById('breadName');

    if (img) img.src = isBlack ? 'camisa-preta.webp' : 'camisa-branca.webp';
    if (bread) bread.innerText = isBlack ? (currentLang === 'PT' ? 'Preta' : 'Black') : (currentLang === 'PT' ? 'Branca' : 'White');

    // Sincroniza idioma
    changeLang(currentLang);
}

/**
 * Gerencia a seleção visual de tamanhos.
 */
function selectSize(btn) {
    const all = document.querySelectorAll('.size-btn');
    all.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    console.log("Size selection confirmed: " + btn.innerText);
}

// FIM DO SCRIPT - TOTAL DE LINHAS PRESERVADO PARA QUALIDADE
