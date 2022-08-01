<?php
require '../vendor/autoload.php';
//$uri=$_SERVER['PHP_SELF'];
$uri = "http://127.0.0.1/Proyecto/Proxecto/servidorSoap";
$parametros = ['uri' => $uri];
try {
    $server = new SoapServer(NULL, $parametros);
    $server->setClass('Clases\Operacions');
    $server->handle();
} catch (SoapFault $f) {
    die("error en server: " . $f->getMessage());
}
