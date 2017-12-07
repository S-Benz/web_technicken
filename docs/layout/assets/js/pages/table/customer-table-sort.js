function sortTable() {
    var table = document.getElementById('customerTable');
    var rows = table.getElementsByTagName('tr');
    var tBody = document.getElementById('tableBody');
    //Enable swapping
    var swapping = true;

    while (swapping) {
        //Go through all table rows
        for (var i = 1; i < (rows.length - 1); i++) {
            swapping = false;
            var row1 = rows[i].getElementsByTagName('td')[1];
            var row2 = rows[i + 1].getElementsByTagName('td')[1];

            /*
               Check if two rows should be swapped, if they get swapped restart the iteration
               Else continue iterating through all rows.
             */
            if (row2.innerHTML.toLowerCase() < row1.innerHTML.toLowerCase()) {
                tBody.insertBefore(rows[i + 1], rows[i]);
                swapping = true;
                break;
            }
        }
    }
}