<?php
require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

$characters_array = [];
function getUserCharactersFromIds($arrayOfCharacterIds) {

    try {
        require "db_connection.php";
    } catch (Exception $e) {
        dieWithError("error connecting with database!", 404, $conn, 0);
    }

    
    foreach($arrayOfCharacterIds as $character_id) {

        $pre = $conn->prepare("SELECT skin_name FROM skins WHERE id = ?");
        $pre->bind_param("i", $character_id);

        if (!$pre->execute()) {
            dieWithError("failed to excute query", 404, $conn, $pre);
        }

        $res = $pre->get_result();
        $fetched = $res->fetch_assoc();
        $GLOBALS["characters_array"][] = $fetched["skin_name"];
        

    }


    $conn->close();
    $pre->close();


}