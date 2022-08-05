window.onload = function () {
    document.getElementById('data_act').innerHTML = 'Hoxe,  ' + moment().format('LLL') + '.';
    mostrarDatas();
    
}
function mostrarDatas() {
    var data_prod = new Date();
    var dif = -1
    data_prod.setDate(data_prod.getDate() - dif);
    $('#data_prod').datepicker("setDate", data_prod);
    document.getElementById('lb_data_prod').setAttribute('style', 'background-color: red');
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment(data_prod).format('LLL') + '.';
}