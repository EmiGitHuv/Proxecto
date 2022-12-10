import * as mod from './mod_modelos.js';
import * as prin from './principal.js';

/**********FUNCIÓNS DOS OBXECTOS*********/
export function getObxCentros(obx, crud) {
    //let tof = typeof obx; Borrar!!!
    //alert(tof); Borrar!!!
    $.ajax({ //Executamos a función getObxCentros en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxCentros',
        }
    }).done(function (res) {
        let opCentro = "";
        let Centros = JSON.parse(res);
        if (Array.isArray(Centros)) {  //Correcto a lectura de Quendas.
            if (crud == "create") { //No caso de modificar ou baixa a Carga de Alisado, obviamos esta liña.
                opCentro +=
                    `<option selected disabled value="">Escolla un centro</option>`;
                for (let f of Centros) {
                    opCentro +=
                        `<option value="${f['id_centro']}">${f['centro']}</option>`
                }
            } else {
                for (let f of Centros) {
                    if (f['centro'] == obx[0].centro) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opCentro +=
                            `<option selected value="${f['id_centro']}">${f['centro']}</option>`
                    } else {
                        opCentro +=
                            `<option value="${f['id_centro']}">${f['centro']}</option>`
                    }
                }
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opCentro =
                `<option selected disabled value="">${Centros}</option>`
        }
        document.getElementById('centro').innerHTML = opCentro;
    });
}

