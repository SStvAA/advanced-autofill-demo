<?php

function ExportHeaderController(){
    try{
        $data = json_decode(file_get_contents('php://input'));
        if(!isset($data->header)){
            Server::response((object) [
                'error' => 'bad request'
            ]);
        }
        if(
            !property_exists($data->header, 'associated_task') ||
            !property_exists($data->header, 'contain') ||
            !property_exists($data->header, 'references_type') ||
            !property_exists($data->header, 'references_data')
        ){
            Server::response((object) [
                'error' => 'bad request'
            ]);
        }

        $header = null;
        $headerFound = true;
        try{
            $header = (new Document())->getHeader($data->header->name);

        }catch(Exception $error){
            if($error->getMessage() === 'header not found'){
                $headerFound = false;
            }else{
                Server::response((object) [
                    'error' => $error->getMessage()
                ]);
            }
        }

        if($headerFound){
            (new Document())->checkReferences($data->header);
            (new Document())->updateHeaderDate($data->header->name);
            Server::response((object) [
                'message' => 'send content'
            ]);
        }

        (new Document())->saveHeader($data->header);
        (new Document())->updateHeaderDate($data->header->name);
        
        Server::response((object) [
            'message' => 'send content'
        ]);
        
    }catch(PDOException $error){
        Server::response((object) [
            'error' => 'Internal Server Error',
            'code' => 'ehc (59)'
        ]);
    }catch(Exception $error){
        Server::response((object) [
            'error' => $error->getMessage()
        ]);
    }


}



?>