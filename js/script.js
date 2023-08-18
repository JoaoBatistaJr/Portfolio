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
    content.classList.toggle('active');

    if (content.classList.contains('active')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
