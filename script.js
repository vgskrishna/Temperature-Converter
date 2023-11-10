document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const kelvinInput = document.getElementById('kelvinInput');
    const convertButton = document.getElementById('convertButton');

    convertButton.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    });
});
