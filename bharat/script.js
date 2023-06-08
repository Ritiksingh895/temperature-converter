function convertToCelsius() {
    // Get the Fahrenheit input value
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;

    // Convert Fahrenheit to Celsius
    var celsius = (fahrenheitInput - 32) * 5 / 9;

    // Display the result
    document.getElementById("resultText").innerHTML = fahrenheitInput + "°F is " + celsius.toFixed(2) + "°C";
}

function convertToFahrenheit() {
    // Get the Celsius input value
    var celsiusInput = document.getElementById("celsiusInput").value;

    // Convert Celsius to Fahrenheit
    var fahrenheit = celsiusInput * 9 / 5 + 32;

    // Display the result
    document.getElementById("resultText").innerHTML = celsiusInput + "°C is " + fahrenheit.toFixed(2) + "°F";
}
