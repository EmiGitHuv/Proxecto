<?php

namespace Clases\Clases1;

class ClasesOperacionsServiceCustom extends \SoapClient
{

    /**
     * @var array $classmap The defined classes
     */
    private static $classmap = array ();

    /**
     * @param array $options A array of config values
     * @param string $wsdl The wsdl file to use
     */
    public function __construct(array $options = array(), $wsdl = null)
    {
    
  foreach (self::$classmap as $key => $value) {
    if (!isset($options['classmap'][$key])) {
      $options['classmap'][$key] = $value;
    }
  }
      $options = array_merge(array (
  'features' => 1,
), $options);
      if (!$wsdl) {
        $wsdl = 'http://127.0.0.1/Proyecto/Proxecto/servidorSoap/servicioW.php?wsdl';
      }
      parent::__construct($wsdl, $options);
    }

    /**
     * Devolve un array cos nomes dos centros.
     *
     * @return Array
     */
    public function getCentros()
    {
      return $this->__soapCall('getCentros', array());
    }

}
