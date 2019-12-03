if(window.SimpleSlide) {

  new SimpleSlide({
    slide: "quote",
    time: 5000,
    pauseOnHover: true
  });
  
  new SimpleSlide({
    slide: "portfolio",
    nav: true,
    time: 5000,
    pauseOnHover: true
  });

}

if(window.SimpleAnime) {
  new SimpleAnime();
}

if(window.SimpleForm) {

  new SimpleForm({
    form: ".formphp",
    button: "#enviar",
    erro: "<div id='form-erro'>Erro no envio!<h2><p>Ocorrou um erro, tente enviar um email para contato@bikcraft.com</p></div>",
    sucesso: "<div id='form-sucesso'>Formulário enviado com sucesso!<h2><p>Em breve entraremos em contato com você.</p></div>"
  });

}