import * as mod from './mod_modelos.js';
import * as prin from './principal.js';

/**********FUNCIÓNS DOS OBXECTOS*********/
export function getObxCentros(obx, crud) {
    $.ajax({ //Executamos a función getObxCentros en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxCentros',
        }
    }).done(function (res) {
        let opCentro = "";
        let Centros = JSON.parse(res);
        if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        }
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }
        if (Array.isArray(Centros)) {  //Correcto a lectura de Centros.
            for (let f of Centros) {
                if (f['centro'] == obx['centro']) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                    opCentro +=
                        `<option selected value="${f['id_centro']}">${f['centro']}</option>`
                } else {
                    opCentro +=
                        `<option value="${f['id_centro']}">${f['centro']}</option>`
                }
            }
            if (crud != "update" & crud != "delete") { //No caso de modificar a Carga de Alisado, obviamos esta liña.
                opCentro +=
                    `<option selected disabled value="">Escolla unha centro</option>`;
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opCentro =
                `<option selected disabled value="">${Centros}</option>`
        }
        document.getElementById('centro').innerHTML = opCentro;
    });
}

export function getObxCostureira(obx, crud) {
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
    $.ajax({ //Executamos a función getObxLavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxLavadoras',
        }
    }).done(function (res) {
        let opLav;
        let Lavadoras = JSON.parse(res);
        if (Array.isArray(Lavadoras)) {
            opLav =
                `<option selected disabled value="">Escolla unha lavadora</option>`;
            for (let f of Lavadoras) {
                opLav +=
                    `<option value="${f['id_lavadora']}">${f['lavadora']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opLav =
                `<option selected disabled value="">${Lavadoras}</option>`
        }
        document.getElementById('lavadora').innerHTML = opLav;
    });
}

export function getObxMaq_Ali(obx, crud) {
    $.ajax({ //Executamos a función getObxMaq_Ali en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxMaq_Ali',
        }
    }).done(function (res) {
        let opMA = '';
        let Maq_Ali = JSON.parse(res);
        if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        }
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }
        if (Array.isArray(Maq_Ali)) {  //Correcto a lectura de Quendas.
            for (let f of Maq_Ali) {
                if (f['maq_ali'] == obx['maquina_alisado']) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                    opMA +=
                        `<option selected value="${f['id_maq_ali']}">${f['maq_ali']}</option>`
                } else {
                    opMA +=
                        `<option value="${f['id_maq_ali']}">${f['maq_ali']}</option>`
                }
            }
            if (crud != "update" & crud != "delete") { //No caso de modificar a Carga de Alisado, obviamos esta liña.
                opMA +=
                    `<option selected disabled value="">Escolla unha máquina</option>`;
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opMA =
                `<option selected disabled value="">${Maq_Ali}</option>`
        }
        document.getElementById('maq_ali').innerHTML = opMA;
    });
}

export function getObxProgramas(obx, crud) {
    $.ajax({ //Executamos a función getObxProgramas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxProgramas',
        }
    }).done(function (res) {
        let opProg;
        let Programas = JSON.parse(res);
        if (Array.isArray(Programas)) {
            opProg =
                `<option selected disabled value="">Escolla un programa</option>`;
            for (let f of Programas) {
                opProg +=
                    `<option value="${f['id_prog']}">${f['programa']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opProg =
                `<option selected disabled value="">${Programas}</option>`
        }
        document.getElementById('programa').innerHTML = opProg;
    });
}

export function getObxQuendas(obx, crud) {
    $.ajax({ //Executamos a función getObxQuendas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxQuendas',
        }
    }).done(function (res) {
        let opQuenda = "";
        let Quendas = JSON.parse(res);
        if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        } 
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }
        if (Array.isArray(Quendas)) {  //Correcto a lectura de Quendas.
            for (let f of Quendas) {
                if (f['quenda'] == obx['quenda']) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                    opQuenda +=
                        `<option selected value="${f['id_quenda']}">${f['quenda']}</option>`
                } else {
                    opQuenda +=
                        `<option value="${f['id_quenda']}">${f['quenda']}</option>`                        
                    }
            }
            if (crud != "update" & crud != "delete") { //No caso de modificar a Carga de Alisado, obviamos esta liña.
                opQuenda +=
                    `<option selected disabled value="">Escolla unha quenda</option>`;
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opQuenda =
                `<option selected disabled value="">${Quendas}</option>`
        }
        document.getElementById('quenda').innerHTML = opQuenda;
    });
}

