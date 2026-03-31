const content = {
    PT: { blackTitle: "CAMISA PIMA - PRETA", whiteTitle: "CAMISA PIMA - BRANCA", price: "R$ 490,00" },
    EN: { blackTitle: "PIMA COTTON T-SHIRT - BLACK", whiteTitle: "PIMA COTTON T-SHIRT - WHITE", price: "$ 90.00" }
};

let currentLang = 'PT';
let currentColor = 'black';

const images = {
    black: "https://static.wixstatic.com/media/c837a6_9356885698064b54a8b7923769c02a71~mv2.png",
    white: "https://static.wixstatic.com/media/c837a6_789311406080447087799015d8621434~mv2.png"
};

function changeColor(color) {
    currentColor = color;
    updateUI();
}

function changeLang(lang) {
    currentLang = lang;
    updateUI();
}

function updateUI() {
    const data = content[currentLang];
    const imgElement = document.getElementById('productImage');
    
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        imgElement.src = images[currentColor];
        document.getElementById('productTitle').innerText = (currentColor === 'black') ? data.blackTitle : data.whiteTitle;
        document.getElementById('productPrice').innerText = data.price;
        imgElement.style.opacity = 1;
    }, 300);
}
