/* RESET E BASE */
body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    background-color: #ffffff;
    color: #000000;
    -webkit-font-smoothing: antialiased;
}

/* HEADER E LOGO */
header {
    padding: 30px 20px;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
}

#brandName {
    letter-spacing: 0.5em;
    font-weight: 300;
    font-size: 32px;
    margin: 15px 0;
    text-transform: uppercase;
}

/* SELETOR DE IDIOMAS */
.lang-selector {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
}

.lang-btn {
    background: none;
    border: none;
    font-size: 11px;
    letter-spacing: 0.1em;
    cursor: pointer;
    color: #999;
    padding: 5px;
    transition: color 0.3s;
}

.lang-btn.active {
    color: #000;
    font-weight: bold;
    text-decoration: underline;
}

/* CONTAINER DE PRODUTO */
.product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    gap: 100px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
}

/* SEÇÃO DA IMAGEM */
.image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 350px;
}

#productImage {
    width: 100%;
    max-width: 550px;
    height: auto;
    transition: opacity 0.4s ease-in-out;
}

/* DETALHES E COMPRA */
.details-section {
    flex: 1;
    max-width: 350px;
    min-width: 300px;
}

#productTitle {
    font-size: 16px;
    letter-spacing: 0.15em;
    margin-bottom: 8px;
    font-weight: 400;
    text-transform: uppercase;
}

#productPrice {
    font-size: 18px;
    margin-bottom: 40px;
    font-weight: 300;
}

/* SELETOR DE CORES */
.color-selector {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
}

.label {
    font-size: 12px;
    letter-spacing: 0.1em;
    color: #666;
}

.swatch {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #e0e0e0;
    transition: all 0.2s ease;
}

.swatch:hover {
    transform: scale(1.1);
}

.swatch.active {
    border: 2px solid #000;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

.black { background-color: #000; }
.white { background-color: #fff; }

/* BOTÃO DE COMPRA */
.buy-btn {
    width: 100%;
    padding: 20px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 13px;
    letter-spacing: 0.2em;
    transition: background-color 0.3s;
}

.buy-btn:hover {
    background-color: #333;
}

.shipping-info {
    font-size: 11px;
    color: #888;
    margin-top: 15px;
    text-align: center;
}
