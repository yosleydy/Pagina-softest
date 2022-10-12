    /**********redirecionar al home*********/
    let protocol = location;
    document.getElementById("pagina").value = protocol;



   /*******************envío de email contactanos************************/
  $("#formularioContactanos").on("submit", function(e){
      e.preventDefault();

      const newalert2 = document.querySelector("#newalert2")
      const newalert = document.querySelector("#newalert")

   axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.post('https://formsubmit.co/ajax/64e174f1ce680bc723b040054a76b946', {
         nombre: document.getElementById("nombre").value,
         email: document.getElementById("email").value,
         asunto: document.getElementById("subject").value,
         Comentario: document.getElementById("comentario").value
      })
    .then(response => {
        newalert.classList.remove("ocultos");
        newalert.classList.add("mostrar");
        newalert2.classList.add("ocultos");
        setTimeout(function() {
            $("#newalert").fadeOut(1500);
        },3000);
        limpiarContactanos()
    })
    .catch(error => {
        newalert2.classList.remove("ocultos");
        newalert2.classList.add("mostrar");
        newalert.classList.add("ocultos");
        setTimeout(function() {
            $("#newalert2").fadeOut(1500);
        },3000);
        limpiarContactanos()
    });
});

  function limpiarContactanos(){
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("comentario").value = "";
  }


    /*******************envío de email capacitaciones************************/
    $("#formularioCapacitaciones").on("submit", function(e){
      e.preventDefault();
      const newalert2capacitacion = document.querySelector("#newalert2capacitacion")
      const newalertcapacitacion = document.querySelector("#newalertcapacitacion")


      var select = document.getElementById('selecccion');
      var selectedOption = select.options[select.selectedIndex];

    axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.post('https://formsubmit.co/ajax/fc30d3c50af7bfbd679f4d0d02ed931b', {
         nombre: document.getElementById("nombre").value,
         apellidos: document.getElementById("apellidos").value,
         email: document.getElementById("email").value,
          curso:selectedOption.text,
         comentario: document.getElementById("comentario").value
      })
    .then(response => {
        newalertcapacitacion.classList.remove("ocultos");
        newalertcapacitacion.classList.add("mostrar");
        newalert2capacitacion.classList.add("ocultos");
        setTimeout(function() {
            $("#newalertcapacitacion").fadeOut(1500);
        },3000);
        limpiarCapacitaciones()
    })
    .catch(error => {
        newalert2capacitacion.classList.remove("ocultos");
        newalert2capacitacion.classList.add("mostrar");
        newalertcapacitacion.classList.add("ocultos");
        setTimeout(function() {
            $("#newalert2capacitacion").fadeOut(1500);
        },3000);
        limpiarCapacitaciones()
    });
  });


  function limpiarCapacitaciones(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comentario").value = "";
  }