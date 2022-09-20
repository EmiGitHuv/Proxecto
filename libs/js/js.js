/***********SECCIÓNS**************/
var sec_dif_data, sec_erro, sec_modal, sec_usuario, sec_rol, sec_pax;

/***********Paxinas*************/
//Páxina 0: index.html.
//Páxina 1: lavadoras.
//Páxina 2: tuneis de lavado.
//Páxina 3: máquinas de alisado.
//Páxina 4: costura.



/************OBXECTOS***********/
var Quendas, Centros, Lavadoras, RP_Lavadoras, Programas;


/********WINDOWS ONLOAD*********/
window.onload = function () {
    $.ajax({ //Recollemos os valores das sesións actuando en consecuencia:
        method: "POST",
        url: "funcions.php",
        data: { funcion: 'sesions' }
    }).done(function (res) {
        sec_array = JSON.parse(res);//Array das sesións.
        sec_dif_data = sec_array['dif_data'];
        sec_pax = sec_array['paxina'];
        sec_erro = sec_array['erro'];
        sec_modal = sec_array['modal'];
        sec_usuario = sec_array['usuario'];
        sec_rol = sec_array['rol'];
        modelo_modal();//Modal si dase o caso.
        switch (sec_pax) {//Páxina a activar:
            case "1":
                modelos_cabecera_body('Lavandería "A Grela"', 'Lavadoras', sec_dif_data);// Cabecera principal.            
                modelos_cabecera_navegador('Lavadoras');
                modelos_centro_lavadora();
                if (sec_modal)
                    mostrarModal('Lavadoras', sec_modal);
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitLavadoras');
                break
            
            case "2":
                modelos_cabecera_body('Lavandería "A Grela"', 'Tuneis de lavado', sec_dif_data);// Cabecera principal.            
                modelos_cabecera_navegador('Tuneis de lavado');
                modelos_centro_tuneis_lavado();
                if (sec_modal)
                    mostrarModal('Tuneis de lavado', sec_modal);               
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitTuneis');
                break

            case "3":
                modelos_cabecera_body('Lavandería "A Grela"', 'Maquinas de alisado', sec_dif_data);// Cabecera principal.            
                modelos_cabecera_navegador('Maquinas de alisado');
                modelos_centro_Maquinas_Alisado();
                if (sec_modal)
                    mostrarModal('Maquinas de alisado', sec_modal);
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitMaq_Alis');
                break

            case "4":
                modelos_cabecera_body('Lavandería "A Grela"', 'Costura', sec_dif_data);// Cabecera principal.            
                modelos_cabecera_navegador('Costura');
                modelos_centro_Costura();
                if (sec_modal)
                    mostrarModal('Costura', sec_modal);
                if (sec_erro)
                    erroDisp(sec_erro, 'divSubmitCostura');
                break

            default:
                modelos_cabecera_body('Lavandería "A Grela"', 'Principal', sec_dif_data);// Cabecera principal.

                if (sec_usuario == null) {
                    document.getElementById("control_datas").style.display = "none";
                    modelos_centro_login();
                    btnLogin();
                    if (sec_erro != null) { erroDisp(sec_erro, 'centro_login') };
                } else {
                    document.getElementById("control_datas").style.display = "block";
                    modelos_cabecera_navegador('Principal')
                    modelos_centro_principal();                
                }
            break;
        }
        //modelos_pe_de_paxina();
        btnDatas();
        btnNav();
        mostrarDatas();//Calculo da data de produción.
    });
}


function erroDisp(err, divP) { //Parametros: Error e Div onde se vaia mostar.
    if (!!!document.getElementById('div_erro')) {
        let divErro = document.createElement('div'); //Creamos un div novo,
        divErro.id = 'div_erro'; //co id = "div_erro".
        divErro.className = 'container text-center fw-bold alert alert-danger';
        document.getElementById(divP).appendChild(divErro); //Dependente de elemento id do parametro.

    }
    document.getElementById('div_erro').innerHTML = err;
}

function btnDatas() {//Definimos o datepicker e os botóns "<<" ">>".
    sec_dif_data = document.getElementById('lb_dif_data').innerHTML; //Etiqueta dif_data.
    document.getElementById('lb_data_act').innerHTML = 'Hoxe  ' + moment().format('LLL') + '.';//Etiqueta data actual.
    $('#data_prod').datepicker({
        format: 'dd/mm/yyyy',
        changeMonth: false,
        changeYear: false,
        maxDate: "+0D"
    }).on('change', trocarDataProducion);
    //EscoitaEventos dos botóns.
    document.getElementById('bt_dif_data-').addEventListener('click', reducidirDia);
    document.getElementById('bt_dif_data+').addEventListener('click', engadirDia);    
}

