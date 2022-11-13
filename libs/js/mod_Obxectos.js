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
    let tof = typeof obx;
    alert(tof);
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
                    } else {
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

export function getObxLavadoras_mult(obx, crud, array_lava_lav) {
    $.ajax({ //Executamos a función getObxLavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxLavadoras',
        }
    }).done(function (res) {
        let opLav = "";
        let Lavadoras = JSON.parse(res);
        /*if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        }
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }Borrar???!!!*/
        if (Array.isArray(Lavadoras)) {
            //Para atopar o campo activo que non se pode modificar.
            let Lavadora = (Lavadoras.find(l => l.id_lavadora === array_lava_lav[1])).lavadora;
            opLav +=
                `<option selected disabled value="${array_lava_lav[1]}">${Lavadora}</option>`
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
    let tof = typeof obx;
    alert(tof);
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
                    } else {
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

export function getObxProgramas_mult(obx, crud, array_lava_lav) {
    $.ajax({ //Executamos a función getObxProgramas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxProgramas',
        }
    }).done(function (res) {
        let opProg = "";
        let Programas = JSON.parse(res);
        /*if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        }
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }Borrar???!!!*/
        if (Array.isArray(Programas)) {
            //Para atopar o campo activo que non se pode modificar.
            let Programa = (Programas.find(p => p.id_prog === array_lava_lav[3])).programa;
            opProg +=
                `<option selected disabled value="${array_lava_lav[3]}">${Programa}</option>`
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
                    } else {
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

export function getObxQuendas_mult(obx, crud, array_lava_lav) {
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
        /*if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        }
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }Borrar???!!!*/
        if (Array.isArray(Quendas)) {
            //Para atopar o campo activo que non se pode modificar.
            let Quenda = (Quendas.find(q => q.id_quenda === array_lava_lav[0])).quenda;
            opQuenda +=
                `<option selected disabled value="${array_lava_lav[0]}">${Quenda}</option>`
        } else { //Incorrecto, recollemos mensaxe de erro
            opQuenda =
                `<option selected disabled value="">${Quenda}</option>`
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
    let tof = typeof obx;
    alert(tof);
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
                    } else {
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

export function getObxRP_Lavadoras_mult(obx, crud, array_lava_lav) {
    $.ajax({ //Executamos a función getObxRP_Lavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxRP_Lavadoras',
        }
    }).done(function (res) {
        let opRPL = "";
        let RP_Lavadoras = JSON.parse(res);
        /*if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        }
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }Borrar???!!!*/
        if (Array.isArray(RP_Lavadoras)) {
            //Para atopar o campo activo que non se pode modificar.
            let RP_L = (RP_Lavadoras.find(rp => rp.id_rp === array_lava_lav[2])).descrip;
            opRPL +=
                `<option selected disabled value="${array_lava_lav[2]}">${RP_L}</option>`
        } else { //Incorrecto, recollemos mensaxe de erro
            opRPL =
                `<option selected disabled value="">${RP_Lavadoras}</option>`
        }
        document.getElementById('roupa_prenda').innerHTML = opRPL;
    });
}

export function getObxTuneis(obx, crud) {
    let tof = typeof obx;
    alert(tof);
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

/***********CREACIÓN REXISTROS**********/
export function crearObxMaq_Ali() {
    let nonErro = true;
    if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('maq_ali', expReg_1_99)) {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('contador', expReg_1_9999)) {
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('contador').value = '';
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (nonErro) {
        $.ajax({ //Executamos a función getObxProgramas en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'crearObxMaq_Ali',
                quenda: document.getElementById('quenda').value,
                maq_ali: document.getElementById('maq_ali').value,
                contador: document.getElementById('contador').value,
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro')
                postear_erro(res);
            else {
                postear_modal(res);
            }
        });
    }
}

export function crearObxCarg_Tunel() {
    let nonErro = true;
    if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('centro', expReg_1_999)) {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('tunel', expReg_1_99)) {
        document.getElementById('tunel').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('tunel').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('sacos', expReg_1_99)) {
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('sacos').value = '';
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (nonErro) {
        $.ajax({ //Executamos a función getObxProgramas en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'crearObxCarg_Tunel',
                quenda: document.getElementById('quenda').value,
                centro: document.getElementById('centro').value,
                tunel: document.getElementById('tunel').value,
                sacos: document.getElementById('sacos').value,
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro')
                postear_erro(res);
            else {
                postear_modal(res);
            }
        });
    }
}

export function crearObxLavados_Lavadora() {
    let nonErro = true;
    let lava_lav_mult;
    let array_lava_lav = [];
    if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('centro', expReg_1_999)) {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('lavadora', expReg_1_99)) {
        document.getElementById('lavadora').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('lavadora').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('roupa_prenda', expReg_1_99)) {
        document.getElementById('roupa_prenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('roupa_prenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('programa', expReg_1_99)) {
        document.getElementById('programa').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('programa').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('peso', expReg_1_999)) {
        document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('peso').value = '';
        document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (document.getElementById('flexSwitchCheck').value) {
        lava_lav_mult = true;
        array_lava_lav = [
            document.getElementById('quenda').value,
            document.getElementById('lavadora').value,
            document.getElementById('roupa_prenda').value,
            document.getElementById('programa').value,
        ]
    } else {
        lava_lav_mult = false;
    }
    if (nonErro) {
        $.ajax({ //Executamos a función getObxProgramas en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'crearObxLavados_Lavadora',
                quenda: document.getElementById('quenda').value,
                lavadora: document.getElementById('lavadora').value,
                roupa_prenda: document.getElementById('roupa_prenda').value,
                programa: document.getElementById('programa').value,
                centro: document.getElementById('centro').value,
                peso: document.getElementById('peso').value,
                observacions: document.getElementById('observacions').value,
                lava_lav_mult: lava_lav_mult,
                array_lava_lav: array_lava_lav
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro')
                postear_erro(res);
            else {
                postear_modal(res);
            }
        });
    }
}

export function crearObxCostura() {
    let nonErro = true;
    document.getElementById('controlC').type = "hidden";
    if (comprobar_Rex('costureira_conxunto', expReg_1_99)) {
        document.getElementById('costureira_conxunto').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('costureira_conxunto').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('rp_costura_conxunto', expReg_1_99)) {
        document.getElementById('rp_costura_conxunto').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('rp_costura_conxunto').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex_vacio('repasoC', expReg__999)) {
        document.getElementById('repasoC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('repasoC').value = '';
        document.getElementById('repasoC').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex_vacio('baixaC', expReg__999)) {
        document.getElementById('baixaC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('baixaC').value = '';
        document.getElementById('baixaC').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex_vacio('total_rpC', expReg__999)) {
        document.getElementById('total_rpC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('total_rpC').value = '';
        document.getElementById('total_rpC').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex_vacio('confeccionC', expReg__999)) {
        document.getElementById('confeccionC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('confeccionC').value = '';
        document.getElementById('confeccionC').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex_vacio('arranxoC', expReg__999)) {
        document.getElementById('arranxoC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('arranxoC').value = '';
        document.getElementById('arranxoC').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    //Súmamos todos os campos contadores, se da cero, é incorrecto.
    document.getElementById('controlC').value = document.getElementById('repasoC').value + document.getElementById('baixaC').value + document.getElementById('total_rpC').value + document.getElementById('confeccionC').value + document.getElementById('arranxoC').value;
    if (document.getElementById('controlC').value == 0) {
        document.getElementById('repasoC').setAttribute('class', 'form-control fs-4 is-invalid');
        document.getElementById('baixaC').setAttribute('class', 'form-control fs-4 is-invalid');
        document.getElementById('total_rpC').setAttribute('class', 'form-control fs-4 is-invalid');
        document.getElementById('confeccionC').setAttribute('class', 'form-control fs-4 is-invalid');
        document.getElementById('arranxoC').setAttribute('class', 'form-control fs-4 is-invalid');
        document.getElementById('controlC').type = "text";
        document.getElementById('controlC').value = "Campos numéricos valeiros!!!";
        nonErro = false;
    }
    if (nonErro) {
        $.ajax({ //Executamos a función crearObxCostura en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'crearObxCostura',
                costureira: document.getElementById('costureira_conxunto').value,
                roupa_prenda: document.getElementById('rp_costura_conxunto').value,
                repaso: document.getElementById('repasoC').value,
                baixa: document.getElementById('baixaC').value,
                total_rp: document.getElementById('total_rpC').value,
                confeccion: document.getElementById('confeccionC').value,
                arranxo: document.getElementById('arranxoC').value,
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro')
                postear_erro(res);
            else {
                postear_modal(res);
            }
        });
    }
}

/***********CREACIÓN LISTADOS DATA**********/
export function lerDataObxCargas_Alisado() {
    $.ajax({ //Executamos a función lerDataObxCargas_Alisado en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'lerDataObxCargas_Alisado',
        }
    }).done(function (res) {
        let opCA = "";
        let Carg_Ali = JSON.parse(res);
        if (Array.isArray(Carg_Ali) & Carg_Ali.length != 0) {
            opCA +=
                `<h2 class="display-4">Listado cargas máquinas de alisado</h2>
                <table class="table table-striped table-hover"><!--Táboa Cargar máquinas de alisado-->
                    <thead class="fs-4"><!--Cabeceira-->
                        <tr>
                            <th>Data</th>
                            <th>Quenda</th>
                            <th>Máquina de alisado</th>
                            <th class="text-center">Contador</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider fs-5"><!--Rexistros-->`
            for (let f of Carg_Ali) {
                let idEditar = "editar" + f['id_carg_alis'];
                let idBorrar = "borrar" + f['id_carg_alis'];
                opCA +=
                    `<tr>
                            <td>${f['data']}</td><!--Data-->
                            <td>${f['quenda']}</td><!--Quenda-->
                            <td>${f['maquina_alisado']}</td><!--Máquina-->
                            <td class="text-end">${f['contador']}</td>
                            <td class="fs-3" style="padding-left: 4rem; padding-top:0">
                                <a id="${idEditar}" href="index.html"><i class="fas fa-pen fa-xs"></i></a><!--Icona pen e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar!!!.-->
                                <a id="${idBorrar}" href="index.html"><i class="fas fa-trash fa-xs"></i></a><!--Icona trash e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar.!!!-->
                            </td>
                        </tr>`
            }
            opCA +=
                `</tbody>
                </table>
            </div>`
            document.getElementById('carg_ali').innerHTML = opCA;
            for (let f of Carg_Ali) { //Id para os iconas baseado no id dos rexistros.
                let idEditar = "editar" + f['id_carg_alis']; //editar + id do rexistro.
                let idBorrar = "borrar" + f['id_carg_alis']; //borrar + id do rexistro.
                document.getElementById(idEditar).addEventListener('click', function () { lerObxCargas_Alisado(idEditar, "update") }); //Escoita eventos para o icona editar.
                document.getElementById(idBorrar).addEventListener('click', function () { lerObxCargas_Alisado(idEditar, "delete") }); //Escoita eventos para o icona borrar.
            }
        }
    });
}

export function lerDataObxCargas_Tunel() {
    $.ajax({ //Executamos a función lerDataObxCargas_Tunel en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'lerDataObxCargas_Tunel',
        }
    }).done(function (res) {
        let opCT = "";
        let Carg_Tun = JSON.parse(res);
        if (Array.isArray(Carg_Tun) & Carg_Tun.length != 0) {
            opCT +=
                `<h2 class="display-4">Listado cargas túneis de lavado</h2>
                <table class="table table-striped table-hover"><!--Táboa Cargar túneis de lavado-->
                    <thead class="fs-4"><!--Cabeceira-->
                        <tr>
                            <th>Data</th>
                            <th>Quenda</th>
                            <th>Centro</th>
                            <th>Túnel de lavado</th>
                            <th class="text-center">Sacos</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider fs-5"><!--Rexistros-->`
            for (let f of Carg_Tun) {
                let idEditar = "editar" + f['id_lavado'];
                let idBorrar = "borrar" + f['id_lavado'];
                opCT +=
                    `<tr>
                            <td>${f['data']}</td><!--Data-->
                            <td>${f['quenda']}</td><!--Quenda-->
                            <td>${f['centro']}</td><!--Centro-->
                            <td>${f['tunel']}</td><!--Máquina-->
                            <td class="text-end">${f['sacos']}</td>
                            <td class="fs-3" style="padding-left: 4rem; padding-top:0">
                                <a id="${idEditar}" href="index.html"><i class="fas fa-pen fa-xs"></i></a><!--Icona pen e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar!!!.-->
                                <a id="${idBorrar}" href="index.html"><i class="fas fa-trash fa-xs"></i></a><!--Icona trash e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar.!!!-->
                            </td>
                        </tr>`
            }
            opCT +=
                `</tbody>
                </table>
            </div>`
            document.getElementById('carg_tun').innerHTML = opCT;
            for (let f of Carg_Tun) { //Id para os iconas baseado no id dos rexistros.
                let idEditar = "editar" + f['id_lavado']; //editar + id do rexistro.
                let idEdita2 = "edita2" + f['id_ctl']; //editar + id do rexistro.
                let idBorrar = "borrar" + f['id_lavado']; //borrar + id do rexistro.
                document.getElementById(idEditar).addEventListener('click', function () { lerObxCargas_Tunel(idEditar, idEdita2, "update") }); //Escoita eventos para o icona editar.
                document.getElementById(idBorrar).addEventListener('click', function () { lerObxCargas_Tunel(idEditar, idEdita2, "delete") }); //Escoita eventos para o icona borrar.
            }
        }
    });
}

export function lerDataObxLavados_Lavadoras() {
    $.ajax({ //Executamos a función lerDataObxCargas_Tunel en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'lerDataObxLavados_Lavadoras',
        }
    }).done(function (res) {
        let opLL = "";
        let Lava_lav = JSON.parse(res);
        if (Array.isArray(Lava_lav) & Lava_lav.length != 0) {
            opLL +=
                `<h2 class="display-4">Listado Cargas de lavados de lavadora</h2>
                <table class="table table-striped table-hover"><!--Táboa Centro_kll-->
                    <thead class="fs-4"><!--Cabeceira-->
                        <tr>
                            <th>Data</th>
                            <th>Quenda</th>
                            <th>Centro</th>
                            <th>Lavadora</th>
                            <th>Roupa/Prenda</th>
                            <th>Programa</th>
                            <th class="text-center">Peso</th>
                            <th>Observacións</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider fs-5"><!--Rexistros-->`
            for (let f of Lava_lav) {
                let idEditar = "editar" + f['id_lavado'];
                let idBorrar = "borrar" + f['id_lavado'];
                opLL +=
                    `<tr>
                        <td>${f['data']}</td><!--Data-->
                        <td>${f['quenda']}</td><!--Quenda-->
                        <td>${f['centro']}</td><!--Centro-->
                        <td>${f['lavadora']}</td><!--Lavadora-->
                        <td>${f['descrip']}</td><!--Descripción-->
                        <td>${f['programa']}</td><!--Programa-->
                        <td class="text-end">${f['peso']}</td>
                        <td>${f['observacions']}</td><!--Observacións-->
                        <td class="fs-3" style="padding-left: 4rem; padding-top:0">
                            <a id="${idEditar}" href="index.html"><i class="fas fa-pen fa-xs"></i></a><!--Icona pen e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar!!!.-->
                            <a id="${idBorrar}" href="index.html"><i class="fas fa-trash fa-xs"></i></a><!--Icona trash e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar.!!!-->
                        </td>
                    </tr>`
            }
            opLL +=
                `</tbody>
                </table>
            </div>`
            document.getElementById('lava_lav').innerHTML = opLL;
            for (let f of Lava_lav) { //Id para os iconas baseado no id dos rexistros.
                let idEditar = "editar" + f['id_lavado']; //editar + id do rexistro.
                let idEdita2 = "edita2" + f['id_ctl']; //editar + id do rexistro.
                let idBorrar = "borrar" + f['id_lavado']; //borrar + id do rexistro.
                document.getElementById(idEditar).addEventListener('click', function () { lerObxLavados_Lavadoras(idEditar, idEdita2, "update") }); //Escoita eventos para o icona editar.
                document.getElementById(idBorrar).addEventListener('click', function () { lerObxLavados_Lavadoras(idEditar, idEdita2, "delete") }); //Escoita eventos para o icona borrar.
            }
        }
    });
}

/***********EDITAR INDICE**********/
function lerObxCargas_Alisado(id, crud) {
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'lerObxCargas_Alisado',
            indice: id.substring(6),
            crud: crud
        }
    })
}

function lerObxCargas_Tunel(id, id2, crud) {
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'lerObxCargas_Tunel',
            indice: id.substring(6),
            indice2: id2.substring(6),
            crud: crud
        }
    })
}

function lerObxLavados_Lavadoras(id, id2, crud) {
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'lerObxLavados_Lavadoras',
            indice: id.substring(6),
            indice2: id2.substring(6),
            crud: crud
        }
    })
}

/***********MODIFICACION REXISTROS**********/
export function modificarObxMaq_Ali(ind) {
     let nonErro = true;
    /*if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('maq_ali', expReg_1_99)) {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    } pendiente de borrar!!! 21/10/22   */ 
    if (comprobar_Rex('contador', expReg_1_9999)) {
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('contador').value = '';
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (nonErro) {
        $.ajax({ //Executamos a función modificarObxMaq_Ali en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'modificarObxMaq_Ali',
                quenda: document.getElementById('quenda').value,
                maq_ali: document.getElementById('maq_ali').value,
                contador: document.getElementById('contador').value,
                id_carg_alis: ind,
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro')
                postear_erro(res);
            else {
                postear_modal(res);
            }
        });
    }
}

export function modificarObxCarg_Tunel(ind, ind2) {
    let nonErro = true;
    /*if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('Carg_Tunel', expReg_1_99)) {
        document.getElementById('Carg_Tunel').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('Carg_Tunel').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    } pendiente de borrar!!! 21/10/22   */
    if (comprobar_Rex('sacos', expReg_1_9999)) {
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('sacos').value = '';
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }
    if (nonErro) {
        $.ajax({ //Executamos a función modificarObxCarg_Tunel en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'modificarObxCarg_Tunel',
                quenda: document.getElementById('quenda').value,
                centro: document.getElementById('centro').value,
                tunel: document.getElementById('tunel').value,
                sacos: document.getElementById('sacos').value,
                id_lav: ind,
                id_ctl: ind2,
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro')
                postear_erro(res);
            else {
                postear_modal(res);
            }
        });
    }
}

export function modificarObxLavados_Lavadoras(ind, ind2) {
    let nonErro = true;
    /*if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('centro', expReg_1_999)) {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('lavadora', expReg_1_99)) {
        document.getElementById('lavadora').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('lavadora').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('roupa_prenda', expReg_1_99)) {
        document.getElementById('roupa_prenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('roupa_prenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('programa', expReg_1_99)) {
        document.getElementById('programa').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('programa').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }*/
    if (comprobar_Rex('peso', expReg_1_999)) {
        document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('peso').value = '';
        document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-invalid');
        nonErro = false;
    }    if (nonErro) {
        $.ajax({ //Executamos a función modificarObxLavados_Lavadoras en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'modificarObxLavados_Lavadoras',
                /*************PENDIENTE CONCRETAR************/
                /*
                quenda: document.getElementById('quenda').value,
                centro: document.getElementById('centro').value,
                tunel: document.getElementById('tunel').value,
                sacos: document.getElementById('sacos').value,
                id_lav: ind,
                id_ctl: ind2,*/
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro')
                postear_erro(res);
            else {
                postear_modal(res);
            }
        });
    }
}

/***********BORRAR REXISTROS**********/
export function borrarObxMaq_Ali(ind) {
    $.ajax({ //Executamos a función borrarObxMaq_Ali en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'borrarObxMaq_Ali',
            id_carg_alis: ind,
        }
    }).done(function (res) {
        if (res.substring(1, 5) == 'Erro')
            postear_erro(res);
        else {
            postear_modal(res);
        }
    });
}

export function borrarObxCarg_Tunel(ind, ind2) {
    $.ajax({ //Executamos a función borrarObxCarg_Tunel en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'borrarObxCarg_Tunel',
            id_lavado: ind,
            id_ctl: ind2
        }
    }).done(function (res) {
        if (res.substring(1, 5) == 'Erro')
            postear_erro(res);
        else {
            postear_modal(res);
        }
    });
}

export function borrarObxLavados_Lavadora(ind, ind2) {
    $.ajax({ //Executamos a función borrarObxLavados_Lavadora en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'borrarObxLavados_Lavadora',
            id_lavado: ind,
            id_kll: ind2
        }
    }).done(function (res) {
        if (res.substring(1, 5) == 'Erro')
            postear_erro(res);
        else {
            postear_modal(res);
        }
    });
}

/*****************MODAL E ERRO*****************/
function postear_erro(p) {//Liñas de erro.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_erro',
            erro: p,
        }
    })
}

function postear_modal(p) {//Activar Modal.
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
let expReg_1_99 = "^[1-9]\\d{0,1}$";//numeros do 1 ó 99 (non comezar por 0).
let expReg_1_999 = "^[1-9]\\d{0,2}$";//numeros do 1 ó 999 (non comezar por 0).
let expReg_1_9999 = "^[1-9]\\d{0,3}$";//numeros do 1 ó 999 (non comezar por 0).
let expReg__999 = "^\\d{0,3}$";//nada ou numeros do 0 ó 999

export function comprobar_Rex(p, exp) {
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

export function comprobar_Rex_vacio(p, exp) {
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