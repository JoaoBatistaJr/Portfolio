/** Toggle hamburguer menu */
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

/** Class Active para o tema dark */
burger.addEventListener('click', () => nav.classList.toggle('active'));
function mudaTema() {
  document.body.classList.toggle('dark');
}

/** Accordion - Formação */
const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        // Fecha todos os itens antes de abrir o item atual
        accordionItems.forEach(otherItem => {
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherContent !== content) {
            otherContent.style.display = 'none';
          }
        });
        
        content.style.display = 'block';
      }
    });
  });