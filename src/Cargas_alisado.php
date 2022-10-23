<?php

class Cargas_alisado extends conexion2
{
    private $id_carg_alis;
    private $data;
    private $maquina_alisado_id_maq_ali;
    private $quenda_id_quenda;
    private $contador;

    /**
     * Tunel constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->id_carg_alis;
        $this->data;
        $this->maquina_alisado_id_maq_ali;
        $this->quenda_id_quenda;
        $this->contador;

    }

    /**
     * @return mixed
     */
    public function getid_carg_alis()
    {
        return $this->id_carg_alis;
    }

    /**
     * @param mixed $id_carg_alis
     */
    public function setid_carg_alis($id_carg_alis)
    {
        $this->id_carg_alis = $id_carg_alis;
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
    public function getmaquina_alisado_id_maq_ali()
    {
        return $this->maquina_alisado_id_maq_ali;
    }

    /**
     * @param mixed $maquina_alisado_id_maq_ali
     */
    public function setmaquina_alisado_id_maq_ali($maquina_alisado_id_maq_ali)
    {
        $this->maquina_alisado_id_maq_ali = $maquina_alisado_id_maq_ali;
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
    public function getcontador()
    {
        return $this->contador;
    }

    /**
     * @param mixed $contador
     */
    public function setcontador($contador)
    {
        $this->contador = $contador;
    }

    // Métodos para hacer el CRUD
    // 1.- Create ---------
    function create()
    {
        $alta = "INSERT INTO [als].[cargas_alisado] ([data], [maquina_alisado_id_maq_ali], [quenda_id_quenda], [contador]) VALUES (:data, :maquina_alisado_id_maq_ali, :quenda_id_quenda, :contador)";
        $stmt = self::$conexion2->prepare($alta);
        try {
            $stmt->execute([
                ':data' => $this->data,
                ':maquina_alisado_id_maq_ali' => $this->maquina_alisado_id_maq_ali,
                ':quenda_id_quenda' => $this->quenda_id_quenda,
                ':contador' => $this->contador
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó dar de alta carga de alisado: " . $ex->getMessage());
        }
    }
    // 2.- Read ---------
    function readData($data)//Argumentos a modificar!!!
    {
         $seleccion = "SELECT [id_carg_alis], [data], [maquina_alisado_id_maq_ali], [quenda_id_quenda], [contador] FROM [als].[vws_cargas_alisado] WHERE [data] = :data";
        $stmt = self::$conexion2->prepare($seleccion);
        try {
            $stmt->execute([':data' =>$data]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó buscar carga de alisado: " . $ex->getMessage());
        }
        $CargAli = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $CargAli;
    }

    function readIndice($id_carg_alis)//Argumentos a modificar!!!
    {
         $seleccion = "SELECT [id_carg_alis], [data], [maquina_alisado_id_maq_ali], [quenda_id_quenda], [contador] FROM [als].[vws_cargas_alisado] WHERE [id_carg_alis] = :ind";
        $stmt = self::$conexion2->prepare($seleccion);
        try {
            $stmt->execute([':ind' =>$id_carg_alis]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó buscar carga de alisado: " . $ex->getMessage());
        }
        $CargAli = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $CargAli;
    }
    // 3.- Update ---------
    function update()
    {
        $modif = "UPDATE [als].[cargas_alisado] SET [data] = :data, [maquina_alisado_id_maq_ali] = :maquina_alisado_id_maq_ali, [quenda_id_quenda] = :quenda_id_quenda, [contador] = :contador WHERE [id_carg_alis] = :id_carg_alis";
        $stmt = self::$conexion2->prepare($modif);
        try {
            $stmt->execute([
                ':data' => $this->data,
                ':maquina_alisado_id_maq_ali' => $this->maquina_alisado_id_maq_ali,
                ':quenda_id_quenda' => $this->quenda_id_quenda,
                ':contador' => $this->contador,
                ':id_carg_alis' => $this->id_carg_alis
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó modificar carga de alisado: " . $ex->getMessage());
        }
    }
    // 3.- Update ---------
    function delete()
    {
        $del = "DELETE FROM [als].[cargas_alisado] WHERE [id_carg_alis] = :id_carg_alis";
        $stmt = self::$conexion2->prepare($del);
        try {
            $stmt->execute([
                ':id_carg_alis' => $this->id_carg_alis
            ]);
        } catch (PDOException $ex) {
            die("Ocorreu un erro ó dar de baixa carga de alisado: " . $ex->getMessage());
        }
    }
}