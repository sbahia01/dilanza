/**
 * DILANZA - CORE ENGINE v4.5
 * Controle de Idiomas e Funções de Interface
 */

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
        delivery: "Previsão de entrega: 2 a 5 dias úteis",
        returnBox: "Devoluções gratuitas por 30 dias | Coleta em casa disponível",
        secDetails: "Os detalhes",
        high: "Destaques",
        comp: "Composição",
        compDesc: "algodão PIMA PERUANO 100%",
        wash: "Instruções de lavagem",
        washDesc: "Ler manual do usuário",
        secLog: "Entregas, devoluções e vendedor",
        logS1: "Taxa de entrega única",
        logD1: "A taxa de frete variará de acordo com a origem nacional ou internacional.",
        logS2: "30 dias para devolução grátis",
        logD2: "Oferecemos devoluções gratuitas em até 30 dias após o recebimento.",
        logS3: "Taxas de importação inclusas",
        logD3: "Cuidamos de toda documentação alfandegária. Impostos já inclusos.",
        breadcrumb: "Página Inicial > Camisetas > "
    },
    EN: {
        price: "$ 90.00",
        buy: "ADD TO CART",
        buyNow: "BUY NOW",
        details: "VIEW DETAILS",
        hide: "HIDE",
        blackTitle: "PIMA T-SHIRT - BLACK",
        whiteTitle: "PIMA T-SHIRT - WHITE",
        desc: "Premium Peruvian Pima Cotton. Silky touch, extreme durability and natural luster.",
        selectionText: "SELECT SIZE (US):",
        delivery: "Estimated delivery: 2 to 5 business days",
        returnBox: "Free returns for 30 days | Home collection available",
        secDetails: "The details",
        high: "Highlights",
        comp: "Composition",
        compDesc: "100% PERUVIAN PIMA COTTON",
        wash: "Washing instructions",
        washDesc: "Read user manual",
        secLog: "Delivery, returns and seller",
        logS1: "Single delivery fee",
        logD1: "The shipping fee will vary based on national or international origin.",
        logS2: "30 days free return",
        logD2: "We offer free returns within 30 days of receiving your order.",
        logS3: "Import duties included",
        logD3: "We handle all customs documentation. All taxes included.",
        breadcrumb: "Home > T-Shirts > "
    }
};

let currentLang = localStorage.getItem('userLang') || 'PT';

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('userLang', lang);
    const t = content[lang];
    
    // Header Buttons
    document.getElementById('btnPT').className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
    document.getElementById('btnEN').className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';

    // INDEX - Vitrine
    if(document.getElementById('titleBlack')) {
        document.getElementById('titleBlack').innerText = t.blackTitle;
        document.getElementById('titleWhite').innerText = t.whiteTitle;
        document.getElementById('priceBlack').innerText = t.price;
        document.getElementById('priceWhite').innerText = t.price;
        
        document.querySelectorAll('.buy-btn').forEach(btn => btn.innerText = t.buyNow);
        
        // Tradução correta do botão "Ver Detalhes" baseado no estado atual (Aberto/Fechado)
        document.querySelectorAll('.detail-btn').forEach(btn => {
            const isShowing = btn.getAttribute('data-showing') === 'true';
            btn.innerText = isShowing ? t.hide : t.details;
        });
    }

    // PÁGINA DE PRODUTO - Tradução Completa
    if(document.getElementById('productTitle')) {
        const prod = localStorage.getItem('selectedProduct') || 'black';
        document.getElementById('productTitle').innerText = (prod === 'black') ? t.blackTitle : t.whiteTitle;
        document.getElementById('productPrice').innerText = t.price;
        document.getElementById('selectLabel').innerText = t.selectionText;
        document.getElementById('mainBuyBtn').innerText = t.buy;
        document.getElementById('delInfo').innerText = t.delivery;
        document.getElementById('returnBox').innerText = t.returnBox;
        
        // Seções Técnicas
        document.getElementById('secTitleDetails').innerText = t.secDetails;
        document.getElementById('labelHigh').innerText = t.high;
        document.getElementById('labelComp').innerText = t.comp;
        document.getElementById('textComp').innerText = t.compDesc;
        document.getElementById('labelWash').innerText = t.wash;
        document.getElementById('textWash').innerText = t.washDesc;
        
        // Logística
        document.getElementById('secTitleLog').innerText = t.secLog;
        document.getElementById('logS1').innerText = t.logS1;
        document.getElementById('logD1').innerText = t.logD1;
        document.getElementById('logS2').innerText = t.logS2;
        document.getElementById('logD2').innerText = t.logD2;
        document.getElementById('logS3').innerText = t.logS3;
        document.getElementById('logD3').innerText = t.logD3;
    }
}

// FUNÇÃO VER DETALHES (Toggle)
function toggleDetails(color) {
    const id = color === 'black' ? 'descBlack' : 'descWhite';
    const btnId = color === 'black' ? 'btnDetailBlack' : 'btnDetailWhite';
    const el = document.getElementById(id);
    const btn = document.getElementById(btnId);
    
    if (el.style.opacity === "1") {
        el.style.opacity = "0";
        el.style.height = "0";
        btn.setAttribute('data-showing', 'false');
        btn.innerText = content[currentLang].details;
    } else {
        el.innerText = content[currentLang].desc;
        el.style.opacity = "1";
        el.style.height = "auto";
        el.style.margin = "15px auto";
        btn.setAttribute('data-showing', 'true');
        btn.innerText = content[currentLang].hide;
    }
}

function goToProduct(id) {
    localStorage.setItem('selectedProduct', id);
    window.location.href = 'product.html';
}

function loadProduct() {
    const p = localStorage.getItem('selectedProduct') || 'black';
    const isBlack = p === 'black';
    const img = document.getElementById('mainImg');
    const bread = document.getElementById('breadName');
    
    if(img) img.src = isBlack ? 'camisa-preta.webp' : 'camisa-branca.webp';
    if(bread) bread.innerText = isBlack ? (currentLang === 'PT' ? 'Preta' : 'Black') : (currentLang === 'PT' ? 'Branca' : 'White');
    
    changeLang(currentLang);
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}
