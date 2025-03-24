function openLinkedIn(event) {
  event.preventDefault(); 
  var linkedInAppUrl = "linkedin://profile/marcos-nicolas-gervacio-28536a198";
  var linkedInWebUrl = "https://www.linkedin.com/in/marcos-nicolas-gervacio-28536a198";

  window.location.href = linkedInAppUrl;

  setTimeout(function() {
      window.location.href = linkedInWebUrl; // Si la app no esta instalada, abre el sitio web
  }, 1500);
}

// implementacion de emailJs. valida que no pueda haber campos vacios. alertas.
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
    event.preventDefault();

    const txtName = document.getElementById('from_name');
    const txtEmail = document.getElementById('email_id');
    const txtAsunto = document.getElementById('asunto');
    const txtMensaje = document.getElementById('mensaje');


    // Validacion de campos vacíos
    if (txtName.value === "" || txtMensaje.value === "" || txtEmail.value === "" || txtAsunto.value === "") {
        let msj= "No puedes dejar campos vacios en el formulario!."
           Toastify({
             text: msj,
             style: {
                 background: "linear-gradient(to right,rgb(250, 162, 162),rgb(255, 0, 0))",
                 color: "white",
                 fontWeight: "bold",
               }
           }).showToast();
        return; 
    }


        btn.value = 'Enviando...';
     
        const serviceID = 'service_fvepeeq';
        const templateID = 'template_ovnlv1r';
     
        emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
           btn.value = 'Enviar';
           txtName.value='';
           txtMensaje.value='';
           txtEmail.value='';
           txtAsunto.value='';
           Toastify({
             text: "Se envio un correo exitosamente!.",
             style: {
                 background: "linear-gradient(to right,rgb(122, 250, 160),rgb(0, 255, 0))",
                 color: "white",
                 fontWeight: "bold",
               }
           }).showToast();
         }, () => {
           btn.value = 'Enviar';
           let msj= "No se pudo enviar el correo, intente nuevamente mas tarde!."
           Toastify({
             text: msj,
             style: {
                 background: "linear-gradient(to right,rgb(250, 162, 162),rgb(255, 0, 0))",
                 color: "white",
                 fontWeight: "bold",
               }
           }).showToast();
         });
});