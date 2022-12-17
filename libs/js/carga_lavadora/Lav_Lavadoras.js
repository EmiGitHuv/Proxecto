import * as obxt from '../mod_Obxectos.js';
import * as prin from '../principal.js';
import * as mod from '../mod_modelos.js';

/**********VARIABLES GLOBAIS*************/
var id_lavado_array; //Recolle o valor do id_lavado a crear no caso de Multi_carga.
var id_lavado_multi; //Recolle os valores id_lavado común da multi carga.
var id_kll_multi; //Recolle os valores id_lavado común da multi carga.

/**********FUNCIÓNS DOS OBXECTOS*********/
function getObxCentros_lavadoras(obx, crud, i) {
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
                    if (f['centro'] == obx[i].centro) { //Para seleccionar o campo activo igual que o campo do rexistro a modificar.
                        opCentro +=
                            `<option selected value="${f['id_centro']}">${f['centro']}</option>`;
                    } else if (crud == "update") {
                        opCentro +=
                            `<option value="${f['id_centro']}">${f['centro']}</option>`
                    }
                }
            }
        } else { //Incorrecto, recollemos mensaxe de erro
            opCentro =
                `<option selected disabled value="">${Centros}</option>`
        }
        if (crud == 'create' || obx.length == 1) { //obx.length==1 no caso de non haber multicarga.
            document.getElementById('centro').innerHTML = opCentro;
            document.getElementById('ind_centro').value = document.getElementById('centro').value //Necesario para o update sempre.
        } else {
            document.getElementById('centro' + i).innerHTML = opCentro;
            document.getElementById('ind_centro' + i).value = document.getElementById('centro' + i).value //Necesario para o update sempre.
            let centroValeiro = true;
            for (let k = 0; k < obx.length; k++) {
                if (!document.getElementById('centro' + k).value) {
                    centroValeiro = false
                }
            }
            if (centroValeiro) {
                deshabCentro_lavadora(obx)
            }
        }
    });
}
/********MODELOS HTML************/
export function modelos_centro_lavadora(obx, indice, indice2, crud, lava_lav_mult) {
    if (obx == null) {//Primeira carga non ten obx.
        obx = [];    
    }
    let divBody =
        `<!--Corpo Lavadoras-->
        <div class="container">
            <h2 class="display-4">Cargar lavadoras</h2>
            <!--Creación do formulario de Lavadoras.-->
            <form class="row g-6 fs-4" >`
    divBody +=
                `<!--Creación dunha sección kll-->
                <fieldset id="sec_kll" class="row g-6 fs-4 form-group border border-primary pb-4">
                    <legend style="all:revert; font-weight: lighter">Carga Lavadora:</legend>`
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
    if (lava_lav_mult == 'false'||lava_lav_mult==null)  {
        obxt.getObxQuendas(obx, crud); //Select para os datos de Quenda.
    }
    divBody +=
                    `<!--Creación do campo de selección lavadora.-->
                    <div class="col-md-4">
                        <label for="lavadora" class="form-label">Lavadora</label>
                        <select class="form-select fs-4" name="lavadora" id="lavadora" aria-describedby="lavadoraFeedback" required></select>
                        <div class="valid-feedback">
                            Vai ben!
                        </div>
                        <div class="invalid-feedback">
                            Fai o favor de escoller unha lavadora válida.
                        </div>
                    </div>`
    if (lava_lav_mult == 'false'||lava_lav_mult==null)  {
        obxt.getObxLavadoras(obx, crud); //Select para os datos de Lavadoras.
    }
    divBody +=
                    `<!--Creación do campo de selección Roupa_prenda.-->
                    <div class="col-md-4">
                        <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                        <select class="form-select fs-4" name="roupa_prenda" id="roupa_prenda" aria-describedby="roupa_prendaFeedback" required></select>
                        <div class="valid-feedback">
                            Vai ben!
                        </div>
                        <div class="invalid-feedback">
                            Fai o favor de escoller unha prenda válida.
                        </div>
                    </div>`
    if (lava_lav_mult == 'false'||lava_lav_mult==null) {
        obxt.getObxRP_Lavadoras(obx, crud); //Select para os datos de RP_Lavadoras.
    }
    divBody +=
                    `<!--Creación do campo de selección programa.-->
                    <div class="col-md-4">
                        <label for="programa" class="form-label">Programa</label>
                        <select class="form-select fs-4" name="programa" id="programa" aria-describedby="programaFeedback" required></select>
                        <div class="valid-feedback">
                            Vai ben!
                        </div>
                        <div class="invalid-feedback">
                            Fai o favor de escoller un programa válido.
                        </div>
                    </div>`
    if (lava_lav_mult == 'false'||lava_lav_mult==null)  {
        obxt.getObxProgramas(obx, crud); //Select para os datos de Programas.
    }
    if (crud != 'delete') {
        divBody +=
            `<!--Creación do switch de múlticarga.-->
                    <div class="form-check form-switch col-md-4 align-end pt-5">
                        <label class="form-check-label" for="flexSwitchCheck">Cargas Múltiples</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheck"`
            if (lava_lav_mult == 'true' || (crud == "update" & obx.length > 1)) {
                divBody += ` checked`
                if (crud == "update" & obx.length > 1) {
                    divBody += ` disabled`
                }
            }
        divBody += `>
                    </div>`
    }
    divBody +=
                `</fieldset> <!--Fin división kll -->`
    if (crud == "create" || obx.length == 1) { //i==0 no caso de non haber multicarga.
                    /*<!--Creación input type 'hidden'/('text' para probas) para gardar ant_centro para volver a activar si dase o caso.-->
                    <input type="text" id="ant_centro"></input>*/
        divBody +=
                `<!--Creación do campo de selección centro.-->
                <div class="col-md-4">
                    <label for="centro" id="id_centro" class="form-label">Centro</label>
                    <select class="form-select fs-4" name="centro" id="centro" aria-describedby="centroFeedback" required></select>
                    <!--Creación input type 'hidden'/('text' para probas) para gardar ind_centro para o seu uso en update (kll-c).-->
                    <input type="hidden" id="ind_centro">
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un centro válido.
                    </div>
                </div>`
        getObxCentros_lavadoras(obx, crud, 0); //Select para os datos de Centros. 
        divBody +=
                `<!--Creación do campo texto peso.-->
                <div class="col-md-2">
                    <label for="peso" class="form-label">Peso</label>
                    <input type="text" class="form-control fs-4" name="peso" id="peso" aria-describedby="pesoFeedback" required>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de meter un peso válido.
                    </div>
                </div>`
        //  Campo requerido para o dato Peso.
        divBody +=
                `<!--Creación do area de texto observacións.-->
                <div class="col-md-6">
                    <label for="observacions" class="form-label">Observacións</label>
                    <textarea class="form-control fs-4" name="observacions" id="observacions" placeholder="Observacións"></textarea>
                </div>`
    //Campo non requerido para os datos Observacións.
    } else {
        for (let i = 0; i < obx.length; i++) {
            divBody +=
                `<!--Creación do campo de selección centro.-->
                <div class="col-md-4">
                    <label for="centro" id="id_centro${i}" class="form-label">Centro</label>
                    <select class="form-select fs-4" name="centro" id="centro${i}" aria-describedby="centroFeedback" required></select>
                    <!--Creación input type 'hidden'/('text' para probas) para gardar ind_centro para o seu uso en update (kll-c).-->
                    <input type="hidden" id="ind_centro${i}">
                    <!--Creación input type 'hidden'/('text' para probas) para gardar ant_centro para volver a activar si dase o caso.-->
                    <input type="hidden" id="ant_centro${i}">
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un centro válido.
                    </div>
                </div>`
            getObxCentros_lavadoras(obx, crud, i);
            divBody +=
                `<!--Creación do campo texto peso.-->
                <div class="col-md-2">
                    <label for="peso" class="form-label">Peso</label>
                    <input type="text" class="form-control fs-4" name="peso" id="peso${i}" aria-describedby="pesoFeedback" required>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de meter un peso válido.
                    </div>
                </div>`
            //  Campo requerido para o dato Peso.
            divBody +=
                `<!--Creación do area de texto observacións.-->
                <div class="col-md-6">
                    <label for="observacions" class="form-label">Observacións</label>
                    <textarea class="form-control fs-4" name="observacions" id="observacions${i}" placeholder="Observacións"></textarea>
                </div>`
            //Campo non requerido para os datos Observacións.
        }
    }
    divBody +=
                `<!--Input submit recarga a páxina.-->
                <div Id="divSubmitLavadoras" style="margin-top: 1rem">`
    switch (crud) { //Activmos o botón segundo vaiamos facer no crud.
        case "create":
            divBody +=
                    `<button id="crear_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>`
            break
        case "update":
            divBody +=
                    `<button id="update_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Modificar</button>
                    <button id="undo_Lav" class="btn btn-primary btn-lg fs-4" type="button"><i class="fa fa-undo"></i></button>`
            break
        case "delete":
            divBody +=
                    `<button id="delete_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Borrar</button>
                    <button id="undo_Lav" class="btn btn-primary btn-lg fs-4" type="button"><i class="fa fa-undo"></i></button>`
            break
    }
    divBody +=
                `</div>
            </form>
            <div id="lava_lav"></div>
        </div>`
    document.body.innerHTML += divBody;
    switch (crud) {
        case "create":
            listadoDataObxLavados_Lavadoras();
            document.getElementById('crear_Lav').addEventListener('click', function () { crearObxLavados_Lavadora() });
            break
        case "update":
            if (obx.length == 1) { //No caso de non haber multicarga.
                //Escoita eventos ó trocar o Select, para só seleccionar os centros habilitados.
                document.getElementById('centro').addEventListener('change', function () {
                    //Con obx e i sabemos o indice do centro para o update
                    if (document.getElementById('id_centro').innerHTML == "Centro") {
                        document.getElementById('id_centro').innerHTML = "Centro a modificar: " + obx[0].centro;
                    }
                });
                document.getElementById('peso').value = obx[0]['peso'];
                document.getElementById('observacions').value = obx[0]['observacions'];
            } else {
                for (let i = 0; i < obx.length; i++) {
                    //Escoita eventos ó trocar o Select, para só seleccionar os centros habilitados.
                    document.getElementById('centro' + i).addEventListener('change', function () {
                        //Con obx e i sabemos o indice do centro para o update
                        if (document.getElementById('id_centro' + i).innerHTML == "Centro") {
                            document.getElementById('id_centro' + i).innerHTML = "Centro a modificar: " + obx[i].centro;
                        }
                        deshabCentro_lavadora(obx);
                    });
                    document.getElementById('peso' + i).value = obx[i]['peso'];
                    document.getElementById('observacions' + i).value = obx[i]['observacions'];
                }
            }
            document.getElementById('update_Lav').addEventListener('click', function () { modificarObxLavados_Lavadoras(obx, indice, indice2) });
            document.getElementById('undo_Lav').addEventListener('click',
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
            for (let i = 0; i < obx.length; i++) {
                if (obx.length == 1) { //No caso de non haber multicarga.
                    document.getElementById('peso').value = obx[i]['peso'];
                    document.getElementById('peso').disabled = true;
                    document.getElementById('observacions').value = obx[i]['observacions'];
                    document.getElementById('observacions').disabled = true;
                } else {
                    for (let i = 0; i < obx.length; i++) {
                        document.getElementById('peso' + i).value = obx[i]['peso'];
                        document.getElementById('peso' + i).disabled = true;
                        document.getElementById('observacions' + i).value = obx[i]['observacions'];
                        document.getElementById('observacions' + i).disabled = true;
                    }
                }
            }
            document.getElementById('delete_Lav').addEventListener('click', function () { borrarObxLavados_Lavadora(indice, indice2) });
            document.getElementById('undo_Lav').addEventListener('click',
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
    //Escoitaeventos para gardar valor do switchcheck. 
    if (crud != "delete") {
        document.getElementById('flexSwitchCheck').addEventListener('change', function () {
                if (!document.getElementById('flexSwitchCheck').checked) {
                    lava_lav_mult = "false";
                    if (crud == "create") {
                        $.ajax({ //Necesario para sair de multicarga.
                            method: "POST",
                            url: "funcions.php",
                            data: {
                                funcion: 'postear_lava_lav_mult',
                                lava_lav_mult: lava_lav_mult,
                            }
                        });
                        window.location.reload()
                    }
                }
            }
        );
    }
}

export function deshabCentro_lavadora(obx) {
    for (let j = 0; j < obx.length; j++) {
        for (let k = 0; k < document.getElementById('centro' + j).length; k++) {
            document.getElementById('centro' + j).options[k].disabled = false;
        }
    }
    for (let i = 0; i < obx.length; i++) {
        document.getElementById('ant_centro' + i).value = document.getElementById('centro' + i).value
        //Repasamos os centros dos select options para desactivalos.
        for (let j = 0; j < obx.length; j++) {
            for (let k = 0; k < document.getElementById('centro' + i).length; k++) {
                if (document.getElementById('centro' + j).options[k].value == document.getElementById('ind_centro' + i).value) {
                    document.getElementById('centro' + j).options[k].disabled = true;
                } else if (document.getElementById('centro' + j).options[k].value == document.getElementById('ant_centro' + i).value) {
                    document.getElementById('centro' + j).options[k].disabled = true;
                }
            }
        }
    }
}

/***********LISTADOS DATA**********/
function listadoDataObxLavados_Lavadoras() {
    $.ajax({ //Executamos a función listadoDataObxLavados_Lavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'listadoDataObxLavados_Lavadoras',
        }
    }).done(function (res) {
        let opLL = "";
        let Lava_lav = JSON.parse(res);
        if (Array.isArray(Lava_lav) & Lava_lav.length != 0) {
            opLL +=
                `<div class="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                <h2 class="display-4">Listado Cargas de lavados de lavadora</h2>
                <table class="table table-striped table-hover"><!--Táboa Centro_kll-->
                    <thead class="fs-4"><!--Cabeceira-->
                        <tr>
                            <th>Data</th>
                            <th>Quenda</th>
                            <th>Lavadora</th>
                            <th>Roupa/Prenda</th>
                            <th>Programa</th>
                            <th>Centro</th>
                            <th class="text-center">Peso</th>
                            <th>Observacións</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider fs-6"><!--Rexistros-->`
            let id_lavado_ant; //Aquí controlamos os rexistro multicarga.
            for (let f of Lava_lav) {
                let idEditar = "editar" + f['id_lavado'];
                let idBorrar = "borrar" + f['id_lavado'];
                if (id_lavado_ant != f['id_lavado']) { //Distinguimos multicarga, sen datos comúns; data, quenda, lavadora, rp, programa.
                    opLL +=
                        `<tr>
                        <td>${f['data']}</td><!--Data-->
                        <td>${f['quenda']}</td><!--Quenda-->
                        <td>${f['lavadora']}</td><!--Lavadora-->
                        <td>${f['descrip']}</td><!--Descripción-->
                        <td>${f['programa']}</td><!--Programa-->`
                } else {
                    opLL +=
                        `<tr>
                        <td></td><!--Data-->
                        <td></td><!--Quenda-->
                        <td></td><!--Lavadora-->
                        <td></td><!--Descripción-->
                        <td></td><!--Programa-->`
                }
                opLL +=
                    `<td>${f['centro']}</td><!--Centro-->
                        <td class="text-end">${f['peso']}</td>
                        <td>${f['observacions']}</td><!--Observacións-->`
                if (id_lavado_ant != f['id_lavado']) { //Distinguimos multicarga, sen iconas.
                    opLL +=
                        `<td class="fs-3" style="padding-left: 4rem; padding-top:0">
                            <a id="${idEditar}" href="index.html"><i class="fas fa-pen fa-xs"></i></a><!--Icona pen e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar.-->
                            <a id="${idBorrar}" href="index.html"><i class="fas fa-trash fa-xs"></i></a><!--Icona trash e enlace para detalle.php co atributo do id, para ter referenciado o produto a tratar.-->
                        </td>`                        
                } else {
                    opLL +=
                        `<td></td><!--Sen iconas-->`
                }        
            opLL +=
                    `</tr>`;
                id_lavado_ant = f['id_lavado'];
            }
            opLL +=
                `</tbody>
                </table>
            </div>`
            document.getElementById('lava_lav').innerHTML += opLL;
            //Id para os iconas baseado no id dos rexistros.
            
            let i = 0;            
            for (let f of Lava_lav) {
                i++;
                let lava_lav_mult;
                //Distinguimos multicarga, non creamos o escoitaeventos ou e o derradeiro rexistro que ten que ter si ous si escoitaeventos.
                if (id_lavado_ant != f['id_lavado']||(i=Lava_lav.length)) { 
                    let idEditar = "editar" + f['id_lavado']; //editar + id do rexistro.
                    let idEdita2 = "edita2" + f['id_kll']; //editar + id do rexistro.
                    let idBorrar = "borrar" + f['id_lavado']; //borrar + id do rexistro.
                    document.getElementById(idEditar).addEventListener('click', function () {
                        if (document.getElementById('flexSwitchCheck').checked) {
                            lava_lav_mult = "false";
                            $.ajax({ //Necesario para sair de multicarga.
                                method: "POST",
                                url: "funcions.php",
                                data: {
                                    funcion: 'postear_lava_lav_mult',
                                    lava_lav_mult: lava_lav_mult,
                                }
                            });
                            window.location.reload()
                        }
                        lerObxLavados_Lavadoras(idEditar, idEdita2, "update")
                    }); //Escoita eventos para o icona editar.
                    document.getElementById(idBorrar).addEventListener('click', function () {
                        if (document.getElementById('flexSwitchCheck').checked) {
                            lava_lav_mult = "false";
                            $.ajax({ //Necesario para sair de multicarga.
                                method: "POST",
                                url: "funcions.php",
                                data: {
                                    funcion: 'postear_lava_lav_mult',
                                    lava_lav_mult: lava_lav_mult,
                                }
                            });
                            window.location.reload()
                        }
                        lerObxLavados_Lavadoras(idEditar, idEdita2, "delete")
                    }); //Escoita eventos para o icona borrar.
                }
                id_lavado_ant = f['id_lavado'];
            }
           
            if (document.getElementById('flexSwitchCheck').checked) {
                //Derradeiro rexistro do array a tratar.
                let derradeiroArray = new Array;
                derradeiroArray = Lava_lav[Lava_lav.length - 1];
                id_lavado_multi = derradeiroArray['id_lavado'];
                id_kll_multi = derradeiroArray['id_kll'];
                //Recollemos Quendas por que fai falta o seu indice 
                var Quendas = prin.get_quendas();
                //Recollemos Lavadoras por que fai falta o seu indice 
                var Lavadoras = prin.get_lavadoras();
                //Recollemos RP_Lavaodras por que fai falta o seu indice 
                var RP_Lavadoras = prin.get_rp_lavadora();
                //Recollemos Programas por que fai falta o seu indice 
                var Programas = prin.get_programas();
                //Recollemos Programas por que fai falta o seu indice 
                var Centros = prin.get_centros();
                //Proceso de cargar os campos da páxina.
                var q, l, rp, p, c;

                //Introducir a quenda recollida para a multicarga nos campos Carga Lavadora.
                q = document.createElement('option');
                q.value = Quendas.find(q => q.quenda == derradeiroArray['quenda']).id_quenda;//Darlle o value polo id_quenda.
                q.text = derradeiroArray['quenda'];
                document.getElementById('quenda').options.add(q);
                //Introducir a lavadora recollida para a multicarga.
                l = document.createElement('option');
                l.value = Lavadoras.find(l => l.lavadora == derradeiroArray['lavadora']).id_lavadora; //Darlle o value polo id_lavadora.
                l.text = derradeiroArray['lavadora'];
                document.getElementById('lavadora').options.add(l);
                //Introducir a rp_lavadora recollida para a multicarga.
                rp = document.createElement('option');
                rp.value = RP_Lavadoras.find(rp => rp.descrip == derradeiroArray['descrip']).id_rp; //Darlle o value polo id_rp.;
                rp.text = derradeiroArray['descrip'];
                document.getElementById('roupa_prenda').options.add(rp);
                //Introducir a programa recollida para a multicarga.
                p = document.createElement('option');
                p.value = Programas.find(p => p.programa == derradeiroArray['programa']).id_prog; //Darlle o value polo id_programa.;
                p.text = derradeiroArray['programa'];
                document.getElementById('programa').options.add(p);

                //Recollemos en campos OCULTOS os valores multi carga:
                var x = document.createElement("INPUT");
                x.setAttribute("type", "hidden");// HIDDEN/TEXT para probas.
                x.setAttribute("id", "id_" + id_lavado_multi)
                x.setAttribute("value", id_lavado_multi);
                document.getElementById('sec_kll').appendChild(x);
                var y = document.createElement("INPUT");
                y.setAttribute("type", "hidden"); //HIDDEN/TEXT para probas.
                y.setAttribute("id", "id_" + id_kll_multi)
                y.setAttribute("value", id_kll_multi);
                document.getElementById('sec_kll').appendChild(y);
                for (let f of Lava_lav) {
                    if (f.id_lavado == id_lavado_multi) {
                        c = document.createElement("INPUT");
                        c.type = "hidden"; //HIDDEN/TEXT para probas.
                        c.value = Centros.find(c => c.centro == f['centro']).id_centro; //Darlle o value polo id_centro.;
                        c.text = derradeiroArray['centro'];
                        document.getElementById('sec_kll').appendChild(c);
                        //Aproveitamos a lectura para deshabilitar o centro no select option de Centro. Asi non se repite o mesmo hospital.
                        document.querySelectorAll("#centro option").forEach(opt => {
                            if (opt.value == Centros.find(c => c.centro == f['centro']).id_centro) {
                                opt.disabled = true;
                            }
                        });
                    }
                }
            } else {
                id_lavado_multi = "";
                id_kll_multi = "";
            }
        }
    });
}

/***********CREACIÓN REXISTROS**********/
function crearObxLavados_Lavadora() {
    let nonErro = true;
    let lava_lav_mult;
    if (comprobar_Rex('quenda', expReg_1_99)) {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-valid');
    } else {
        document.getElementById('quenda').setAttribute('class', 'form-select fs-4 is-invalid');
        nonErro = false;
    }
    if (comprobar_Rex('centro', expReg_1_9999)) {
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
    if (nonErro) {
        if (document.getElementById('flexSwitchCheck').checked) {
            lava_lav_mult = "true";
        } else {
            lava_lav_mult = "false"
        }
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
                //Engadir id_lavado e id_kll para multi_carga:
                id_lavado: id_lavado_multi,
                id_kll: id_kll_multi,
                lava_lav_mult: lava_lav_mult,
            }
        }).done(function (res) {
            if (res.substring(1, 5) == 'Erro') {
                obx.postear_erro(res);
            } else {
                obx.postear_modal(res);
            }
        });
    }
}

