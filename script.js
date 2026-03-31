const content = {
    PT: {
        price: "R$ 490,00",
        buy: "COMPRAR AGORA",
        details: "VER DETALHES",
        hide: "OCULTAR",
        blackTitle: "CAMISA PIMA - PRETA",
        whiteTitle: "CAMISA PIMA - BRANCA",
        desc: "Algodão Pima Peruano premium colhido à mão. Toque sedoso, durabilidade extrema e brilho natural. O ápice do conforto minimalista."
    },
    EN: {
        price: "$ 90.00",
        buy: "BUY NOW",
        details: "VIEW DETAILS",
        hide: "HIDE",
        blackTitle: "PIMA T-SHIRT - BLACK",
        whiteTitle: "PIMA T-SHIRT - WHITE",
        desc: "Premium hand-harvested Peruvian Pima Cotton. Silky touch, extreme durability, and natural luster. The pinnacle of minimalist comfort."
    }
};

let currentLang = 'PT';

function changeLang(lang) {
    currentLang = lang;
    const t = content[lang];

    // Atualiza Textos de Identificação
    document.getElementById('titleBlack').innerText = t.blackTitle;
    document.getElementById('titleWhite').innerText = t.whiteTitle;
    document.getElementById('priceBlack').innerText = t.price;
    document.getElementById('priceWhite').innerText = t.price;

    // Atualiza Botões de Compra e Detalhes
    document.querySelectorAll('.buy-btn').forEach(b => b.innerText = t.buy);
    
    // Verifica estado atual do botão de detalhes para não perder o texto "HIDE/OCULTAR"
    const btnB = document.getElementById('btnDetailBlack');
    const btnW = document.getElementById('btnDetailWhite');
    
    btnB.innerText = (document.getElementById('descBlack').style.opacity === "1") ? t.hide : t.details;
    btnW.innerText = (document.getElementById('descWhite').style.opacity === "1") ? t.hide : t.details;

    // Traduz descrições ativas
    if(document.getElementById('descBlack').style.opacity === "1") document.getElementById('descBlack').innerText = t.desc;
    if(document.getElementById('descWhite').style.opacity === "1") document.getElementById('descWhite').innerText = t.desc;

    // Toggle visual dos botões de idioma
    document.getElementById('btnPT').className = (lang === 'PT') ? 'lang-btn active' : 'lang-btn';
    document.getElementById('btnEN').className = (lang === 'EN') ? 'lang-btn active' : 'lang-btn';
}

function toggleDetails(color) {
    const id = color === 'black' ? 'descBlack' : 'descWhite';
    const btnId = color === 'black' ? 'btnDetailBlack' : 'btnDetailWhite';
    const el = document.getElementById(id);
    const btn = document.getElementById(btnId);

    if (el.style.opacity === "1") {
        el.style.opacity = "0";
        setTimeout(() => { el.innerText = ""; }, 400);
        btn.innerText = content[currentLang].details;
    } else {
        el.innerText = content[currentLang].desc;
        el.style.opacity = "1";
        btn.innerText = content[currentLang].hide;
    }
}
