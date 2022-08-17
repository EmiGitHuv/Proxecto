<?php
require '../vendor/autoload.php';
use Clases\Clases1\ClasesOperacionsService;
$url = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicio.wsdl';

$obxecto = new ClasesOperacionsService();// Control de errors

include 'funcions.php';// Cabeceira e pé HTML.

//Autoload de las clases
spl_autoload_register(function ($class) {
    require "../src/" . $class . ".php";
});
$kllc = new Centro(); 
$error = false;

modelo_cabecera('Lavadoras', 'Lavadoras');

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
$lavadora = array();
$lavadora=$obxecto->getLavadoras();// Gardamos nun array os datos das Lavadoras.
//Recuperamos os nomes da roupa_prenda.
$rp = array();
$rp=$obxecto->getRP_lavadoras();// Gardamos nun array os datos da Roupa_Prenda.
//Recuperamos os nomes dos Programas.
$programa = array();
$programa=$obxecto->getProgramas();// Gardamos nun array os datos dos Programas.

$msg = ''; //Mensaxe final de execución.
// Compruebo si $_POST data non esta valeiro.
if (!empty($_POST)) {
    // Post data non esta valeiro, creamos novo rexistro.
    /*/ Inicializamos os variables que imos insertar, check si POST variables existe si non inicializamos en null.
    $id = isset($_POST['id']) && !empty($_POST['id']) && $_POST['id'] != 'auto' ? $_POST['id'] : NULL;BORRAR!!!*/
    // Check si POST variable "name" existe, si non default value blank. O mesmo cos demais variables.
    $id_quenda = $_POST['quenda'];
    $id_centro = $_POST['centro'];
    $id_lavadoras = $_POST['lavadoras'];
    $id_rp = $_POST['roupa_prenda'];
    $id_programa = $_POST['programa'];
    $peso = $_POST['peso'];
    $observacions = $_POST['observacion'];

    // Insertamos novo rexistro nos rexistros kll (lav, kll e centro_kll).
    $producto->setNombre($nombre);
    $producto->setNombre_corto($nomCorto);
    $producto->setPvp($pvp);
    $producto->setFamilia($familia);
    $producto->setDescripcion($des);
    $producto->create();
    $_SESSION['mensaje'] = 'Producto creado Correctamente';
    $producto = null;
    header('Location: listado.php');
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*$dclr = $pdo->prepare('INSERT INTO productos VALUES (?, ?, ?, ?, ?, ?)');
    try {
        $dclr->execute([$id, $nome, $nome_corto, $descricion, $pvp, $Lavadora]);
    }
    catch (PDOException $ex) {
        $error = true; 
        $mensaxe = $ex->getMessage();
        $pdo = null;
    }
    if ($error){ // Control de erro!!!
        echo "Produciuse o seguinte erro o crear o rexistro novo!!!: ".$mensaxe;
        $error = false;
    } else {
    // Output mensaxe.
    $msg = 'Produto creado!!';
    }*/
}
?>

<div class="container">
    <h2 class="display-4">Cargar lavadora</h2>
    <form action="lavadoras.php" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post"><!--Creación do formulario de Lavadoras.-->
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
        <label for="lavadoras">Lavadora</label>
        <select name="lavadoras" id= "lavadoras" required >
            <option value="">Escolla unha lavadora</option><!--Creación do campo de selección lavadora.-->
            <?php foreach($lavadora as $f => $f_value): ?>
                <option value="<?php echo $f_value['id_lavadora'] ?>"><?php echo $f_value['lavadora'] ?></option>
            <?php endforeach?>
        </select>
        <label for="roupa_prenda">Roupa Prenda</label>
        <select name="roupa_prenda" id= "roupa_prenda" required >
            <option value="">Escolla unha prenda</option><!--Creación do campo de selección Roupa_prenda.-->
            <?php foreach($rp as $f => $f_value): ?>
                <option value="<?php echo $f_value['id_rp'] ?>"><?php echo $f_value['descrip'] ?></option>
            <?php endforeach?>
        </select>
        <label for="programa">Programa</label>
        <select name="programa" id= "programa" required >
            <option value="">Escolla un Programa</option><!--Creación do campo de selección lavadora.-->
            <?php foreach($programa as $f => $f_value): ?>
                <option value="<?php echo $f_value['id_prog'] ?>"><?php echo $f_value['programa'] ?></option>
            <?php endforeach?>
        </select>
        <label for="title">Peso</label>
        <input type="text" name="peso" id="peso" required>
        <label for="observacions">Observacións</label>
        <textarea name="observacions" id="observacions"></textarea> 
        <input type="submit" value="Crear"><!--Input submit recarga a páxina.-->
    </form>
    <?php if ($msg): ?><!--Si hai mensaxe, alta nova!!!.-->
    <p><?=$msg?></p>
    <?php endif; ?>
</div>

<?=modelo_pe_de_paxina()?>