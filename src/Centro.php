<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Centro extends Conexion
{
    private $id_centro;
    private $centro;

    /**
     * Centro constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_centro()
    {
        return $this->id_centro;
    }

    /**
     * @param mixed $id_centro
     */
    public function setid_centro($id_centro)
    {
        $this->id_centro = $id_centro;
    }

    /**
     * @return mixed
     */
    public function getcentro()
    {
        return $this->centro;
    }

    /**
     * @param mixed $centro
     */
    public function setcentro($centro)
    {
        $this->centro = $centro;
    }

    /**
     * @param
     * @return array
     */
    public function getCentros()
    {
        $consulta = "SELECT [id_centro], [centro] FROM [Lavanderia].[prd].[vws_centro] ORDER BY id_centro";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver os centros: " . $ex->getMessage());
        }
        $Centros = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $Centros;
    }

    /**
     * @param array 
     */
    public function setCentros($centro)
    {
        $consulta = "INSERT INTO [centro] ([centro], [activo]) VALUES (:centro, :activo)";
        $stmt = $this->conexion->prepare($insert);
        try {
            $stmt->execute([
                ':centro' => $this->nombre,
                ':activo' => $this->nombre_corto,
            ]);
        } catch (PDOException $ex) {
            die("Ocurriu un erro ó insertar o produto: " . $ex->getMessage());
        }


    }








}