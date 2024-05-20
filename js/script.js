let monto=parseFloat(prompt("Ingrese monto a invertir: "));
let tiempo=parseFloat(prompt("Ingrese los meses que invertira su dinero(teniendo en cuenta que hasta 6 meses el interes mensual es del 3%, luego aumenta al 5%):"));
function inveriones(){
if(tiempo<6){
    let interesTotal=monto*tiempo*0.03;
    let gananciaTotal=monto+interesTotal;
    alert("Usted obtendrá al fianlizar el perdiodo un total de: $"+ interesTotal + " en intereses, obetiendo un total de: $ "+ gananciaTotal );
    console.log("Intereses : "+interesTotal);
    console.log("Ganancia total : "+gananciaTotal);
}else if(tiempo>=6){
    let interesTotal=monto*tiempo*0.05;
    let gananciaTotal=monto+interesTotal;
    alert("Usted obtendrá al fianlizar el perdiodo un total de: $"+ interesTotal + " en intereses, obetiendo un total de: $ "+ gananciaTotal );
    console.log("Intereses : "+interesTotal);
    console.log("Ganancia total : "+gananciaTotal);
}
}
inveriones();