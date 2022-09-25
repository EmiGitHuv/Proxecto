<?php
session_start();
require '../vendor/autoload.php';

use Clases\Clases1\ClasesOperacionsService;

call_user_func($_POST['funcion']);

function sesions(){//Recolle nun array as sesións para executar no js.js.
    //Inicializar $_SESSION['difdata'] con 1 se non existe.
    !isset($_SESSION['dif_data'])? $_SESSION['dif_data']=1:'';
    
    $sesions = array('dif_data'=>isset($_SESSION['dif_data'])?$_SESSION['dif_data']:1, 'paxina'=>isset($_SESSION['paxina'])?$_SESSION['paxina']:null, 'erro'=>isset($_SESSION['erro'])?$_SESSION['erro']:null, 'modal'=>isset($_SESSION['modal'])?$_SESSION['modal']:null, 'usuario'=>isset($_SESSION['usuario'])?$_SESSION['usuario']:null, 'rol'=>isset($_SESSION['rol'])?$_SESSION['rol']:null);
    //erro e modal so gardan dunha volta.
    unset($_SESSION['erro']); unset($_SESSION['modal']);

    echo json_encode($sesions);//Devolución das sesións: js.js sec_array.
}

function postear_dif_data(){//Recargamos na sesión dif_data.
    $_SESSION['dif_data'] = $_POST['dif_data'];
}

function postear_paxina(){//Activar páxina principal.
    $_SESSION['paxina'] = $_POST['paxina'];
}

function postear_erro(){//Activar páxina principal.
    $_SESSION['erro'] = $_POST['erro'];
}

