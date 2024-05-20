
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
        console.log("Intereses : "+interesTotal);
        console.log("Ganancia total : "+gananciaTotal);
        
    }
    }
    let continuar=true;
while (continuar) {
    let monto = parseFloat(prompt("Ingrese monto a invertir: "));
    let tiempo = parseFloat(prompt("Ingrese los meses que invertirá su dinero (teniendo en cuenta que hasta 6 meses el interés mensual es del 3%, luego aumenta al 5%):"));
    inversiones(monto,tiempo);
    continuar = confirm("Presiona Aceptar para calcular su proxima inversion");
}