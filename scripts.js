

function ShowLength(){
    let turn = document.getElementById('Length');

    if(turn.checked){
        let textArea = document.getElementById('area').value;
        let length = textArea.length;

        document.getElementById('results').innerHTML = length;
        
    }else{
        console.log(turn.value)
    }
}