<?php


namespace Clases;

require '../vendor/autoload.php';

use PDO;

class Lavado extends Conexion
{
    private $id_lavado;
    private $data;
    private $quenda_id_quenda;

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
}