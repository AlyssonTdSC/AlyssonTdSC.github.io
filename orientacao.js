screen.orientation.lock("landscape").catch(() => {
    console.log("Erro: Não foi possível travar a tela no modo paisagem");
  });