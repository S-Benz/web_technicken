function sortTable() {
    var table = document.querySelector('[customerTable]');
    var rows = table.getElementsByTagName('tr');

    for(var i = 1; i < rows.length - 1; i++){
        var rowI = rows[i].getElementsByTagName('td')[0];
        for(var j = i+1; j < rows.length - 1; j++) {
            var rowJ = rows[j].getElementsByTagName('td')[0];
            if(rowJ.innerHTML.toLocaleLowerCase() > rowI.innerHTML.toLocaleLowerCase()){
                console.log("Inserting " + rowJ.innerHTML +" before " + rowI.innerHTML + "\n");
            }
        }
    }
}