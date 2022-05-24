// Button scrollToTop

// Definir variáveis
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

// Função a utilizar
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Call da função scrollToTop on click
scrollToTopBtn.addEventListener("click", scrollToTop);