<?php
//clienteW.php
$url = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicio.wsdl';
try {
    $cliente = new SoapClient($url);
} catch (SoapFault $f) {
    die("Error en cliente SOAP:" . $f->getMessage());
}
//funcion getCentros -----------------------------------------------------------------------
echo "<br>Nome dos Centros";
$Centros = $cliente->__soapCall('getCentros', []);
echo "<ul>";
foreach ($Centros as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getCostureiras -----------------------------------------------------------------------
echo "<br>Nome das Costureiras";
$Costureiras = $cliente->__soapCall('getCostureiras', []);
echo "<ul>";
foreach ($Costureiras as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getLavadoras -----------------------------------------------------------------------
echo "<br>Nome dos Lavadoras";
$Lavadoras = $cliente->__soapCall('getLavadoras', []);
echo "<ul>";
foreach ($Lavadoras as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getMaq_alis -----------------------------------------------------------------------
echo "<br>Nome dos Maq_alis";
$Maq_alis = $cliente->__soapCall('getMaq_alis', []);
echo "<ul>";
foreach ($Maq_alis as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getProgramas -----------------------------------------------------------------------
echo "<br>Nome dos Programas";
$Programas = $cliente->__soapCall('getProgramas', []);
echo "<ul>";
foreach ($Programas as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getQuendas -----------------------------------------------------------------------
echo "<br>Nome dos Quendas";
$Quendas = $cliente->__soapCall('getQuendas', []);
echo "<ul>";
foreach ($Quendas as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getTuneis -----------------------------------------------------------------------
echo "<br>Nome dos Tuneis";
$Tuneis = $cliente->__soapCall('getTuneis', []);
echo "<ul>";
foreach ($Tuneis as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_cirurxicas -----------------------------------------------------------------------
echo "<br>Nome dos RP_cirurxicas";
$RP_cirurxicas = $cliente->__soapCall('getRP_cirurxicas', []);
echo "<ul>";
foreach ($RP_cirurxicas as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_costuras -----------------------------------------------------------------------
echo "<br>Nome dos RP_costuras";
$RP_costuras = $cliente->__soapCall('getRP_costuras', []);
echo "<ul>";
foreach ($RP_costuras as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_lavadoras -----------------------------------------------------------------------
echo "<br>Nome dos RP_lavadoras";
$RP_lavadoras = $cliente->__soapCall('getRP_lavadoras', []);
echo "<ul>";
foreach ($RP_lavadoras as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
//funcion getRP_psc_envios -----------------------------------------------------------------------
echo "<br>Nome dos RP_psc_envios";
$RP_psc_envios = $cliente->__soapCall('getRP_psc_envios', []);
echo "<ul>";
foreach ($RP_psc_envios as $k => $v) {
    echo "<code><li>$v</li></code>";
}
echo "</ul>";