function postear_modal(){//Activar páxina principal.
    $_SESSION['modal'] = $_POST['modal'];
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
function getObxCentros(){
    if (!isset($_SESSION['Centro'])) {
        //Recuperamos os nomes dos Centros. getCentros
        $centro = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $centro=$obxecto->getCentros();;// Gardamos nun array os datos dos Centros.
            $_SESSION['Centro'] = $centro;//Creamos sesión para aforar procesos.
            echo json_encode($centro, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Centro': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['Centro'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxCostureira(){
    if (!isset($_SESSION['Costureira'])) {
        //Recuperamos os nomes dos Costureiras. getCostureiras
        $centro = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $centro=$obxecto->getCostureiras();;// Gardamos nun array os datos dos Costureiras.
            $_SESSION['Costureira'] = $centro;//Creamos sesión para aforar procesos.
            echo json_encode($centro, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Costureira': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['Costureira'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxLavadoras(){
    if (!isset($_SESSION['Lavadoras'])) {
        //Recuperamos os nomes das Lavadoras. getLavadoras.
        $lavadora = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $lavadora=$obxecto->getLavadoras();// Gardamos nun array os datos das Lavadoras.
            $_SESSION['Lavadoras'] = $lavadora;//Creamos sesión para aforar procesos.
            echo json_encode($lavadora, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Lavadora': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['Lavadoras'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxMaq_Ali(){
    if (!isset($_SESSION['Maq_Ali'])) {
        //Recuperamos os nomes das máquinas de alisado. getMaq_Alis.
        $maq_ali = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $maq_ali=$obxecto->getMaq_Alis();// Gardamos nun array os datos das Lavadoras.
            $_SESSION['Maq_Ali'] = $maq_ali;//Creamos sesión para aforar procesos.
            echo json_encode($maq_ali, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Maq_ali': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['Maq_Ali'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxProgramas(){
    if (!isset($_SESSION['Programas'])) {
        //Recuperamos os nomes dos Programas. getProgramas.
        $programa = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $programa=$obxecto->getProgramas();// Gardamos nun array os datos dos Programas.
            $_SESSION['Programas'] = $programa;//Creamos sesión para aforar procesos.
            echo json_encode($programa, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Programa': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['Programas'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxQuendas(){
    if (!isset($_SESSION['Quenda'])) {
        //Recuperamos os nomes das Quendas. GetQuendas.
        $quenda = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $quenda = $obxecto->getQuendas();// Gardamos nun array os datos das Quendas.
            $_SESSION['Quenda'] = $quenda;//Creamos sesión para aforar procesos.
            echo json_encode($quenda , JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {
            $mensaxe = $ex->getMessage();
            echo json_encode("Produciuse o seguinte erro o ler táboa 'Quenda': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['Quenda'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxRP_Costura(){
    if (!isset($_SESSION['getRP_Costuras'])) {
        //Recuperamos os nomes da roupa_prenda. getRP_costureiras.
        $rp = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $rp=$obxecto->getRP_Costuras();// Gardamos nun array os datos da Roupa_Prenda.
            $_SESSION['getRP_Costuras'] = $rp;//Creamos sesión para aforar procesos.
            echo json_encode($rp, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Roupa_Prenda': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['getRP_Costuras'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxRP_Lavadoras(){
    if (!isset($_SESSION['RP_Lavadoras'])) {
        //Recuperamos os nomes da roupa_prenda. getRP_lavadoras.
        $rp = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $rp=$obxecto->getRP_lavadoras();// Gardamos nun array os datos da Roupa_Prenda.
            $_SESSION['RP_Lavadoras'] = $rp;//Creamos sesión para aforar procesos.
            echo json_encode($rp, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Roupa_Prenda': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['RP_Lavadoras'] , JSON_UNESCAPED_UNICODE);
    }
}

function getObxTuneis(){
    if (!isset($_SESSION['Tuneis'])) {
        //Recuperamos os nomes dos Tuneis. getTuneis.
        $tuneis = array();
        try {
            $obxecto = new ClasesOperacionsService();   
            $tuneis=$obxecto->getTuneis();// Gardamos nun array os datos das Lavadoras.
            $_SESSION['Tuneis'] = $tuneis;//Creamos sesión para aforar procesos.
            echo json_encode($tuneis, JSON_UNESCAPED_UNICODE);
        }
        catch (Exception $ex) {        
            $mensaxe = $ex->getMessage();
            echo json_encode( "Produciuse o seguinte erro o ler táboa 'Tuneis': ".$mensaxe);
            $pdo = null;
        }
    } else {
    echo json_encode($_SESSION['Tuneis'] , JSON_UNESCAPED_UNICODE);
    }
}

/***********CREACIÓN REXISTROS**********/

function crearObxLavadora() { //Creamos novo rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $kllc = new Centro_kll();
        // Insertamos novo rexistro nos rexistros kll (lav, kll e centro_kll). Ollo!!!
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $kllc->setdata(date($data_prod));
        $kllc->setquenda_id_quenda($_POST['quenda']);
        $kllc->setcentro_id_centro($_POST['centro']);
        $kllc->setlavadora_id_lavadora($_POST['lavadora']);
        $kllc->setroupa_prenda_id_rp($_POST['roupa_prenda']);
        $kllc->setprograma_lavadora_id_prog($_POST['programa']);
        $kllc->setpeso($_POST['peso']);
        $kllc->setobservacions($_POST['observacions']);
        $kllc->create();//Control de erro!!!
        echo json_encode('Rexistro creado correctamente!!!');
        $kllc = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó crear o rexistro Lavadora (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function crearObxCostura() { //Creamos novo rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $cst = new Costura();
        // Insertamos novo rexistro nos rexistros Cargas_alisado.
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $cst->setdata(date($data_prod));
        $cst->setcostureira_id_costureira($_POST['costureira']);
        $cst->setroupa_prenda_id_rp($_POST['roupa_prenda']);
        $cst->setrepaso($_POST['repaso']);
        $cst->setbaixa($_POST['baixa']);
        $cst->setcantidade($_POST['total_rp']);
        $cst->setconfeccion($_POST['confeccion']);
        $cst->setarranxo($_POST['arranxo']);
        $cst->create();//Control de erro!!!
        echo json_encode('Rexistro creado correctamente!!!');
        $cst = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó crear o rexistro Costura (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function crearObxMaq_Ali() { //Creamos novo rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $ctl = new Cargas_alisado();
        // Insertamos novo rexistro nos rexistros Cargas_alisado.
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $ctl->setdata(date($data_prod));
        $ctl->setquenda_id_quenda($_POST['quenda']);
        $ctl->setmaquina_alisado_id_maq_ali($_POST['maq_ali']);
        $ctl->setcontador($_POST['contador']);
        $ctl->create();//Control de erro!!!
        echo json_encode('Rexistro creado correctamente!!!');
        $ctl = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó crear o rexistro Maquina de alisado (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function crearObxTunel() { //Creamos novo rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $mqa = new Carga_tunel_lavado();
        // Insertamos novo rexistro nos rexistros kll (lav e Carga_tunel_lavado). Ollo!!!
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $mqa->setdata(date($data_prod));
        $mqa->setquenda_id_quenda($_POST['quenda']);
        $mqa->setcentro_id_centro($_POST['centro']);
        $mqa->settunel_lavado_id_tunel($_POST['tunel']);
        $mqa->setsacos($_POST['sacos']);
        $mqa->create();//Control de erro!!!
        echo json_encode('Rexistro creado correctamente!!!');
        $mqa = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó crear o rexistro Túnel de lavado (funcions): ".$mensaxe);
        $pdo = null;
    }
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