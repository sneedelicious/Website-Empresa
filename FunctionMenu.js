function toggleMenu() {
    // 1. Localiza o menu pelo ID 
    let menu = document.getElementById("menuItens");

    // 2. Verifica se está escondido (none) ou visível (flex)
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  // Mostra o menu
    } else {
        menu.style.display = "none";  // Esconde o menu
    }
}