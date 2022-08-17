<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Lavadora extends Conexion
{
    private $id_lavadora;
    private $lavadora;

    /**
     * Lavadora constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_lavadora()
    {
        return $this->id_lavadora;
    }

    /**
     * @param mixed $id_lavadora
     */
    public function setid_lavadora($id_lavadora)
    {
        $this->id_lavadora = $id_lavadora;
    }

    /**
     * @return mixed
     */
    public function getlavadora()
    {
        return $this->lavadora;
    }

    /**
     * @param mixed $lavadora
     */
    public function setlavadora($lavadora)
    {
        $this->lavadora = $lavadora;
    }

    /**
     * @param
     * @return array
     */
    public function getLavadoras()
    {
        $consulta = "SELECT [id_lavadora], [lavadora] FROM [Lavanderia].[prd].[vws_lavadora] ORDER BY id_lavadora";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver as lavadoras: " . $ex->getMessage());
        }
        $Lavadoras = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $Lavadoras;
    }
}