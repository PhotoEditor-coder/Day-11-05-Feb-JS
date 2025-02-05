let temperature = Math.random() * (25 - (-5)) + (-5);
if (temperature <= 10) {
    console.log(`The temperature is ${temperature.toFixed(1)}°C. The weather is cold.`);
} else {
    console.log(`The temperature is ${temperature.toFixed(1)}°C. The weather is moderate.`);
}
