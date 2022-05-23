let listatarea=[]
let idlista = 1
let ObtenerElemento = (tareaLista) =>{
    let tarea=(document.getElementById(tareaLista).value)
    listatarea.push(tarea)
    let lista=document.getElementById('lista')
    if(tarea!==''){
        lista.innerHTML+=`<li><input type="checkbox" id=${idlista}>${tarea}</input></li>`
        idlista++
    }else{
        alert("Por favor, ingrese algo.")
    }
}
let estaok = (idlista) =>{
    for(idlista=1; idlista++)
    {
        if( $('#idlista').is(':checked') ) {
            alert('checkbox1 esta Seleccionado');
        }
    }

}