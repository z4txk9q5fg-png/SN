function showMessage(response) {
  let videoPlayed = false;
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Butonun pozisyonunu serbest bırak (kaçabilmesi için)
    noButton.style.position = "absolute";

    // Resmi değiştir (Silahlı kedi falan varsa klasörde)
    // Eğer images klasöründe gun.gif yoksa burası çalışmaz, istersen link koyabilirsin.
    const imageElement = document.getElementsByClassName("image")[0];
    if(imageElement) imageElement.src = "images/gun.gif"; 

    // Rastgele koordinat belirle
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Butonu yeni yere ışınla
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Yazıyı güncelle ve ismi gizle
    document.getElementById("question").textContent = "Akıllı ol :)";
    document.getElementById("name").style.display = "none";

    // "Hayır" butonunun üzerine gelince kaçma olayı
    noButton.addEventListener("mouseover", () => {
      if (!videoPlayed) {
        const videoElement = document.createElement("video");
        // Senin resimdeki dosya ismin:
        videoElement.src = "./Maroon 5 - Sugar.mp4#t=42"; 
        videoElement.autoplay = true;
        videoElement.controls = false;
        document.body.appendChild(videoElement);
        videoElement.style.position = "fixed";
        videoElement.style.top = "40%";
        videoElement.style.left = "50%";
        videoElement.style.transform = "translate(-50%, -50%)";
        videoElement.style.width = "700px"
        document.body.appendChild(videoElement);
        
        videoPlayed = true;
      }

      // Her üzerine gelindiğinde tekrar kaçsın
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });
  }

  if (response === "Yes") {
    // İsim yazısını ve Hayır butonunu kaldır
    const nameElement = document.getElementById("name");
    if(nameElement) nameElement.remove();
    
    const noButtonElement = document.getElementById("no-button");
    if(noButtonElement) noButtonElement.remove();

    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.pause();
      videoElement.remove();
    }

    // Müzik çalma kısmı (Senin resimdeki dosya uzantın mp4 görünüyor)
    const audio = new Audio('./Minions Cheering.mp4'); 
    audio.play().catch(e => console.log("Otomatik oynatma engellendi, kullanıcı etkileşimi lazım."));

    // Mesajı güncelle, resmi değiştir
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "14 Şubat'ta görüşürüz prensesim! ❤️";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    
    const imageElement = document.getElementsByClassName("image")[0];
    if(imageElement) imageElement.src = "images/dance.gif";

    // Evet butonunu da kaldır
    const yesButtonElement = document.getElementById("yesButton");
    if(yesButtonElement) yesButtonElement.remove();
  }
}
