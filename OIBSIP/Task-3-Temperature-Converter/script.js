function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);

    let unit = document.getElementById("unit").value;

    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "❌ Please enter a valid number.";
        return;
    }

    let output = "";

    if (unit === "celsius") {

        let fahrenheit = (temp * 9/5) + 32;
        let kelvin = temp + 273.15;

        output =
        `${temp} °C = ${fahrenheit.toFixed(2)} °F <br>
         ${temp} °C = ${kelvin.toFixed(2)} K`;

    }

    else if (unit === "fahrenheit") {

        let celsius = (temp - 32) * 5/9;
        let kelvin = celsius + 273.15;

        output =
        `${temp} °F = ${celsius.toFixed(2)} °C <br>
         ${temp} °F = ${kelvin.toFixed(2)} K`;

    }

    else {

        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;

        output =
        `${temp} K = ${celsius.toFixed(2)} °C <br>
         ${temp} K = ${fahrenheit.toFixed(2)} °F`;

    }

    result.innerHTML = output;

}