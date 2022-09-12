<?php
session_start();
//session_unset();
call_user_func($_POST['funcion']);

function sesions(){//Recolle nun array as sesións para executar no js.js.
    $sesions = array('dif_data'=>isset($_SESSION['dif_data'])?$_SESSION['dif_data']:1, 'paxina'=>isset($_SESSION['paxina'])?$_SESSION['paxina']:null, 'erro'=>isset($_SESSION['erro'])?$_SESSION['erro']:null, 'usuario'=>isset($_SESSION['usuario'])?$_SESSION['usuario']:null, 'rol'=>isset($_SESSION['rol'])?$_SESSION['rol']:null);

    echo json_encode($sesions);//Devolución das sesións: js.js sec_array.
}

function paxPrincipal(){//Activar páxina principal.
    $_SESSION['paxina'] = null;
}

function postear(){//Recargamos na sesión dif_data.
    $_SESSION['dif_data'] = $_POST['dif_data'];
}

function loginControl(){//Non hai usuario activo.
    if (isset($_SESSION['usuario'])){//Usuario válido.
        //ssion_unset($_SESSION['usuario']);
    } else {//Acceso a información da páxina sin acceso as páxinas de produción.
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

/**********FUNCIÓNS DOS OBXECTOS*********/
function getObxQuendas(){
    //Recuperamos os nomes das Quendas. GetQuendas.
    $quenda = array();
    try {
        $quenda = $obxecto->getQuendas();// Gardamos nun array os datos das Quendas.
        echo $quenda;
    }
    catch (Exception $ex) {
        $error = true; 
        $mensaxe = $ex->getMessage();
        $pdo = null;
    }
    if ($error){ // Control de erro!!!
        echo "Produciuse o seguinte erro o ler táboa 'Quenda': ".$mensaxe;
        $error = false;
    }
}

    //Recuperamos os nomes dos Centros.
    $centro = array();
    try {
        $centro=$obxecto->getCentros();;// Gardamos nun array os datos dos Centros.
    }
    catch (Exception $ex) {
        $error = true; 
        $mensaxe = $ex->getMessage();
        $pdo = null;
    }
    if ($error){ // Control de erro!!!
        echo "Produciuse o seguinte erro o ler táboa 'Centro': ".$mensaxe;
        $error = false;
    }
    //Recuperamos os nomes das Lavadoras.
    $lavadora = array();
    try {
        $lavadora=$obxecto->getLavadoras();// Gardamos nun array os datos das Lavadoras.
    }
    catch (Exception $ex) {
        $error = true; 
        $mensaxe = $ex->getMessage();
        $pdo = null;
    }
    if ($error){ // Control de erro!!!
        echo "Produciuse o seguinte erro o ler táboa 'Lavadora': ".$mensaxe;
        $error = false;
    }
    //Recuperamos os nomes da roupa_prenda.
    $rp = array();
    try {
        $rp=$obxecto->getRP_lavadoras();// Gardamos nun array os datos da Roupa_Prenda.
    }
    catch (Exception $ex) {
        $error = true; 
        $mensaxe = $ex->getMessage();
        $pdo = null;
    }
    if ($error){ // Control de erro!!!
        echo "Produciuse o seguinte erro o ler táboa 'Roupa_Prenda': ".$mensaxe;
        $error = false;
    }
    //Recuperamos os nomes dos Programas.
    $programa = array();
    try {
        $programa=$obxecto->getProgramas();// Gardamos nun array os datos dos Programas.
    }
    catch (Exception $ex) {
        $error = true; 
        $mensaxe = $ex->getMessage();
        $pdo = null;
    }
    if ($error){ // Control de erro!!!
        echo "Produciuse o seguinte erro o ler táboa 'Programa': ".$mensaxe;
        $error = false;
    }










/*function var_js_session(){
echo <<<EOT

            <script>
                var meu_javascript_variable_usuario = 
EOT;
            echo json_encode($_SESSION['usuario'] ?? 'null');
echo <<<EOT
        
            </script>

EOT;
}*/