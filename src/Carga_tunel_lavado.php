<?php

class Carga_tunel_lavado extends Lavado
{
    private $id_ctl;
    private $centro_id_centro;
    private $tunel_lavado_id_tunel;
    private $sacos;

    /**
     * Tunel constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->id_ctl;
        $this->centro_id_centro;
        $this->tunel_lavado_id_tunel;
        $this->sacos;
    }

    /**
     * @return mixed
     */
    public function getid_ctl()
    {
        return $this->id_ctl;
    }

    /**
     * @param mixed $id_ctl
     */
    public function setid_ctl($id_ctl)
    {
        $this->id_ctl = $id_ctl;
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
    public function gettunel_lavado_id_tunel()
    {
        return $this->tunel_lavado_id_tunel;
    }

    /**
     * @param mixed $tunel_lavado_id_tunel
     */
    public function settunel_lavado_id_tunel($tunel_lavado_id_tunel)
    {
        $this->tunel_lavado_id_tunel = $tunel_lavado_id_tunel;
    }

    /**
     * @return mixed
     */
    public function getsacos()
    {
        return $this->sacos;
    }

    /**
     * @param mixed $sacos
     */
    public function setsacos($sacos)
    {
        $this->sacos = $sacos;
    }

    // Métodos para hacer el CRUD
    // 1.- Create ---------
    function create()
    {
        $alta = "EXECUTE [Lavanderia].[tnl].[usp_alta_Carga_Tuneis_Lavado] :data, :quenda, :centro, :tunel, :sacos";
        $stmt = self::$conexion2->prepare($alta);
        try {
            $stmt->execute([
                ':data' => parent::getdata(),
                ':quenda' => parent::getquenda_id_quenda(),
                ':centro' => $this->centro_id_centro,
                ':tunel' => $this->tunel_lavado_id_tunel,
                ':sacos' => $this->sacos
            ]);
        } catch (PDOException $ex) {
            die("Ocurrio un erro ó dar de alta o lavado do tunel: " . $ex->getMessage());
        }
    }
}