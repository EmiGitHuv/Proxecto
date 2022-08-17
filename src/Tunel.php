<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Tunel extends Conexion
{
    private $id_tunel;
    private $tunel;

    /**
     * Tunel constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_tunel()
    {
        return $this->id_tunel;
    }

    /**
     * @param mixed $id_tunel
     */
    public function setid_tunel($id_tunel)
    {
        $this->id_tunel = $id_tunel;
    }

    /**
     * @return mixed
     */
    public function gettunel()
    {
        return $this->tunel;
    }

    /**
     * @param mixed $tunel
     */
    public function settunel($tunel)
    {
        $this->tunel = $tunel;
    }

    /**
     * @param
     * @return array
     */
    public function getTunels()
    {
        $consulta = "SELECT [id_tunel], [tunel] FROM [Lavanderia].[prd].[vws_tunel] ORDER BY id_tunel";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver os tuneis: " . $ex->getMessage());
        }
        $Tunels = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $Tunels;
    }
}