const arregloEstudiantes = [
    new Estudiante ("David", "Marquez"),
    new Estudiante ("Yuliana", "Cuevas")
]

function mostrarEstudiante(){
    let texto=""
    for(let item of arregloEstudiantes){
        texto += `<li>${item.nombre} ${item.apellido}</li>`    
    }
    document.getElementById("alumnos").innerHTML = texto


}
function agregarEstudiante(){
    const formulario = document.forms["formulario"]
    const nombre = formulario["nombre"]
    const apellido = formulario["apellido"]
    const nvoEstudiante = new Estudiante(nombre.value,apellido.value)
    arregloEstudiantes.push(nvoEstudiante)
    mostrarEstudiante()

}