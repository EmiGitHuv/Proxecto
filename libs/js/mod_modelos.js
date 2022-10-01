import * as obx from './mod_Obxectos.js';

/************OBXECTOS***********/
var Quendas, Centros, Lavadoras, RP_Lavadoras, Programas;

/********MODELOS HTML************/
export function modelos_cabecera_body(title_DOM, depart, dif_data) {
    document.title = title_DOM;

    let divBody =
        `<div class="d-flex flex-row bg-primary text-white" style="margin:0; padding:10px">`; //Creamos a div do Body.
    divBody +=
        `<div class="w-auto">`;
    divBody +=
        `<h1 class="display-4">Lavandería "A Grela" - ${depart}</h1>`;
    divBody +=
        `</div>
        <div id="control_datas" style="font-size: 32px; font-weight: lighter; margin:0 0 0 20px; padding:0">
            <label id="lb_data_act"  style="margin:0; padding:0"></label>`;
    divBody +=//Etiqueta oculta dif_data
        `<label id="lb_dif_data" style="background-color:red">${dif_data}</label><br>`
    divBody +=
        `<label id="lb_data_prod" style="margin:0; padding:0"></label>
            <input type="button" id="bt_dif_data-" class="btn btn-primary" value="<<" />
            <input type="text" class="dateselect" id="data_prod" style="width: 160px;" />
            <input type="button" id="bt_dif_data+" class="btn btn-primary" value=">>" />
        </div>
    </div>`;
    document.body.innerHTML += divBody;
}

export function modelos_cabecera_navegador(depart, sec_usuario, sec_rol) {
    let usuario = sec_usuario;
    let rol = sec_rol;
    let divBody =
        `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">`;

    if (depart !== 'Principal') {
        divBody +=
            `<li class="nav-item">
                        <a id="paxPrincipal" class="nav-link" href="index.html"><i class="fas fa-home"></i> Principal</a>
                    </li>`
    }
    if (depart != 'Lavadoras') {
        divBody +=
            `<li class="nav-item">
                        <a id="paxLavadoras" class="nav-link" href="index.html"><i class="fas fa-yin-yang"></i> Lavadoras</a>
                    </li>`
    }
    if (depart != 'Tuneis de lavado') {
        divBody +=
            `<li class="nav-item">
                        <a id="paxTuneis_Lavado" class="nav-link" href="index.html"><i class="fas fa-yin-yang"></i> Tuneis de lavado</a>
                    </li>`
    }
    if (depart != 'Maq. de alisado') {
        divBody +=
            `<li class="nav-item">
                        <a id="paxMaq_Ali" class="nav-link" href="index.html"><i class="fas fa-yin-yang"></i> Maq. de alisado</a>
                    </li>`
    }
    if (depart != 'Costura') {
        divBody +=
            `<li class="nav-item">
                        <a id="paxCostura" class="nav-link" href="index.html"><i class="fas fa-yin-yang"></i> Costura</a>
                    </li>`
    }
    /*if (depart != 'Peso carros') {
        divBody +=
            `<li class="nav-item">
                        <a class="nav-link" href="peso_carros.php"><i class="fas fa-yin-yang"></i> Peso carros</a>
                    </li>`
    }*/
    divBody +=
        `</ul>
            </div>`
    divBody += //Icona, usuario e saír login.
        `<div class="input-group justify-content-end m-2 w-auto">
                <span class="input-group-text bg-transparent"><i class="fas fa-user mr-2"></i></span>
                <div class="input-group-prepend">
                    <input type="text" value="${usuario}" class="form-control bg-transparent text-white" disabled>
                </div>
                <span class="input-group-text bg-transparent">
                    <a href="Pechar.php" class="nav-link text-white">Saír</a>
                </span>
            </div>
        </div>
    </nav>`
    document.body.innerHTML += divBody;

}

export function modelos_centro_principal() {
    let divBody =
        `<div class="container">
            <h1 class="display-3 ">Benvido a páxina principal</h1>
            <h2 class="display-4 ">Lavandería "A Grela":</h2>
            <img class="rounded mx-auto d-block " src="../libs/imaxes/Lavanderia.png" style="width: 90%">
        </div>`
    document.body.innerHTML += divBody;
}

