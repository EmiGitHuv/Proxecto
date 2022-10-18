<?php

class Costura extends conexion2
{
    private $id_costura;
    private $data;
    private $costureira_id_costureira;
    private $roupa_prenda_id_rp;
    private $repaso;
    private $baixa;
    private $cantidade;
    private $arranxo;
    private $confeccion;

    /**
     * Tunel constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this-> id_costura;
        $this-> data;
        $this-> costureira_id_costureira;
        $this-> roupa_prenda_id_rp;
        $this-> repaso;
        $this-> baixa;
        $this-> cantidade;
        $this-> arranxo;
        $this-> confeccion;
    }

    /**
     * @return mixed
     */
    public function getid_costura()
    {
        return $this->id_costura;
    }

    /**
     * @param mixed $id_costura
     */
    public function setid_costura($id_costura)
    {
        $this->id_costura = $id_costura;
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
    public function getcostureira_id_costureira()
    {
        return $this->costureira_id_costureira;
    }

    /**
     * @param mixed $costureira_id_costureira
     */
    public function setcostureira_id_costureira($costureira_id_costureira)
    {
        $this->costureira_id_costureira = $costureira_id_costureira;
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
    public function getrepaso()
    {
        return $this->repaso;
    }

    /**
     * @param mixed $repaso
     */
    public function setrepaso($repaso)
    {
        $this->repaso = $repaso;
    }

    /**
     * @return mixed
     */
    public function getbaixa()
    {
        return $this->baixa;
    }

    /**
     * @param mixed $baixa
     */
    public function setbaixa($baixa)
    {
        $this->baixa = $baixa;
    }

    /**
     * @return mixed
     */
    public function getcantidade()
    {
        return $this->cantidade;
    }

    /**
     * @param mixed $cantidade
     */
    public function setcantidade($cantidade)
    {
        $this->cantidade = $cantidade;
    }
 
    /**
     * @return mixed
     */
    public function getconfeccion()
    {
        return $this->confeccion;
    }

    /**
     * @param mixed $confeccion
     */
    public function setconfeccion($confeccion)
    {
        $this->confeccion = $confeccion;
    }

    /**
     * @return mixed
     */
    public function getarranxo()
    {
        return $this->arranxo;
    }

    /**
     * @param mixed $arranxo
     */
    public function setarranxo($arranxo)
    {
        $this->arranxo = $arranxo;
    }


    // Métodos para hacer el CRUD
    // 1.- Create ---------
    function create()
    {
        $alta = "INSERT INTO [cst].[costura] ([data], [costureira_id_costureira], [roupa_prenda_id_rp], [repaso], [baixa], [cantidade], [confeccion], [arranxo]) VALUES (:data, :costureira_id_costureira, :roupa_prenda_id_rp, :repaso, :baixa, :cantidade, :confeccion, :arranxo)";
        $stmt = self::$conexion2->prepare($alta);
        try {
            $stmt->execute([
                ':data' => $this->data,
                ':costureira_id_costureira' => $this->costureira_id_costureira,
                ':roupa_prenda_id_rp' => $this->roupa_prenda_id_rp,
                ':repaso' => $this->repaso,
                ':baixa' => $this->baixa,
                ':cantidade' => $this->cantidade,
                ':confeccion' => $this->confeccion,
                ':arranxo' => $this->arranxo
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó dar de alta costura: " . $ex->getMessage());
        }
    }



}