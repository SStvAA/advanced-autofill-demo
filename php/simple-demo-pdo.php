<?php

class AdminDatabase {

    private $host, $port, $db, $user, $pass, $connection = null;

    public function __construct()
    {
        $this->host = DB_HOST;
        $this->port = DB_PORT;
        $this->db = ADMINISTRATION_DATABASE;
        $this->user = ADMINISTRATION_USER_DB;
        $this->pass = ADMINISTRATION_PASSWORD_DB;

        $this->connection = new PDO(
            "mysql:host=$this->host;dbname=$this->db",
            $this->user,
            $this->pass,
            [
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
            ]
        );

        $this->connection->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION
        );

       #Establecemos zona horaria como UTC 0
       date_default_timezone_set('UTC');
       $this->connection->query('SET time_zone = "+00:00"');
       $this->connection->query('SET @@SESSION.time_zone = "+00:00"');

    }

    public function get(){
        if(empty($this->connection) || $this->connection == null){
            throw new Exception('connection has not been established');
        }

        return $this->connection;
    }

}

class DatabaseSelector {

    private $host, $port, $db, $user, $pass, $connection = null;

    public function __construct($database_name)
    {
        $this->host = DB_HOST;
        $this->db = $database_name;
        $this->user = ADMINISTRATION_USER_DB;
        $this->pass = ADMINISTRATION_PASSWORD_DB;

        $this->connection = new PDO(
            "mysql:host=$this->host;dbname=$this->db",
            $this->user,
            $this->pass,
            [
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
            ]
        );

        $this->connection->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION
        );

       #Establecemos zona horaria como UTC 0
       date_default_timezone_set('UTC');
       $this->connection->query('SET time_zone = "+00:00"');
       $this->connection->query('SET @@SESSION.time_zone = "+00:00"');
        

        
    }

    public function get(){
        if(empty($this->connection) || $this->connection == null){
            throw new Exception('connection has not been established');
        }

        return $this->connection;
    }



}

class GroupDatabase {

    private $host, $port, $db, $user, $pass, $connection = null, $ad_db;

    public function __construct()
    {
        $this->host = DB_HOST;
        $this->db = GROUP_DATABASE;
        $this->user = GROUP_USER_DB;
        $this->pass = GROUP_PASSWORD_DB;

        $this->connection = new PDO(
            "mysql:host=$this->host;dbname=$this->db",
            $this->user,
            $this->pass,
            [
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
            ]
        );

        $this->connection->setAttribute(
            PDO::ATTR_ERRMODE,
            PDO::ERRMODE_EXCEPTION
        );

        #Establecemos zona horaria como UTC 0
        date_default_timezone_set('UTC');
        $this->connection->query('SET time_zone = "+00:00"');
        $this->connection->query('SET @@SESSION.time_zone = "+00:00"');

        // check database status
        $this->check();

    }

    public function get(){
        if(empty($this->connection) || $this->connection == null){
            throw new Exception('connection has not been established');
        }

        return $this->connection;
    }

    private function check(){
        $this->ad_db = (new AdminDatabase())->get();
        $request = $this->ad_db->prepare('SELECT active FROM database_indexes WHERE database_name = :name ');
        $request->execute([
            ':name' => $this->db
        ]);

        if((!$response = $request->fetch()) || $response->active !== 1){
            throw new Exception('inactive database');
        }

        return true;

    }

    
}


?>