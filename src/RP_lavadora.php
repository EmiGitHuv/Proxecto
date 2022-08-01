<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class RP_lavadora extends Conexion
{
    private $id_rp;
    private $descrip;

    /**
     * RP_lavadora constructor.
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
    public function getRP_lavadoras()
    {
        $consulta = "SELECT [descrip] FROM [Lavanderia].[prd].[vws_rp_lavadora] ORDER BY id_rp";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver a roupa cirúrxica: " . $ex->getMessage());
        }
        while ($fila = $stmt->fetch(PDO::FETCH_OBJ)) {
            $RP_lavadoras[] = $fila->descrip;
        }
        return $RP_lavadoras;
    }
}
