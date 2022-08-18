<?php

class Kg_lavados_lavadoras extends Lavado
{
    private $id_kll;
    private $lavadora_id_lavadora;
    private $roupa_prenda_id_rp;
    private $programa_lavadora_id_prog;

    /**
     * Tunel constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->id_kll;
        $this->lavadora_id_lavadora;
        $this->roupa_prenda_id_rp;
        $this->programa_lavadora_id_prog;
    }

    /**
     * @return mixed
     */
    public function getid_kll()
    {
        $this->id_kll;
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

}