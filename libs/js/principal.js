import * as mod from './mod_modelos.js';
import * as lav from './carga_lavadora/Lav_Lavadoras.js'
import * as tun from './carga_tunel/tun_tuneis.js'
import * as ali from './carga_alisado/ali_alisado.js'
import * as cos from './costura/cos_costura.js'

/***********SECCIÓNS**************/
var ses_dif_data, ses_erro, ses_modal, ses_usuario, ses_rol, ses_pax, ses_carg_ali, ses_carg_tun, ses_indice, ses_indice2, ses_crud;
/***SECCIONS KLL***/
var ses_quendas, ses_lavadoras, ses_rp_lavadora, ses_programas, ses_centros, ses_lava_lav, ses_lava_lav_mult;

/***********Páxinas*************/
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
        let ses_array = JSON.parse(res);//Array das sesións.
        ses_dif_data = ses_array['dif_data']; //Calculo data produción.
        ses_pax = ses_array['paxina'];        //Saber páxina activa.
        ses_modal = ses_array['modal'];       //Mensaxe modal activado.
        ses_erro = ses_array['erro'];         //Mensaxe modal error activado.
        ses_usuario = ses_array['usuario'];   //Usuario.
        ses_rol = ses_array['rol'];           //Rol usuario.
        ses_carg_ali = ses_array['carg_ali']; //Array Cargas de alisado ou mensaxe de erro.
        ses_carg_tun = ses_array['carg_tun']; //Array Cargas túneis ou mensaxe de erro.
        ses_lava_lav = ses_array['lava_lav']; //Array Cargas lavados lavadora ou mensaxe de erro.
        ses_lava_lav_mult = ses_array['lava_lav_mult']; //Booleano si múlticarga en kll.
        ses_quendas = ses_array['Quendas']; //Datos Quendas para Cargas lavadoras.
        ses_lavadoras = ses_array['Lavadoras']; //Datos Lavadoras para Cargas lavadoras.
        ses_rp_lavadora = ses_array['RP_Lavadoras']; //Datos RP_lavadora para Cargas lavadoras.
        ses_programas = ses_array['Programas']; //Datos Programas para Cargas lavadoras.
        ses_centros = ses_array['Centros']; //Datos Cemtros para Cargas lavadoras.
        ses_indice = ses_array['indice'];     //indice activo para 'crud'.   
        ses_indice2 = ses_array['indice2'];   //indice activo para 'crud' en caso de dous indices(kll e ctl).
        ses_crud = ses_array['crud'];         //Activo para 'crud'.
        mod.modelos_modal();//Modal si dase o caso.
        switch (ses_pax) {//Páxina a activar:
            case "1":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Lavadoras', ses_usuario, ses_rol);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Lavadoras', ses_dif_data);
                lav.modelos_centro_lavadora(ses_lava_lav, ses_indice, ses_indice2, ses_crud, ses_lava_lav_mult);
                if (ses_modal)
                    mod.mostrarModal('Lavadoras', ses_modal);
                if (ses_erro)
                    erroDisp(ses_erro, 'divSubmitLavadoras');
                break
            
            case "2":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Túneis de lavado', ses_usuario, ses_rol);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Túneis de lavado', ses_dif_data);
                tun.modelos_centro_tuneis_lavado(ses_carg_tun, ses_indice, ses_indice2, ses_crud);
                if (ses_modal)
                    mod.mostrarModal('Túneis de lavado', ses_modal);
                if (ses_erro)
                    erroDisp(ses_erro, 'divSubmitTuneis');
                break

            case "3":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Máquinas de alisado', ses_usuario, ses_rol);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Máquinas de alisado', ses_dif_data);
                ali.modelos_centro_Maquinas_Alisado(ses_carg_ali, ses_indice, ses_crud);
                if (ses_modal)
                    mod.mostrarModal('Máquinas de alisado', ses_modal);
                if (ses_erro)
                    erroDisp(ses_erro, 'divSubmitMaq_Alis');
                break

            case "4":
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Costura', ses_usuario, ses_rol);// Cabecera principal.            
                mod.modelos_cabecera_navegador('Costura', ses_dif_data);
                cos.modelos_centro_Costura();
                if (ses_modal)
                    mod.mostrarModal('Costura', ses_modal);
                if (ses_erro)
                    erroDisp(ses_erro, 'divSubmitCostura');
                break

            default:
                mod.modelos_cabecera_body('Lavandería "A Grela"', 'Principal', ses_usuario, ses_rol);// Cabecera principal.
                if (ses_usuario == null) {
                    document.getElementById("control_usuario").style.display = "none";
                    mod.modelos_centro_login();
                    btnLogin();
                    if (ses_erro != null) { erroDisp(ses_erro, 'centro_login') };
                } else {
                    mod.modelos_cabecera_navegador('Principal', ses_dif_data)
                    mod.modelos_centro_principal();                
                }
            break;
        }
        mod.modelos_pe_de_paxina();
        if (ses_usuario != null) {//Colocar os escoitaeventos ó final do proceso de carga de páxina. Sempre cun usuario activo.
            btnDatas();
            btnNav();
            mostrarDatas();//Calculo da data de produción.
        }
    });
}

