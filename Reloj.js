//Programa para ver un reloj digital en una ventana emergente

function abrirVentana() {

      //Declaramos todas las propiedades de la ventana
      var propiedades = "width=300, height=200, top=100, left=200, resizable=no, scrollbars=no, location=no";


      //Abrimos la ventana
      miVentana = window.open("reloj.html", "", propiedades);

}

//Funcion para cerrar la ventana
function cerrarVentana() {

      window.close();

}

