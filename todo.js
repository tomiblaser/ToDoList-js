let listatarea=[]
let ultimo = 0
let titulo = '--'
let clase = ''



let ObtenerElemento=(titulo) => {
    
    let tarea={
        id: ultimo,
        titulo:titulo,
        status:false
    }

    if(tarea.titulo!=''){
        listatarea.push(tarea);
        let ul=document.getElementById("lista");
        ul.innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=marcar(id)><h10 class=${clase}> ${titulo} </h10></input></li>`
        console.log(tarea)
        ultimo++;
    }else{
        alert('Por favor, ingrese algo');
    }
    
}

let marcar = (id) => {
    listatarea[id].status = true;
    
    if(listatarea[id].status === true)
    {
        clase='tachado'
        for(i=0; i<=ultimo; i++)
        {
            if(listatarea.[id].status===true){

                ul.innerHTML=`<input type="checkbox" id="${id}"><h10 class=${clase}> ${listatarea[id].titulo} </h10></input>`
                console.log(tarea)
            }
        }
    }
}