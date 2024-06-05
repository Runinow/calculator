// Get input elements
const mpgInput = document.getElementById('mpg');
const gasPriceInput = document.getElementById('gasPrice');
const tripMiles1Input = document.getElementById('tripMiles1');
const tripMiles2Input = document.getElementById('tripMiles2');
const deadhead11Input = document.getElementById('deadhead11');
const deadhead12Input = document.getElementById('deadhead12');
const deadhead21Input = document.getElementById('deadhead21');
const deadhead22Input = document.getElementById('deadhead22');
const deadhead31Input = document.getElementById('deadhead31');
const deadhead32Input = document.getElementById('deadhead32');
const backhaulMiles1Input = document.getElementById('backhaulMiles1');
const backhaulMiles2Input = document.getElementById('backhaulMiles2');

// Get output elements
const totalMiles1Output = document.getElementById('totalMiles1');
const totalMiles2Output = document.getElementById('totalMiles2');
const totalMiles3Output = document.getElementById('totalMiles3');
const totalMiles4Output = document.getElementById('totalMiles4');
const rate1Output = document.getElementById('rate1');
const rate2Output = document.getElementById('rate2');
const rate3Output = document.getElementById('rate3');
const rate4Output = document.getElementById('rate4');
const weight1Output = document.getElementById('weight1');
const weight2Output = document.getElementById('weight2');
const weight3Output = document.getElementById('weight3');
const weight4Output = document.getElementById('weight4');
const fuelReduction1Output = document.getElementById('fuelReduction1');
const fuelReduction2Output = document.getElementById('fuelReduction2');
const fuelReduction3Output = document.getElementById('fuelReduction3');
const fuelReduction4Output = document.getElementById('fuelReduction4');
const fuelCost1Output = document.getElementById('fuelCost1');
const fuelCost2Output = document.getElementById('fuelCost2');
const fuelCost3Output = document.getElementById('fuelCost3');
const fuelCost4Output = document.getElementById('fuelCost4');
const days1Output = document.getElementById('days1');
const days2Output = document.getElementById('days2');
const days3Output = document.getElementById('days3');
const days4Output = document.getElementById('days4');
const ratePerMile1Output = document.getElementById('ratePerMile1');
const ratePerMile2Output = document.getElementById('ratePerMile2');
const ratePerMile3Output = document.getElementById('ratePerMile3');
const ratePerMile4Output = document.getElementById('ratePerMile4');
const trueRpm1Output = document.getElementById('trueRpm1');
const trueRpm2Output = document.getElementById('trueRpm2');
const trueRpm3Output = document.getElementById('trueRpm3');
const trueRpm4Output = document.getElementById('trueRpm4');
const trueDayRate1Output = document.getElementById('trueDayRate1');
const trueDayRate2Output = document.getElementById('trueDayRate2');
const trueDayRate3Output = document.getElementById('trueDayRate3');
const trueDayRate4Output = document.getElementById('trueDayRate4');
const trueRate1Output = document.getElementById('trueRate1');
const trueRate2Output = document.getElementById('trueRate2');
const trueRate3Output = document.getElementById('trueRate3');
const trueRate4Output = document.getElementById('trueRate4');
const totalRatePerMileOutput = document.getElementById('totalRatePerMile');
const totalRatePerDayOutput = document.getElementById('totalRatePerDay');
const totalRateOutput = document.getElementById('totalRate');

