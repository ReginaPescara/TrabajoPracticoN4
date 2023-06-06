// Función para verificar si un valor es un entero de 4 dígitos
function esEnteroDeCuatroDigitos(valor) {
    return /^\d{4}$/.test(valor);
  }
  
  // Función para encriptar los datos
  function encriptar(event) {
    event.preventDefault();
    
    const form = event.target;
    const numeroOriginal = form.numeroOriginal.value;
  
    // Verificar si el número original es válido
    if (!esEnteroDeCuatroDigitos(numeroOriginal)) {
      mostrarError("El valor ingresado no es un entero de cuatro dígitos.");
      return;
    }
  
    let encriptado = '';
  
    for (let i = 0; i < 4; i++) {
      let digito = parseInt(numeroOriginal[i]);
      let residuo = (digito + 7) % 10;
      encriptado += residuo.toString();
    }
  
    // Intercambiar dígitos
    let temp = encriptado[0];
    encriptado = encriptado.substr(2, 1) + encriptado.substr(1, 1) + encriptado.substr(3, 1) + temp;
  
    // Mostrar el resultado en la página
    const resultadoEncriptado = document.getElementById('resultadoEncriptado');
    resultadoEncriptado.textContent = 'Número encriptado: ' + encriptado;
  
    form.reset();
  }
  
  // Función para desencriptar los datos
  function desencriptar(event) {
    event.preventDefault();
    
    const form = event.target;
    let numeroEncriptado = form.numeroEncriptado.value;
  
    // Verificar si el número encriptado es válido
    if (!esEnteroDeCuatroDigitos(numeroEncriptado)) {
      mostrarError("El valor ingresado no es un entero de cuatro dígitos.");
      return;
    }
  
    // Intercambiar dígitos
    let temp = numeroEncriptado[0];
    numeroEncriptado = numeroEncriptado[3] + numeroEncriptado[2] + numeroEncriptado[1] + temp;

  
    let original = '';
  
    for (let i = 0; i < 4; i++) {
      let digito = parseInt(numeroEncriptado[i]);
      let residuo = (digito - 7 + 10) % 10;
      original += residuo.toString();
    }
  
    // Mostrar el resultado en la página
    const resultadoDesencriptado = document.getElementById('resultadoDesencriptado');
    resultadoDesencriptado.textContent = 'Número original: ' + original;
  
    form.reset();
  }
  
  // Función para mostrar un mensaje de error en la página
  function mostrarError(mensaje) {
    const errorElement = document.createElement('p');
    errorElement.style.color = 'red';
    errorElement.textContent = mensaje;
    document.body.appendChild(errorElement);
    setTimeout(() => {
      document.body.removeChild(errorElement);
    }, 3000);
  }
  
  // Obtener los formularios y asociar eventos de envío
  const encriptarForm = document.getElementById('encriptarForm');
  encriptarForm.addEventListener('submit', encriptar);
  
  const desencriptarForm = document.getElementById('desencriptarForm');
  desencriptarForm.addEventListener('submit', desencriptar);