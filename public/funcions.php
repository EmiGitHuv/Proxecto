<?php
session_start();
//session_unset();
call_user_func($_POST['funcion']);

function sesions(){
    $sesions = array('dif_data'=>isset($_SESSION['dif_data'])?$_SESSION['dif_data']:1, 'paxina'=>isset($_SESSION['paxina'])?$_SESSION['paxina']:null, 'erro'=>isset($_SESSION['erro'])?$_SESSION['erro']:null, 'usuario'=>isset($_SESSION['usuario'])?$_SESSION['usuario']:null, 'rol'=>isset($_SESSION['rol'])?$_SESSION['rol']:null);

// 'sess'=>isset($_SESSION['sess'])?$_SESSION['sess']:null,

    echo json_encode($sesions);//Devolución das sesións: js.js sec_array.
}

function postear(){
    $_SESSION['dif_data'] = $_POST['dif_data'];
}

function loginControl(){
    if (isset($_SESSION['usuario'])){//Usuario válido.
        //ssion_unset($_SESSION['usuario']);
    } else {
        if ($_POST['usuario'] == 'Acceso convidado'){
            session_unset();

        } else { //Inicializar Usuario.        
            $_SESSION['usuario']  = trim($_POST['usuario']);
            //$pass = trim($_POST['pass']);
            //Autoload de las clases
            spl_autoload_register(function ($class) {
                require "../src/" . $class . ".php";
            });
            $usuario = new Usuario(); 
            //if (!$usuario->eValido($nombre, $pass)) {
            if ($usuario->eValido($_SESSION['usuario'])) {//Comprobar Usuario.
                $_SESSION['rol']=$usuario->getRol($_SESSION['usuario'] );
            } else { //Credenciais erroneas; mensaxe ca sesión e reiniciamos...
                $_SESSION['erro'] ='Credenciais inválidas!!!';    
                unset($_SESSION['usuario']);
            }
            $usuario = null;
        }
    }
    if (isset($_SESSION['usuario'])) echo($_SESSION['usuario']);
}

/*function modelo_cabecera_navegador($depart){
    $usuario = $_SESSION['usuario'];
    $rol= $_SESSION['rol'];
echo <<<EOT
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
EOT;
                    if ($depart<>'Principal'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="principal.php"><i class="fas fa-home"></i> Principal</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Lavadoras'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="lavadoras.php"><i class="fas fa-home"></i> Lavadoras</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Tuneis de lavado'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="tuneis_lavado.php"><i class="fas fa-home"></i> Tuneis de lavado</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Maq. de alisado'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="maq_alisado.php"><i class="fas fa-home"></i> Maq. de alisado</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Costura'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="costura.php"><i class="fas fa-home"></i> Costura</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
EOT;
                    if ($depart<>'Peso carros'):
echo <<<EOT
                    <li class="nav-item">
                        <a class="nav-link" href="peso_carros.php"><i class="fas fa-home"></i> Peso carros</a>
                    </li>
EOT;
                    endif;
echo <<<EOT
                </ul>
            </div>
            <div class="container w-auto ">
                <i class="fas fa-user mr-2"></i>
                <input type="text" value="$usuario" class="form-control bg-transparent text-white w-auto" disabled>
                <a href="pechar.php" class="nav-link text-white">Saír</a>
            </div>
        </div>
    </nav>

EOT;
}

function modelo_centro_principal()
{
echo <<<EOT
    <div class="container" id="lista">
        <h1 class="display-3 ">Benvido a páxina principal.</h1>
        <h2 class="display-4 ">Lavandería "A Grela":</h2>
        <img class="page-cover-image" src="./libs/imaxes/Lavanderia.png">

EOT;

}

function modelo_centro_login()
{
echo <<<EOT
    <div class="container">
        <h1 class="display-3 ">Lavandería "A Grela".</h1>
        <h2 class="display-4 ">Control de acceso:</h2>
    </div>
    <div class="container h-1000">
        <div class="d-flex justify-content-center">
            <div class="card">
                <div class="card-header">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <form name='login' method='POST' action='
EOT;
                    $_SERVER['PHP_SELF'];
echo <<<EOT
                    '>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="usuario" name='usuario' required>
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="contraseña" name='pass' required disabled>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Login" class="btn float-right btn-outline-primary" name='login'>
                        </div>
                    </form>
                    <form name='login' method='POST' action='
EOT;
                    $_SERVER['PHP_SELF'];
echo <<<EOT
                    '><input type="submit" value="Acceso convidado" class='btn btn-primary' name='login'></form>
                </div>
            </div>
        </div>
EOT;
}


function modelo_pe_de_paxina() {
echo <<<EOT

    </div>
</body>
<footer class="py-5" style="position: fixed; bottom: 0; width: 100%;">
    <div class="container">
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
    </div>
</footeer>
</html>
EOT;
}

function var_js_session(){
echo <<<EOT

            <script>
                var meu_javascript_variable_usuario = 
EOT;
            echo json_encode($_SESSION['usuario'] ?? 'null');
echo <<<EOT
        
            </script>

EOT;
}*/