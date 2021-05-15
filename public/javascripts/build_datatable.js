let getDataTableVolume = function () {
    $('#my_table_to_convert').contents().find('.table').DataTable()//.ajax.url()

    $(document).ready(function () {
        $('#myTable').DataTable();
    });
    // })
}

//document.getElementById("div_datatable").onload = function () {
document.getElementById("div_datatable").onload = function () {
    getDataTableVolume()
}



$(document).ready(function () {
    $('#myTable').DataTable();
});