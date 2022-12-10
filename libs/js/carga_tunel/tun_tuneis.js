import * as obxt from '../mod_Obxectos.js';
import * as prin from '../principal.js';

/********MODELOS HTML************/
export function modelos_centro_tuneis_lavado(obx, indice, indice2, crud) {
    let divBody =
        `<!--Corpo Túneis de Lavado-->
        <div class="container">
            <h2 class="display-4">Cargar Túneis de Lavado</h2>
            <!--Creación do formulario de Túneis de lavado.-->
            <form class="row g-6 fs-4" method="post">`
    divBody +=
        `<!--Creación do campo de selección quenda.-->
                <div class="col-md-4">
                    <label for="quenda" class="form-label">Quenda</label>
                    <select class="form-select fs-4" name="quenda" id="quenda" aria-describedby="quendaFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha quenda válida.
                    </div>
                </div>`
    obxt.getObxQuendas(obx, crud); //Select para os datos de Quenda.
    divBody +=
        `<!--Creación do campo de selección centro.-->
                <div class="col-md-4">
                    <label for="centro" class="form-label">Centro</label>
                    <select class="form-select fs-4" name="centro" id="centro" aria-describedby="centroFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un centro válido.
                    </div>
                </div>`
    obxt.getObxCentros(obx, crud); //Select para os datos de Centros.
    divBody +=
        `<!--Creación do campo de selección túnel.-->
                <div class="col-md-4">
                    <label for="tunel" class="form-label">Túnel de lavado</label>
                    <select class="form-select fs-4" name="tunel" id="tunel" aria-describedby="tunelFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un túnel válido.
                    </div>
                </div>`
    obxt.getObxTuneis(obx, crud); //Select para os datos de Túneis.
    divBody +=
        `<!--Creación do campo texto Sacos.-->
                <div class="col-md-2">
                    <label for="sacos" class="form-label">Sacos</label>
                    <input type="text" class="form-control fs-4" name="sacos" id="sacos" aria-describedby="sacosFeedback" required>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de meter nº de sacos válido.
                    </div>
                </div>`
    //  Campo requerido para o dato Sacos.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                <div Id="divSubmitTuneis" style="margin-top: 1rem">`
    switch (crud) { //Activmos o botón segundo vaiamos facer no crud.
        case "create":
            divBody +=
                `<button id="crear_Tuneis_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>`
            break
        case "update":
            divBody +=
                `<button id="update_Tuneis_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Modificar</button>
                    <button id="undo_Tuneis_Lav" class="btn btn-primary btn-lg fs-4" type="button"><i class="fa fa-undo"></i></button>`
            break
        case "delete":
            divBody +=
                `<button id="delete_Tuneis_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Borrar</button>
                    <button id="undo_Tuneis_Lav" class="btn btn-primary btn-lg fs-4" type="button"><i class="fa fa-undo"></i></button>`
            break
    }
    divBody +=
        `</div>
            </form>
            <div id="carg_tun"></div>
        </div>`
    document.body.innerHTML += divBody;
    switch (crud) {
        case "create":
            listadoDataObxCargas_Tunel();
            document.getElementById('crear_Tuneis_Lav').addEventListener('click', crearObxCarg_Tunel);
            break
        case "update":
            obx = obx[0];
            document.getElementById('sacos').value = obx['sacos'];
            document.getElementById('update_Tuneis_Lav').addEventListener('click', function () { modificarObxCarg_Tunel(indice, indice2) });
            //ESTAN SIN CREAR!!! 
            document.getElementById('undo_Tuneis_Lav').addEventListener('click',
                function () {
                    $.ajax({
                        method: "POST",
                        url: "funcions.php",
                        data: {
                            funcion: 'postear_crud',
                            crud: 'create',
                        }
                    });
                    window.location.reload()
                });

            break
        case "delete":
            obx = obx[0];
            document.getElementById('sacos').value = obx['sacos'];
            document.getElementById('delete_Tuneis_Lav').addEventListener('click', function () { borrarObxCarg_Tunel(indice, indice2) });
            document.getElementById('undo_Tuneis_Lav').addEventListener('click',
                function () {
                    $.ajax({
                        method: "POST",
                        url: "funcions.php",
                        data: {
                            funcion: 'postear_crud',
                            crud: 'create',
                        }
                    });
                    window.location.reload()
                });
            break
    }
}

/***********LISTADOS DATA**********/
function listadoDataObxCargas_Tunel() {
    $.ajax({ //Executamos a función listadoDataObxCargas_Tunel en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'listadoDataObxCargas_Tunel',
        }
    }).done(function (res) {
        let opCT = "";
        let Carg_Tun = JSON.parse(res);
        if (Array.isArray(Carg_Tun) & Carg_Tun.length != 0) {
            opCT +=
                `<div class="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                <h2 class="display-4">Listado cargas túneis de lavado</h2>
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
            document.getElementById('carg_tun').innerHTML += opCT;
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

/***********CREACIÓN REXISTROS**********/
function crearObxCarg_Tunel() {
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

/***********LEER INDICE**********/
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
function modificarObxCarg_Tunel(ind, ind2) {
    let nonErro = true;
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

/***********BORRAR REXISTROS**********/
function borrarObxCarg_Tunel(ind, ind2) {
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



