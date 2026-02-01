let hayiraBasildiMi = false;

function handleNo() {
    const noButton = document.getElementById("no-button");
    const questionText = document.getElementById("question");
    const displayImg = document.getElementById("display-image");

    if (!hayiraBasildiMi) {
        hayiraBasildiMi = true;
        questionText.innerText = "Tekrar düşünmek ister misin aşkımm? 🥺";
        // Direkt dosya adı
        displayImg.src = "fotohayir1.png"; 
    } else {
        noButton.style.position = "absolute";
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    }
}

function handleYes() {
    const displayImg = document.getElementById("display-image");
    const questionText = document.getElementById("question");
    const msgText = document.getElementById("message-text");
    const buttons = document.querySelector(".buttons");

    if (buttons) buttons.style.display = "none"; 
    // Direkt dosya adı
    displayImg.src = "fotokutlama.png"; 

    if (hayiraBasildiMi) {
        questionText.innerText = "Hic tereddüt etmeyeceğini biliyordum!";
        msgText.innerText = "Sana çok aşığım aşkımmm! ❤️";
    } else {
        questionText.innerText = "Seni çok seviyorummm bebeğimmm!";
        msgText.innerText = "Sana ben çok aşığım... ❤️";
    }
}
