<?php

namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Programa extends Conexion
{
    private $id_prog;
    private $programa;

    /**
     * Programa constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_prog()
    {
        return $this->id_prog;
    }

    /**
     * @param mixed $id_prog
     */
    public function setid_prog($id_prog)
    {
        $this->id_prog = $id_prog;
    }

    /**
     * @return mixed
     */
    public function getprograma()
    {
        return $this->programa;
    }

    /**
     * @param mixed $programa
     */
    public function setprograma($programa)
    {
        $this->programa = $programa;
    }

    /**
     * @param
     * @return array
     */
    public function getProgramas()
    {
        $consulta = "SELECT [id_prog], [programa] FROM [Lavanderia].[prd].[vws_programa] ORDER BY id_prog";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver os programas: " . $ex->getMessage());
        }
        $Programas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $Programas;
    }
}