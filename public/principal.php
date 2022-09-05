<?php
session_start();
include 'funcions.php';// Falta por definir as funcións!!!

// Control de errors
$error = false; //non se utiliza!!!

modelo_cabecera ('Lavandería "A Grela"', 'Principal');
/******LOGIN CONTROL********/
if (isset($_SESSION['usuario'])){//Usuario válido.
    modelo_cabecera_navegador('Principal');
    modelo_centro_principal();
} else {
    if (isset($_POST['login'])){//Login.
        if ($_POST['login'] == 'Acceso convidado'){
            modelo_centro_principal();
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
                modelo_cabecera_navegador('Principal');
                modelo_centro_principal();
            } else { //Credenciais erroneas; mensaxe ca sesión e reiniciamos...
                $_SESSION['error'] ='Credenciais inválidas!!!';    
                unset($_SESSION['usuario']);
                header('location:principal.php');
                die();
            }
            $usuario = null;
        }
    } else { //Nin sesión, nin logín ou primeira vez.
            modelo_centro_login();
    }
    if (isset($_SESSION['error'])) {
        echo "<div class='mt-3 text-danger font-weight-bold text-lg'>";
        echo $_SESSION['error'];
        unset($_SESSION['error']);
        echo "</div>";
    }
}
var_js_session();
?>
<?php modelo_pe_de_paxina();?>