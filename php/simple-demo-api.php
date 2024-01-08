<?php 
// Load all const
include_once('env.php');
// Load all classes
include_once('Classes/loader.php');
// Load all controllers
include_once('Controllers/loader.php');

// Check Client Version
try{
    Client::checkVersion(isset($_GET['version']) ? $_GET['version'] : NULL);

}catch(Exception $error){
    if($error->getMessage() === 'version is not defined'){
        Server::response((object) [
            'error' => 'Unauthorized',
            'reason' => 'unknown version'
        ]);
    }

    Server::response((object) [
        'error' => 'Update to the latest version'
    ]);

}

// Check request
if(isset($_GET['request'])){
    $request = $_GET['request'];

    // Check if the request requires session check
    if(!in_array($request, REQUEST_NO_REQUIRE_CHECK_SESSION)){
        CheckSessionController(true, true);
    }
    
    try{
        // call controller to manage all requests
        new HandleRequestController($request);

    }catch(Exception $error){
        $responseData = [
            'error' => $error->getMessage()
        ];

        // check if the exception was 'Unauthorized'
        if($error->getMessage() === 'Unauthorized'){
            $responseData['reason'] = 'invalid permissions';
        }

        Server::response((object) $responseData);

    }

    
}else{
    Server::response((object) [
        'error' => 'bad request'
    ]);
}

 ?>