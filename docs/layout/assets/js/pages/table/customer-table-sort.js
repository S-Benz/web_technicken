function sortTable() {
    var table = document.getElementById('customerTable');
    var rows = table.getElementsByTagName('tr');
    var tbody = document.getElementById('tableBody');
    var switchRows = true;
    var tmpArray = [];

    for(var j = 1; j < rows.length; j++) {
        tmpArray.push([rows[j].getElementsByTagName('td')[1].innerHTML,j]);
    }

    tmpArray.sort();
    console.log(tmpArray);

    /*
    while (switchRows) {
        for (var i = 1; i < (rows.length - 1) ; i++) {
            switchRows = false;
            var row1 = rows[i].getElementsByTagName('td')[1];
            var row2 = rows[i + 1].getElementsByTagName('td')[1];

            if(row2.innerHTML.toLowerCase() < row1.innerHTML.toLowerCase()) {
                tbody.insertBefore(rows[i+1], rows[i]);
                switchRows = true;
                break;
            }
        }
    }*/
}