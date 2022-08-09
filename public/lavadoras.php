<?php
require '../vendor/autoload.php';
use Clases\Clases1\ClasesOperacionsService;
$url = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicio.wsdl';
try {
    $cliente = new SoapClient($url);
} catch (SoapFault $f) {
    die("Error en cliente SOAP:" . $f->getMessage());
}
$objeto = new ClasesOperacionsService();// Control de errors

include 'funcions.php';// Cabeceira e pé HTML.

$error = false;

modelo_cabecera('Lavadoras', 'Lavadoras');
/***********TÁBOA Lavadora:************
$dclr = $pdo->prepare("SELECT cod, nombre FROM Lavadoras");
try {
    $dclr->execute();
}
catch (PDOException $ex) {
    $error = true; 
    $mensaxe = $ex->getMessage();
    $pdo = null;
}
if ($error){ // Control de erro!!!
    echo "Produciuse o seguinte erro o ler táboa 'Lavadoras': ".$mensaxe;
    $error = false;
} else {*/
    $tabLavadora = getLavadoras()// Gardamos nun array os datos da Lavadoras.
/*}
$msg = ''; //Mensaxe final de execución.
// Compruebo si $_POST data non esta valeiro.
if (!empty($_POST)) {
    // Post data non esta valeiro, creamos novo rexistro.
    // Inicializamos os variables que imos insertar, check si POST variables existe si non inicializamos en null.
    $id = isset($_POST['id']) && !empty($_POST['id']) && $_POST['id'] != 'auto' ? $_POST['id'] : NULL;
    // Check si POST variable "name" existe, si non default value blank. O mesmo cos demais variables.
    $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
    $nome_corto = isset($_POST['nome_corto']) ? $_POST['nome_corto'] : '';
    $descricion = isset($_POST['descricion']) ? $_POST['descricion'] : '';
    $pvp = isset($_POST['pvp']) ? $_POST['pvp'] : '';
    // Buscar a Lavadora.
    if (isset($_POST['Lavadora'])) {
        foreach($tabLavadora as $f => $f_value):
        if ($_POST['Lavadora'] == $f_value['nombre']){   
            $Lavadora = $f_value['cod'];
            break;
        }
        endforeach;
    } else {
        $Lavadora = '';
    }    
    // Insertamos novo rexistro na TÁBOA produtos.
    $dclr = $pdo->prepare('INSERT INTO productos VALUES (?, ?, ?, ?, ?, ?)');
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
    }
}*/
?>

<div class="container">
    <h2 class="display-4">Cargar lavadoras</h2>
    <form action="lavadoras.php" method="post"><!--Creación do formulario de Lavadoras.-->
        <select name="lavadoras" id= "lavadoras" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">>
            <option value="">Escolla unha lavadora.</option><!--Creación do campo de selección lavadora.-->
            <?php foreach($tabLavadora as $f): ?>
                <option value="<?php echo $f['nombre'] ?>"><?php echo $f['nombre'] ?></option>
            <?php endforeach?>
        </select>
        <label for="descripcion">Descrición</label>
        <label for="title">PVP</label>
        <textarea name="descricion" id="descricion">
        </textarea> 
        <input type="text" name="pvp" id="pvp">
        <input type="submit" value="Crear"><!--Input submit recarga a páxina.-->
    </form>
    <?php if ($msg): ?><!--Si hai mensaxe, alta nova!!!.-->
    <p><?=$msg?></p>
    <?php endif; ?>
</div>*/
?>
<?=modelo_pe_de_paxina()?>