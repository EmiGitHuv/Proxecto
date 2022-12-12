/********MODELOS HTML************/
export function modelos_cabecera_body(title_DOM, depart, usuario, rol) {
    document.title = title_DOM;

    let divBody = //Creamos a div do Tìtulo.
            `<div id="titulo" class="container-fluid d-flex position-relative">
                <h1 class="display-4">Lavandería "A Grela" - ${depart}</h1>`
    divBody += //Icona, usuario e saír login.
                `<div id="control_usuario" class="position-absolute top-0 end-0">
                    <div class="input-group m-2 w-auto">
                        <span class="input-group-text bg-transparent"><i class="fas fa-user mr-2"></i></span>
                        <div class="input-group-prepend">
                            <input type="text" value="${usuario}" class="form-control bg-transparent text-white" disabled>
                        </div>
                        <span class="input-group-text bg-transparent">
                            <a href="Pechar.php" class="nav-link text-white">Saír</a>
                        </span>
                    </div>
                </div>
            </div>`;
    document.getElementById("cabeceira").innerHTML += divBody;
}

export function modelos_cabecera_navegador(depart, dif_data) {
    let divBody =
            `<nav class="navbar navbar-expand-lg navbar-dark bg-primary p-0">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse fs-5 fw-lighter" id="navbarSupportedContent">
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
    if (depart != 'Túneis de lavado') {
        divBody +=
                            `<li class="nav-item">
                                <a id="paxTuneis_Lavado" class="nav-link" href="index.html"><i class="fas fa-yin-yang"></i> Túneis de lavado</a>
                            </li>`
        }
    if (depart != 'Máquinas de alisado') {
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
    divBody +=
                    `<div id="control_datas" class="fs-4 fw-lighter">
                        <label id="lb_data_act" class="m-0 p-0"></label>
                        <label hidden id="lb_dif_data" style="background-color:red">${dif_data}</label>
                        <br>
                        <label id="lb_data_prod" class="m-0 p-0"></label>
                        <input type="button" id="bt_dif_data-" class="btn btn-primary m-0 p-0" value="<<" />
                        <input type="text" class="dateselect" id="data_prod" style="width: 120px" />
                        <input type="button" id="bt_dif_data+" class="btn btn-primary m-0 p-0" value=">>" />
                    </div>
                </div>
            </nav>
        `
    document.getElementById("cabeceira").innerHTML += divBody;

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
                        <div id="centro_login" class="card-body"  >
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
                        <div class="card-footer" style="margin-bottom: -0.5rem">
                            <div class="input-group justify-content-md-end">
                                    <input type="submit" id="bto_login" value="Login" class="btn btn-outline-primary" name="login"/>
                            </div>
                        </div>
                    </form>         
                    <div class="input-group">
                        <input type="button" id="bto_convidado" value="Acceso convidado" class='btn btn-primary' style="height: 38.21px; margin: -2.45rem 0 0.5rem 1rem"/>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.body.innerHTML += divBody;
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
    document.getElementById('tituloMeuModal').innerHTML = t; //Titulo do Modal.
    document.getElementById('textoMeuModal').innerHTML = p; //Texto do Modal.
    var myModal = document.getElementById('meuModal');
    var modal = bootstrap.Modal.getOrCreateInstance(myModal)
    modal.show();
}
