<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Rol extends Conexion
{
    private $id_rol;
    private $lavadora;
    private $costura;
    private $cirurxica;
    private $psc_envios; 

    /**
     * Rol constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_rol()
    {
        return $this->id_rol;
    }

    /**
     * @param mixed $id_rol
     */
    public function setid_rol($id_rol)
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
     * @return mixed
     */
    public function getcostura()
    {
        return $this->costura;
    }

    /**
     * @param mixed $costura
     */
    public function setcostura($costura)
    {
        $this->costura = $costura;
    }
    /**
     * @return mixed
     */
    public function getcirurxica()
    {
        return $this->cirurxica;
    }

    /**
     * @param mixed $cirurxica
     */
    public function setcirurxica($cirurxica)
    {
        $this->cirurxica = $cirurxica;
    }
    /**
     * @return mixed
     */
    public function getpsc_envios()
    {
        return $this->psc_envios;
    }

    /**
     * @param mixed $psc_envios
     */
    public function setpsc_envios($psc_envios)
    {
        $this->psc_envios = $psc_envios;
    }

    /**
     * @param
     * @return array
     */
    public function getRols()
    {
        $consulta = "SELECT [id_rol], [lavadora], [costura], [cirurxica], [psc_envios] FROM [Lavanderia].[sis].[rol] ORDER BY id_rol";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver os roles: " . $ex->getMessage());
        }
        $Rols = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $Rols;
    }
}