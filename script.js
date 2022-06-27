function calculatePriceInCents() {
    kilometers = parseFloat(document.getElementById("drivenkilometers").value);
    pricePerLiterInCents = parseFloat(document.getElementById("priceperliter").value);
    fuelConsumptionPer100Kilometers = parseFloat(document.getElementById("fuelconsumption").value);

    let price = (kilometers * 0.01) * fuelConsumptionPer100Kilometers * pricePerLiterInCents;
    price = roundInEuros(price);
    document.getElementById("PriceField").innerText = price + " \u20AC";
}

function roundInEuros(price) {
    return Math.round(price) * 0.01;
}
