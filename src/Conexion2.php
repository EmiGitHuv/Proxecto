<?php

class Conexion2
{
    protected static $conexion2;


    public function __construct()
    {
        if (self::$conexion2 == null) {
            self::crearConexion();
        }
    }

    public static function crearConexion()
    {
        $DATABASE_HOST = 'DESKTOP-SBR1TOD';
        $DATABASE_PORT = 1433;
        $DATABASE_NAME = 'Lavanderia';
        $DATABASE_USER = '';
        $DATABASE_PASS = '';
        try {
            self::$conexion2 =  new PDO("sqlsrv:Server=$DATABASE_HOST,$DATABASE_PORT;Database=$DATABASE_NAME", $DATABASE_USER, $DATABASE_PASS);
            self::$conexion2->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            // En caso de erro, para o proceso e manda mensaxe de erro.
            exit('Comprobade conexións ca Base de Datos!!! '. $exception->getMessage());
        }
    }
}