// Calculate and display results
function calculateResults() {
    const mpg = parseFloat(mpgInput.value);
    const gasPrice = parseFloat(gasPriceInput.value);
    const tripMiles1 = parseFloat(tripMiles1Input.value);
    const tripMiles2 = parseFloat(tripMiles2Input.value);
    const deadhead11 = parseFloat(deadhead11Input.value);
    const deadhead12 = parseFloat(deadhead12Input.value);
    const deadhead21 = parseFloat(deadhead21Input.value);
    const deadhead22 = parseFloat(deadhead22Input.value);
    const deadhead31 = parseFloat(deadhead31Input.value);
    const deadhead32 = parseFloat(deadhead32Input.value);
    const backhaulMiles1 = parseFloat(backhaulMiles1Input.value);
    const backhaulMiles2 = parseFloat(backhaulMiles2Input.value);

    // Trip 1
    const totalMiles1 = tripMiles1 + deadhead11 + deadhead21;
    totalMiles1Output.textContent = totalMiles1;
    const rate1 = 2000;
    rate1Output.textContent = '$' + rate1.toFixed(2);
    const weight1 = 10000;
    weight1Output.textContent = weight1;
    const fuelReduction1 = 5;
    fuelReduction1Output.textContent = fuelReduction1 + '%';
    const fuelCost1 = (totalMiles1 / mpg) * gasPrice;
    fuelCost1Output.textContent = '$' + fuelCost1.toFixed(2);
    const days1 = 2;
    days1Output.textContent = days1;
    const ratePerMile1 = rate1 / totalMiles1;
    ratePerMile1Output.textContent = '$' + ratePerMile1.toFixed(2);
    const trueRpm1 = ratePerMile1 - fuelCost1 / totalMiles1;
    trueRpm1Output.textContent = '$' + trueRpm1.toFixed(2);
    const trueDayRate1 = trueRpm1 * totalMiles1;
    trueDayRate1Output.textContent = '$' + trueDayRate1.toFixed(2);
    const trueRate1 = trueDayRate1 * days1;
    trueRate1Output.textContent = '$' + trueRate1.toFixed(2);

    // Trip 2
    const totalMiles2 = tripMiles2 + deadhead12 + deadhead22;
    totalMiles2Output.textContent = totalMiles2;
    const rate2 = 200;
    rate2Output.textContent = '$' + rate2.toFixed(2);
    const weight2 = 5000;
    weight2Output.textContent = weight2;
    const fuelReduction2 = 3;
    fuelReduction2Output.textContent = fuelReduction2 + '%';
    const fuelCost2 = (totalMiles2 / mpg) * gasPrice;
    fuelCost2Output.textContent = '$' + fuelCost2.toFixed(2);
    const days2 = 1;
    days2Output.textContent = days2;
    const ratePerMile2 = rate2 / totalMiles2;
    ratePerMile2Output.textContent = '$' + ratePerMile2.toFixed(2);
    const trueRpm2 = ratePerMile2 - fuelCost2 / totalMiles2;
    trueRpm2Output.textContent = '$' + trueRpm2.toFixed(2);
    const trueDayRate2 = trueRpm2 * totalMiles2;
    trueDayRate2Output.textContent = '$' + trueDayRate2.toFixed(2);
    const trueRate2 = trueDayRate2 * days2;
    trueRate2Output.textContent = '$' + trueRate2.toFixed(2);

    // Backhaul Load 1
    const totalMiles3 = backhaulMiles1 + deadhead31;
    totalMiles3Output.textContent = totalMiles3;
    const rate3 = 500;
    rate3Output.textContent = '$' + rate3.toFixed(2);
    const weight3 = 15000;
    weight3Output.textContent = weight3;
    const fuelReduction3 = 8;
    fuelReduction3Output.textContent = fuelReduction3 + '%';
    const fuelCost3 = (totalMiles3 / mpg) * gasPrice;
    fuelCost3Output.textContent = '$' + fuelCost3.toFixed(2);
    const days3 = 1;
    days3Output.textContent = days3;
    const ratePerMile3 = rate3 / totalMiles3;
    ratePerMile3Output.textContent = '$' + ratePerMile3.toFixed(2);
    const trueRpm3 = ratePerMile3 - fuelCost3 / totalMiles3;
    trueRpm3Output.textContent = '$' + trueRpm3.toFixed(2);
    const trueDayRate3 = trueRpm3 * totalMiles3;
    trueDayRate3Output.textContent = '$' + trueDayRate3.toFixed(2);
    const trueRate3 = trueDayRate3 * days3;
    trueRate3Output.textContent = '$' + trueRate3.toFixed(2);

    // Backhaul Load 2
    const totalMiles4 = backhaulMiles2 + deadhead32;
    totalMiles4Output.textContent = totalMiles4;
    const rate4 = 2500;
    rate4Output.textContent = '$' + rate4.toFixed(2);
    const weight4 = 25000;
    weight4Output.textContent = weight4;
    const fuelReduction4 = 13;
    fuelReduction4Output.textContent = fuelReduction4 + '%';
    const fuelCost4 = (totalMiles4 / mpg) * gasPrice;
    fuelCost4Output.textContent = '$' + fuelCost4.toFixed(2);
    const days4 = 2;
    days4Output.textContent = days4;
    const ratePerMile4 = rate4 / totalMiles4;
    ratePerMile4Output.textContent = '$' + ratePerMile4.toFixed(2);
    const trueRpm4 = ratePerMile4 - fuelCost4 / totalMiles4;
    trueRpm4Output.textContent = '$' + trueRpm4.toFixed(2);
    const trueDayRate4 = trueRpm4 * totalMiles4;
    trueDayRate4Output.textContent = '$' + trueDayRate4.toFixed(2);
    const trueRate4 = trueDayRate4 * days4;
    trueRate4Output.textContent = '$' + trueRate4.toFixed(2);

    // Total results
    const totalRatePerMile = (trueRpm1 * totalMiles1 + trueRpm2 * totalMiles2 + trueRpm3 * totalMiles3 + trueRpm4 * totalMiles4) / (totalMiles1 + totalMiles2 + totalMiles3 + totalMiles4);
    totalRatePerMileOutput.textContent = '$' + totalRatePerMile.toFixed(2);
    const totalRatePerDay = trueDayRate1 + trueDayRate2 + trueDayRate3 + trueDayRate4;
    totalRatePerDayOutput.textContent = '$' + totalRatePerDay.toFixed(2);
    const totalRate = trueRate1 + trueRate2 + trueRate3 + trueRate4;
    totalRateOutput.textContent = '$' + totalRate.toFixed(2);
}


mpgInput.addEventListener('input', calculateResults);
gasPriceInput.addEventListener('input', calculateResults);
tripMiles1Input.addEventListener('input', calculateResults);
tripMiles2Input.addEventListener('input', calculateResults);
deadhead11Input.addEventListener('input', calculateResults);
deadhead12Input.addEventListener('input', calculateResults);
deadhead21Input.addEventListener('input', calculateResults);
deadhead22Input.addEventListener('input', calculateResults);
deadhead31Input.addEventListener('input', calculateResults);
deadhead32Input.addEventListener('input', calculateResults);
backhaulMiles1Input.addEventListener('input', calculateResults);
backhaulMiles2Input.addEventListener('input', calculateResults);

calculateResults();