document.addEventListener("DOMContentLoaded", function() {
    const temperature = 31; 
    const windspeed = 16;

    if (temperature <= 10 && windspeed > 4.8) {
        document.getElementById("windchill").textContent = calculateWindChill(temperature, windspeed).toFixed(2) + ' °C';
    } else {
        document.getElementById("windchill").textContent = 'N/A';
    }

    function calculateWindChill(temp, windSpeed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }
});
