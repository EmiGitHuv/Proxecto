window.onload = function () {
    document.getElementById('lb_dif_data').innerHTML = 1;
    document.getElementById('lb_data_act').innerHTML = 'Hoxe  ' + moment().format('LLL') + '.';
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(1, 'days').calendar(); + '.';
    document.getElementById('data_prod').innerHTML = moment().subtract(1, 'days').calendar(); + '.';
    $('#data_prod').datepicker({
        format: 'dd/mm/yyyy',
        changeMonth: false,
        changeYear: false,
        maxDate: "+0D"
    }).on('change', trocarDataProducion);  
    mostrarDatas();
    
}
function mostrarDatas() {
    dif = document.getElementById('lb_dif_data').innerHTML;
    var data_prod = new Date();
    data_prod.setDate(data_prod.getDate() - document.getElementById('lb_dif_data').innerHTML);
    $('#data_prod').datepicker("setDate", data_prod);
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(dif, 'days').calendar() + '.';
    document.getElementById('bt_dif_data-').addEventListener('click', reducidirDia);
    document.getElementById('bt_dif_data+').addEventListener('click', engadirDia);
    if (dif == 0) { //Comproba o día, en caso mañá en adiante non engadimos día...
        document.getElementById('bt_dif_data+').disabled = true;
    } else {
        document.getElementById('bt_dif_data+').disabled = false;        
    }
}

function engadirDia() {
    document.getElementById('lb_dif_data').innerHTML -= 1;
    mostrarDatas();
}

function reducidirDia() {    
    dif = Number(document.getElementById('lb_dif_data').innerHTML);
    dif += 1;
    document.getElementById('lb_dif_data').innerHTML = dif;
    mostrarDatas();
}

function trocarDataProducion() {
    var fecha1 = moment( $('#data_prod').datepicker('getDate'));
    var fecha2 = moment(Date.now());
    dif = fecha2.diff(fecha1, 'days')
    document.getElementById('lb_dif_data').innerHTML = dif;
    mostrarDatas();
}