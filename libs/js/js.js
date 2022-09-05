var dif;
window.onload = function () {
    btnDatas();
    mostrarDatas();
    lerSessions();
    
}
function lerSessions() {//Proba de como recuperar variable php en js (this.meu_...)
    var meu_javascript_variable_usuario = this.meu_javascript_variable_usuario;
    let pPost = document.createElement('div'); //Creamos un div novo,
    pPost.setAttribute('id', 'pPost'); //co id pPost.
    document.getElementById("lista").appendChild(pPost); //Dependente de elemento id 'lista'.
    let probaPost = `<p>${meu_javascript_variable_usuario}</p>`;
    document.getElementById('pPost').innerHTML += probaPost;
    document.getElementById('pPost').setAttribute('style', 'background-color:green');
    document.getElementById('lista').setAttribute('style', 'background-color:red');

}

function btnDatas() {
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