export function modelos_centro_login() {
    let divBody = //Creación do centro_login.
        `<div id="div_login" class="container">
        <div class="container">
            <h1 class="display-3 ">Lavandería "A Grela"</h1>
            <h2 class="display-4 ">Control de acceso:</h2>
        </div>
        <div class="container">
            <div class="d-flex justify-content-center">
                <div class="card" style="width: 20rem;">
                    <div class="card-header">
                        <h3>Login</h3>
                    </div>
                    <form name='login' method="POST">
                        <div id="centro_login" class="card-body">
                            <div class="input-group justify-content-center m-2">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                <div class="input-group-prepend">
                                    <input type="text" id="input_usuario" class="form-control" placeholder="usuario" name='usuario' required>
                                </div>
                            </div>
                            <div class="input-group justify-content-center m-2">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                                <div class="input-group-prepend">
                                    <input type="password" class="form-control" placeholder="contraseña" name='pass' required disabled>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer style="margin-bottom: 2rem">
                            <div class="input-group justify-content-md-end">
                                    <input type="submit" id="bto_login" value="Login" class="btn btn-outline-primary" name="login"/>
                            </div>
                        </div>
                    </form>         
                    <div class="input-group">
                        <input type="button" id="bto_convidado" value="Acceso convidado" class='btn btn-primary' style="margin: -3rem 0 0.5rem 1rem; "/>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.body.innerHTML += divBody;
}

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
    obx.getObxCostureira(); //Select para os datos de Costureira.
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
    obx.getObxRP_Costura(); //Select para os datos de RP_Costura.
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
    obx.getObxCostureira(); //Select para os datos de Costureira.
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
    obx.getObxRP_Costura(); //Select para os datos de RP_Costura.
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
    obx.getObxCostureira(); //Select para os datos de Costureira.
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
    obx.getObxRP_Costura(); //Select para os datos de RP_Costura.
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
    obx.getObxCostureira(); //Select para os datos de Costureira.
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
    obx.getObxRP_Costura(); //Select para os datos de RP_Costura.
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
    obx.getObxCostureira(); //Select para os datos de Costureira.
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
    obx.getObxRP_Costura(); //Select para os datos de RP_Costura.
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
    obx.getObxCostureira(); //Select para os datos de Costureira.
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
    obx.getObxRP_Costura(); //Select para os datos de RP_Costura.
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
    document.getElementById('crear_costura').addEventListener('click', obx.crearObxCostura);
}

export function modelos_centro_lavadora() {
    let divBody =
        `<!--Corpo Lavadoras-->
        <div class="container">
            <h2 class="display-4">Cargar lavadora</h2>
            <!--Creación do formulario de Lavadoras.-->
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
    obx.getObxQuendas(Quendas); //Select para os datos de Quenda.
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
    obx.getObxCentros(Centros); //Select para os datos de Centros.
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
    obx.getObxLavadoras(Lavadoras); //Select para os datos de Lavadoras.
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
    obx.getObxRP_Lavadoras(RP_Lavadoras); //Select para os datos de Roupa_Prenda.
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
    obx.getObxProgramas(Programas); //Select para os datos de Programas.
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
    divBody +=
        `<!--Input submit recarga a páxina.-->
                <div Id="divSubmitLavadoras" style="margin-top: 1rem">
                    <button id="crear_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                </div>
            </form>
        </div>`

    document.body.innerHTML += divBody;
    document.getElementById('crear_Lav').addEventListener('click', obx.crearObxLavadora);
}

