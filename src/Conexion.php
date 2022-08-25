<?php

namespace Clases;

use PDO;
use PDOException;

class Conexion
{
    protected static $conexion;


    public function __construct()
    {
        if (self::$conexion == null) {
            self::crearConexion();
        }
    }

    public static function crearConexion()
    {
        //$DATABASE_HOST = '.';
        $DATABASE_HOST = '192.168.0.15';
        $DATABASE_PORT = 1433;
        $DATABASE_NAME = 'Lavanderia';
        $DATABASE_USER = 'sa';
        $DATABASE_PASS = 'sa';
        try {
            self::$conexion =  new PDO("sqlsrv:Server=$DATABASE_HOST,$DATABASE_PORT;Database=$DATABASE_NAME", $DATABASE_USER, $DATABASE_PASS);
            self::$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            // En caso de erro, para o proceso e manda mensaxe de erro.
            exit('Comprobade conexións ca Base de Datos!!! '. $exception->getMessage());
        }
    }
}