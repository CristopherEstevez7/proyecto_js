
    document.addEventListener('DOMContentLoaded',function(){
    const inputNombre=document.getElementById('nombre');
    const inputDni=document.getElementById('dni');
    const inputMonto=document.getElementById('monto');
    const inputTiempo=document.getElementById('tiempo');
    const Btn = document.getElementById('Btn');
    const apiResultDiv = document.getElementById('apiResult');


    const arrayInversores = localStorage.getItem('inversores');
    const inversores = arrayInversores ? JSON.parse(arrayInversores) : [];
    

    function inversiones(monto, tiempo) {
        let interesTotal, gananciaTotal;

        if (tiempo < 6) {
            interesTotal = monto * tiempo * 0.03;
        } else {
            interesTotal = monto * tiempo * 0.05;
        }
        gananciaTotal = monto + interesTotal;
        return {
            interesTotal: interesTotal,
            gananciaTotal: gananciaTotal
        };
    }
    
    class Inversor{
        constructor(nombre,dni,monto,tiempo){
            this.nombre=nombre;
            this.dni=dni;
            this.monto=monto;
            this.tiempo=tiempo;

        }
    }
    
    
    Btn.addEventListener('click', function() {
        let nombre = inputNombre.value;
        let dni = inputDni.value;
        let monto = parseFloat(inputMonto.value);
        let tiempo = parseFloat(inputTiempo.value);

        if (nombre && dni && !isNaN(monto) && !isNaN(tiempo)) {
            const inversor = new Inversor(nombre, dni, monto, tiempo);
            inversores.push(inversor);
            localStorage.setItem('inversores', JSON.stringify(inversores));
            
            const resultado = inversiones(monto, tiempo);

            Swal.fire({
                title: 'Su Inversión',
                text: `Usted obtendrá al finalizar el periodo un total de: $${resultado.interesTotal} en intereses y un total acumulado de: $${resultado.gananciaTotal}`,
                icon: 'info'
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, complete todos los campos correctamente.',
                icon: 'error'
            });
        }
        }) 
    })
