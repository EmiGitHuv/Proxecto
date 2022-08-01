<?php
//servidorSoap/servicioW.php
require '../vendor/autoload.php';
$url = "http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicio.wsdl";
try {
    $server = new SoapServer($url);
    $server->setClass('Clases\Operacions');
    $server->handle();
} catch (SoapFault $f) {
    die("error en server: " . $f->getMessage());
}
