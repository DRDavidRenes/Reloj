//Programa para ver un reloj digital en una ventana emergente

let abrirVentana = () => {

      //Declaramos todas las propiedades de la ventana
      let propiedades = "width=300, height=200, top=100, left=200, resizable=no, scrollbars=no, location=no";

      //Abrimos la ventana
      miVentana = window.open("reloj.html", "", propiedades);

}


//Creamos una funcion para actualizar la hora

//Creamos las variables fuera para que sean globales
let fecha = new Date();
let hor = fecha.getHours();
let min = fecha.getMinutes();
let seg = fecha.getSeconds();
let contador = 0;

let actualizar = () => {

      //Mostramos la hora en la ventana
      document.getElementById("horas").innerHTML = hor;
      document.getElementById("minutos").innerHTML = min;
      document.getElementById("segundos").innerHTML = seg;

      //ACTUALIZAMOS LA HORA, MINUTOS Y SEGUNDOS

      // Inicializamos el contador = a seg,(que son los segundos reales) luego contador vamos sumando 1     
      // y volvemos a igualar los seg a contador para cuando actualiza cada segundo sea con la hora actual
      // luego cuando el contador llega a 60, se reinicia a 0 y se suma 1 a los minutos
      // y asi sucesivamente hasta llegar a las 24 horas

      contador = seg;
      contador++;
      seg = contador;
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
let cerrarVentana = () => {
      window.close();
}

//Al cargar la web se pone en marcha el reloj
window.onload = actualizar;


