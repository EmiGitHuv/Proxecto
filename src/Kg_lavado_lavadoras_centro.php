<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Kg_lavado_lavadoras_centro extends Conexion
{
    private $id_lavado;
    private $id_kll;
    private $centro_id_centro;
    private $data;
    private $quenda_id_quenda;
    private $lavadora_id_lavadora;
    private $roupa_prenda_id_rp;
    private $programa_lavadora_id_prog;
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
    public function getid_lavado()
    {
        return $this->id_lavado;
    }

    /**
     * @param mixed $id_lavado
     */
    public function setid_lavado($id_lavado)
    {
        $this->id_lavado = $id_lavado;
    }

    /**
     * @return mixed
     */
    public function getid_kll()
    {
        return $this->id_kll;
    }

    /**
     * @param mixed $id_kll
     */
    public function setid_kll($id_kll)
    {
        $this->id_kll = $id_kll;
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
    public function getdata()
    {
        return $this->data;
    }

    /**
     * @param mixed $data
     */
    public function setdata($data)
    {
        $this->data = $data;
    }

    /**
     * @return mixed
     */
    public function getquenda_id_quenda()
    {
        return $this->quenda_id_quenda;
    }

    /**
     * @param mixed $quenda_id_quenda
     */
    public function setquenda_id_quenda($quenda_id_quenda)
    {
        $this->quenda_id_quenda = $quenda_id_quenda;
    }

    /**
     * @return mixed
     */
    public function getlavadora_id_lavadora()
    {
        return $this->lavadora_id_lavadora;
    }

    /**
     * @param mixed $lavadora_id_lavadora
     */
    public function setlavadora_id_lavadora($lavadora_id_lavadora)
    {
        $this->lavadora_id_lavadora = $lavadora_id_lavadora;
    }

    /**
     * @return mixed
     */
    public function getroupa_prenda_id_rp()
    {
        return $this->roupa_prenda_id_rp;
    }

    /**
     * @param mixed $roupa_prenda_id_rp
     */
    public function setroupa_prenda_id_rp($roupa_prenda_id_rp)
    {
        $this->roupa_prenda_id_rp = $roupa_prenda_id_rp;
    }

    /**
     * @return mixed
     */
    public function getprograma_lavadora_id_prog()
    {
        return $this->programa_lavadora_id_prog;
    }

    /**
     * @param mixed $programa_lavadora_id_prog
     */
    public function setprograma_lavadora_id_prog($programa_lavadora_id_prog)
    {
        $this->programa_lavadora_id_prog = $programa_lavadora_id_prog;
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
        $stmt = self::$conexion->prepare($consulta);
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