function erroDisp(err, divP) { //Parametros: Error e Div onde se vaia mostar.
    if (document.getElementById('div_erro')) { //PEndente de confirmar!!! 12/12/2022
        let divErro = document.createElement('div'); //Creamos un div novo,
        divErro.id = 'div_erro'; //co id = "div_erro".
        divErro.className = 'container text-center fw-bold alert alert-danger';
        document.getElementById(divP).appendChild(divErro); //Dependente de elemento id do parametro.

    }
    document.getElementById('div_erro').innerHTML = err;
}

function mostrarDatas() {
    var data_prod = new Date();
    data_prod.setDate(data_prod.getDate() - ses_dif_data);
    $('#data_prod').datepicker("setDate", data_prod);
    document.getElementById('lb_data_act').innerHTML = 'Hoxe  ' + moment().format('LLL') + '.';//Etiqueta data actual.
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(ses_dif_data, 'days').calendar() + '.';
    if (ses_dif_data == 0) { //Comproba o día, en caso mañá en adiante non engadimos día...
        document.getElementById('bt_dif_data+').disabled = true;
    } else {
        document.getElementById('bt_dif_data+').disabled = false;
    }
}

function btnDatas() {//Definimos o datepicker e os botóns "<<" ">>".
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

function btnNav() {
    if (document.getElementById('paxPrincipal')) {
        document.getElementById('paxPrincipal').addEventListener('click', function () {
            ses_pax = 0;
            postear_paxina(ses_pax)
        });
    }
    if (document.getElementById('paxLavadoras')) {
        document.getElementById('paxLavadoras').addEventListener('click', function () {
            ses_pax = 1;
            postear_paxina(ses_pax)
        });
    }
    if (document.getElementById('paxTuneis_Lavado')) {
        document.getElementById('paxTuneis_Lavado').addEventListener('click', function () {
            ses_pax = 2;
            postear_paxina(ses_pax)
        });
    }
    if (document.getElementById('paxMaq_Ali')) {
        document.getElementById('paxMaq_Ali').addEventListener('click', function () {
            ses_pax = 3;
            postear_paxina(ses_pax)
        });
    }
    if (document.getElementById('paxCostura')) {
        document.getElementById('paxCostura').addEventListener('click', function () {
            ses_pax = 4;
            postear_paxina(ses_pax)
        });
    }
}

function btnLogin() {//Definimos o datepicker e os botóns "Login" "Acceso convidado".
    //EscoitaEventos dos botóns.
    document.getElementById('bto_login').addEventListener('click', controlLogin);
    document.getElementById('bto_convidado').addEventListener('click', controlConvidado);
}

function postear_dif_data() {//Refrescar páxina cos seccións novos.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_dif_data',
            dif_data: ses_dif_data,
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
    ses_dif_data = document.getElementById('lb_dif_data').innerHTML - 1;
    postear_dif_data();
    window.location.reload()
}

function reducidirDia() {//Botón "<<".
    ses_dif_data = Number(document.getElementById('lb_dif_data').innerHTML) + 1;
    postear_dif_data();
    window.location.reload()
}

function trocarDataProducion() { //Calcula dif_data ó trocar datepicker.
    var fecha1 = moment( $('#data_prod').datepicker('getDate'));
    var fecha2 = moment(Date.now());
    ses_dif_data = fecha2.diff(fecha1, 'days')
    postear_dif_data();
    window.location.reload()
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
            ses_usuario = res;
        })
    }
}

function controlConvidado() {// Quitamos elementos DOM que non lle vai o convidado.
    document.getElementById('pe_footer').remove();
    mod.modelos_centro_principal()
    document.getElementById("div_login").style.display = "none";
    mod.modelos_pe_de_paxina();
}

/***********COMPLEMENTOS**********/
export function get_quendas() {
    return ses_quendas;
}

export function get_lavadoras() {
    return ses_lavadoras;
}

export function get_rp_lavadora() {
    return ses_rp_lavadora;
}

export function get_programas() {
    return ses_programas;
}

export function get_centros() {
    return ses_centros;
}