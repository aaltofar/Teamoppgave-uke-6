function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 80 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect width="${width}" class="bar" height="${height}" 
        x="${x}" y="${y}" fill="${color}" onclick="selectBar(${barNo})" ${drawLine(barNo)}></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

function selectBar(id){
    if (chosenBar == id){
        chosenBar = 'ingen'
        buttonStatus = 'disabled';
        show()
    } else{
        chosenBar = `${id}`
        buttonStatus = '';
        show();
    }   
}

function drawLine(barNo){
    if (chosenBar == barNo){
        return 'stroke="black"'
    } else{
        return
    }
    show();
}

function clearSelection(){
    chosenBar = 'ingen'
    inputValue = null;    
}
        
function removeBar(){
    numbers.splice(chosenBar-1, 1)
    clearSelection()
    show()
}

function changeBar(){
    if (inputValue >= 1 && inputValue <= 10) {
        numbers[chosenBar-1] = inputValue;
        show()
    } else {
        alert('Du kan bare skrive et tall mellom 1-10')
        show();
    } 
} 

function erectBar(){
    if (inputValue >= 1 && inputValue <= 10) {
        numbers.push(inputValue)
        clearSelection()
        show()
    } else {
        alert('Du kan bare skrive et tall mellom 1-10')
        show()
    } 
}