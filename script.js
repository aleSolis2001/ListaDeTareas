
function añadirTarea() {
    const inputTarea = document.getElementById('tarea-input');
    const fecha = document.getElementById('tarea-fecha');
    const lista = document.getElementById('lista-tareas');
  
    if (inputTarea.value.trim() !== '' && fecha.value.trim() !== '') {
      const tarea = document.createElement('li');
      tarea.className = 'tarea';
  
      const divTarea = document.createElement('div');
      divTarea.className = 'div-tarea';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const tareaTexto = document.createElement('span');
      tareaTexto.classList.add("tarea-texto")
      
      tareaTexto.textContent = inputTarea.value;
  
      const tareaFecha = document.createElement('span');
      const date = new Date(fecha.value);
      tareaFecha.classList.add("span")
      tareaFecha.textContent = date.toLocaleDateString();
  
      const hora = document.createElement('span');
      hora.classList.add("span")
      const options = { hour: 'numeric', minute: 'numeric' };
      hora.textContent = date.toLocaleTimeString([], options);

  
      const eliminar = document.createElement('button');
      eliminar.textContent = 'Eliminar';
      eliminar.onclick = function () {
        lista.removeChild(tarea);
      };
  
      divTarea.appendChild(checkbox);
      divTarea.appendChild(tareaTexto);
      divTarea.appendChild(tareaFecha);
      divTarea.appendChild(hora);
      divTarea.appendChild(eliminar);
  
      tarea.appendChild(divTarea);
      lista.appendChild(tarea);
  
      inputTarea.value = '';
      fecha.value = '';
      guardarEnLocalStorage()
      
    }
  }
  function guardarEnLocalStorage() {
    const lista = document.getElementById('lista-tareas');
    localStorage.setItem('tareas', lista.innerHTML);
  }
  window.onload = function(){
    console.log(localStorage)
    const lista = document.getElementById('lista-tareas');
    lista.innerHTML = localStorage.getItem('tareas') || '';


    const botonesEliminar = document.querySelectorAll('.tarea button');
    botonesEliminar.forEach(button => {
      button.onclick = function () {
        const tarea = button.closest('li');
        lista.removeChild(tarea);
        guardarEnLocalStorage();
    };
  });
}