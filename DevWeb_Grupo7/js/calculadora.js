// Taxas de tributos por ano 
const taxasTributos = {
    2026: { CBS: 1, IBS: 5, ISS: 10 },
    2027: { CBS: 5, IBS: 7, ISS: 9 },
    2028: { CBS: 10, IBS: 10, ISS: 8 },
    2029: { CBS: 25, IBS: 12, ISS: 7 },
    2030: { CBS: 30, IBS: 15, ISS: 6 },
    2031: { CBS: 35, IBS: 18, ISS: 5 },
    2032: { CBS: 40, IBS: 20, ISS: 4 },
    2033: { CBS: 45, IBS: 22, ISS: 0 }
};

function calcularTributos() {
    // Obter o faturamento e o ano selecionado
    const faturamento = parseFloat(document.getElementById("faturamento").value);
    const anoSelecionado = parseInt(document.getElementById("ano").value);
    
    // Verificar se o faturamento é válido
    if (isNaN(faturamento) || faturamento <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um faturamento válido.";
        return;
    }
    
    // Obter as taxas de tributos para o ano selecionado
    const taxasAno = taxasTributos[anoSelecionado];
    if (!taxasAno) {
        document.getElementById("resultado").textContent = "Ano inválido ou sem dados de tributação.";
        return;
    }

    // Calcular a projeção de cada tributo
    const projeçãoCBS = faturamento * (taxasAno.CBS / 100);
    const projeçãoIBS = faturamento * (taxasAno.IBS / 100);
    const projeçãoISS = faturamento * (taxasAno.ISS / 100);
    
    // Somar os valores dos tributos para a projeção total
    const projeçãoTotal = projeçãoCBS + projeçãoIBS + projeçãoISS;

    // Exibir o resultado detalhado e o total
    document.getElementById("resultado").innerHTML = `
        A projeção dos tributos para o ano ${anoSelecionado} é:
        <br> CBS: R$ ${projeçãoCBS.toFixed(2)}
        <br> IBS: R$ ${projeçãoIBS.toFixed(2)}
        <br> ISS: R$ ${projeçãoISS.toFixed(2)}
        <br><strong>Projeção Total: R$ ${projeçãoTotal.toFixed(2)}</strong>
    `;
}


// Adicionar funcionalidade à caixa-contato
document.getElementById('contato').addEventListener('click', () => {
    alert("Redirecionando para a página de contato.");
    window.open("https://forms.gle/CYgq4VrwHHh7JiyAA", "_blank");
});
