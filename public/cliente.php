<?php
$url = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicio.php';
$uri = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap';
try {
    //Creamos el cliente SOAP al no tener WSDL el primer parámetro es null.
    $cliente = new SoapClient(null, ['location' => $url, 'uri' => $uri]);
} catch (SoapFault $ex) {
    echo "Erro no cliente SOAP: ".$ex->getMessage();
}
$Centro = array();
//Recuperamos os nomes dos Centros.
$Centro=$cliente->__soapCall('getCentros',[]);
echo "<br>Nome dos Centros";
echo "<ul>";
foreach ($Centro as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
$Costureira = array();
//Recuperamos os nomes dos Costureiras.
$Costureira=$cliente->__soapCall('getCostureiras',[]);
echo "<br>Nome das Costureiras";
echo "<ul>";
foreach ($Costureira as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
$Lavadora = array();
//Recuperamos os nomes dos Lavadoras.
$Lavadora=$cliente->__soapCall('getLavadoras',[]);
echo "<br>Nome dos Lavadoras";
echo "<ul>";
foreach ($Lavadora as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos Maq_alis.
$Maq_alis=$cliente->__soapCall('getMaq_alis',[]);
echo "<br>Nome dos Maq_alis";
echo "<ul>";
foreach ($Maq_alis as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos Programas.
$Programas=$cliente->__soapCall('getProgramas',[]);
echo "<br>Nome dos Programas";
echo "<ul>";
foreach ($Programas as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos Quendas.
$Quendas=$cliente->__soapCall('getQuendas',[]);
echo "<br>Nome dos Quendas";
echo "<ul>";
foreach ($Quendas as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos Tuneis.
$Tuneis=$cliente->__soapCall('getTuneis',[]);
echo "<br>Nome dos Tuneis";
echo "<ul>";
foreach ($Tuneis as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos RP_cirurxicas.
$RP_cirurxicas=$cliente->__soapCall('getRP_cirurxicas',[]);
echo "<br>Nome dos RP_cirurxicas";
echo "<ul>";
foreach ($RP_cirurxicas as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos RP_costuras.
$RP_costuras=$cliente->__soapCall('getRP_costuras',[]);
echo "<br>Nome dos RP_costuras";
echo "<ul>";
foreach ($RP_costuras as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos RP_lavadoras.
$RP_lavadoras=$cliente->__soapCall('getRP_lavadoras',[]);
echo "<br>Nome dos RP_lavadoras";
echo "<ul>";
foreach ($RP_lavadoras as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
//Recuperamos os nomes dos RP_psc_envios.
$RP_psc_envios=$cliente->__soapCall('getRP_psc_envios',[]);
echo "<br>Nome dos RP_psc_envios";
echo "<ul>";
foreach ($RP_psc_envios as $k => $v) {
    echo "<li><code>$v</code></li>";
}
echo "</ul>";
?>