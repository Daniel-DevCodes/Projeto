function calculateOverdueSalary() {
    const monthlySalary = parseFloat(document.getElementById("monthlySalary").value);
    const serviceTime = parseFloat(document.getElementById("serviceTime").value);
    const overdueMonths = parseFloat(document.getElementById("overdueMonths").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);

    if (isNaN(monthlySalary) || isNaN(serviceTime) || isNaN(overdueMonths) || isNaN(interestRate)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Cálculo do valor total de salários atrasados
    const totalOverdueSalary = monthlySalary * overdueMonths;

    // Cálculo dos juros
    const interestAmount = totalOverdueSalary * (interestRate / 100) * overdueMonths;

    // Valor total a receber (salários atrasados + juros)
    const totalToReceive = totalOverdueSalary + interestAmount;

    // Exibindo os resultados
    document.getElementById("salaryInfo").innerText = `Total de Salários Atrasados: R$ ${totalOverdueSalary.toFixed(2)}`;
    document.getElementById("interestAmount").innerText = `Juros Aplicados: R$ ${interestAmount.toFixed(2)}`;
    document.getElementById("totalToReceive").innerText = `Valor Total a Receber: R$ ${totalToReceive.toFixed(2)}`;
}
