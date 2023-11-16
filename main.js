//document.querySelector("a").addEventListener("click", (event) => {
       // event.preventDefault();
       // alert("Has hecho clic en el enlace");
    //});
    const hamburguer = document.querySelector (".hamburger")
    const menu = document.querySelector (".menu-navegacion")

    console.log(menu)
    console.log(hamburguer)

    hamburguer.addEventListener('click',()=>{
      console.log("seleccionado")
      //  menu.classList.toggle("spread")
    }
    )
   
    


   // btn1.addEventListener("click", function(){
   //     menu.classList.toggle("activo");
   // }
   // )

   // window.addEventListener('click',0=>{
       // if(menu.classList.contains('spread')
       //   && e.target != menu  && e.target != hamburguer ){

       //     menu.classList.toggle("spread")
  //  }
  //  }) 
 









    /*document.addEventListener("DOMContentLoaded", function () {
        const hamburguer = document.querySelector(".hamburguer");
        const menuNavegacion = document.querySelector(".menu-navegacion");
      
        hamburguer.addEventListener("click", function () {
          menuNavegacion.classList.toggle("spread");
        });
      
        window.addEventListener("click", function (e) {
          if (
            menuNavegacion.classList.contains("spread") &&
            e.target !== menuNavegacion &&
            e.target !== hamburguer
          ) {
            menuNavegacion.classList.toggle("spread");
          }
        });
      });*/
      
