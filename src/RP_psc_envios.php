<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class RP_psc_envios extends Conexion
{
    private $id_rp;
    private $descrip;

    /**
     * RP_psc_envios constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_rp()
    {
        return $this->id_rp;
    }

    /**
     * @param mixed $id_rp
     */
    public function setid_rp($id_rp)
    {
        $this->id_rp = $id_rp;
    }

    /**
     * @return mixed
     */
    public function getdescrip()
    {
        return $this->descrip;
    }

    /**
     * @param mixed $descrip
     */
    public function setdescrip($descrip)
    {
        $this->descrip = $descrip;
    }

    /**
     * @param
     * @return array
     */
    public function getRP_psc_envios()
    {
        $consulta = "SELECT [id_rp], [descrip] FROM [Lavanderia].[prd].[vws_rp_psc_envios] ORDER BY id_rp";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver a roupa peso carros: " . $ex->getMessage());
        }
        $RP_psc_envioss = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $RP_psc_envioss;
    }
}