
    const inversores=[];
    console.log(inversores);

    function inversiones(monto,tiempo){
    if(tiempo<6){
        let interesTotal=monto*tiempo*0.03;
        let gananciaTotal=monto+interesTotal;
        alert("Usted obtendrá al fianlizar el perdiodo un total de: $"+ interesTotal + " en intereses y un total acumulado de: $ "+ gananciaTotal );
        console.log("Intereses : "+interesTotal);
        console.log("Ganancia total : "+gananciaTotal);
    }else if(tiempo>=6){
        let interesTotal=monto*tiempo*0.05;
        let gananciaTotal=monto+interesTotal;
        alert("Usted obtendrá al fianlizar el perdiodo un total de: $"+ interesTotal + " en intereses y un total acumulado de: $ "+ gananciaTotal );
        
    }
    console.log("Intereses : " + interesTotal);
    console.log("Ganancia total : " + gananciaTotal);
    }
    let continuar=true;
while (continuar) {
    class Inversor{
        constructor(nombre,dni,monto,tiempo){
            this.nombre=nombre;
            this.dni=dni;
            this.monto=monto;
            this.tiempo=tiempo;

        }
    }
    let nombre = prompt("Ingrese su nombre:");
    let dni = parseInt(prompt("Ingrese su DNI:"));
    let monto = parseFloat(prompt("Ingrese el monto a invertir:"));
    let tiempo = parseFloat(prompt("Ingrese el tiempo en meses:"));
    const inversor=new Inversor(nombre,dni,monto,tiempo);
    inversores.push(inversor);
    inversiones(monto,tiempo);
    continuar = confirm("Presiona Aceptar para calcular su proxima inversion");
    
}

