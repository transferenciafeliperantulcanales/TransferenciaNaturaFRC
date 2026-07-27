function copiarDatos() {
  // Recopila los valores directamente de las tarjetas de la página
  const titular = document.querySelectorAll('.valor')[0].innerText;
  const rut = document.querySelectorAll('.valor')[1].innerText;
  const banco = document.querySelectorAll('.valor')[2].innerText;
  const tipoCuenta = document.querySelectorAll('.valor')[3].innerText;
  const nroCuenta = document.querySelectorAll('.valor')[4].innerText;
  const correo = document.querySelectorAll('.valor')[5].innerText;

  // Formato limpio de texto para transferencias
  const textoACopiar = 
`Titular: ${titular}
RUT: ${rut}
Banco: ${banco}
Tipo de Cuenta: ${tipoCuenta}
Número de Cuenta: ${nroCuenta}
Correo: ${correo}`;

  // Copia al portapapeles
  navigator.clipboard.writeText(textoACopiar).then(() => {
    mostrarMensaje();
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}

function mostrarMensaje() {
  const mensaje = document.getElementById('mensaje-flotante');
  mensaje.style.display = 'block';
  
  setTimeout(() => {
    mensaje.style.display = 'none';
  }, 2000);
}