export function getObxCostureira() {
    $.ajax({ //Executamos a función getObxCostureira en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxCostureira',
        }
    }).done(function (res) {
        let opCostureira;
        let Costureiras = JSON.parse(res);
        if (Array.isArray(Costureiras)) {
            opCostureira =
                `<option selected disabled value="">Escolla costureira</option>`;
            for (let f of Costureiras) {
                opCostureira +=
                    `<option value="${f['id_costureira']}">${f['costureira']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opCostureira =
                `<option selected disabled value="">${Costureiras}</option>`
        }
        document.getElementById('costureira_repaso').innerHTML = document.getElementById('costureira_baixa').innerHTML = document.getElementById('costureira_total_rp').innerHTML = document.getElementById('costureira_confeccion').innerHTML = document.getElementById('costureira_arranxo').innerHTML = document.getElementById('costureira_conxunto').innerHTML = opCostureira;

    });
}

export function getObxLavadoras(obx, crud) {
    //let tof = typeof obx; Borrar!!!
    //alert(tof); Borrar!!!
    $.ajax({ //Executamos a función getObxLavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxLavadoras',
        }
    }).done(function (res) {
        let opLav = "";
        let Lavadoras = JSON.parse(res);
        if (Array.isArray(Lavadoras)) {  //Correcto a lectura de Quendas.
            if (crud == "create") { //No caso de modificar ou baixa a Carga de Alisado, obviamos esta liña.
                opLav +=
                    `<option selected disabled value="">Escolla unha lavadora</option>`;
                for (let f of Lavadoras) {
                    opLav +=
                        `<option value="${f['id_lavadora']}">${f['lavadora']}</option>`
                }
            } else {
                for (let f of Lavadoras) {
                    if (f['lavadora'] == obx[0].lavadora) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opLav +=
                            `<option selected value="${f['id_lavadora']}">${f['lavadora']}</option>`
                    } else if (crud == "update") {
                        opLav +=
                            `<option value="${f['id_lavadora']}">${f['lavadora']}</option>`
                    }
                }
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opLav =
                `<option selected disabled value="">${Lavadoras}</option>`
        }
        document.getElementById('lavadora').innerHTML = opLav;
    });
}

export function getObxMaq_Ali(obx, crud) {
    //let tof = typeof obx; borrar!!!
    //alert(tof); Borrar!!!
    $.ajax({ //Executamos a función getObxMaq_Ali en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxMaq_Ali',
        }
    }).done(function (res) {
        let opMA = '';
        let Maq_Ali = JSON.parse(res);
        if (Array.isArray(Maq_Ali)) {  //Correcto a lectura de Quendas.
            if (crud == "create") { //No caso de modificar ou baixa a Carga de Alisado, obviamos esta liña.
                opMA +=
                    `<option selected disabled value="">Escolla unha máquina</option>`;
                for (let f of Maq_Ali) {
                    opMA +=
                        `<option value="${f['id_maq_ali']}">${f['maq_ali']}</option>`
                }
            } else {
                for (let f of Maq_Ali) {
                    if (f['maq_ali'] == obx[0].maquina_alisado) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opMA +=
                            `<option selected value="${f['id_maq_ali']}">${f['maq_ali']}</option>`
                    } else {
                        opMA +=
                            `<option value="${f['id_maq_ali']}">${f['maq_ali']}</option>`
                    }
                }
            }
        }
        document.getElementById('maq_ali').innerHTML = opMA;
    });
}

export function getObxProgramas(obx, crud) {
    //let tof = typeof obx; Borrar!!!
    //alert(tof); Borrar!!!
    $.ajax({ //Executamos a función getObxProgramas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxProgramas',
        }
    }).done(function (res) {
        let opProg = "";
        let Programas = JSON.parse(res);
        if (Array.isArray(Programas)) {  //Correcto a lectura de Quendas.
            if (crud == "create") { //No caso de modificar ou baixa a Carga de Alisado, obviamos esta liña.
                opProg +=
                    `<option selected disabled value="">Escolla un programa</option>`;
                for (let f of Programas) {
                    opProg +=
                        `<option value="${f['id_prog']}">${f['programa']}</option>`
                }
            } else {
                for (let f of Programas) {
                    if (f['programa'] == obx[0].programa) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opProg +=
                            `<option selected value="${f['id_prog']}">${f['programa']}</option>`
                    } else if (crud == "update") {
                        opProg +=
                            `<option value="${f['id_prog']}">${f['programa']}</option>`
                    }
                }
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opProg =
                `<option selected disabled value="">${Programas}</option>`
        }
        document.getElementById('programa').innerHTML = opProg;
    });
}

export function getObxQuendas(obx, crud) {
    //let tof = typeof obx; Borrar!!!
    //alert(tof); Borrar!!!
    $.ajax({ //Executamos a función getObxQuendas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxQuendas',
        }
    }).done(function (res) {
        let opQuenda = "";
        let Quendas = JSON.parse(res);
        if (Array.isArray(Quendas)) {  //Correcto a lectura de Quendas.
            if (crud == "create") { //No caso de modificar ou baixa a Carga de Alisado, obviamos esta liña.
                opQuenda +=
                    `<option selected disabled value="">Escolla unha quenda</option>`;
                for (let f of Quendas) {
                    opQuenda +=
                        `<option value="${f['id_quenda']}">${f['quenda']}</option>`
                }
            } else {
                for (let f of Quendas) {
                    if (f['quenda'] == obx[0].quenda) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opQuenda +=
                            `<option selected value="${f['id_quenda']}">${f['quenda']}</option>`
                    } else if (crud == "update") {
                        opQuenda +=
                            `<option value="${f['id_quenda']}">${f['quenda']}</option>`
                    }
                }
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opQuenda =
                `<option selected disabled value="">${Quendas}</option>`
        }
        document.getElementById('quenda').innerHTML = opQuenda;
    });
}

export function getObxRP_Costura() {
    $.ajax({ //Executamos a función getObxRP_Costura en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxRP_Costura',
        }
    }).done(function (res) {
        let opRPL;
        let RP_Costureiras = JSON.parse(res);
        if (Array.isArray(RP_Costureiras)) {
            opRPL =
                `<option selected disabled value="">Escolla unha prenda</option>`;
            for (let f of RP_Costureiras) {
                opRPL +=
                    `<option value="${f['id_rp']}">${f['descrip']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opRPL =
                `<option selected disabled value="">${RP_Costureiras}</option>`
        }
        document.getElementById('rp_costura_repaso').innerHTML = document.getElementById('rp_costura_baixa').innerHTML = document.getElementById('rp_costura_total_rp').innerHTML = document.getElementById('rp_costura_confeccion').innerHTML = document.getElementById('rp_costura_arranxo').innerHTML = document.getElementById('rp_costura_conxunto').innerHTML = opRPL;
    });
}

export function getObxRP_Lavadoras(obx, crud) {
    //let tof = typeof obx; Borrar!!!
    //alert(tof); Borrar!!!
    $.ajax({ //Executamos a función getObxRP_Lavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxRP_Lavadoras',
        }
    }).done(function (res) {
        let opRPL = "";
        let RP_Lavadoras = JSON.parse(res);
        if (Array.isArray(RP_Lavadoras)) {  //Correcto a lectura de Quendas.
            if (crud == "create") { //No caso de modificar ou baixa a Carga de Alisado, obviamos esta liña.
                opRPL +=
                    `<option selected disabled value="">Escolla unha quenda</option>`;
                for (let f of RP_Lavadoras) {
                    opRPL +=
                        `<option value="${f['id_rp']}">${f['descrip']}</option>`
                }
            } else {
                for (let f of RP_Lavadoras) {
                    if (f['descrip'] == obx[0].descrip) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opRPL +=
                            `<option selected value="${f['id_rp']}">${f['descrip']}</option>`
                    } else if (crud == "update") {
                        opRPL +=
                            `<option value="${f['id_rp']}">${f['descrip']}</option>`
                    }
                }
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opRPL =
                `<option selected disabled value="">${RP_Lavadoras}</option>`
        }
        document.getElementById('roupa_prenda').innerHTML = opRPL;
    });
}