function btnLogin() {//Definimos o datepicker e os botóns "Login" "Acceso convidado".
    //EscoitaEventos dos botóns.
    document.getElementById('bto_login').addEventListener('click', controlLogin);
    document.getElementById('bto_convidado').addEventListener('click', controlConvidado);
}
function mostrarDatas() {
    var data_prod = new Date();
    data_prod.setDate(data_prod.getDate() - sec_dif_data);
    $('#data_prod').datepicker("setDate", data_prod);
    document.getElementById('lb_data_prod').innerHTML = 'Data de produción,  ' + moment().subtract(sec_dif_data, 'days').calendar() + '.';

    if (sec_dif_data == 0) { //Comproba o día, en caso mañá en adiante non engadimos día...
        document.getElementById('bt_dif_data+').disabled = true;
    } else {
        document.getElementById('bt_dif_data+').disabled = false;
    }
    document.getElementById('lb_dif_data').innerHTML = sec_dif_data; //Etiqueta dif_data.
}

function btnNav() {
    if (document.getElementById('paxPrincipal')) {
        document.getElementById('paxPrincipal').addEventListener('click', function () {
            sec_pax = 0;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxLavadoras')) {
        document.getElementById('paxLavadoras').addEventListener('click', function () {
            sec_pax = 1;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxTuneis_Lavado')) {
        document.getElementById('paxTuneis_Lavado').addEventListener('click', function () {
            sec_pax = 2;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxMaq_Ali')) {
        document.getElementById('paxMaq_Ali').addEventListener('click', function () {
            sec_pax = 3;
            postear_paxina(sec_pax)
        });
    }
    if (document.getElementById('paxCostura')) {
        document.getElementById('paxCostura').addEventListener('click', function () {
            sec_pax = 4;
            postear_paxina(sec_pax)
        });
    }
}
function postear_dif_data() {//Refrescar páxina cos seccións novos.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_dif_data',
            dif_data: sec_dif_data,
        }
    })
}
function postear_paxina(p) {//Refrescar páxina cos seccións novos.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_paxina',
            paxina: p,
        }
    })
}
function postear_erro(p) {//Refrescar páxina cos seccións novos.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_erro',
            erro: p,
        }
    })
}
function postear_modal(p) {//Refrescar páxina cos seccións novos.
    $.ajax({
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'postear_modal',
            modal: p,
        }
    })
}

function engadirDia() {//Botón ">>".
    sec_dif_data = document.getElementById('lb_dif_data').innerHTML - 1;
    mostrarDatas();
    postear_dif_data();
}

function reducidirDia() {//Botón "<<".
    sec_dif_data = Number(document.getElementById('lb_dif_data').innerHTML) + 1;
    mostrarDatas();
    postear_dif_data();
}

function trocarDataProducion() { //Calcula dif_data ó trocar datepicker.
    var fecha1 = moment( $('#data_prod').datepicker('getDate'));
    var fecha2 = moment(Date.now());
    sec_dif_data = fecha2.diff(fecha1, 'days')
    mostrarDatas();
    postear_dif_data();
}

function controlLogin() { //Se non hai usuario activo.
    if (document.getElementById('input_usuario').value != "") {
        $.ajax({ //Executamos a función loginControl() en funcions.php.
            method: "POST",
            url: "funcions.php",
            data: {
                funcion: 'loginControl',
                usuario: document.getElementById('input_usuario').value
            }
        }).done(function (res) {
            sec_usuario = res;
        })
    }
}

function controlConvidado() {// Quitamos elementos DOM que non lle vai o convidado.
    document.getElementById("control_datas").style.display = "none";
    document.getElementById("div_login").style.display = "none";
    modelos_centro_principal()
}

/********MODELOS HTML************/

function modelos_cabecera_body(title_DOM, depart, dif_data) {
    document.title = title_DOM;

    let divBody =
        `<div class="d-flex flex-row bg-primary text-white" style="margin:0; padding:10px">`; //Creamos a div do Body.
    divBody +=
        `<div class="w-auto">`;
    divBody +=
        `<h1 class="display-4">Lavandería "A Grela" - ${depart}</h1>`;
    divBody +=
        `</div>
        <div id="control_datas" style="font-size: 32px; font-weight:   lighter; margin:0 0 0 20px; padding:0">
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

function modelos_cabecera_navegador(depart) {
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
    if (depart != 'Peso carros') {
        divBody +=
            `<li class="nav-item">
                        <a class="nav-link" href="peso_carros.php"><i class="fas fa-yin-yang"></i> Peso carros</a>
                    </li>`
    }
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
                    <a href="pechar.php" class="nav-link text-white">Saír</a>
                </span>
            </div>
        </div>
    </nav>`
    document.body.innerHTML += divBody;

}

