// Button scrollToTop

// Definir variáveis
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

// Função a utilizar
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
  });
}

// Call da função scrollToTop on click
scrollToTopBtn.addEventListener("click", scrollToTop);
