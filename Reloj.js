//Programa para ver un reloj digital en una ventana emergente

function abrirVentana() {

      //Declaramos todas las propiedades de la ventana
      var propiedades = "width=300, height=200, top=100, left=200, resizable=no, scrollbars=no, location=no";

      //Abrimos la ventana
      miVentana = window.open("reloj.html", "", propiedades);

}


//Creamos una funcion para actualizar la hora

//Creamos las variables fuera para que sean globales
var fecha = new Date();
var hor = fecha.getHours();
var min = fecha.getMinutes();
var seg = fecha.getSeconds();
var contador = 0;

function actualizar() {

      //Mostramos la hora en la ventana
      document.getElementById("horas").innerHTML = hor;
      document.getElementById("minutos").innerHTML = min;
      document.getElementById("segundos").innerHTML = seg;

      //ACTUALIZAMOS LA HORA, MINUTOS Y SEGUNDOS

      //Inicializamos el contador y sumamos 1, después si el contador y los segundos son iguales, sumamos 1 al minuto y reiniciamos el contador

      contador++;
      seg = fecha.getSeconds() + contador;
      if (contador == 60) {
            contador = 0;
            seg = 0;
            min++;
      }
      //Si las horas llegan a 24, se reinician
      if (hor == 24) {
            hor = 0;
      }
      //Si los minutos llegan a 60, se reinician y se aumenta una hora
      if (min == 60) {
            min = 0;
            hor++;
      }
      //Si los segundos llegan a 60, se reinician
      if (seg == 60) {
            seg = 0;
      }

      //Cuando los minutos esten por debajo de 10, se le añade un 0 delante
      if (min < 10) {
            min = parseInt(min);
            min = "0" + min;
      }


      //Cuando los segundos esten por debajo de 10, se le añade un 0 delante
      if (seg < 10) {
            seg = parseInt(seg);
            seg = "0" + seg;
      }

      //Llamamos a setTimeout para que se ejecute cada segundo
      setTimeout(actualizar, 1000);
}




//Funcion para cerrar la ventana
function cerrarVentana() {
      window.close();
}

//Al cargar la web se pone en marcha el reloj
window.onload = actualizar;


