import * as mod from './mod_modelos.js';

/***********SECCIÓNS**************/
var sec_dif_data, sec_erro, sec_modal, sec_usuario, sec_rol, sec_pax;

/***********Paxinas*************/
//Páxina 0: index.html.
//Páxina 1: lavadoras.
//Páxina 2: tuneis de lavado.
//Páxina 3: máquinas de alisado.
//Páxina 4: costura.

/********WINDOWS ONLOAD*********/
window.onload = function () {
    $.ajax({ //Recollemos os valores das sesións actuando en consecuencia:
        method: "POST",
        url: "funcions.php",
        data: { funcion: 'sesions' }
    }).done(function (res) {
        let sec_array = JSON.parse(res);//Array das sesións.
        sec_dif_data = sec_array['dif_data'];
        sec_pax = sec_array['paxina'];
        sec_erro = sec_array['erro'];
        sec_modal = sec_array['modal'];
        sec_usuario = sec_array['usuario'];
        sec_rol = sec_array['rol'];
        mod.modelos_modal();//Modal si dase o caso.
        switch (sec_pax) {//Páxina a activar:
            case "1":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Lavadoras', sec_dif_data);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Lavadoras', sec_usuario, sec_rol);
                mod.modelos_centro_lavadora();
                if (sec_modal)
                    mod.mostrarModal('Lavadoras', sec_modal);
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitLavadoras');
                break
            
            case "2":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Tuneis de lavado', sec_dif_data);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Tuneis de lavado', sec_usuario, sec_rol);
                mod.modelos_centro_tuneis_lavado();
                if (sec_modal)
                    mod.mostrarModal('Tuneis de lavado', sec_modal);               
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitTuneis');
                break

            case "3":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Maquinas de alisado', sec_dif_data);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Maquinas de alisado', sec_usuario, sec_rol);
                mod.modelos_centro_Maquinas_Alisado();
                if (sec_modal)
                    mod.mostrarModal('Maquinas de alisado', sec_modal);
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitMaq_Alis');
                break

            case "4":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Costura', sec_dif_data);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Costura', sec_usuario, sec_rol);
                mod.modelos_centro_Costura();
                if (sec_modal)
                    mod.mostrarModal('Costura', sec_modal);
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitCostura');
                break

            default:
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Principal', sec_dif_data);// Cabecera principal.

                if (sec_usuario == null) {
                    document.getElementById("control_datas").style.display = "none";
                    mod.modelos_centro_login();
                    btnLogin();
                    if (sec_erro != null) { erroDisp(sec_erro, 'centro_login') };
                } else {
                    document.getElementById("control_datas").style.display = "block";
                    mod.modelos_cabecera_navegador('Principal', sec_usuario, sec_rol)
                    mod.modelos_centro_principal();                
                }
            break;
        }
        mod.modelos_pe_de_paxina();
        btnDatas();
        btnNav();
        mostrarDatas();//Calculo da data de produción.
    });
}

function erroDisp(err, divP) { //Parametros: Error e Div onde se vaia mostar.
    if (!!!document.getElementById('div_erro')) {
        let divErro = document.createElement('div'); //Creamos un div novo,
        divErro.id = 'div_erro'; //co id = "div_erro".
        divErro.className = 'container text-center fw-bold alert alert-danger';
        document.getElementById(divP).appendChild(divErro); //Dependente de elemento id do parametro.

    }
    document.getElementById('div_erro').innerHTML = err;
}

function btnDatas() {//Definimos o datepicker e os botóns "<<" ">>".
    sec_dif_data = document.getElementById('lb_dif_data').innerHTML; //Etiqueta dif_data.
    document.getElementById('lb_data_act').innerHTML = 'Hoxe  ' + moment().format('LLL') + '.';//Etiqueta data actual.
    $('#data_prod').datepicker({
        format: 'dd/mm/yyyy',
        changeMonth: false,
        changeYear: false,
        maxDate: "+0D"
    }).on('change', trocarDataProducion);
    //EscoitaEventos dos botóns.
    document.getElementById('bt_dif_data-').addEventListener('click', reducidirDia);
    document.getElementById('bt_dif_data+').addEventListener('click', engadirDia);    
}

function btnLogin() {//Definimos o datepicker e os botóns "Login" "Acceso convidado".
    //EscoitaEventos dos botóns.
    document.getElementById('bto_login').addEventListener('click', controlLogin);
    document.getElementById('bto_convidado').addEventListener('click', controlConvidado);
}
function mostrarDatas() {
    var data_prod = new Date();
    data_prod.setDate(data_prod.getDate() - sec_dif_data);
    $('#data_prod').datepicker("setDate", data_prod);
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(sec_dif_data, 'days').calendar() + '.';

    if (sec_dif_data == 0) { //Comproba o día, en caso mañá en adiante non engadimos día...
        document.getElementById('bt_dif_data+').disabled = true;
    } else {
        document.getElementById('bt_dif_data+').disabled = false;
    }
    document.getElementById('lb_dif_data').innerHTML = sec_dif_data; //Etiqueta dif_data.
}

function btnNav() {
    if (document.getElementById('paxPrincipal')) {
        document.getElementById('paxPrincipal').addEventListener('click', function () {
            sec_pax = 0;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxLavadoras')) {
        document.getElementById('paxLavadoras').addEventListener('click', function () {
            sec_pax = 1;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxTuneis_Lavado')) {
        document.getElementById('paxTuneis_Lavado').addEventListener('click', function () {
            sec_pax = 2;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxMaq_Ali')) {
        document.getElementById('paxMaq_Ali').addEventListener('click', function () {
            sec_pax = 3;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxCostura')) {
        document.getElementById('paxCostura').addEventListener('click', function () {
            sec_pax = 4;
            postear_paxina(sec_pax)
        });
    }
}

function postear_dif_data() {//Refrescar páxina cos seccións novos.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_dif_data',
            dif_data: sec_dif_data,
        }
    })
}

function postear_paxina(p) {//Refrescar páxina cos seccións novos.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_paxina',
            paxina: p,
        }
    })
}

function engadirDia() {//Botón ">>".
    sec_dif_data = document.getElementById('lb_dif_data').innerHTML - 1;
    mostrarDatas();
    postear_dif_data();
}

function reducidirDia() {//Botón "<<".
    sec_dif_data = Number(document.getElementById('lb_dif_data').innerHTML) + 1;
    mostrarDatas();
    postear_dif_data();
}

function trocarDataProducion() { //Calcula dif_data ó trocar datepicker.
    var fecha1 = moment( $('#data_prod').datepicker('getDate'));
    var fecha2 = moment(Date.now());
    sec_dif_data = fecha2.diff(fecha1, 'days')
    mostrarDatas();
    postear_dif_data();
}

function controlLogin() { //Se non hai usuario activo.
    if (document.getElementById('input_usuario').value != "") {
        $.ajax({ //Executamos a función loginControl() en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'loginControl',
                usuario: document.getElementById('input_usuario').value
            }
        }).done(function (res) {
            sec_usuario = res;
        })
    }
}

function controlConvidado() {// Quitamos elementos DOM que non lle vai o convidado.
    document.getElementById('pe_footer').remove();
    mod.modelos_centro_principal()
    document.getElementById("control_datas").style.display = "none";
    document.getElementById("div_login").style.display = "none";
    mod.modelos_pe_de_paxina();
}