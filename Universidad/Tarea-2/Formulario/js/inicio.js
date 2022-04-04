define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    var form = document.getElementById('formulario');
    var nombre = document.getElementById('nombreAlumno');
    var rut = document.getElementById('rutAlumno');
    var email = document.getElementById('emailAlumno');
    var telefono = document.getElementById('');
    var opinion = document.getElementById('');
    form.appendChild(nombre);
    form.appendChild(rut);
    form.appendChild(email);
    form.appendChild(telefono);
    form.appendChild(opinion);
    console.log(form);
});
/*
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    console.log(forms);
    /*
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })*/
//  })()
