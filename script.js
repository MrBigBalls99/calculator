function calculateMortgage() {
    const totalCost = document.getElementById('total_cost').value;
    const downPayment = document.getElementById('down_payment').value;
    const principal = totalCost - downPayment;
    const annualInterestRate = document.getElementById('annual_interest_rate').value;
    const years = document.getElementById('years').value;

    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    document.getElementById('result').innerHTML = `
        Ежемесячный платеж: ${monthlyPayment.toFixed(2)} руб.<br>
        Сумма кредита: ${principal.toFixed(2)} руб.<br>
        Переплата по процентам: ${totalInterest.toFixed(2)} руб.
    `;
}
