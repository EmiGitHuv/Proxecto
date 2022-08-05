window.onload = function () {
    document.getElementById('lb_dif_data').innerHTML = 1;
    document.getElementById('lb_data_act').innerHTML = 'Hoxe  ' + moment().format('LLL') + '.';
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(1, 'days').calendar(); + '.';
    document.getElementById('data_prod').innerHTML = moment().subtract(1, 'days').calendar(); + '.';
    mostrarDatas();
    
}
function mostrarDatas() {
    var data_prod = new Date();
    data_prod.setDate(data_prod.getDate() - document.getElementById('lb_dif_data').innerHTML);
    $('#data_prod').datepicker("setDate", data_prod);
    document.getElementById('lb_data_prod').setAttribute('style', 'background-color: red');
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(dif, 'days').calendar() + '.';




}