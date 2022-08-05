<?php
include 'funcions.php';// Cabeceira e pé HTML.
// Control de errors
$error = false;
modelo_cabecera('Lavadoras', 'Lavadoras');
/***********TÁBOA FAMILIA:************
$dclr = $pdo->prepare("SELECT cod, nombre FROM familias");
try {
    $dclr->execute();
}
catch (PDOException $ex) {
    $error = true; 
    $mensaxe = $ex->getMessage();
    $pdo = null;
}
if ($error){ // Control de erro!!!
    echo "Produciuse o seguinte erro o ler táboa 'familias': ".$mensaxe;
    $error = false;
} else {
    $tabFamilia = $dclr->fetchAll(PDO::FETCH_ASSOC);// Gardamos nun array os datos da Familias.
}
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
    // Buscar a familia.
    if (isset($_POST['familia'])) {
        foreach($tabFamilia as $f => $f_value):
        if ($_POST['familia'] == $f_value['nombre']){   
            $familia = $f_value['cod'];
            break;
        }
        endforeach;
    } else {
        $familia = '';
    }    
    // Insertamos novo rexistro na TÁBOA produtos.
    $dclr = $pdo->prepare('INSERT INTO productos VALUES (?, ?, ?, ?, ?, ?)');
    try {
        $dclr->execute([$id, $nome, $nome_corto, $descricion, $pvp, $familia]);
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
}
?>

<div class="contido modificar">
    <h2>Crear produto</h2>
    <form action="crear.php" method="post"><!--Creación do formulario de alta.-->
        <label for="id">ID</label>
        <label for="name">Nome</label>
        <input type="text" name="id" value="auto" id="id">
        <input type="text" name="nome" id="nome" placeholder="Nome produto">
        <label for="nome_corto">Nome corto</label>
        <label for="created">Familia</label>
        <input type="text" name="nome_corto" id="nome_corto">
        <select name="familia" id= "familia" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">>
            <option value="">Escolla unha familia.</option><!--Creación do campo de selección familia.-->
            <?php foreach($tabFamilia as $f): ?>
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