//Programa para ver un reloj digital en una ventana emergente

function abrirVentana() {

      //Declaramos todas las propiedades de la ventana
      var propiedades = "width=300, height=200, top=100, left=200, resizable=no, scrollbars=no, location=no";


      //Abrimos la ventana
      miVentana = window.open("reloj.html", "", propiedades);

      //Ponemos el foco en la ventana
      var fecha = new Date();
      var hor = fecha.getHours();
      var min = fecha.getMinutes();
      var seg = fecha.getSeconds();

      document.getElementById("horas").innerHTML = hor.toLocaleString;
      document.getElementById("minutos").innerHTML = min.toLocaleString;
      document.getElementById("segundos").innerHTML = seg.toLocaleString;


}

//Funcion para cerrar la ventana
function cerrarVentana() {

      window.close();

}


