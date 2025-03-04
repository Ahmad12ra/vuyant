<?php

function getUserCharactersFromIds($arrayOfCharacterIds) {
    require_once "adjust_cors_permissions_&_take_request.php";
    require_once "dieWithError.php";

    try {
        require "db_connection.php";
    } catch (Exception $e) {
        dieWithError("error connecting with database!", 404, $conn, 0);
    }

    $names_array = [];
    foreach($arrayOfCharacterIds as $character_id) {

        $pre = $conn->prepare("SELECT skin_name FROM skins WHERE id = ?");
        $pre->bind_param("i", $character_id);

        if (!$pre->execute()) {
            dieWithError("failed to excute query", 404, $conn, $pre);
        }

        $res = $pre->get_result();
        $fetched = $res->fetch_assoc();
        $names_array[] = $fetched["skin_name"];
        

    }


    $conn->close();
    $pre->close();

    echo json_encode(["status" => 200, "ownedCharacterNames" => $names_array]);

}