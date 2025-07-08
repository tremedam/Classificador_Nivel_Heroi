document.getElementById('classifyButton').addEventListener('click', function () {
    const nome = document.getElementById('heroName').value.trim();
    const xp = parseInt(document.getElementById('heroXP').value, 10);
    const resultDiv = document.getElementById('result');
    let nivel = "";

    // Validação simples
    if (!nome || isNaN(xp) || xp < 0) {
        resultDiv.textContent = "Por favor, preencha corretamente o nome e a experiência (XP) do herói.";
        resultDiv.className = "result error";
        return;
    }

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2000 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5000 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7000 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8000 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9000 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10000) {
        nivel = "Radiante";
    }

    resultDiv.textContent = `O Herói de nome ${nome} está no nível de ${nivel}`;
    resultDiv.className = "result success";
});