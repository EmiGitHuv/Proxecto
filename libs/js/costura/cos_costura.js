import * as obxt from '../mod_Obxectos.js';
import * as prin from '../principal.js';

/********MODELOS HTML************/
export function modelos_centro_Costura() {
    let divBody = //Body de Costura
        `<!--Corpo Costura-->
        <div class="container fs-4" style="margin-top: 1rem">
            <ul class="nav nav-tabs nav-fill " id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="repaso-tab" data-bs-toggle="tab" data-bs-target="#repaso" type="button"
                        role="tab" aria-controls="repaso" aria-selected="true">Repaso</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="baixa-tab" data-bs-toggle="tab" data-bs-target="#baixa" type="button"
                        role="tab" aria-controls="baixa" aria-selected="false">Baixa</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="total_rp-tab" data-bs-toggle="tab" data-bs-target="#total_rp" type="button"
                        role="tab" aria-controls="total_prendas" aria-selected="false">Total prendas</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="confeccion-tab" data-bs-toggle="tab" data-bs-target="#confeccion" type="button"
                        role="tab" aria-controls="confeccion" aria-selected="false" >Confección</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="arranxo-tab" data-bs-toggle="tab" data-bs-target="#arranxo" type="button"
                        role="tab" aria-controls="arranxo" aria-selected="false" >Arranxo</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="conxunto-tab" data-bs-toggle="tab" data-bs-target="#conxunto" type="button"
                        role="tab" aria-controls="conxunto" aria-selected="false" >Conxunto</button>
                </li>
            </ul>`;
    /*******MENU PESTANA**********/
    divBody += //Pestanas de todo o contenido.
        `<div class="tab-content" id="myTabContent">`
    /**********REPASO************/
    divBody += //Pestana Repaso:
        `<div class="tab-pane fade" id="repaso" role="tabpanel" aria-labelledby="repaso" tabindex="0">
                    <div class="container">
                        <h2 class="display-4">Costura repaso</h2>
                        <!--Creación do formulario de Costura repaso.-->
                        <form class="row g-6 fs-4" method="post">`
    divBody +=
        `<!--Creación do campo de selección costureira.-->
                            <div class="col-md-4">
                                <label for="costureira" class="form-label">Costureira</label>
                                <select class="form-select fs-4" name="costureira" id="costureira_repaso" aria-describedby="costureiraFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha costureira válida.
                                </div>
                            </div>`;
    obxt.getObxCostureira(); //Select para os datos de Costureira.
    divBody +=
        `<!--Creación do campo de selección roupa_prenda.-->
                            <div class="col-md-4">
                                <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                                <select class="form-select fs-4" name="roupa_prenda" id="rp_costura_repaso" aria-describedby="roupa_prendaFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha prenda válida.
                                </div>
                            </div>`;
    obxt.getObxRP_Costura(); //Select para os datos de RP_Costura.
    divBody +=
        `<!--Creación do campo texto repaso.-->
                            <div class="col-md-2">
                                <label for="repaso" class="form-label">Repasado</label>
                                <input type="text" class="form-control fs-4" name="repaso" id="repaso" aria-describedby="pesoFeedback" required>
                                    <div class="valid-feedback">
                                        Vai ben!
                                    </div>
                                    <div class="invalid-feedback">
                                        Fai o favor de meter nº de prendas repasos válido.
                                    </div>
                            </div>`
    //  Campo requerido para o dato Repasado.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                            <div Id="divSubmitRepasado" style="margin-top: 1rem">
                                <button id="crear_Repasado" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>`
    /**********BAIXA************/
    divBody += //Pestana Baixa:
        `<div class="tab-pane fade" id="baixa" role="tabpanel" aria-labelledby="baixa" tabindex="0">
                    <div class="container">
                        <h2 class="display-4">Costura baixa</h2>
                        <!--Creación do formulario de Costura baixa.-->
                        <form class="row g-6 fs-4" method="post">`
    divBody +=
        `<!--Creación do campo de selección costureira.-->
                            <div class="col-md-4">
                                <label for="costureira" class="form-label">Costureira</label>
                                <select class="form-select fs-4" name="costureira" id="costureira_baixa" aria-describedby="costureiraFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha costureira válida.
                                </div>
                            </div>`;
    obxt.getObxCostureira(); //Select para os datos de Costureira.
    divBody +=
        `<!--Creación do campo de selección roupa_prenda.-->
                            <div class="col-md-4">
                                <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                                <select class="form-select fs-4" name="roupa_prenda" id="rp_costura_baixa" aria-describedby="roupa_prendaFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha prenda válida.
                                </div>
                            </div>`;
    obxt.getObxRP_Costura(); //Select para os datos de RP_Costura.
    divBody +=
        `<!--Creación do campo texto baixa.-->
                            <div class="col-md-2">
                                <label for="baixa" class="form-label">Baixa</label>
                                <input type="text" class="form-control fs-4" name="baixa" id="baixa" aria-describedby="pesoFeedback" required>
                                    <div class="valid-feedback">
                                        Vai ben!
                                    </div>
                                    <div class="invalid-feedback">
                                        Fai o favor de meter nº de prendas de  baixas válido.
                                    </div>
                            </div>`
    //  Campo requerido para o dato Baixas.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                            <div Id="divSubmitBaixa" style="margin-top: 1rem">
                                <button id="crear_Baixa" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>`
    /**********TOTAL PRENDAS************/
    divBody += //Pestana Total Prendas:
        `<div class="tab-pane fade" id="total_rp" role="tabpanel" aria-labelledby="total_rp" tabindex="0">
                    <div class="container">
                        <h2 class="display-4">Costura total prendas</h2>
                        <!--Creación do formulario de Costura total_rp.-->
                        <form class="row g-6 fs-4" method="post">`
    divBody +=
        `<!--Creación do campo de selección costureira.-->
                            <div class="col-md-4">
                                <label for="costureira" class="form-label">Costureira</label>
                                <select class="form-select fs-4" name="costureira" id="costureira_total_rp" aria-describedby="costureiraFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha costureira válida.
                                </div>
                            </div>`;
    obxt.getObxCostureira(); //Select para os datos de Costureira.
    divBody +=
        `<!--Creación do campo de selección roupa_prenda.-->
                            <div class="col-md-4">
                                <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                                <select class="form-select fs-4" name="roupa_prenda" id="rp_costura_total_rp" aria-describedby="roupa_prendaFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha prenda válida.
                                </div>
                            </div>`;
    obxt.getObxRP_Costura(); //Select para os datos de RP_Costura.
    divBody +=
        `<!--Creación do campo texto total_rp.-->
                            <div class="col-md-2">
                                <label for="total_rp" class="form-label">Total prenda</label>
                                <input type="text" class="form-control fs-4" name="total_rp" id="total_rp" aria-describedby="pesoFeedback" required>
                                    <div class="valid-feedback">
                                        Vai ben!
                                    </div>
                                    <div class="invalid-feedback">
                                        Fai o favor de meter nº de prendas de  total válido.
                                    </div>
                            </div>`
    //  Campo requerido para o dato Total prendas.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                            <div Id="divSubmitBaixa" style="margin-top: 1rem">
                                <button id="crear_Baixa" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>`
    /**********CONFECCIÓN************/
    divBody += //Pestana Confeccion:
        `<div class="tab-pane fade" id="confeccion" role="tabpanel" aria-labelledby="confeccion" tabindex="0">
                    <div class="container">
                        <h2 class="display-4">Costura confección</h2>
                        <!--Creación do formulario de Costura confeccion.-->
                        <form class="row g-6 fs-4" method="post">`
    divBody +=
        `<!--Creación do campo de selección costureira.-->
                            <div class="col-md-4">
                                <label for="costureira" class="form-label">Costureira</label>
                                <select class="form-select fs-4" name="costureira" id="costureira_confeccion"
                                    aria-describedby="costureiraFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha costureira válida.
                                </div>
                            </div>`;
    obxt.getObxCostureira(); //Select para os datos de Costureira.
    divBody +=
        `<!--Creación do campo de selección roupa_prenda.-->
                            <div class="col-md-4">
                                <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                                <select class="form-select fs-4" name="roupa_prenda" id="rp_costura_confeccion"
                                    aria-describedby="roupa_prendaFeedback" required></select>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de escoller unha prenda válida.
                                </div>
                            </div>`;
    obxt.getObxRP_Costura(); //Select para os datos de RP_Costura.
    divBody +=
        `<!--Creación do campo texto confeccion.-->
                            <div class="col-md-2">
                                <label for="confeccion" class="form-label">Confección</label>
                                <input type="text" class="form-control fs-4" name="confeccion" id="confeccion"
                                    aria-describedby="pesoFeedback" required>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de meter nº de prendas de confeccions válido.
                                </div>
                            </div>`
    // Campo requerido para o dato Confeccións.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                            <div Id="divSubmitConfeccion" style="margin-top: 1rem">
                                <button id="crear_Confeccion" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>`
    /**********ARRANXO************/
    divBody += //Pestana Arranxo:
        `<div class="tab-pane fade" id="arranxo" role="tabpanel" aria-labelledby="arranxo" tabindex="0">
                <div class="container">
                    <h2 class="display-4">Costura arranxo</h2>
                    <!--Creación do formulario de Costura arranxo.-->
                    <form class="row g-6 fs-4" method="post">`
    divBody +=
        `<!--Creación do campo de selección costureira.-->
                        <div class="col-md-4">
                            <label for="costureira" class="form-label">Costureira</label>
                            <select class="form-select fs-4" name="costureira" id="costureira_arranxo"
                                aria-describedby="costureiraFeedback" required></select>
                            <div class="valid-feedback">
                                Vai ben!
                            </div>
                            <div class="invalid-feedback">
                                Fai o favor de escoller unha costureira válida.
                            </div>
                        </div>`;
    obxt.getObxCostureira(); //Select para os datos de Costureira.
    divBody +=
        `<!--Creación do campo de selección roupa_prenda.-->
                        <div class="col-md-4">
                            <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                            <select class="form-select fs-4" name="roupa_prenda" id="rp_costura_arranxo"
                                aria-describedby="roupa_prendaFeedback" required></select>
                            <div class="valid-feedback">
                                Vai ben!
                            </div>
                            <div class="invalid-feedback">
                                Fai o favor de escoller unha prenda válida.
                            </div>
                        </div>`;
    obxt.getObxRP_Costura(); //Select para os datos de RP_Costura.
    divBody +=
        `<!--Creación do campo texto arranxo.-->
                        <div class="col-md-2">
                            <label for="arranxo" class="form-label">Arranxo</label>
                            <input type="text" class="form-control fs-4" name="arranxo" id="arranxo"
                                aria-describedby="pesoFeedback" required>
                            <div class="valid-feedback">
                                Vai ben!
                            </div>
                            <div class="invalid-feedback">
                                Fai o favor de meter nº de prendas de arranxos válido.
                            </div>
                        </div>`
    // Campo requerido para o dato Arranxos.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                        <div Id="divSubmitArranxo" style="margin-top: 1rem">
                            <button id="crear_Arranxo" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                        </div>
                    </form>
                </div>
            </div>`
    /**********CONXUNTO************/
    divBody += //Pestana Conxunto:
        `<div class="tab-pane fade show active" id="conxunto" role="tabpanel" aria-labelledby="conxunto" tabindex="0">
                <div class="container">
                    <h2 class="display-4">Costura conxunto</h2>
                    <!--Creación do formulario de Costura conxunto.-->
                    <form class="row g-6 fs-4" method="post">`
    divBody +=
        `<!--Creación do campo de selección costureira.-->
                        <div class="col-md-4">
                            <label for="costureira" class="form-label">Costureira</label>
                            <select class="form-select fs-4" name="costureira" id="costureira_conxunto"
                                aria-describedby="costureiraFeedback" required></select>
                            <div class="valid-feedback">
                                Vai ben!
                            </div>
                            <div class="invalid-feedback">
                                Fai o favor de escoller unha costureira válida.
                            </div>
                        </div>`;
    obxt.getObxCostureira(); //Select para os datos de Costureira.
    divBody +=
        `<!--Creación do campo de selección roupa_prenda.-->
                        <div class="col-md-5">
                            <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                            <select class="form-select fs-4" name="roupa_prenda" id="rp_costura_conxunto"
                                aria-describedby="roupa_prendaFeedback" required></select>
                            <div class="valid-feedback">
                                Vai ben!
                            </div>
                            <div class="invalid-feedback">
                                Fai o favor de escoller unha prenda válida.
                            </div>
                        </div>`;
    obxt.getObxRP_Costura(); //Select para os datos de RP_Costura.
    divBody +=
        `<div class="container row"`
    divBody +=
        `<!--Creación do campo texto repaso.-->
                                <div class="col-md-2">
                                    <label for="repaso" class="form-label">Repasado</label>
                                    <input type="text" class="form-control fs-4" name="repaso" id="repasoC" aria-describedby="pesoFeedback">
                                        <div class="valid-feedback">
                                            Vai ben!
                                        </div>
                                        <div class="invalid-feedback">
                                            Fai o favor de meter nº de prendas repasos válido.
                                        </div>
                                </div>`
    //  Campo requerido para o dato Repasado.
    divBody +=
        `<!--Creación do campo texto baixa.-->
                                <div class="col-md-2">
                                    <label for="baixa" class="form-label">Baixa</label>
                                    <input type="text" class="form-control fs-4" name="baixa" id="baixaC" aria-describedby="pesoFeedback">
                                        <div class="valid-feedback">
                                            Vai ben!
                                        </div>
                                        <div class="invalid-feedback">
                                            Fai o favor de meter nº de prendas de  baixas válido.
                                        </div>
                                </div>`
    //  Campo requerido para o dato Baixas.
    divBody +=
        `<!--Creación do campo texto total_rp.-->
                                <div class="col-md-2">
                                    <label for="total_rp" class="form-label">Total Prenda</label>
                                    <input type="text" class="form-control fs-4" name="total_rp" id="total_rpC" aria-describedby="pesoFeedback">
                                        <div class="valid-feedback">
                                            Vai ben!
                                        </div>
                                        <div class="invalid-feedback">
                                            Fai o favor de meter nº de prendas de  total válido.
                                        </div>
                                </div>`
    //  Campo requerido para o dato Total prendas.
    divBody +=
        `<!--Creación do campo texto confeccion.-->
                                <div class="col-md-2">
                                    <label for="confeccion" class="form-label">Confección</label>
                                    <input type="text" class="form-control fs-4" name="confeccion" id="confeccionC"
                                        aria-describedby="pesoFeedback">
                                    <div class="valid-feedback">
                                        Vai ben!
                                    </div>
                                    <div class="invalid-feedback">
                                        Fai o favor de meter nº de prendas de confeccions válido.
                                    </div>
                                </div>`
    // Campo requerido para o dato Confeccións.
    divBody +=
        `<!--Creación do campo texto arranxo.-->
                            <div class="col-md-2">
                                <label for="arranxo" class="form-label">Arranxo</label>
                                <input type="text" class="form-control fs-4" name="arranxo" id="arranxoC"
                                    aria-describedby="pesoFeedback">
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de meter nº de prendas de arranxos válido.
                                </div>
                            </div>`
    // Campo requerido para o dato Arranxos.
    divBody +=
        `</div>`
    divBody +=
        `<!--Creación do campo texto de control.-->
                            <div class="col-md-5">
                                <input type="hidden" class="form-control fs-4 alert alert-danger" name="control" id="controlC"
                                    aria-describedby="pesoFeedback" required>
                                <div class="valid-feedback">
                                    Vai ben!
                                </div>
                                <div class="invalid-feedback">
                                    Fai o favor de meter nº de prendas de controls válido.
                                </div>
                            </div>`
    // Campo requerido para o dato de control. Hidden, é a suma dos demais campos, si é cero, os demais están valeiros, entón non é valido.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                            <div Id="divSubmitConxunto" style="margin-top: 1rem">
                                <button id="crear_costura" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>`
    /****************************************/
    divBody +=
        `</div>
    </div>`
    document.body.innerHTML += divBody;
    document.getElementById('crear_costura').addEventListener('click', obxt.crearObxCostura);
}

/***********LISTADOS DATA**********/


/***********CREACIÓN REXISTROS**********/
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

/***********LEER INDICE**********/


/***********MODIFICACION REXISTROS**********/


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