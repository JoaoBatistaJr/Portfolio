const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => nav.classList.toggle('active'));
// eslint-disable-next-line no-unused-vars
function mudaTema() {
  document.body.classList.toggle('dark');
}