export function modelos_centro_Maquinas_Alisado() {
    let divBody =
        `<!--Corpo Maquinas de alisado-->
        <div class="container">
            <h2 class="display-4">Cargar Maquinas de alisado</h2>
            <!--Creación do formulario de Maquinas de alisado.-->
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
    obx.getObxQuendas(Quendas); //Select para os datos de Quenda.
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
    obx.getObxMaq_Ali(); //Select para os datos de Maquinas de lavado.
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
    //  Campo requerido para o dato Sacos.
    divBody +=
        `<!--Input submit recarga a páxina.-->
                <div Id="divSubmitMaq_Alis" style="margin-top: 1rem">
                    <button id="crear_Maq_alis" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                </div>
            </form>
        </div>`

    document.body.innerHTML += divBody;
    document.getElementById('crear_Maq_alis').addEventListener('click', obx.crearObxMaq_Ali);
}

export function modelos_centro_tuneis_lavado() {
    let divBody =
        `<!--Corpo Tuneis de Lavado-->
        <div class="container">
            <h2 class="display-4">Cargar Tuneis de Lavado</h2>
            <!--Creación do formulario de Tuneis de lavado.-->
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
    obx.getObxQuendas(Quendas); //Select para os datos de Quenda.
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
    obx.getObxCentros(Centros); //Select para os datos de Centros.
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
    obx.getObxTuneis(); //Select para os datos de Tuneis.
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
                <div Id="divSubmitTuneis" style="margin-top: 1rem">
                    <button id="crear_Tuneis_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                </div>
            </form>
        </div>`

    document.body.innerHTML += divBody;
    document.getElementById('crear_Tuneis_Lav').addEventListener('click', obx.crearObxTunel);
}

export function modelos_pe_de_paxina() {
    let pefooter = document.createElement('footer'); //Creamos un div novo,
    pefooter.id = 'pe_footer'; //co id = "pe_footer".
    pefooter.className = 'py-5';
    pefooter.style = 'margin-top: auto;';
    document.body.appendChild(pefooter); //Dependente do body.

    let divFoot =
        `<div class="container">
            <h5>Lavandería A Grela</h5>
            <div class="d-flex">
                <div class="flex-fill">
                    <ul class="nav flex-column">
                        <li class="nav-item"><i class="fas fa-home"></i> Dirección : Rúa Pintor Urbano Lugris, 2</li>
                        <li class="nav-ite"> Polígono industrial A Grela. 15008 - A Coruña</li>
                    </ul>
                </div>
                <div class="flex-fill">
                    <ul class="nav flex-column">
                        <li class="nav-item"><i class="fas fa-phone"></i> Teléfonos: 981 17 60 74</li>
                        <ul>
                            <li class="nav-item">Encargadas: 272331</li>
                            <li class="nav-item">Xefe de sección: 272332</li>
                            <li class="nav-item">Almacen: 272333</li>
                            <li class="nav-item">Oficina: 272320</li>
                        </ul>
                    </ul>
                </div>
                <div class="flex-fill">
                    <ul class="nav flex-column">
                        <li class="nav-item"><i class="fas fa-fax"></i> Fax: 981 15 42 65</li>
                    </ul>
                </div>
            </div>

            <div class="container-fluid">
                <div class="header-main__left">
                            <a class="logo--main" href="https://xxicoruna.sergas.gal/Paxinas/web.aspx" title="Área Sanitaria de Coruña e Cee (Hospitais, Centros de Saúde, Casas do Mar e Consultorios)" target="_blank">
                                <img src="../libs/imaxes/corunacee_48.png" alt="Área Sanitaria de Coruña e Cee (Hospitais, Centros de Saúde, Casas do Mar e Consultorios)">
                            </a>
                        </div>                    
            </div>
        </div>`
    document.getElementById('pe_footer').innerHTML += divFoot;
}

export function modelos_modal() {
    let divModal =
        `<!-- Modal -->
        <div class="modal fade" id="meuModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="tituloMeuModal"></h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5 id="textoMeuModal"></h5>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Pécha</button>
            </div>
            </div>
        </div>
        </div>`
    document.body.innerHTML += divModal;
}

export function mostrarModal(t, p) {
    document.getElementById('tituloMeuModal').innerHTML = t;
    document.getElementById('textoMeuModal').innerHTML = p;
    var myModal = document.getElementById('meuModal');
    var modal = bootstrap.Modal.getOrCreateInstance(myModal)
    modal.show();
}

/**************Modelo formulario***********************/
`<form class="row g-6" >
                <div class="col-md-4">
                    <label for="validationServer01" class="form-label">First name</label>
                    <input type="text" class="form-control is-valid" id="validationServer01" required>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Last name</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" required>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationServer03" class="form-label">City</label>
                    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
                    <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer04" class="form-label">State</label>
                    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                    </select>
                    <div id="validationServer04Feedback" class="invalid-feedback">
                    Fai o favor de escoller unha state.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer05" class="form-label">Zip</label>
                    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
                    <div id="validationServer05Feedback" class="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
                    <label class="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
                    </label>
                    <div id="invalidCheck3Feedback" class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                  <div class="mb-3">
                    <label for="validationTextarea" class="form-label">Textarea</label>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                    <div class="invalid-feedback">
                    Please enter a message in the textarea.
                    </div>
                </div>
                <div class="form-check mb-3">
                    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
                    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                    <div class="invalid-feedback">Example invalid feedback text</div>
                </div>

                <div class="form-check">
                    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
                    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                </div>
                <div class="form-check mb-3">
                    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
                    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
                    <div class="invalid-feedback">More example invalid feedback text</div>
                </div>

                <div class="mb-3">
                    <select class="form-select" required aria-label="select example">
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                    <div class="invalid-feedback">Example invalid select feedback</div>
                </div>

                <div class="mb-3">
                    <input type="file" class="form-control" aria-label="file example" required>
                    <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>`

