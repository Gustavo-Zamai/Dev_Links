function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  const img = document.querySelector('#profile img');
  
  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Imagem ilustrativa de homem usando óculos de sol');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute(
      "alt",
      "Foto de Gustavo Zamai sorrindo, usando camisa de moletom cinza, fundo restaurante."
    )
  }

}