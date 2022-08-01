<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Quenda extends Conexion
{
    private $id_quenda;
    private $quenda;

    /**
     * Quenda constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_quenda()
    {
        return $this->id_quenda;
    }

    /**
     * @param mixed $id_quenda
     */
    public function setid_quenda($id_quenda)
    {
        $this->id_quenda = $id_quenda;
    }

    /**
     * @return mixed
     */
    public function getquenda()
    {
        return $this->quenda;
    }

    /**
     * @param mixed $quenda
     */
    public function setquenda($quenda)
    {
        $this->quenda = $quenda;
    }

    /**
     * @param
     * @return array
     */
    public function getQuendas()
    {
        $consulta = "SELECT [quenda] FROM [Lavanderia].[prd].[vws_quenda] ORDER BY id_quenda";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver as quendas: " . $ex->getMessage());
        }
        while ($fila = $stmt->fetch(PDO::FETCH_OBJ)) {
            $Quendas[] = $fila->quenda;
        }
        return $Quendas;
    }
}
