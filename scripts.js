

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
document.getElementById('ColorBoxInput').disabled = true;
document.getElementById('ColorBoxInput').hidden = true;

function ShowColor(){
     let turn = document.getElementById('Color');
    
    if(turn.checked){
        document.getElementById('ColorBoxInput').hidden = false;
        document.getElementById('ColorBoxInput').disabled = false;
        let colorInput = document.getElementById('ColorBoxInput').value
        document.getElementById('area').style.color = colorInput;
        document.getElementById('ColorBoxInput').style.color = colorInput;
        document.getElementById('ColorBoxInput').style.backgroundColor = "#6d008f";

    }else{
        document.getElementById('ColorBoxInput').hidden = true;
        document.getElementById('ColorBoxInput').disabled = true;
        document.getElementById('ColorBoxInput').value = '';
        document.getElementById('ColorBoxInput').style.backgroundColor = "#919191";
    }
}