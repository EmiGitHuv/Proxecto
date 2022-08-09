<?php
require '../vendor/autoload.php';
use Clases\Clases1\ClasesOperacionsService;
$url = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicio.wsdl';
try {
    $cliente = new SoapClient($url);
} catch (SoapFault $f) {
    die("Error en cliente SOAP:" . $f->getMessage());
}
$objeto = new ClasesOperacionsService();

//funcion getCentros -------------------------------------------------------------------
echo "<br>Nomes dos Centros:";
$prueba = $objeto->getCentros();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getCostureiras -------------------------------------------------------------------
echo "<br>Nomes das Costureiras:";
$prueba = $objeto->getCostureiras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getLavadoras -------------------------------------------------------------------
echo "<br>Nomes dos Lavadoras:";
$prueba = $objeto->getLavadoras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getMaq_alis -------------------------------------------------------------------
echo "<br>Nomes dos Maq_alis:";
$prueba = $objeto->getMaq_alis();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getProgramas -------------------------------------------------------------------
echo "<br>Nomes dos Programas:";
$prueba = $objeto->getProgramas();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getQuendas -------------------------------------------------------------------
echo "<br>Nomes dos Quendas:";
$prueba = $objeto->getQuendas();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getTunels -------------------------------------------------------------------
echo "<br>Nomes dos Tunels:";
$prueba = $objeto->getTunels();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_cirurxicas -------------------------------------------------------------------
echo "<br>Nomes dos RP_cirurxicas:";
$prueba = $objeto->getRP_cirurxicas();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_costuras -------------------------------------------------------------------
echo "<br>Nomes dos RP_costuras:";
$prueba = $objeto->getRP_costuras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_lavadoras -------------------------------------------------------------------
echo "<br>Nomes dos RP_lavadoras:";
$prueba = $objeto->getRP_lavadoras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_psc_envios -------------------------------------------------------------------
echo "<br>Nomes dos RP_psc_envios:";
$prueba = $objeto->getRP_psc_envios();
echo "<ul>";
foreach ($prueba as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
