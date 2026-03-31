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

function changeLang(lang) {
    currentLang = lang;
    const t = content[lang];
    document.getElementById('titleBlack').innerText = t.blackTitle;
    document.getElementById('titleWhite').innerText = t.whiteTitle;
    document.getElementById('priceBlack').innerText = t.price;
    document.getElementById('priceWhite').innerText = t.price;
    document.querySelectorAll('.buy-btn').forEach(b => b.innerText = t.buy);
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
