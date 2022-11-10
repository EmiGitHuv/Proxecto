<?php
session_start();
require '../vendor/autoload.php';

use Clases\Clases1\ClasesOperacionsService;

call_user_func($_POST['funcion']);

function sesions(){//Recolle nun array as sesións para executar no *.js.
    !isset($_SESSION['dif_data'])? $_SESSION['dif_data']=1:''; //Inicializar $_SESSION['difdata'] con 1 se non existe.
    
    $sesions = array('dif_data'=>isset($_SESSION['dif_data'])?$_SESSION['dif_data']:1, 'paxina'=>isset($_SESSION['paxina'])?$_SESSION['paxina']:null, 'erro'=>isset($_SESSION['erro'])?$_SESSION['erro']:null, 'modal'=>isset($_SESSION['modal'])?$_SESSION['modal']:null, 'usuario'=>isset($_SESSION['usuario'])?$_SESSION['usuario']:null, 'rol'=>isset($_SESSION['rol'])?$_SESSION['rol']:null, 'carg_ali'=>isset($_SESSION['carg_ali'])?$_SESSION['carg_ali']:null, 'carg_tun'=>isset($_SESSION['carg_tun'])?$_SESSION['carg_tun']:null, 'lava_lav'=>isset($_SESSION['lava_lav'])?$_SESSION['lava_lav']:null, 'indice'=>isset($_SESSION['indice'])?$_SESSION['indice']:null, 'indice2'=>isset($_SESSION['indice2'])?$_SESSION['indice2']:null, 'crud'=>isset($_SESSION['crud'])?$_SESSION['crud']:'create');
    //erro e modal so gardan dunha volta.
    unset($_SESSION['erro']); unset($_SESSION['modal']);

    echo json_encode($sesions);//Devolución das sesións: *.js sec_array.
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

function postear_crud(){//Activar páxina principal.
    $_SESSION['crud'] = $_POST['crud'];
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

function getObxLavados_Lavadoras(){
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
        $ctl->setquenda($_POST['quenda']);
        $ctl->setmaquina_alisado($_POST['maq_ali']);
        $ctl->setcontador($_POST['contador']);
        $ctl->create();//Control de erro!!!
        echo json_encode('Rexistro creado correctamente!!!');
        $ctl = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó crear o rexistro Máquina de alisado (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function crearObxCarg_Tunel() { //Creamos novo rexistro.
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

function crearObxLavados_Lavadora() { //Creamos novo rexistro.
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

/***********LER REXISTROS POR DATA LISTADOS**********/
function lerDataObxCargas_Alisado() { //Gardamos os rexistros seleccionados.
    //Recuperamos os nomes das Cargas das máquinas de alisado. lerDataObxCargas_Alisado.
    $carg_ali = array();
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $obxecto = new Cargas_alisado();
        $data_prod = date('d-m-Y',strtotime(date('d-m-Y').'-  '.$_SESSION['dif_data']." days"));  
        $carg_ali=$obxecto->readData($data_prod);// Gardamos nun array os datos das Cargas de Alisado na data de produción.
        $_SESSION['carg_ali'] = $carg_ali;//Creamos sesión para aforrar procesos.
        echo json_encode($carg_ali, JSON_UNESCAPED_UNICODE);
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage();
        echo json_encode( "Produciuse o seguinte erro o ler táboa 'Cargas_alisado': ".$mensaxe);
        $pdo = null;
    }
}

function lerDataObxCargas_Tunel() { //Gardamos os rexistros seleccionados.
    //Recuperamos os nomes das Cargas dos Túneis lerDataObxCargas_Tunel.!!!
    $carg_tun = array();
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $obxecto = new Carga_tunel_lavado();
        $data_prod = date('d-m-Y',strtotime(date('d-m-Y').'-  '.$_SESSION['dif_data']." days"));  
        $carg_tun=$obxecto->readData($data_prod);// Gardamos nun array os datos das Cargas de Túneis na data de produción.
        $_SESSION['carg_tun'] = $carg_tun;//Creamos sesión para aforrar procesos.
        echo json_encode($carg_tun, JSON_UNESCAPED_UNICODE);
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage();
        echo json_encode( "Produciuse o seguinte erro o ler táboa 'Cargas_tuneis': ".$mensaxe);
        $pdo = null;
    }
}

function lerDataObxLavados_Lavadoras() { //Gardamos os rexistros seleccionados.
    //Recuperamos os nomes das Cargas das máquinas de alisado lerDataObxLavados_Lavadoras.!!!
    $lava_lav = array();
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $obxecto = new centro_kll();
        $data_prod = date('d-m-Y',strtotime(date('d-m-Y').'-  '.$_SESSION['dif_data']." days"));  
        $lava_lav=$obxecto->readData($data_prod);// Gardamos nun array os datos das Cargas de Alisado na data de produción.
        $_SESSION['lava_lav'] = $lava_lav;//Creamos sesión para aforrar procesos.
        echo json_encode($lava_lav, JSON_UNESCAPED_UNICODE);
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage();
        echo json_encode( "Produciuse o seguinte erro o ler táboa 'Lavados_Lavadoras': ".$mensaxe);
        $pdo = null;
    }
}

/***********LER REXISTROS POR INDICE LISTADOS**********/
function lerObxCargas_Alisado() { //Gardamos os rexistros seleccionados.
    //Recuperamos os nomes das Cargas das máquinas de alisado. lerObxCargas_Alisado.
    $carg_ali = array();
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $obxecto = new Cargas_alisado();
        $id_carga_alis =$_POST['indice'];  
        $carg_ali=$obxecto->readIndice($id_carga_alis);// Gardamos nun array os datos das Cargas de Alisado na data de produción.
        //Creamos sesión para aforrar procesos.
        $_SESSION['carg_ali'] = $carg_ali;
        $_SESSION['crud'] = $_POST['crud'];
        $_SESSION['indice'] = $_POST['indice'];
        echo json_encode($carg_ali, JSON_UNESCAPED_UNICODE);
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage();
        echo json_encode( "Produciuse o seguinte erro o ler táboa 'Cargas_alisado': ".$mensaxe);
        $pdo = null;
    }
}

function lerObxCargas_Tunel() { //Gardamos os rexistros seleccionados.
    //Recuperamos os nomes das Cargas de Túneis. lerObxCargas_Tunel.
    $carg_tun = array();
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $obxecto = new Carga_tunel_lavado();
        $id_lavado =$_POST['indice'];  
        $id_ctl =$_POST['indice2'];  
        $carg_tun=$obxecto->readIndice($id_lavado, $id_ctl);// Gardamos nun array os datos das Cargas de Túneis na data de produción.
        //Creamos sesión para aforrar procesos.
        $_SESSION['carg_tun'] = $carg_tun;
        $_SESSION['crud'] = $_POST['crud'];
        $_SESSION['indice'] = $_POST['indice'];
        $_SESSION['indice2'] = $_POST['indice2'];
        echo json_encode($carg_tun, JSON_UNESCAPED_UNICODE);
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage();
        echo json_encode( "Produciuse o seguinte erro o ler táboa 'Cargas_tunel_lavado': ".$mensaxe);
        $pdo = null;
    }
}

function lerObxLavados_Lavadoras() { //Gardamos os rexistros seleccionados.
    //Recuperamos os nomes das Cargas das máquinas de alisado. lerObxLavados_Lavadoras.
    $lava_lav = array();
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $obxecto = new Centro_kll();
        $id_lavado =$_POST['indice'];  
        $id_kll =$_POST['indice2'];  
        $lava_lav=$obxecto->readIndice($id_lavado, $id_kll);// Gardamos nun array os datos dos lavados de lavadora na data de produción.
        //Creamos sesión para aforrar procesos.
        $_SESSION['lava_lav'] = $lava_lav;
        $_SESSION['crud'] = $_POST['crud'];
        $_SESSION['indice'] = $_POST['indice'];
        $_SESSION['indice2'] = $_POST['indice2'];
        echo json_encode($lava_lav, JSON_UNESCAPED_UNICODE);
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage();
        echo json_encode( "Produciuse o seguinte erro o ler táboa 'Lavado_lavadoras': ".$mensaxe);
        $pdo = null;
    }
}

