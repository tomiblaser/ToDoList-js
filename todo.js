let listatarea=[]
let ultimo = 0

let ObtenerElemento=(titulo) => {
    let tarea={
        id: ultimo,
        titulo:titulo,
        status:false
    }
    if(tarea.titulo!=''){
        listatarea.push(tarea);
        let ul=document.getElementById("lista");
        ul.innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=marcar(id)><h10> ${titulo} </h10></input></li>`
        ultimo++;
    }else{
        alert('Por favor, ingrese algo');
    }
    
}

let marcar = (id) => {
    listatarea[id].estado = true;
    refrescar();
}

refrescar = () =>{
    let lista=document.getElementById('lista')
    lista.innerHTML+=``
    for(i=0; i<idlista+1; i++){
        lista.innerHTML+=`<li><input type="checkbox" id=${listatarea[idlista].id} style="text-decoration: line-through">${listatarea[idlista].titulo}</input></li>`
    }
}