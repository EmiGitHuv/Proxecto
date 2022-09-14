/***********SECCIÓNS**************/
var sec_dif_data, sec_erro, sec_usuario, sec_rol, sec_pax;
//Páxina 0: index.html.
//Páxina 1: lavadoras,php.



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
        sec_usuario = sec_array['usuario'];
        sec_rol = sec_array['rol'];
        modelo_modal();//Modal si dase o caso.
        switch (sec_pax) {//Páxina a activar:
            case "1":
                modelos_cabecera_body('Lavandería "A Grela"', 'lavadoras', sec_dif_data);// Cabecera principal.            
                modelos_cabecera_navegador('Lavadoras');
                modelos_centro_lavadora();
                break
            
            default:
                modelos_cabecera_body('Lavandería "A Grela"', 'Principal', sec_dif_data);// Cabecera principal.

                if (sec_usuario == null) {
                    document.getElementById("control_datas").style.display = "none";
                    modelos_centro_login();
                    btnLogin();
                    if (sec_erro != null) { erroDisp(sec_erro) };
                } else {
                    document.getElementById("control_datas").style.display = "block";
                    modelos_cabecera_navegador('Principal')
                    modelos_centro_principal();                
                }
            break;
        }
        modelos_pe_de_paxina();
        btnDatas();
        btnNav();
        mostrarDatas();//Calculo da data de produción.
    });




}


function erroDisp(err) {
    let divErro = document.createElement('div'); //Creamos un div novo,
    divErro.id = 'div_erro'; //co id = "div_erro".
    divErro.className = 'container text-center font-weight-bold alert alert-danger'; 
    document.getElementById('centro_login').appendChild(divErro); //Dependente de elemento id 'centro_login'.
    document.getElementById('div_erro').innerHTML += err;
    
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
        document.getElementById('paxPrincipal').addEventListener('click', irPaxP);
    }
    if (document.getElementById('paxLavadoras')) {
        document.getElementById('paxLavadoras').addEventListener('click', irPax1);
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

function controlLogin() {
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
    document.getElementById("centro_login").style.display = "none";
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
        <div id="control_datas" style="font-size: 32px; font-weight: lighter; margin:0 0 0 20px; padding:0">
            <label id="lb_data_act" style="margin:0; padding:0"></label>`;
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
                        <a id="paxLavadoras" class="nav-link" href="index.html"><i class="fas fa-home"></i> Lavadoras</a>
                    </li>`
    }
    if (depart != 'Tuneis de lavado') {
        divBody +=
            `<li class="nav-item">
                        <a class="nav-link" href="tuneis_lavado.php"><i class="fas fa-home"></i> Tuneis de lavado</a>
                    </li>`
    }
    if (depart != 'Maq. de alisado') {
        divBody +=
            `<li class="nav-item">
                        <a class="nav-link" href="maq_alisado.php"><i class="fas fa-home"></i> Maq. de alisado</a>
                    </li>`
    }
    if (depart != 'Costura') {
        divBody +=
            `<li class="nav-item">
                        <a class="nav-link" href="costura.php"><i class="fas fa-home"></i> Costura</a>
                    </li>`
    }
    if (depart != 'Peso carros') {
        divBody +=
            `<li class="nav-item">
                        <a class="nav-link" href="peso_carros.php"><i class="fas fa-home"></i> Peso carros</a>
                    </li>`
    }
    divBody +=
        `</ul>
            </div>
            <div class="container w-auto ">
                <i class="fas fa-user mr-2"></i>
                <input type="text" value="${usuario}" class="form-control bg-transparent text-white w-auto" disabled>
                <a href="pechar.php" class="nav-link text-white">Saír</a>
            </div>
        </div>
    </nav>`
    document.body.innerHTML += divBody;

}

