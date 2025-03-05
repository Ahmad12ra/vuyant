<?php

function getUserGlassesFromIds($array_of_glasses_ids) {
    
    if (isset($array_of_glasses_ids)) {
        require_once "../adjust_cors_permissions_&_take_request.php";
    require_once "../dieWithError.php";

    try {
        require "../db_connection.php";
    } catch (Exception $e) {
        dieWithError("error connecting with database!", 404, $conn, 0);
    }

    $names_array = [];
    foreach($array_of_glasses_ids as $glasses_id) {

        $pre = $conn->prepare("SELECT glasses_name FROM glasses WHERE id = ?");
        $pre->bind_param("i", $glasses_id);

        if (!$pre->execute()) {
            dieWithError("failed to excute query: getUserOwnedGlassesNamesFromGlassesIds.php", 404, $conn, $pre);
        }

        $res = $pre->get_result();
        $fetched = $res->fetch_assoc();
        $names_array[] = $fetched["glasses_name"];
        

    }


    $conn->close();
    $pre->close();


    echo json_encode(["status" => 200, "ownedGlassesNames" => $names_array]);
} else {
    echo json_encode(["status" => 200, "ownedGlassesNames" => null]);
    
    }

}