export function getObxTuneis(obx, crud) {
    //let tof = typeof obx; Borrar!!!
    //alert(tof); Borrar!!!
    $.ajax({ //Executamos a función getObxTuneis en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxTuneis',
        }
    }).done(function (res) {
        let opTunel = "";
        let Tuneis = JSON.parse(res);
        if (Array.isArray(Tuneis)) {  //Correcto a lectura de Quendas.
            if (crud == "create") { //No caso de modificar ou baixa a Carga de Alisado, obviamos esta liña.
                opTunel +=
                    `<option selected disabled value="">Escolla un tunel</option>`;
                for (let f of Tuneis) {
                    opTunel +=
                        `<option value="${f['id_tunel']}">${f['tunel']}</option>`
                }
            } else {
                for (let f of Tuneis) {
                    if (f['tunel'] == obx[0].tunel) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opTunel +=
                            `<option selected value="${f['id_tunel']}">${f['tunel']}</option>`
                    } else {
                        opTunel +=
                            `<option value="${f['id_tunel']}">${f['tunel']}</option>`
                    }
                }
            }
        }
        document.getElementById('tunel').innerHTML = opTunel;
    });
}

/*****************MODAL E ERRO*****************/
export function postear_erro(p) {//Liñas de erro.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_erro',
            erro: p,
        }
    })
}

export function postear_modal(p) {//Activar Modal.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_modal',
            modal: p,
        }
    })
}

/*********EXPRESIÓNS REGULARES****************/
var expReg_1_99 = "^[1-9]\\d{0,1}$";//numeros do 1 ó 99 (non comezar por 0).
var expReg_1_999 = "^[1-9]\\d{0,2}$";//numeros do 1 ó 999 (non comezar por 0).
var expReg_1_9999 = "^[1-9]\\d{0,3}$";//numeros do 1 ó 999 (non comezar por 0).
var expReg__999 = "^\\d{0,3}$";//nada ou numeros do 0 ó 999

function comprobar_Rex(p, exp) {
    if (document.getElementById(p).value) {
        let cmpb = document.getElementById(p).value;
        var expreg = new RegExp(exp);
        if (!expreg.test(cmpb)) {
            //mostrarModal('Erro ' + p, 'O dato ' + p + ' é incorrecto.'); Pendente de borrar si no erro non queremos un modal!!!
            return false;
        } else {
            return true;
        }
    }
}

function comprobar_Rex_vacio(p, exp) {
    if (document.getElementById(p).value) {
        let cmpb = document.getElementById(p).value;
        var expreg = new RegExp(exp);
        if (!expreg.test(cmpb)) {
            //mostrarModal('Erro ' + p, 'O dato ' + p + ' é incorrecto.'); Pendente de borrar si no erro non queremos un modal!!!
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}