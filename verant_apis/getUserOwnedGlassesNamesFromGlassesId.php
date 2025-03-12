<?php
require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

$glasses_array = [];
function getUserGlassesFromIds($array_of_glasses_ids) {

    if ($array_of_glasses_ids[0] !== null) {
        try {
            require "db_connection.php";
        } catch (Exception $e) {
            dieWithError("error connecting with database!", 404, $conn, 0);
        }
    
        foreach($array_of_glasses_ids as $glasses_id) {
    
            $pre = $conn->prepare("SELECT glasses_name FROM glasses WHERE id = ?");
            $pre->bind_param("i", $glasses_id);
    
            if (!$pre->execute()) {
                dieWithError("failed to excute query: getUserOwnedGlassesNamesFromGlassesIds.php", 404, $conn, $pre);
            }
    
            $res = $pre->get_result();
            $fetched = $res->fetch_assoc();
            $GLOBALS["glasses_array"][] = $fetched["glasses_name"];
            
    
        }
    
    
        $conn->close();
        $pre->close();
    }

}