/***********LEER INDICE**********/
function lerObxLavados_Lavadoras(id, id2, crud) {
    document.getElementById('flexSwitchCheck').checked = false;//No caso de estar activo, desactivase.
    $.ajax({ //Executamos a función lerObxLavados_Lavadoras en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'lerObxLavados_Lavadoras',
            indice: id.substring(6),
            indice2: id2.substring(6),
            crud: crud,
        }
    }).done(function (res) {
        if (res.substring(1, 5) == 'Erro') {
            obx.postear_erro(res);
        } else {
            obx.postear_modal(res);
        }
    });
}

/***********MODIFICACION REXISTROS**********/
function modificarObxLavados_Lavadoras(obx, ind, ind2) {
    let nonErro = true;
    let lava_lav_mult;

    if (document.getElementById('flexSwitchCheck').checked) {
        lava_lav_mult = "true";
        for (let i = 0; i < obx.length; i++) {
            if (comprobar_Rex('peso' + i, expReg_1_999)) {
                document.getElementById('peso' + i).setAttribute('class', 'form-control fs-4 is-valid');
            } else {
                document.getElementById('peso' + i).value = '';
                document.getElementById('peso' + i).setAttribute('class', 'form-control fs-4 is-invalid');
                nonErro = false;
            }
            if (nonErro) {
                $.ajax({ //Executamos a función modificarObxLavados_Lavadoras en funcions.php.
                    method: "POST",
                    url: "funcions.php",
                    data: {
                        funcion: 'modificarObxLavados_Lavadoras',
                        quenda: document.getElementById('quenda').value,
                        lavadora: document.getElementById('lavadora').value,
                        roupa_prenda: document.getElementById('roupa_prenda').value,
                        programa: document.getElementById('programa').value,
                        ind_centro: document.getElementById('ind_centro' + i).value,
                        centro: document.getElementById('centro' + i).value,
                        peso: document.getElementById('peso' + i).value,
                        observacions: document.getElementById('observacions' + i).value,
                        id_lavado: ind,
                        id_kll: ind2,
                        //Engadir id_lavado e id_kll para multi_carga:
                        lava_lav_mult: lava_lav_mult,
                    }
                }).done(function (res) {
                    if (res.substring(1, 5) == 'Erro') {
                        obx.postear_erro(res);
                    } else {
                        obx.postear_modal(res);
                    }
                });
            } else { 
                obx.postear_erro("Erro ó modificar carga lavadora!");
            }
        }
    } else {
        lava_lav_mult = "false"
        if (comprobar_Rex('peso', expReg_1_999)) {
            document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-valid');
        } else {
            document.getElementById('peso').value = '';
            document.getElementById('peso').setAttribute('class', 'form-control fs-4 is-invalid');
            nonErro = false;
        }
        if (nonErro) {
            $.ajax({ //Executamos a función modificarObxLavados_Lavadoras en funcions.php.
                method: "POST",
                url: "funcions.php",
                data: {
                    funcion: 'modificarObxLavados_Lavadoras',
                    quenda: document.getElementById('quenda').value,
                    lavadora: document.getElementById('lavadora').value,
                    roupa_prenda: document.getElementById('roupa_prenda').value,
                    programa: document.getElementById('programa').value,
                    ind_centro: document.getElementById('ind_centro').value,
                    centro: document.getElementById('centro').value,
                    peso: document.getElementById('peso').value,
                    observacions: document.getElementById('observacions').value,
                    id_lavado: ind,
                    id_kll: ind2,
                    //Engadir id_lavado e id_kll para multi_carga:
                    lava_lav_mult: lava_lav_mult,
                }
            }).done(function (res) {
                if (res.substring(1, 5) == 'Erro') {
                    obx.postear_erro(res);
                } else {
                    obx.postear_modal(res);
                }
            });
        } else {
            obx.postear_erro("Erro ó modificar carga lavadora!");
        }
    }
}

/***********BORRAR REXISTROS**********/
function borrarObxLavados_Lavadora(ind, ind2) {
    $.ajax({ //Executamos a función borrarObxLavados_Lavadora en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'borrarObxLavados_Lavadora',
            id_lavado: ind,
            id_kll: ind2
        }
    }).done(function (res) {
        if (res.substring(1, 5) == 'Erro') {
            obx.postear_erro(res);
        } else {
            obx.postear_modal(res);
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