export function getObxRP_Costura(obx, crud) {
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
    $.ajax({ //Executamos a función getObxRP_Lavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxRP_Lavadoras',
        }
    }).done(function (res) {
        let opRPL;
        let RP_Lavadoras = JSON.parse(res);
        if (Array.isArray(RP_Lavadoras)) {
            opRPL =
                `<option selected disabled value="">Escolla unha prenda</option>`;
            for (let f of RP_Lavadoras) {
                opRPL +=
                    `<option value="${f['id_rp']}">${f['descrip']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opRPL =
                `<option selected disabled value="">${RP_Lavadoras}</option>`
        }
        document.getElementById('roupa_prenda').innerHTML = opRPL;
    });
}

export function getObxTuneis(obx, crud) {
    $.ajax({ //Executamos a función getObxTuneis en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxTuneis',
        }
    }).done(function (res) {
        let opTunel = "";
        let Tuneis = JSON.parse(res);
        if (obx != null) { //Con crud "create" ven o obx 'null'.
            obx = obx[0]//De array de array collo o único array.
        }
        else {
            obx = [] //obx 'null' creamos array valeiro, así non da erro máis adiante.
        }
        if (Array.isArray(Tuneis)) {  //Correcto a lectura de Tuneis.
            for (let f of Tuneis) {
                if (f['tunel'] == obx['tunel']) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                    opTunel +=
                        `<option selected value="${f['id_tunel']}">${f['tunel']}</option>`
                } else {
                    opTunel +=
                        `<option value="${f['id_tunel']}">${f['tunel']}</option>`
                }
            }
            if (crud != "update" & crud != "delete") { //No caso de modificar a Carga de Alisado, obviamos esta liña.
                opTunel +=
                    `<option selected disabled value="">Escolla unha tunel</option>`;
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opTunel =
                `<option selected disabled value="">${Tuneis}</option>`
        }
        document.getElementById('tunel').innerHTML = opTunel;
    });
}

/***********CREACIÓN REXISTROS**********/
export function crearObxCostura() {
    let unErro = true;
    document.getElementById('controlC').type = "hidden";
    if (comprobar_Rex('costureira_conxunto', expReg_1_99)) {
        document.getElementById('costureira_conxunto').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('costureira_conxunto').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('rp_costura_conxunto', expReg_1_99)) {
        document.getElementById('rp_costura_conxunto').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('rp_costura_conxunto').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex_vacio('repasoC', expReg__999)) {
        document.getElementById('repasoC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('repasoC').value = '';
        document.getElementById('repasoC').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex_vacio('baixaC', expReg__999)) {
        document.getElementById('baixaC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('baixaC').value = '';
        document.getElementById('baixaC').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex_vacio('total_rpC', expReg__999)) {
        document.getElementById('total_rpC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('total_rpC').value = '';
        document.getElementById('total_rpC').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex_vacio('confeccionC', expReg__999)) {
        document.getElementById('confeccionC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('confeccionC').value = '';
        document.getElementById('confeccionC').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex_vacio('arranxoC', expReg__999)) {
        document.getElementById('arranxoC').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('arranxoC').value = '';
        document.getElementById('arranxoC').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
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
        unErro = false;
    }
    if (unErro) {
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

export function crearObxLavadora() {
    let unErro = true;
    if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('centro', expReg_1_999)) {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('lavadora', expReg_1_99)) {
        document.getElementById('lavadora').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('lavadora').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('roupa_prenda', expReg_1_99)) {
        document.getElementById('roupa_prenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('roupa_prenda').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('programa', expReg_1_99)) {
        document.getElementById('programa').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('programa').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('peso', expReg_1_999)) {
        document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('peso').value = '';
        document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (unErro) {
        $.ajax({ //Executamos a función getObxProgramas en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'crearObxLavadora',
                quenda: document.getElementById('quenda').value,
                centro: document.getElementById('centro').value,
                lavadora: document.getElementById('lavadora').value,
                roupa_prenda: document.getElementById('roupa_prenda').value,
                programa: document.getElementById('programa').value,
                peso: document.getElementById('peso').value,
                observacions: document.getElementById('observacions').value
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

export function crearObxMaq_Ali() {
    let unErro = true;
    if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('maq_ali', expReg_1_99)) {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('contador', expReg_1_9999)) {
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('contador').value = '';
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (unErro) {
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
    let unErro = true;
    if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('centro', expReg_1_999)) {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('centro').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('tunel', expReg_1_99)) {
        document.getElementById('tunel').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('tunel').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('sacos', expReg_1_99)) {
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('sacos').value = '';
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (unErro) {
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
                    <thead class="display-6"><!--Cabeceira-->
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
                    <thead class="display-6"><!--Cabeceira-->
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
                let idBorra2 = "borra2" + f['id_ctl']; //borrar + id do rexistro.
                document.getElementById(idEditar).addEventListener('click', function () { lerObxCargas_Tunel(idEditar, idEdita2, "update") }); //Escoita eventos para o icona editar.
                document.getElementById(idBorrar).addEventListener('click', function () { lerObxCargas_Tunel(idEditar, idEdita2, "delete") }); //Escoita eventos para o icona borrar.
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

/***********MODIFICACION REXISTROS**********/
export function modificarObxMaq_Ali(ind) {
     let unErro = true;
    /*if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('maq_ali', expReg_1_99)) {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('maq_ali').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    } pendiente de borrar!!! 21/10/22   */ 
    if (comprobar_Rex('contador', expReg_1_9999)) {
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('contador').value = '';
        document.getElementById('contador').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (unErro) {
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
    let unErro = true;
    /*if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    }
    if (comprobar_Rex('Carg_Tunel', expReg_1_99)) {
        document.getElementById('Carg_Tunel').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('Carg_Tunel').setAttribute('class', 'form-select fs-4 is-invalid');
        unErro = false;
    } pendiente de borrar!!! 21/10/22   */
    if (comprobar_Rex('sacos', expReg_1_9999)) {
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-valid');
    } else {
        document.getElementById('sacos').value = '';
        document.getElementById('sacos').setAttribute('class', 'form-control fs-4 is-invalid');
        unErro = false;
    }
    if (unErro) {
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
    alert("Leido " + ind + " borrar")
    $.ajax({ //Executamos a función borrarObxMaq_Ali en funcions.php.
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