function modelos_centro_principal() {
    let divBody =
        `<div class="container" id="lista">
        <h1 class="display-3 ">Benvido a páxina principal</h1>
        <h2 class="display-4 ">Lavandería "A Grela":</h2>
        <img class="page-cover-image" src="../libs/imaxes/Lavanderia.png">
    </div>`
    document.body.innerHTML += divBody;
}

function modelos_centro_login() {
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

function modelos_centro_Costura() {
    let divBody =
        `<!--Corpo Csotura-->
        <div class="container">
            <h2 class="display-4">Costura</h2>
            <!--Creación do formulario de Costura.-->
            <form class="row g-6 fs-4" method="post">
                <!--Creación do campo de selección quenda.-->
                <div class="col-md-3">
                    <label for="quenda" class="form-label">Quenda</label>
                    <select class="form-select fs-4" name="quenda" id="quenda" aria-describedby="quendaFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha quenda válida.
                    </div>
                </div>`
    getObxQuendas(); //Select para os datos de Quenda.
    divBody +=
        `<!--Creación do campo de selección máquina de alisado.-->
                <div class="col-md-3">
                    <label for="maq_ali" class="form-label">Máquina de alisado</label>
                    <select class="form-select fs-4" name="maq_ali" id="maq_ali" aria-describedby="maq_aliFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha máquina válida.
                    </div>
                </div>`
    getObxMaq_Ali(); //Select para os datos de Maquinas de lavado.
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
                <div Id="divSubmitCostura" style="margin-top: 1rem">
                    <button id="crear_Costura" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                </div>
            </form>
        </div>`

    document.body.innerHTML += divBody;
    document.getElementById('crear_Costura').addEventListener('click', crearObxCostura);
}

function modelos_centro_lavadora() {
    let divBody =
        `<!--Corpo Lavadoras-->
        <div class="container">
            <h2 class="display-4">Cargar lavadora</h2>
            <!--Creación do formulario de Lavadoras.-->
            <form class="row g-6 fs-4" method="post">
                <!--Creación do campo de selección quenda.-->
                <div class="col-md-3">
                    <label for="quenda" class="form-label">Quenda</label>
                    <select class="form-select fs-4" name="quenda" id="quenda" aria-describedby="quendaFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha quenda válida.
                    </div>
                </div>`
    getObxQuendas(); //Select para os datos de Quenda.
    divBody +=
        `<!--Creación do campo de selección centro.-->
                <div class="col-md-3">
                    <label for="centro" class="form-label">Centro</label>
                    <select class="form-select fs-4" name="centro" id="centro" aria-describedby="centroFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un centro válido.
                    </div>
                </div>`
    getObxCentros(); //Select para os datos de Centros.
    divBody +=
        `<!--Creación do campo de selección lavadora.-->
                <div class="col-md-3">
                    <label for="lavadora" class="form-label">Lavadora</label>
                    <select class="form-select fs-4" name="lavadora" id="lavadora" aria-describedby="lavadoraFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha lavadora válida.
                    </div>
                </div>`
    getObxLavadoras(); //Select para os datos de Lavadoras.
    divBody +=
        `<!--Creación do campo de selección Roupa_prenda.-->
                <div class="col-md-3">
                    <label for="roupa_prenda" class="form-label">Roupa Prenda</label>
                    <select class="form-select fs-4" name="roupa_prenda" id="roupa_prenda" aria-describedby="roupa_prendaFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha prenda válida.
                    </div>
                </div>`
    getObxRP_Lavadoras(); //Select para os datos de Roupa_Prenda.
    divBody +=
        `<!--Creación do campo de selección programa.-->
                <div class="col-md-3">
                    <label for="programa" class="form-label">Programa</label>
                    <select class="form-select fs-4" name="programa" id="programa" aria-describedby="programaFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un programa válido.
                    </div>
                </div>`
    getObxProgramas(); //Select para os datos de Programas.
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
                <div Id="divSubmitLavadoras">
                    <button id="crear_Lav" class="btn btn-primary btn-lg fs-4" type="submit">Crear</button>
                </div>
            </form>
        </div>`

    document.body.innerHTML += divBody;
    document.getElementById('crear_Lav').addEventListener('click', crearObxLavadora);
}

function modelos_centro_Maquinas_Alisado() {
    let divBody =
        `<!--Corpo Maquinas de alisado-->
        <div class="container">
            <h2 class="display-4">Cargar Maquinas de alisado</h2>
            <!--Creación do formulario de Maquinas de alisado.-->
            <form class="row g-6 fs-4" method="post">
                <!--Creación do campo de selección quenda.-->
                <div class="col-md-3">
                    <label for="quenda" class="form-label">Quenda</label>
                    <select class="form-select fs-4" name="quenda" id="quenda" aria-describedby="quendaFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha quenda válida.
                    </div>
                </div>`
    getObxQuendas(); //Select para os datos de Quenda.
    divBody +=
        `<!--Creación do campo de selección máquina de alisado.-->
                <div class="col-md-3">
                    <label for="maq_ali" class="form-label">Máquina de alisado</label>
                    <select class="form-select fs-4" name="maq_ali" id="maq_ali" aria-describedby="maq_aliFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha máquina válida.
                    </div>
                </div>`
    getObxMaq_Ali(); //Select para os datos de Maquinas de lavado.
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
    document.getElementById('crear_Maq_alis').addEventListener('click', crearObxMaq_Ali);
}

function modelos_centro_tuneis_lavado() {
    let divBody =
        `<!--Corpo Tuneis de Lavado-->
        <div class="container">
            <h2 class="display-4">Cargar Tuneis de Lavado</h2>
            <!--Creación do formulario de Tuneis de lavado.-->
            <form class="row g-6 fs-4" method="post">
                <!--Creación do campo de selección quenda.-->
                <div class="col-md-3">
                    <label for="quenda" class="form-label">Quenda</label>
                    <select class="form-select fs-4" name="quenda" id="quenda" aria-describedby="quendaFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller unha quenda válida.
                    </div>
                </div>`
    getObxQuendas(); //Select para os datos de Quenda.
    divBody +=
        `<!--Creación do campo de selección centro.-->
                <div class="col-md-3">
                    <label for="centro" class="form-label">Centro</label>
                    <select class="form-select fs-4" name="centro" id="centro" aria-describedby="centroFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un centro válido.
                    </div>
                </div>`
    getObxCentros(); //Select para os datos de Centros.
    divBody +=
        `<!--Creación do campo de selección túnel.-->
                <div class="col-md-3">
                    <label for="tunel" class="form-label">Túnel de lavado</label>
                    <select class="form-select fs-4" name="tunel" id="tunel" aria-describedby="tunelFeedback" required></select>
                    <div class="valid-feedback">
                        Vai ben!
                    </div>
                    <div class="invalid-feedback">
                        Fai o favor de escoller un túnel válido.
                    </div>
                </div>`
    getObxTuneis(); //Select para os datos de Tuneis.
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
    document.getElementById('crear_Tuneis_Lav').addEventListener('click', crearObxTunel);
}

function modelos_pe_de_paxina() {
    let pefooter = document.createElement('footer'); //Creamos un div novo,
    pefooter.id = 'pe_footer'; //co id = "pe_footer".
    //pefooter.className = 'py-5';
    pefooter.style = 'position: absolute; bottom: 0; width: 100%;';
    document.body.appendChild(pefooter); //Dependente do body.

    let divFoot =
        `<div class="container">
            <div class="row">
                <div class="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>
                <div class="col-md-5 offset-md-1 mb-3">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`
    document.getElementById('pe_footer').innerHTML += divFoot;
}

function modelo_modal() {
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
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Pecha</button>
            </div>
            </div>
        </div>
        </div>`
    document.body.innerHTML += divModal;    
}

function mostrarModal(t, p) {
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
                <div class="col-md-3">
                    <label for="validationServer04" class="form-label">State</label>
                    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                    </select>
                    <div id="validationServer04Feedback" class="invalid-feedback">
                    Fai o favor de escoller unha state.
                    </div>
                </div>
                <div class="col-md-3">
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

/**********FUNCIÓNS DOS OBXECTOS*********/
function getObxCentros() {
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

function getObxLavadoras() {
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

function getObxMaq_Ali() {
    $.ajax({ //Executamos a función getObxLavadoras en funcions.php.
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

function getObxProgramas() {
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

function getObxQuendas() {
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

function getObxRP_Lavadoras() {
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

function getObxTuneis() {
    $.ajax({ //Executamos a función getObxLavadoras en funcions.php.
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
function crearObxCostura() {
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

function crearObxLavadora() {
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

function crearObxMaq_Ali() {
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

function crearObxTunel() {
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

/*********EXPRESIÓNS REGULARES****************/
let expReg_1_99 = "^[1-9]\\d{0,1}$";//numeros do 1 ó 99 (non comezar por 0).
let expReg_1_999 = "^[1-9]\\d{0,2}$";//numeros do 1 ó 999 (non comezar por 0).
let expReg_1_9999 = "^[1-9]\\d{0,3}$";//numeros do 1 ó 999 (non comezar por 0).

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

