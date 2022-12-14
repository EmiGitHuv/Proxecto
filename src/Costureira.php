<?php

namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Costureira extends Conexion
{
    private $id_costureira;
    private $costureira;

    /**
     * Costureira constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_costureira()
    {
        return $this->id_costureira;
    }

    /**
     * @param mixed $id_costureira
     */
    public function setid_costureira($id_costureira)
    {
        $this->id_costureira = $id_costureira;
    }

    /**
     * @return mixed
     */
    public function getcostureira()
    {
        return $this->costureira;
    }

    /**
     * @param mixed $costureira
     */
    public function setcostureira($costureira)
    {
        $this->costureira = $costureira;
    }

    /**
     * @param
     * @return array
     */
    public function getCostureiras()
    {
        $consulta = "SELECT [id_costureira], [costureira] FROM [Lavanderia].[prd].[vws_costureira] ORDER BY id_costureira";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver as costureiras: " . $ex->getMessage());
        }
        $Costureiras = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $Costureiras;
    }
}