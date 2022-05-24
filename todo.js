let listatarea=[]
let idlista = 0
let ObtenerElemento = (tareaLista) =>{
    let label=(document.getElementById(tareaLista).value)
    if(label!==''){
        let tareaClass= new Tarea(label, idlista)
        listatarea.push(tareaClass)
        listarTareas(listatarea)
        idlista++
    }else{
        alert("Por favor, ingrese algo.");
    }
}

let listarTareas = (listatarea) =>{

    let lista=document.getElementById('lista')
    lista.innerHTML = " "
    listatarea.map(tarea=>lista.innerHTML+=`<li><input type="checkbox" class="${tarea.completado && "tachado"}" onChange="buscarYMarcar(${tarea.id})" id=${tarea.id}></input><p>${tarea.label}</p></li>`)
}

class Tarea {
    constructor(label, id){
        this.label=label,
        this.completado=false,
        this.id=id
    }
    marcarCompletado(){
        this.completado= !this.completado
        listarTareas()
    }
}

let buscarYMarcar = (idPasado) => {
    const tareaMarcar = listatarea.find(tarea => tarea.id === idPasado)
    tareaMarcar.completado = true
    listarTareas(listatarea)
}
