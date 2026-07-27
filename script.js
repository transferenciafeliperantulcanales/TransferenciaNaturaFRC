function copiarDatos() {
  // Extrae únicamente los valores importantes sin títulos ni etiquetas
  const titular = document.querySelectorAll('.valor')[0].innerText;
  const rut = document.querySelectorAll('.valor')[1].innerText;
  const banco = document.querySelectorAll('.valor')[2].innerText;
  const tipoCuenta = document.querySelectorAll('.valor')[3].innerText;
  const nroCuenta = document.querySelectorAll('.valor')[4].innerText;
  const correo = document.querySelectorAll('.valor')[5].innerText;

  // Estructura limpia que se copiará al portapapeles
  const textoACopiar = 
`${titular}
${rut}
${banco}
${tipoCuenta}
${nroCuenta}
${correo}`;

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
