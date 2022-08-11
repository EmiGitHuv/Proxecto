var dif;
window.onload = function () {
    dif = document.getElementById('lb_dif_data').innerHTML;
    document.getElementById('lb_data_act').innerHTML = 'Hoxe  ' + moment().format('LLL') + '.';
    $('#data_prod').datepicker({
        format: 'dd/mm/yyyy',
        changeMonth: false,
        changeYear: false, 
        maxDate: "+0D"
    }).on('change', trocarDataProducion);  
    document.getElementById('bt_dif_data-').addEventListener('click', reducidirDia);
    document.getElementById('bt_dif_data+').addEventListener('click', engadirDia);
    mostrarDatas();
    
}
function mostrarDatas() {
    document.getElementById('lb_dif_data').innerHTML= dif;
    var data_prod = new Date();
    data_prod.setDate(data_prod.getDate() - dif);
    $('#data_prod').datepicker("setDate", data_prod);
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(dif, 'days').calendar() + '.';

    if (dif == 0) { //Comproba o día, en caso mañá en adiante non engadimos día...
        document.getElementById('bt_dif_data+').disabled = true;
    } else {
        document.getElementById('bt_dif_data+').disabled = false;
    }
}
function postear() {
    $.ajax({
        method: "POST",
        //url: "submit.php",
        data: {dif_data: dif}
    })
}

function engadirDia() {
    dif = document.getElementById('lb_dif_data').innerHTML - 1;
    mostrarDatas();
    postear();
}

function reducidirDia() {    
    dif = Number(document.getElementById('lb_dif_data').innerHTML) + 1;;
    mostrarDatas();
    postear();
}

function trocarDataProducion() {
    var fecha1 = moment( $('#data_prod').datepicker('getDate'));
    var fecha2 = moment(Date.now());
    dif = fecha2.diff(fecha1, 'days')
    mostrarDatas();
    postear();
}