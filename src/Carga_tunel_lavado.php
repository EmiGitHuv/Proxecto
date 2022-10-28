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
            die("Ocorreu un erro ó dar de alta o lavado do tunel: " . $ex->getMessage());
        }
    }
    // 2.- Read ---------
    function readData($data)//Argumentos a modificar!!!
    {
        $seleccion = "SELECT [id_lavado], [id_ctl], [data], [quenda], [centro], [tunel], [sacos] FROM [Lavanderia].[tnl].[vws_kg_tuneis] WHERE [data] = :data";
        $stmt = self::$conexion2->prepare($seleccion);
        try {
            $stmt->execute([':data' =>$data]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó buscar carga de túnel de lavado: " . $ex->getMessage());
        }
        $CargTun = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $CargTun;
    }

    function readIndice($id_lavado, $id_ctl)//Argumentos a modificar!!!
    {
        $seleccion = "SELECT [id_lavado], [id_ctl], [data], [quenda], [centro], [tunel], [sacos] FROM [Lavanderia].[tnl].[vws_kg_tuneis] WHERE [id_lavado] = :ind AND [id_ctl] = :ind2";

        $stmt = self::$conexion2->prepare($seleccion);
        try {
            $stmt->execute([
                ':ind' =>$id_lavado,
                ':ind2' =>$id_ctl                
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó buscar carga de túnel de lavado: " . $ex->getMessage());
        }
        $CargTun = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $CargTun;
    }
    // 3.- Update ---------
    function update()
    {
        $modif = "EXECUTE [tnl].[usp_modif_Carga_Tuneis_Lavado] 
   :id_lav, :data, :quenda, :id_ctl, :centro, :tunel, :sacos";
        $stmt = self::$conexion2->prepare($modif);
        try {
            $stmt->execute([
                ':id_lav' => parent::getid_lavado(),
                ':data' => parent::getdata(),
                ':quenda' => parent::getquenda_id_quenda(),
                ':id_ctl' => $this->id_ctl,
                ':centro' => $this->centro_id_centro,
                ':tunel' => $this->tunel_lavado_id_tunel,
                ':sacos' => $this->sacos
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó modificar o lavado do tunel: " . $ex->getMessage());
        }
    }    
    // 4.- Delete ---------
    function delete()
    {
        $del = "EXECUTE [tnl].[usp_borrar_Carga_Tuneis_Lavado] :id_lav, :id_ctl";
        $stmt = self::$conexion2->prepare($del);
        try {
            $stmt->execute([
                ':id_lav' => parent::getid_lavado(),
                ':id_ctl' => $this->id_ctl
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó borrar o lavado do tunel: " . $ex->getMessage());
        }
    }
}