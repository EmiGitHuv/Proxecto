<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class kg_lavados_lavadoras extends Lavado
{
    private $centro_id_centro;
    private $peso;
    private $observacions;

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
    public function getcentro_id_centro()
    {
        return $this->centro_id_centro;
    }

    /**
     * @param mixed $centro_id_centro
     */
    public function setcentro_id_centro($centro_id_centro)
    {
        $this->centro_id_centro = $centro_id_centro;
    }

    /**
     * @return mixed
     */
    public function getpeso()
    {
        return $this->peso;
    }

    /**
     * @param mixed $peso
     */
    public function setpeso($peso)
    {
        $this->peso = $peso;
    }

    /**
     * @return mixed
     */
    public function getobservacions()
    {
        return $this->observacions;
    }

    /**
     * @param mixed $observacions
     */
    public function setobservacions($observacions)
    {
        $this->observacions = $observacions;
    }

    // Métodos para hacer el CRUD
    // 1.- Create ---------
    function create()
    {
        $alta = "EXECUTE tnl.[usp_alta_Kg_Lavados_Lavadoras] :data, :quenda, :centro, :lavadora, :rp, :programa, :peso, :observacions";
        $stmt = $this->conexion->prepare($alta);
        try {
            $stmt->execute([
                ':data' => $this->data,
                ':quenda' => $this->quenda,
                ':centro' => $this->centro,
                ':lavdora' => $this->lavadora,
                ':rp' => $this->rp,
                ':programa' => $this->programa,
                ':peso' => $this->peso,
                ':observacions' => $this->observacions
            ]);
        } catch (PDOException $ex) {
            die("Ocurrio un erro ó dar de alta o lavado da lavadora: " . $ex->getMessage());
        }
    }

}