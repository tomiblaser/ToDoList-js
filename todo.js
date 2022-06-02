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
        ul.innerHTML+=`<li><input type="checkbox" id="${ultimo}" onclick=marcar(id)><h6 class=${clase}> ${titulo} </h6></input></li>`
        ultimo++;
        console.log(tarea, ultimo)
        document.getElementById('tareaa').value='';
    }else{
        alert('Por favor, ingrese algo');
    }
    
}

let marcar = (id) => {
    listatarea[id].status = !listatarea[id].status;
    document.getElementById("lista").innerHTML="";
    
        for(let i=0; i<ultimo; i++)
        {
            console.log(listatarea[i], ultimo )
            if(listatarea[i].status===true){
                document.getElementById("lista").innerHTML+=`<input type="checkbox" id="${i}" onclick=marcar(id)><h6 style="text-decoration: line-through;"> ${listatarea[i].titulo} </h6></input>`
            }else{
                document.getElementById("lista").innerHTML+=`<input type="checkbox" id="${i}" onclick=marcar(id)><h6> ${listatarea[i].titulo} </h6></input>`
            }
        }
}