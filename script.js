let hayiraBasildiMi = false;

function handleNo() {
    const noButton = document.getElementById("no-button");
    const questionText = document.getElementById("question");
    const displayImg = document.getElementById("display-image");

    if (!hayiraBasildiMi) {
        // İlk "yoo" diyince
        hayiraBasildiMi = true;
        questionText.innerText = "Tekrar düşünmek ister misin aşkımm? 🥺";
        // .png uzantısına dikkat!
        displayImg.src = "images/fotohayir1.png"; 
    } else {
        // İkinci "yoo"da kaçış başlar
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

    buttons.style.display = "none"; 
    // .png uzantısına dikkat!
    displayImg.src = "images/fotokutlama.png"; 

    if (hayiraBasildiMi) {
        questionText.innerText = "Hic tereddüt etmeyeceğini biliyordum!";
        msgText.innerText = "Sana çok aşığım aşkımmm! ❤️";
    } else {
        questionText.innerText = "Seni çok seviyorummm bebeğimmm!";
        msgText.innerText = "Sana ben çok aşığım... ❤️";
    }
}
