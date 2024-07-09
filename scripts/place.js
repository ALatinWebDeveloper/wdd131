const tempItem = document.querySelector("#temp");
const conditionItem = document.querySelector("#condition");
const windItem = document.querySelector("#wind");
const windChillItem = document.querySelector("#windChill");

const temp = 26;
const condition = "Mostly cloudy";
const windSpeed = 6;

let calculateWindChill = function(temp, windSpeed)
{
    if (windSpeed < 4.8 && temp > 10)
    {
        windChill = 13.12 + 0.6215 * temp * (0.3965 * temp - 11.37) * windSpeed ** 0.16;
        return windChill;
    } else
    {
        return "N/A";
    }
}

windChillItem.innerHTML = `<b>Wind Chill: </b>${calculateWindChill(temp, windSpeed)}`;