function irPaxP() {
    sec_pax = 0
    postear_paxina(sec_pax)
}
function irPax1() {
    sec_pax = 1
    postear_paxina(sec_pax)
}
function irPax2() {
    sec_pax = 2
    postear_paxina(sec_pax)
}
function irPax3() {
    sec_pax = 3
    postear_paxina(sec_pax)
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
        `<div id="centro_login" class="container">
        <div class="container">
            <h1 class="display-3 ">Lavandería "A Grela"</h1>
            <h2 class="display-4 ">Control de acceso:</h2>
        </div>
        <div class="container h-1000">
            <div class="d-flex justify-content-center">
                <div class="card">
                    <div class="card-header">
                        <h3>Login</h3>
                    </div>
                    <div class="card-body">
                        <form name='login' method="POST">
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" id="input_usuario" class="form-control" placeholder="usuario" name='usuario' required>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="contraseña" name='pass' required disabled>
                                </div>
                                <div class="form-group">
                                    <input type="submit" id="bto_login" value="Login" class="btn float-right btn-outline-primary" name="login"/>
                                </div>
                            </form>         
                        <input type="button" id="bto_convidado" value="Acceso convidado" class='btn btn-primary' />
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.body.innerHTML += divBody;
}

function modelos_centro_lavadora() {
    let divBody =
        `<div class="container">
            <h2 class="display-4">Cargar lavadora</h2>
            <!--Creación do formulario de Lavadoras.-->
            <form method="post">
                <!--Creación do campo de selección quenda.-->
                <label for="quenda">Quenda</label>`
    getObxQuendas();
    divBody += //Select para os datos de Quenda.
                `<select name="quenda" id="quenda" required ></select >
                <!--Creación do campo de selección centro.-->
                <label for="centro">Centro</label>`
    getObxCentros();
    divBody += //Select para os datos de Centros.
                `<select name="centro" id="centro" required ></select>
                <!--Creación do campo de selección lavadora.-->
                <label for="lavadoras">Lavadora</label>`
    getObxLavadoras();
    divBody += //Select para os datos de Lavadoras.
                `<select name="lavadora" id="lavadora" required ></select>
                <!--Creación do campo de selección Roupa_prenda.-->
                <label for="roupa_prenda">Roupa Prenda</label>`
    getObxRP_Lavadoras();
    divBody += //Select para os datos de Roupa_Prenda.
                `<select name="roupa_prenda" id="roupa_prenda" required ></select>
                <!--Creación do campo de selección programa.-->
                <label for="programa">Programa</label>`
    getObxProgramas();
    divBody += //Select para os datos de Programas.
                `<select name="programa" id="programa" required ></select>
                <label for="title">Peso</label>
                <input type="text" name="peso" id="peso" required>
                <label for="observacions">Observacións</label>
                <textarea name="observacions" id="observacions"></textarea>
                <!--Input submit recarga a páxina.-->
                <input type="submit" id="crear_Lav" value="Crear">
            </form>
            <?php if ($msg): ?><!--Si hai mensaxe, alta nova!!!.-->
            <p><?=$msg?></p>
            <?php endif; ?>
        </div>`
    document.body.innerHTML += divBody;
    document.getElementById('crear_Lav').addEventListener('click', crearObxLavadora);
}

function modelos_pe_de_paxina() {
    let pefooter = document.createElement('footer'); //Creamos un div novo,
    pefooter.id = 'pe_footer'; //co id = "pe_footer".
    //pefooter.className = 'py-5';
    pefooter.style = 'position: absolute; bottom: 0; width: 100%;';
    document.body.appendChild(pefooter); //Dependente de elemento id 'centro_login'.

    let divFoot =
        `    <div class="container">
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
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
    modal.show()
}

/**********FUNCIÓNS DOS OBXECTOS*********/
function getObxQuendas() {
    $.ajax({ //Executamos a función getObxQuendas en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxQuendas',
        }
    }).done(function (res) {
        Quendas = JSON.parse(res);
        if (Array.isArray(Quendas)) {
            let opQuenda =
                `<option value="">Escolla unha quenda</option>`;
            for (let f of Quendas) {
                opQuenda +=
                    `<option value="${f['id_quenda']}">${f['quenda']}</option>`
            }
            document.getElementById('quenda').innerHTML = opQuenda;
        }        
    });
}

function getObxCentros() {
    $.ajax({ //Executamos a función getObxCentros en funcions.php.
        method: "POST",
        url: "funcions.php",
        data: {
            funcion: 'getObxCentros',
        }
    }).done(function (res) {
        Centros = JSON.parse(res);
        if (Array.isArray(Centros)) {
            let opCentro =
                `<option value="">Escolla unha quenda</option>`;
            for (let f of Centros) {
                opCentro +=
                    `<option value="${f['id_centro']}">${f['centro']}</option>`
            }
            document.getElementById('centro').innerHTML = opCentro;
        }
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
        Lavadoras = JSON.parse(res);
        if (Array.isArray(Lavadoras)) {
            let opLav =
                `<option value="">Escolla unha lavadora</option>`;
            for (let f of Lavadoras) {
                opLav +=
                    `<option value="${f['id_lavadora']}">${f['lavadora']}</option>`
            }
            document.getElementById('lavadora').innerHTML = opLav;
        }
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
        RP_Lavadoras = JSON.parse(res);
        if (Array.isArray(RP_Lavadoras)) {
            let opRPL =
                `<option value="">Escolla unha quenda</option>`;
            for (let f of RP_Lavadoras  ) {
                opRPL +=
                    `<option value="${f['id_rp']}">${f['descrip']}</option>`
            }
            document.getElementById('roupa_prenda').innerHTML = opRPL;
        }
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
        Programas = JSON.parse(res);
        if (Array.isArray(Programas)) {
            let opProg =
                `<option value="">Escolla un programa</option>`;
            for (let f of Programas) {
                opProg +=
                    `<option value="${f['id_prog']}">${f['programa']}</option>`
            }
            document.getElementById('programa').innerHTML = opProg;
        }
    });
}

/***********CREACIÓN REXISTROS**********/

function crearObxLavadora() {
    if (comprobar_1_99('quenda')) {
        if (comprobar_1_99('centro')) {
            if (comprobar_1_999('lavadora')) {
                if (comprobar_1_99('roupa_prenda')) {
                    if (comprobar_1_99('programa')) {
                        if (comprobar_1_999('peso')) {
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
                                alert(res);
                            });
                        }
                    }
                }
            }
        }
    }
}



/*********EXPRESIÓNS REGULARES****************/
function comprobar_Rex(p, c , exp) {//numeros do 1 ó 99 (non comezar por 0).
    if (!exp.test(c)) {
        mostrarModal('Erro ' + p, 'O dato ' + p + ' é incorrecto.')
        return false;
    } else {
        return true;
    }
}
function comprobar_1_99(p) {//numeros do 1 ó 99 (non comezar por 0).
    let cmpb = document.getElementById(p).value;
    var expreg = new RegExp("^[1-9]\\d{0,1}$");
    return comprobar_Rex(p, cmpb, expreg)
}

function comprobar_1_999(p) {//numeros do 1 ó 99 (non comezar por 0).
    let cmpb = document.getElementById(p).value;
    var expreg = new RegExp("^[1-9]\\d{0,2}$");
    return comprobar_Rex(p, cmpb, expreg)
}
