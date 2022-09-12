<?php
require '../vendor/autoload.php';
use Clases\Clases1\ClasesOperacionsService;
$url = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicio.wsdl';
$objeto = new ClasesOperacionsService();

//funcion getCentros -------------------------------------------------------------------
echo "<br>Nomes dos Centros:";
$prueba = $objeto->getCentros();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['centro'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
/*$prueba = [['id_centro'=>50,'centro'=>'Ventorrillo']];
$objeto->setCentros($prueba);*/



//funcion getCostureiras -------------------------------------------------------------------
echo "<br>Nomes das Costureiras:";
$prueba = $objeto->getCostureiras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['costureira'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getLavadoras -------------------------------------------------------------------
echo "<br>Nomes dos Lavadoras:";
$prueba = $objeto->getLavadoras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['lavadora'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getMaq_alis -------------------------------------------------------------------
echo "<br>Nomes dos Maq_alis:";
$prueba = $objeto->getMaq_alis();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['maq_ali'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getProgramas -------------------------------------------------------------------
echo "<br>Nomes dos Programas:";
$prueba = $objeto->getProgramas();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['programa'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getQuendas -------------------------------------------------------------------
echo "<br>Nomes dos Quendas:";
$prueba = $objeto->getQuendas();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['quenda'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getTuneis -------------------------------------------------------------------
echo "<br>Nomes dos Tuneis:";
$prueba = $objeto->getTuneis();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['tunel'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_cirurxicas -------------------------------------------------------------------
echo "<br>Nomes dos RP_cirurxicas:";
$prueba = $objeto->getRP_cirurxicas();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['descrip'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_costuras -------------------------------------------------------------------
echo "<br>Nomes dos RP_costuras:";
$prueba = $objeto->getRP_costuras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['descrip'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_lavadoras -------------------------------------------------------------------
echo "<br>Nomes dos RP_lavadoras:";
$prueba = $objeto->getRP_lavadoras();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['descrip'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_psc_envios -------------------------------------------------------------------
echo "<br>Nomes dos RP_psc_envios:";
$prueba = $objeto->getRP_psc_envios();
echo "<ul>";
foreach ($prueba as $k => $v) {
    $v=$v['descrip'];
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