/***********MODIFICACIÓN REXISTROS**********/
function modificarObxMaq_Ali() { //Modificamos o rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $ctl = new Cargas_alisado();
        // Modificamos o noso rexistro nos rexistros Cargas_alisado.
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $ctl->setdata(date($data_prod));
        $ctl->setquenda($_POST['quenda']);
        $ctl->setmaquina_alisado($_POST['maq_ali']);
        $ctl->setcontador($_POST['contador']);
        $ctl->setid_carg_alis($_POST['id_carg_alis']);
        $ctl->update();//Control de erro!!!
        $_SESSION['crud'] = "create";//Se pasa a la opción crear.
        $_SESSION['indice']= null; //Xa non se busca un indice.        
        echo json_encode('Rexistro modificado correctamente!!!');
        $ctl = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó modificar o rexistro Máquina de alisado (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function modificarObxCarg_Tunel() { //Modificamos o rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $ctl = new Carga_tunel_lavado();
        // Modificamos o noso rexistro nos rexistros Cargas_tuneis.
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $ctl->setdata(date($data_prod));
        $ctl->setquenda_id_quenda($_POST['quenda']);
        $ctl->setcentro_id_centro($_POST['centro']);
        $ctl->settunel_lavado_id_tunel($_POST['tunel']);
        $ctl->setsacos($_POST['sacos']);
        $ctl->setid_lavado($_POST['id_lav']);
        $ctl->setid_ctl($_POST['id_ctl']);
        $ctl->update();//Control de erro!!!
        $_SESSION['crud'] = "create";//Se pasa a la opción crear.
        $_SESSION['indice']= null; //Xa non se busca un indice.        
        $_SESSION['indice2']= null; //Xa non se busca un indice.        
        echo json_encode('Rexistro modificado correctamente!!!');
        $ctl = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó modificar o rexistro túnel de lavado (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function modificarObxLavados_Lavadoras() { //Modificamos o rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $kll = new Centro_kll();
        // Modificamos o noso rexistro nos rexistros Lavados_Lavadora.
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $kll->setdata(date($data_prod));
            /*************PENDIENTE CONCRETAR************/
            /*
        $kll->setquenda_id_quenda($_POST['quenda']);
        $kll->setcentro_id_centro($_POST['centro']);
        $kll->settunel_lavado_id_tunel($_POST['tunel']);
        $kll->setsacos($_POST['sacos']);
        $kll->setid_lavado($_POST['id_lav']);
        $kll->setid_kll($_POST['id_kll']);
        $kll->update();//Control de <erro!!!></erro!!!>*/

        $_SESSION['crud'] = "create";//Se pasa a la opción crear.
        $_SESSION['indice']= null; //Xa non se busca un indice.        
        $_SESSION['indice2']= null; //Xa non se busca un indice.        
        echo json_encode('Rexistro modificado correctamente!!!');
        $kll = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó modificar o rexistro túnel de lavado (funcions): ".$mensaxe);
        $pdo = null;
    }
}

/***********BORRAR REXISTROS**********/
function borrarObxMaq_Ali() { //Borramos o rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $ma = new Cargas_alisado();
        // Modificamos o noso rexistro dos rexistros Cargas_alisado.
        $ma->setid_carg_alis($_POST['id_carg_alis']);
        $ma->delete();//Control de erro!!!
        $_SESSION['crud'] = "create";//Se pasa a la opción crear.
        $_SESSION['indice']= null; //Xa non se busca un indice.        
        echo json_encode('Rexistro borrado correctamente!!!');
        $ma = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó borrar o rexistro Máquina de alisado (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function borrarObxCarg_Tunel() { //Borramos o rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $ctl = new Carga_tunel_lavado();
        // Borramis o noso rexistro dos rexistros Cargas_tuneis.
        $ctl->setid_lavado($_POST['id_lavado']);
        $ctl->setid_ctl($_POST['id_ctl']);
        $ctl->delete();//Control de erro!!!
        $_SESSION['crud'] = "create";//Se pasa a la opción crear.
        $_SESSION['indice']= null; //Xa non se busca un indice.        
        $_SESSION['indice2']= null; //Xa non se busca un indice.        
        echo json_encode('Rexistro borrado correctamente!!!');
        $ctl = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó borrar o rexistro Cargas de Túneis (funcions): ".$mensaxe);
        $pdo = null;
    }
}

function borrarObxLavados_Lavadora() { //Borramos o rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    try {
        $kll = new Centro_kll();
        // Borramis o noso rexistro dos rexistros Lavados_Lavadora.
        $kll->setid_lavado($_POST['id_lavado']);
        $kll->setid_kll($_POST['id_kll']);
        $kll->delete();//Control de erro!!!
        $_SESSION['crud'] = "create";//Se pasa a la opción crear.
        $_SESSION['indice']= null; //Xa non se busca un indice.        
        $_SESSION['indice2']= null; //Xa non se busca un indice.        
        echo json_encode('Rexistro borrado correctamente!!!');
        $kll = null;
    }
    catch (Exception $ex) {        
        $mensaxe = $ex->getMessage(); //Ollo! Catro primeiros letras =='Erro'
        echo json_encode( "Erro ó borrar o rexistro Lavado de Lavadoras (funcions): ".$mensaxe);
        $pdo = null;
    }
}