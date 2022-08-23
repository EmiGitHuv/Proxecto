<?php
require '../vendor/autoload.php';

use Clases\Clases1\ClasesOperacionsService;
$obxecto = new ClasesOperacionsService();

include 'funcions.php';// Cabeceira e pé HTML.
 
// Control de errors
$error = false;

modelo_cabecera('Tuneis de lavado', 'Tuneis de lavado');//Sesion start.

/***********RECOPILACIÓN DE DATOS CADROS DE SELECCIÓN************/

//Recuperamos os nomes das Quendas.
$quenda = array();
try {
    $quenda = $obxecto->getQuendas();// Gardamos nun array os datos das Quendas.
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
//Recuperamos os nomes dos Centros.
$centro = array();
$centro=$obxecto->getCentros();// Gardamos nun array os datos das Quendas.
//Recuperamos os nomes das Lavadoras.
$tunel = array();
$tunel=$obxecto->getTuneis();// Gardamos nun array os datos dos Tuneis.

$msg = ''; //Mensaxe final de execución.
// Compruebo si $_POST data non esta valeiro.
if (!empty($_POST)) {// Post data non esta valeiro, creamos novo rexistro.
    //Autoload de las clases
    spl_autoload_register(function ($class) {
        require "../src/" . $class . ".php";
    });
    $ctl = new Carga_tunel_lavado();
    // Insertamos novo rexistro nos rexistros kll (lav, kll e centro_kll). Ollo!!!
    $data_prod = date('d-m-Y H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
    $ctl->setdata(date($data_prod));
    $ctl->setquenda_id_quenda($_POST['quenda']);
    $ctl->setcentro_id_centro($_POST['centro']);
    $ctl->settunel_lavado_id_tunel($_POST['tuneis']);
    $ctl->setsacos($_POST['sacos']);
    $ctl->create();//Control de erro!!!
    $_SESSION['mensaxe'] = 'Producto creado Correctamente';
    $ctl = null;
    //header('Location: listado.php');

    // Output mensaxe.
    $msg = 'Produto creado!!';
}

?>

<div class="container">
    <h2 class="display-4">Cargar tunel de lavado</h2>
    <form action="tuneis_lavado.php" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post"><!--Creación do formulario de Tuneis de lavado.-->
        <label for="quenda">Quenda</label>
        <select name="quenda" id= "quenda" required >
            <option value="">Escolla unha quenda</option><!--Creación do campo de selección quenda.-->
            <?php foreach($quenda as $f => $f_value): ?>
                <option value="<?php echo $f_value['id_quenda'] ?>"><?php echo $f_value['quenda'] ?></option>
            <?php endforeach?>
        </select>
        <label for="centro">Centro</label>
        <select name="centro" id= "centro" required >
            <option value="">Escolla un centro</option><!--Creación do campo de selección centro.-->
            <?php foreach($centro as $f => $f_value): ?>
                <option value="<?php echo $f_value['id_centro'] ?>"><?php echo $f_value['centro'] ?></option>
            <?php endforeach?>
        </select>
        <label for="tuneis">Tunel</label>
        <select name="tuneis" id= "tuneis" required >
            <option value="">Escolla un tunela</option><!--Creación do campo de selección lavadora.-->
            <?php foreach($tunel as $f => $f_value): ?>
                <option value="<?php echo $f_value['id_tunel'] ?>"><?php echo $f_value['tunel'] ?></option>
            <?php endforeach?>
        </select>
        <label for="title">Sacos</label>
        <input type="text" name="sacos" id="sacos" required>
        <input type="submit" value="Crear"><!--Input submit recarga a páxina.-->
    </form>
    <?php if ($msg): ?><!--Si hai mensaxe, alta nova!!!.-->
    <p><?=$msg?></p>
    <?php endif; ?>
</div>

<?=modelo_pe_de_paxina()?>