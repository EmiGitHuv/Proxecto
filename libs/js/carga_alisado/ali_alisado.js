import * as obxt from '../mod_Obxectos.js';
import * as prin from '../principal.js';

/********MODELOS HTML************/
export function modelos_centro_Maquinas_Alisado(obx, indice, crud) {
    let divBody =
        `<!--Corpo Máquinas de alisado-->
        <div class="container">
            <h2 class="display-4">Cargar Máquinas de alisado</h2>
            <!--Creación do formulario de Máquinas de alisado.-->
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
                `<!--Creación do campo de selección máquina de alisado.-->
                <div class="col-md-4">
                    <label for="maq_ali" class="form-label">Máquina de alisado</label>
                    <select class="form-select fs-4" name="maq_ali" id="maq_ali" aria-describedby="maq_aliFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha máquina válida.
                    </div>
                </div>`
    obxt.getObxMaq_Ali(obx, crud); //Select para os datos de Máquinas de lavado.
    divBody +=
                `<!--Creación do campo texto contador.-->
                <div class="col-md-2">
                    <label for="contador" class="form-label">Contador</label>
                    <input type="text" class="form-control fs-4" name="contador" id="contador" aria-describedby="pesoFeedback" required>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de meter nº de contador válido.
                    </div>
                </div>`
        //  Campo requerido para o dato Contador.
        divBody +=
                `<!--Input submit recarga a páxina.-->
                <div Id="divSubmitMaq_Alis" style="margin-top: 1rem">`
    switch (crud) { //Activmos o botón segundo vaiamos facer no crud.
        case "create":
            divBody +=
                    `<button id="crear_Maq_alis" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>`
            break
        case "update":
            divBody +=
                    `<button id="update_Maq_alis" class="btn btn-primary btn-lg fs-4" type="submit">Modificar</button>
                    <button id="undo_Maq_alis" class="btn btn-primary btn-lg fs-4" type="button"><i class="fa fa-undo"></i></button>`             
            break
        case "delete":
            divBody +=
                    `<button id="delete_Maq_alis" class="btn btn-primary btn-lg fs-4" type="submit">Borrar</button>
                    <button id="undo_Maq_alis" class="btn btn-primary btn-lg fs-4" type="button"><i class="fa fa-undo"></i></button>`
            break
    }            
    divBody +=                    
                `</div>
            </form>
            <div id="carg_ali"></div>
       </div>`
        document.body.innerHTML += divBody;
    switch (crud) {
        case "create":
            listadoDataObxCargas_Alisado();
            document.getElementById('crear_Maq_alis').addEventListener('click', crearObxMaq_Ali);
            break
        case "update":
            obx = obx[0];
            document.getElementById('contador').value = obx['contador'];
            document.getElementById('update_Maq_alis').addEventListener('click', function () { modificarObxMaq_Ali(indice) });
            document.getElementById('undo_Maq_alis').addEventListener('click',
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
            document.getElementById('contador').value = obx['contador'];
            document.getElementById('delete_Maq_alis').addEventListener('click', function () { borrarObxMaq_Ali(indice) });
            document.getElementById('undo_Maq_alis').addEventListener('click',
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
function listadoDataObxCargas_Alisado() {
    $.ajax({ //Executamos a función listadoDataObxCargas_Alisado en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'listadoDataObxCargas_Alisado',
        }
    }).done(function (res) {
        let opCA = "";
        let Carg_Ali = JSON.parse(res);
        if (Array.isArray(Carg_Ali) & Carg_Ali.length != 0) {
            opCA +=
                `<div class="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                <h2 class="display-4">Listado cargas máquinas de alisado</h2>
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
                                <a id="${idEditar}" href="index.html"><i class="fas fa-pen fa-xs"></i></a><!--Icona pen e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar.-->
                                <a id="${idBorrar}" href="index.html"><i class="fas fa-trash fa-xs"></i></a><!--Icona trash e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar.-->
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

/***********CREACIÓN REXISTROS**********/
function crearObxMaq_Ali() {
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

/***********LEER INDICE**********/
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

/***********MODIFICACION REXISTROS**********/
function modificarObxMaq_Ali(ind) {
    let nonErro = true;
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

/***********BORRAR REXISTROS**********/
function borrarObxMaq_Ali(ind) {
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