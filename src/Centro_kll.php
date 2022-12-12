<?php

class Centro_kll extends Kg_lavados_lavadoras
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
        $this->centro_id_centro;
        $this->peso;
        $this->observacions;
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
        $alta = "EXECUTE [Lavanderia].[kll].[usp_alta_Kg_Lavados_Lavadoras] :data, :quenda, :lavadora, :rp, :programa, :centro, :peso, :observacions";
        $stmt = self::$conexion2->prepare($alta);
        try {
            $stmt->execute([
                ':data' => parent::getdata(),
                ':quenda' => parent::getquenda_id_quenda(),
                ':lavadora' => parent::getlavadora_id_lavadora(),
                ':rp' => parent::getroupa_prenda_id_rp(),
                ':programa' => parent::getprograma_lavadora_id_prog(),
                ':centro' => $this->centro_id_centro,
                ':peso' => $this->peso,
                ':observacions' => $this->observacions
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó dar de alta o lavado da lavadora: " . $ex->getMessage());
        }
    }
        function create_multi()
    {
        $alta = "INSERT INTO [kll].[centro_kll] ([kg_lavados_lavadoras_id_lavado] ,[kg_lavados_lavadoras_id_kll] ,[centro_id_centro] ,[peso] ,[observacions]) VALUES (:id_lavado, :id_kll, :centro, :peso, :observacions)";
        /*$alta = "EXECUTE [kll].[usp_alta_Kg_Lavados_Lavadoras_multi] :kg_lavados_lavadoras_id_kll :centro, :peso, :observacions";*/
        $stmt = self::$conexion2->prepare($alta);
        try {
            $stmt->execute([
                ':id_lavado' => parent::getid_lavado(),
                ':id_kll' => parent::getid_kll(),
                ':centro' => $this->centro_id_centro,
                ':peso' => $this->peso,
                ':observacions' => $this->observacions
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó dar de alta o lavado da lavadora: " . $ex->getMessage());
        }
    }
    // 2.- Read ---------
    function readData($data)
    {
        $seleccion = "SELECT [id_lavado], [id_kll], [data], [quenda], [lavadora], [centro], [descrip], [programa], [peso], [observacions] FROM [Lavanderia].[kll].[vws_kg_Lavadoras] WHERE [data] = :data ORDER BY [id_lavado]";
        $stmt = self::$conexion2->prepare($seleccion);
        try {
            $stmt->execute([':data' =>$data]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó buscar carga do lavado das lavadoras: " . $ex->getMessage());
        }
        $CargTun = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $CargTun;
    }

    function readIndice($id_lavado, $id_kll)
    {
        $seleccion = "SELECT [id_lavado], [id_kll], [data], [quenda], [lavadora], [centro], [descrip], [programa], [peso], [observacions] FROM [kll].[vws_kg_Lavadoras] WHERE [id_lavado] = :ind AND [id_kll] = :ind2" ; 

        $stmt = self::$conexion2->prepare($seleccion);
        try {
            $stmt->execute([
                ':ind' =>$id_lavado,
                ':ind2' =>$id_kll                
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó buscar carga do lavado das lavadoras: " . $ex->getMessage());
        }
        $CargLvL = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $CargLvL;
    }
    // 3.- Update ---------
    /**
     * @param mixed $centro_id_centro
     */
    public function setind_centro($ind_centro)
    {
        $this->ind_centro = $ind_centro;
    }

    function update()
    {
        $modif = "EXECUTE [kll].[usp_modif_Kg_Lavados_Lavadoras] :id_lav, :data, :quenda, :id_kll, :lavadora, :rp, :programa, :ind_centro, :centro, :peso, :observacions";
        $stmt = self::$conexion2->prepare($modif);
        try {
            $stmt->execute([
                ':id_lav' => parent::getid_lavado(),
                ':data' => parent::getdata(),
                ':quenda' => parent::getquenda_id_quenda(),
                ':id_kll' => parent::getid_kll(),
                ':lavadora' => parent::getlavadora_id_lavadora(),
                ':rp' => parent::getroupa_prenda_id_rp(),
                ':programa' => parent::getprograma_lavadora_id_prog(),
                ':ind_centro' => $this->ind_centro,
                ':centro' => $this->centro_id_centro,
                ':peso' => $this->peso,
                ':observacions' => $this->observacions
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó modificar o lavado das lavadoras: " . $ex->getMessage());
        }
    }    
    // 4.- Delete ---------
    function delete()
    {
        $del = "EXECUTE [kll].[usp_borrar_Kg_Lavados_Lavadoras] :id_lav, :id_kll";
        $stmt = self::$conexion2->prepare($del);
        try {
            $stmt->execute([
                ':id_lav' => parent::getid_lavado(),
                ':id_kll' => parent::getid_kll()
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó borrar o lavado das lavadoras: " . $ex->getMessage());
        }
    }
}