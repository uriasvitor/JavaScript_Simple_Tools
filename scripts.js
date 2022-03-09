

document.getElementById('area').addEventListener("input",ShowLength);

function ShowLength(){
    var turn = document.getElementById('Length');

    if(turn.checked){
        let textArea = document.getElementById('area').value;
        let length = textArea.length;

        document.getElementById('results').innerHTML = length;
        
    }else{
        document.getElementById('results').innerHTML = '';
        console.log(turn.value)
    }
}

function ShowColor(){
     let turn = document.getElementById('Color');
    
    if(turn.checked){
        let textArea = document.getElementById('area').value;
        let length = textArea.length;
        alert("asodoas")

        document.getElementById('results').innerHTML = length;
        
    }else{
        document.getElementById('results').innerHTML = '';
        console.log(turn.value)
    }

    let color = document.getElementById('area').value;
    

}