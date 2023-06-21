let boton = document.getElementById ("miBoton");

const miBoton = document.getElementById('miBoton');

boton.addEventListener ("click", function handClick () {
  alert ('¡Hola! Has hecho click en el boton')}) 

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
            document.querySelector(".nav-links").
                  classList.toggle("nav-links-responsive")})

                  function validateEmail(email) {
                    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
                    return regex.test(email)
                  }
                  const form = document.getElementById('myForm');
                  form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    validateForm();
                    });

                  function validateForm() {
                    const emailInput = document.getElementById('email');
                    const email = emailInput.value;
                    if (!validateEmail(email)) {
                      alert('Por favor ingrese un correo electrónico válido.');
                    } else {
                      alert('Correo electrónico enviado correctamente.');
                    }
                  }

    

                  
      

             


                      
                      
