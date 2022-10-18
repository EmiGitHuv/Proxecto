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

    /**
     * @param
     * @return array
     */
    public function getCentro_kll()
    {
        $consulta = "SELECT [kg_lavados_lavadoras_id_lavado],[kg_lavados_lavadoras_id_kll], [centro_id_centro], [peso], [observacions] FROM [kll].[centro_kll] ORDER BY [kg_lavados_lavadoras_id_lavado]";
        $stmt = self::$conexion2->prepare($consulta);
        try {
            $stmt->execute();
        } catch (\PDOException $ex) {
            die("Error ó devolver os centros: " . $ex->getMessage());
        }
        $Centros = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $Centros;
    }


    // Métodos para hacer el CRUD
    // 1.- Create ---------
    function create()
    {
        $alta = "EXECUTE [Lavanderia].[tnl].[usp_alta_Kg_Lavados_Lavadoras] :data, :quenda, :centro, :lavadora, :rp, :programa, :peso, :observacions";
        $stmt = self::$conexion2->prepare($alta);
        try {
            $stmt->execute([
                ':data' => parent::getdata(),
                ':quenda' => parent::getquenda_id_quenda(),
                ':centro' => $this->centro_id_centro,
                ':lavadora' => parent::getlavadora_id_lavadora(),
                ':rp' => parent::getroupa_prenda_id_rp(),
                ':programa' => parent::getprograma_lavadora_id_prog(),
                ':peso' => $this->peso,
                ':observacions' => $this->observacions
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó dar de alta o lavado da lavadora: " . $ex->getMessage());
        }
    }
}