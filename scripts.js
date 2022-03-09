

document.getElementById('area').addEventListener("input",ShowLength);

function ShowLength(){
    var turn = document.getElementById('Length');

    if(turn.checked){
        let textArea = document.getElementById('area').value;
        let length = textArea.length;

        document.getElementById('results').innerHTML = length;
        
    }else{
        document.getElementById('results').innerHTML = '';
    }
}

document.getElementById('ColorBoxInput').addEventListener("input",ShowColor);
document.getElementById('ColorBoxInput').hidden = true;

function ShowColor(){
     let turn = document.getElementById('Color');
    
    if(turn.checked){
        document.getElementById('ColorBoxInput').hidden = false;
        let colorInput = document.getElementById('ColorBoxInput').value
        document.getElementById('area').style.color = colorInput;
        document.getElementById('ColorBoxInput').style.color = colorInput;
        document.getElementById('ColorBoxInput').style.backgroundColor = "#6d008f";

    }else{
        document.getElementById('ColorBoxInput').hidden = true;
        document.getElementById('ColorBoxInput').value = '';
        document.getElementById('ColorBoxInput').style.backgroundColor = "#919191";
    }
}

document.getElementById('codeText').hidden = true;

function ShowCode(){
    let turn = document.getElementById('Code');

    if(turn.checked){
        document.getElementById('codeText').hidden = false;
    }else{
        document.getElementById('codeText').hidden = true;
    }

}

document.getElementById('sliceInput').hidden = true;
document.getElementById('sliceInput1').hidden = true;

document.getElementById('sliceInput').addEventListener("change",ShowSlice);
document.getElementById('sliceInput1').addEventListener("change",ShowSlice);

function ShowSlice(){

    let turn = document.getElementById('slice');

    if(turn.checked){
        let areaValue = document.getElementById('area').value;
        let sliceInputValue = document.getElementById('sliceInput').value;
        let sliceInput1Value = document.getElementById('sliceInput1').value;

        slice = areaValue.slice(sliceInputValue,sliceInput1Value)

        document.getElementById('results').innerHTML = slice;
        document.getElementById('sliceInput').hidden = false;
        document.getElementById('sliceInput1').hidden = false;
    }else{
        document.getElementById('sliceInput1').hidden = true;
        document.getElementById('sliceInput').hidden = true;
    }
}