function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light") // ele faz o que tem ali em cima

  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto 02")
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto 01")
  }
  
}