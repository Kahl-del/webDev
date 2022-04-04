import jquery = require('jquery');
const $:JQueryStatic = jquery;


let form:any = document.getElementById('formulario');
let nombre:any = document.getElementById('nombreAlumno');
let rut:any = document.getElementById('rutAlumno');
let email: any = document.getElementById('emailAlumno');
let telefono:any = document.getElementById('');
let opinion:any = document.getElementById('');

form.appendChild(nombre);
form.appendChild(rut);
form.appendChild(email);
form.appendChild(telefono);
form.appendChild(opinion);

console.log(form);





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