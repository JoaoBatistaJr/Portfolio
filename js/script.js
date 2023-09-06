/** Toggle hamburguer menu */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav-list");

// Função para fechar o menu mobile
function closeMobileMenu() {
  nav.classList.remove("active");
}

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Adicione um ouvinte de evento de clique a cada item de menu
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    closeMobileMenu(); // Fecha o menu mobile ao clicar em um item de menu
  });
});

function mudaTema() {
  const body = document.body;
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");

  // Salve o estado do modo escuro no localStorage
  localStorage.setItem("darkMode", isDarkMode);
}

// Verifique o estado do modo escuro no localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark");
  }
});



/** Accordion - Formação */
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item, index) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const tagsHeader = item.querySelector(".tags-formacao-header");
  const icon = item.querySelector(".icon");

  if (index === 0) {
    // Deixa o primeiro item aberto por padrão
    content.style.display = "block";
    tagsHeader.style.display = "none";
    icon.classList.add("active", "open");
  } else {
    content.style.display = "none";
    tagsHeader.style.display = "block";
    icon.classList.remove("active", "open");
  }

  header.addEventListener("click", () => {
    if (content.style.display === "block") {
      content.style.display = "none";
      tagsHeader.style.display = "block";
      icon.classList.remove("open");
      icon.classList.add("close");
    } else {
      // Fecha todos os itens antes de abrir o item atual
      accordionItems.forEach((otherItem, otherIndex) => {
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherTagsHeader = otherItem.querySelector(
          ".tags-formacao-header"
        );
        const otherIcon = otherItem.querySelector(".icon");

        if (otherContent !== content) {
          otherContent.style.display = "none";
          otherTagsHeader.style.display = "block";
          otherIcon.classList.remove("open");
          otherIcon.classList.add("close");
        } else if (otherIndex === index) {
          otherContent.style.display = "block";
          otherTagsHeader.style.display = "none";
          otherIcon.classList.remove("close");
          otherIcon.classList.add("open");
        }
      });
    }
  });
});

if (window.SimpleAnime) {
  new SimpleAnime();
}
