<?php

class Usuario extends Conexion2
{
    private $usuario;
    //private $pass;

    public function __construct()
    {
        parent::__construct();
    }

//    public function eValido($u, $p)
    public function eValido($u)
    {
        $u = 'EMI\\'.$u;
        //$pass1 = hash('sha256', $p);
        $consulta = "SELECT name FROM sys.database_principals WHERE name = :u";
        $stmt = self::$conexion2->prepare($consulta);
        try {
            $stmt->execute([
                ':u' => $u,
                //':p' => $pass1
            ]);
        } catch (PDOException $ex) {
            die("Erro ó consultar usuario: " . $ex->getMessage());
        }
        if ($stmt->rowCount() == 0) return false;
        return true;
    }

    public function getRol($u)
    {
        $u = 'EMI\\'.$u;
        //$pass1 = hash('sha256', $p);
        $consulta = "EXEC [dbo].[usp_rol_usuario] :u";
        $stmt = self::$conexion2->prepare($consulta);
        try {
            $stmt->execute([
                ':u' => $u,
                //':p' => $pass1
            ]);
        } catch (PDOException $ex) {
            die("Erro ó consultar rol: " . $ex->getMessage());
        }
        if ($stmt->rowCount() == 0) return false;
        return $stmt->fetch(PDO::FETCH_COLUMN);
    }
}
