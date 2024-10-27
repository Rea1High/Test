document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const cost = distance * 0.5;
    
    const resultElement = document.getElementById('result');
    const costElement = document.getElementById('cost');
    const detailsElement = document.getElementById('details');
    
    costElement.textContent = `${cost.toFixed(2)} บาท`;
    detailsElement.textContent = `ระยะทาง ${distance} กม. × 0.5 บาท/กม.`;
    
    resultElement.classList.add('show');
});
