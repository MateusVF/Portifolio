  function configurarOuvintesScroll() {
    const meuElemento1 = document.getElementById("sobre-mim");
    const meuElemento2 = document.getElementById("skills");
    const meuElemento3 = document.getElementById("hobbies");
    const meuElemento4 = document.getElementById("formacao");
    const meuElemento5 = document.getElementById("projetos");
    const meuElemento6 = document.getElementById("contato");


    document.getElementById("evento1").addEventListener("click", scrollParaElemento1);
    document.getElementById("evento2").addEventListener("click", scrollParaElemento2);
    document.getElementById("evento3").addEventListener("click", scrollParaElemento3);
    document.getElementById("evento4").addEventListener("click", scrollParaElemento4);
    document.getElementById("evento5").addEventListener("click", scrollParaElemento5);
    document.getElementById("evento6").addEventListener("click", scrollParaElemento6);
    
    
    function scrollParaElemento1(event) {
      meuElemento1.scrollIntoView({ behavior: "smooth" });
      event.preventDefault();
    }

    function scrollParaElemento2(event) {
      meuElemento2.scrollIntoView({ behavior: "smooth" });
      event.preventDefault();
    }

    function scrollParaElemento3(event) {
      meuElemento3.scrollIntoView({ behavior: "smooth" });
      event.preventDefault();
    }

    function scrollParaElemento4(event) {
      meuElemento4.scrollIntoView({ behavior: "smooth" });
      event.preventDefault();
    }

    function scrollParaElemento5(event) {
      meuElemento5.scrollIntoView({ behavior: "smooth" });
      event.preventDefault();
    }

    function scrollParaElemento6(event) {
      meuElemento6.scrollIntoView({ behavior: "smooth" });
      event.preventDefault();
    }

  }

  // Aguarda o carregamento completo da página e, em seguida, anexa os ouvintes de eventos.
  window.addEventListener("load", configurarOuvintesScroll);

