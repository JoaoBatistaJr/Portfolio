if (window.SimpleSlide) {
  // eslint-disable-next-line no-new, no-undef
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    // eslint-disable-next-line no-tabs, no-mixed-spaces-and-tabs
    time: 5000, // tempo de transição dos slides
  });

  // eslint-disable-next-line no-new, no-undef
  new SimpleSlide({
    slide: 'anuncios',
    // eslint-disable-next-line no-tabs, no-mixed-spaces-and-tabs
    time: 10000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  // eslint-disable-next-line no-new, no-undef
  new SimpleAnime();
}

if (window.SimpleForm) {
  // eslint-disable-next-line no-new, no-undef
  new SimpleForm({
    form: '.formphp', // seletor do formulário
    button: '#enviar', // seletor do botão
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}

// Get the modal
const modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById('myImg');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
// eslint-disable-next-line func-names
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
// eslint-disable-next-line func-names
span.onclick = function () {
  modal.style.display = 'none';
};
