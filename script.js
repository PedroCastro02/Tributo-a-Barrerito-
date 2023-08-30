// Função para rolar suavemente até a seção alvo
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
}

// Adicionar um ouvinte de evento para cada link do cabeçalho
document.addEventListener("DOMContentLoaded", function () {
    const headerLinks = document.querySelectorAll("header a[href^='#']");
    headerLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute("href");
            scrollToSection(targetSectionId);
        });
    });
});