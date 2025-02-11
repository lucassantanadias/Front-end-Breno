// Exibir o botão de CTA após 5 segundos
setTimeout(function(){
    document.getElementById("cta-button").style.display = "inline-block";
    document.getElementById("cta-button").classList.add("show");
}, 5000); // 5 segundos

// Exibir o contêiner de features após 7 segundos (5 + 2)
setTimeout(function(){
    document.getElementById("feature").style.display = "flex";
    document.getElementById("feature").classList.add("show");
}, 7000); // 7 segundos