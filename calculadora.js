document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calcular);

    function calcular() {
        const edad = parseInt(document.getElementById("age").value);

        // Verifica que la edad esté dentro del rango permitido (1-80 años)
        if (edad < 1 || edad > 80) {
            alert("La edad debe estar entre 1 y 80 años.");
            return;
        }

        const salario = parseInt(document.getElementById("salary").value) || 0;
        const mesadaFamiliar = parseInt(document.getElementById("family").value) || 0;
        const herenciaFamiliar = parseInt(document.getElementById("inheritance").value) || 0;
        const gobierno = parseInt(document.getElementById("government").value) || 0;
        const pareja = parseInt(document.getElementById("partner").value) || 0;
        const gastosHijos = parseInt(document.getElementById("children").value) || 0;
        const regalosRecibidos = parseInt(document.getElementById("gifts").value) || 0;
        const deudas = parseInt(document.getElementById("debts").value) || 0;

        // Función recursiva para calcular los ingresos en cada etapa
        function calcularIngresos(edad) {
            if (edad === 0) {
                return 0;
            }
            let ingresos = 0;
            if (edad >= 18 && edad <= 52) {
                ingresos += salario;
            }
            if (edad >= 1 && edad <= 24) {
                ingresos += mesadaFamiliar;
            }
            if (edad >= 52 && edad <= 80) {
                ingresos += gobierno;
            }
            if (edad >= 24) {
                ingresos -= deudas;
            }
        
            return ingresos + calcularIngresos(edad - 1);
        }        

        // Calcula el resultado
        const dinero = calcularIngresos(edad) + herenciaFamiliar - pareja - gastosHijos + regalosRecibidos;

        // Mostrar los ingresos netos en el elemento 'result'
        const elementoResultado = document.getElementById("result");
        elementoResultado.textContent = `Dinero en la etapa de vida a los ${edad} años: $${dinero}`;
    }
});
