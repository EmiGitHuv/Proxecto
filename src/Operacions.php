<?php
namespace Clases;

require '../vendor/autoload.php';

use Clases\{Centro, Costureira, Lavadora, Maq_ali, Programa, Quenda, Rol, RP_cirurxica, RP_costura, RP_lavadora, RP_psc_envios, Tunel};

class Operacions
{
    /**
     * Devolve un array cos kg lavados nas lavadoras e Centros.
     * @soap
     * @param
     * @return string[]
     */
    public function getKg_lavado_lavadoras_centro()
    {
        $clase = new Kg_lavado_lavadoras_centro();
        $valores = $clase->getKg_lavado_lavadoras_centro();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes dos Centros.
     * @soap
     * @param
     * @return string[]
     */
    public function getCentros()
    {
        $clase = new Centro();
        $valores = $clase->getCentros();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes das Costureiras.
     * @soap
     * @param
     * @return string[]
     */
    public function getCostureiras()
    {
        $clase = new Costureira();
        $valores = $clase->getCostureiras();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes das Lavadoras.
     * @soap
     * @param
     * @return string[]
     */
    public function getLavadoras()
    {
        $clase = new Lavadora();
        $valores = $clase->getLavadoras();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes das Maquinas de alisado.
     * @soap
     * @param
     * @return string[]
     */
    public function getMaq_alis()
    {
        $clase = new Maq_ali();
        $valores = $clase->getMaq_alis();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes dos Programas.
     * @soap
     * @param
     * @return string[]
     */
    public function getProgramas()
    {
        $clase = new Programa();
        $valores = $clase->getProgramas();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes das Quendas.
     * @soap
     * @param
     * @return string[]
     */
    public function getQuendas()
    {
        $clase = new Quenda();
        $valores = $clase->getQuendas();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes dos Tuneis de lavado.
     * @soap
     * @param
     * @return string[]
     */
    public function getTuneis()
    {
        $clase = new Tunel();
        $valores = $clase->getTuneis();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes da roupa prenda cirúrxica.
     * @soap
     * @param
     * @return string[]
     */
    public function getRP_cirurxicas()
    {
        $clase = new RP_cirurxica();
        $valores = $clase->getRP_cirurxicas();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes da roupa prenda costura.
     * @soap
     * @param
     * @return string[]
     */
    public function getRP_costuras()
    {
        $clase = new RP_costura();
        $valores = $clase->getRP_costuras();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes da roupa prenda lavadora.
     * @soap
     * @param
     * @return string[]
     */
    public function getRP_lavadoras()
    {
        $clase = new RP_lavadora();
        $valores = $clase->getRP_lavadoras();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes da roupa prenda peso carros.
     * @soap
     * @param
     * @return string[]
     */
    public function getRP_psc_envios()
    {
        $clase = new RP_psc_envios();
        $valores = $clase->getRP_psc_envios();
        $clase = null;
        return $valores;
    }
    /**
     * Devolve un array cos nomes da roupa prenda peso carros.
     * @soap
     * @param
     * @return string[]
     */
    public function getRols()
    {
        $clase = new Rol();
        $valores = $clase->getRols();
        $clase = null;
        return $valores;
    }
}