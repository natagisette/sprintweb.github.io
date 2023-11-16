const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector ('.hamburger')

/*console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)*/

imagenes.forEach(imagen =>{
     imagen.addEventListener('click',()=>{
        aparecerImagen (imagen.getAttribute('src'))
     })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.computedStyleMap.opacity = '0'

}


window.addEventListener('click', (event) => {
    if (menu.classList.contains('spread') && event.target != menu && event.target != hamburguer) {
      menu.classList.toggle('spread');
    }
  });
  