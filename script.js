// Dicionário de tradução completo
const translations = {
    PT: {
        price: "R$ 490,00",
        buy: "COMPRAR AGORA",
        details: "VER DETALHES",
        hideDetails: "OCULTAR",
        blackTitle: "CAMISA PIMA - PRETA",
        whiteTitle: "CAMISA PIMA - BRANCA",
        description: "Algodão Pima Peruano colhido à mão. Toque sedoso, durabilidade extrema e brilho natural. O ápice do conforto minimalista."
    },
    EN: {
        price: "$ 490.00",
        buy: "BUY NOW",
        details: "VIEW DETAILS",
        hideDetails: "HIDE",
        blackTitle: "PIMA T-SHIRT - BLACK",
        whiteTitle: "PIMA T-SHIRT - WHITE",
        description: "Hand-harvested Peruvian Pima Cotton. Silky touch, extreme durability, and natural luster. The pinnacle of minimalist comfort."
    }
};

let currentLang = 'PT';

// Função para mudar o idioma
function changeLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Atualiza Textos
    document.getElementById('priceBlack').innerText = t.price;
    document.getElementById('priceWhite').innerText = t.price;
    document.getElementById('titleBlack').innerText = t.blackTitle;
    document.getElementById('titleWhite').innerText = t.whiteTitle;
    
    // Atualiza botões
    document.querySelectorAll('.buy-btn').forEach(btn => btn.innerText = t.buy);
    document.querySelectorAll('.detail-btn').forEach(btn => {
        if (!btn.innerText.includes("HIDE") && !btn.innerText.includes("OCULTAR")) {
            btn.innerText = t.details;
        }
    });

    // Atualiza classes dos botões de idioma
    document.getElementById('btnPT').classList.toggle('active', lang === 'PT');
    document.getElementById('btnEN').classList.toggle('active', lang === 'EN');

    // Se a descrição estiver aberta, traduz ela também
    if(document.getElementById('descBlack').innerText !== "") toggleDetails('black', true);
    if(document.getElementById('descWhite').innerText !== "") toggleDetails('white', true);
}

// Função para mostrar/esconder detalhes
function toggleDetails(color, onlyUpdate = false) {
    const descId = color === 'black' ? 'descBlack' : 'descWhite';
    const btnId = color === 'black' ? 'btnDetailBlack' : 'btnDetailWhite';
    const descElement = document.getElementById(descId);
    const btnElement = document.getElementById(btnId);
    const t = translations[currentLang];

    if (descElement.innerText === "" || onlyUpdate) {
        descElement.innerText = t.description;
        btnElement.innerText = t.hideDetails;
        descElement.style.opacity = "1";
    } else {
        descElement.innerText = "";
        btnElement.innerText = t.details;
        descElement.style.opacity = "0";
    }
}
