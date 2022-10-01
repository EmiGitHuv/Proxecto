/**********FUNCIÓNS DOS OBXECTOS*********/
export function getObxCentros(Centros) {
    $.ajax({ //Executamos a función getObxCentros en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxCentros',
        }
    }).done(function (res) {
        let opCentro;
        Centros = JSON.parse(res);
        if (Array.isArray(Centros)) {
            opCentro =
                `<option selected disabled value="">Escolla un centro</option>`;
            for (let f of Centros) {
                opCentro +=
                    `<option value="${f['id_centro']}">${f['centro']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opCentro =
                `<option selected disabled value="">${Centros}</option>`
        }
        document.getElementById('centro').innerHTML = opCentro;

    });
}

export function getObxCostureira(Costureiras) {
    $.ajax({ //Executamos a función getObxCostureira en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxCostureira',
        }
    }).done(function (res) {
        let opCostureira;
        Costureiras = JSON.parse(res);
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

export function getObxLavadoras(Lavadoras) {
    $.ajax({ //Executamos a función getObxLavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxLavadoras',
        }
    }).done(function (res) {
        let opLav;
        Lavadoras = JSON.parse(res);
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

export function getObxMaq_Ali(Maq_Ali) {
    $.ajax({ //Executamos a función getObxMaq_Ali en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxMaq_Ali',
        }
    }).done(function (res) {
        let opMA;
        Maq_Ali = JSON.parse(res);
        if (Array.isArray(Maq_Ali)) {
            opMA =
                `<option selected disabled value="">Escolla unha máquina</option>`;
            for (let f of Maq_Ali) {
                opMA +=
                    `<option value="${f['id_maq_ali']}">${f['maq_ali']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opMA =
                `<option selected disabled value="">${Maq_Ali}</option>`
        }
        document.getElementById('maq_ali').innerHTML = opMA;
    });
}

export function getObxProgramas(Programas) {
    $.ajax({ //Executamos a función getObxProgramas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxProgramas',
        }
    }).done(function (res) {
        let opProg;
        Programas = JSON.parse(res);
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

export function getObxQuendas(Quendas) {
    $.ajax({ //Executamos a función getObxQuendas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxQuendas',
        }
    }).done(function (res) {
        let opQuenda;
        Quendas = JSON.parse(res);
        if (Array.isArray(Quendas)) {  //Correcto.
            opQuenda =
                `<option selected disabled value="">Escolla unha quenda</option>`;
            for (let f of Quendas) {
                opQuenda +=
                    `<option value="${f['id_quenda']}">${f['quenda']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opQuenda =
                `<option selected disabled value="">${Quendas}</option>`
        }
        document.getElementById('quenda').innerHTML = opQuenda;
    });
}

export function getObxRP_Costura(RP_Costureiras) {
    $.ajax({ //Executamos a función getObxRP_Costura en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxRP_Costura',
        }
    }).done(function (res) {
        let opRPL;
        RP_Costureiras = JSON.parse(res);
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

export function getObxRP_Lavadoras(RP_Lavadoras) {
    $.ajax({ //Executamos a función getObxRP_Lavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxRP_Lavadoras',
        }
    }).done(function (res) {
        let opRPL;
        RP_Lavadoras = JSON.parse(res);
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

export function getObxTuneis(Tuneis) {
    $.ajax({ //Executamos a función getObxTuneis en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxTuneis',
        }
    }).done(function (res) {
        let opTun;
        Tuneis = JSON.parse(res);
        if (Array.isArray(Tuneis)) {
            opTun =
                `<option selected disabled value="">Escolla un túnel</option>`;
            for (let f of Tuneis) {
                opTun +=
                    `<option value="${f['id_tunel']}">${f['tunel']}</option>`
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opTun =
                `<option selected disabled value="">${Tuneis}</option>`
        }
        document.getElementById('tunel').innerHTML = opTun;
    });
}

/***********CREACIÓN REXISTROS**********/
export function crearObxCostura() {
    let unErro = true;
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

export function crearObxTunel() {
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
                funcion: 'crearObxTunel',
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