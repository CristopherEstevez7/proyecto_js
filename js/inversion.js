const listaInversiones=document.getElementById("listado");

fetch("./js/inversiones.json")
    .then(response=>response.json())
    .then(data=> {
        data.forEach(element => {
            const li=document.createElement("li");
            li.innerHTML=`
                            <h3>${element.nombreInversion}</h3>
                            <h4>${element.plazo}</h4>
                            <p>${element.interes}</p>
                            <p>${element.descripcion}</p>
                            <br>
                            `
listaInversiones.appendChild(li); 
        });
    })