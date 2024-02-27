
let estudiantes  = [];

const inputNombre = document.getElementById('inputnombre');
const inputApellido = document.getElementById('inputapellido');
const inputMatricula = document.getElementById('inputmatricula');
const inputCurso = document.getElementById('inputcurso');
const inputNota = document.getElementById('inputnota');
const botonAgregar = document.getElementById('agregar');
const botonEditar = document.getElementById('editar');
const botonEliminar = document.getElementById('borrar');
const tablaDatos = document.getElementById('datos');

// boton editar
tablaDatos.addEventListener('click', (e) => {
    if(e.target.value === 'Editar') {
        const posicion = e.target.parentNode.parentNode.rowIndex - 1;
        const estudiante = estudiantes[posicion];      
        subirEstudiantesInput(estudiante);
        const fila = e.target.closest('tr');
        fila.remove();
        const matricula = e.target.parentNode.parentNode.rowIndex - 1;
    console.log(`el indice es ${matricula}`)
       estudiantes.splice(matricula, 1);
}
});

// boton borrar
tablaDatos.addEventListener('click', (e) => {
    if(e.target.value === 'Eliminar') {
        const fila = e.target.closest('tr');
        fila.remove();
        const matricula = e.target.parentNode.parentNode.rowIndex - 1;
       estudiantes.splice(matricula, 1);
    } 
})

// boton agregar
botonAgregar.addEventListener('click', (e) => {
    e.preventDefault();
        if (inputNombre.value === '' || inputApellido.value === '' || inputMatricula.value === '' || inputCurso.value === '' || inputCurso.value === '') {
            alert('Por favor, agregue valores');
        } else {
                                    mostrarEstudiantesTabla();
                                    limpiar();
        }
}
);

function limpiar() {
   inputNombre.value = '';
   inputApellido.value = '';
   inputMatricula.value = '';
   inputCurso.value = '';
   inputNota.value = '';
}

function mostrarEstudiantesTabla() {
    let estudiante = {};

        estudiante.nombre = inputNombre.value;
        estudiante.apellido = inputApellido.value;
        estudiante.matricula = inputMatricula.value;
        estudiante.curso = inputCurso.value;
        estudiante.nota = inputNota.value;
        estudiantes.push(estudiante);


        tablaDatos.innerHTML += `<tr>
                                            <td>${estudiante.nombre}</td>
                                            <td>${estudiante.apellido}</td>
                                            <td>${estudiante.matricula}</td>
                                            <td>${estudiante.curso}</td>
                                            <td>${(estudiante.nota)}</td>
                                            <td><input id="editar" type="button" value="Editar">
                                                <input id="borrar" type="button" value="Eliminar"></td>
                                     </tr>`

        }
        
        function subirEstudiantesInput(estudiante) {
            inputNombre.value = estudiante.nombre;
            inputApellido.value = estudiante.apellido;
            inputMatricula.value = estudiante.matricula;
            inputCurso.value = estudiante.curso;
            inputNota.value = estudiante.nota;

}
        console.log(estudiantes);