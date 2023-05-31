function makeTable(){
    var table = document.getElementById('tab');
    var row = document.getElementById('rows').value;
    var col = document.getElementById('cols').value;

    console.log(row+" "+col);

    for(var rowIndex = 0; rowIndex<row; rowIndex++){
        var tr = document.createElement('tr');

        for(var colIndex = 0; colIndex<col; colIndex++){
            var td = document.createElement('td');
            td.setAttribute('class','black')
            tr.appendChild(td);
        }
        table.appendChild(tr);
        document.getElementById('rows').value = "";
        document.getElementById('cols').value = "";

    }
}


document.getElementById('make').addEventListener("click",makeTable);