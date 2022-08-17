<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Maq_ali extends Conexion
{
    private $id_maq_ali;
    private $maq_ali;

    /**
     * Maq_ali constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return mixed
     */
    public function getid_maq_ali()
    {
        return $this->id_maq_ali;
    }

    /**
     * @param mixed $id_maq_ali
     */
    public function setid_maq_ali($id_maq_ali)
    {
        $this->id_maq_ali = $id_maq_ali;
    }

    /**
     * @return mixed
     */
    public function getmaq_ali()
    {
        return $this->maq_ali;
    }

    /**
     * @param mixed $maq_ali
     */
    public function setmaq_ali($maq_ali)
    {
        $this->maq_ali = $maq_ali;
    }

    /**
     * @param
     * @return array
     */
    public function getMaq_alis()
    {
        $consulta = "SELECT [id_maq_ali], [maq_ali] FROM [Lavanderia].[prd].[vws_maquina_alisado] ORDER BY id_maq_ali";
        $stmt = self::$conexion->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver as maquinas de alisado: " . $ex->getMessage());
        }
        $Maq_alis = $stmt->fetchAll(PDO::FETCH_ASSOC);;
        return $Maq_alis;
    }
}