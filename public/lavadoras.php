<?php
session_start();

$_SESSION['paxina']=1; //Páxina 1 Lavadoras.
require '../vendor/autoload.php';

use Clases\Clases1\ClasesOperacionsService;
$obxecto = new ClasesOperacionsService();

include 'funcions.php';// Cabeceira e pé HTML.
 
// Control de errors
$error = false;
call_user_func($_POST['funcion']);

header('Location:index.html');
/***********RECOPILACIÓN DE DATOS CADROS DE SELECCIÓN************/
function modelo_centro_lavadoras() {
    function getObxQuendas(); //Recuperamos os nomes das Quendas.



    $msg = ''; //Mensaxe final de execución.
    // Compruebo si $_POST data non esta valeiro.
    if (!empty($_POST)) {// Post data non esta valeiro, creamos novo rexistro.
        //Autoload de las clases
        spl_autoload_register(function ($class) {
            require "../src/" . $class . ".php";
        });
        $kllc = new Centro_kll();
        // Insertamos novo rexistro nos rexistros kll (lav, kll e centro_kll). Ollo!!!
        $data_prod = date('Y-m-d H:i:s',strtotime(date('d-m-Y H:i:s').'-  '.$_SESSION['dif_data']." days"));
        $kllc->setdata(date($data_prod));
        $kllc->setquenda_id_quenda($_POST['quenda']);
        $kllc->setcentro_id_centro($_POST['centro']);
        $kllc->setlavadora_id_lavadora($_POST['lavadoras']);
        $kllc->setroupa_prenda_id_rp($_POST['roupa_prenda']);
        $kllc->setprograma_lavadora_id_prog($_POST['programa']);
        $kllc->setpeso($_POST['peso']);
        $kllc->setobservacions($_POST['observacions']);
        $kllc->create();//Control de erro!!!
        $_SESSION['mensaxe'] = 'Producto creado Correctamente';
        $kllc = null;
        // Output mensaxe.
        $msg = 'Produto creado!!';
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
    </body>
<?php
}
?>