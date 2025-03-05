<?php

function getUserHatFromIds($array_of_hat_ids) {
    
    if (isset($array_of_hat_ids)) {
        require_once "../adjust_cors_permissions_&_take_request.php";
    require_once "../dieWithError.php";

    try {
        require "../db_connection.php";
    } catch (Exception $e) {
        dieWithError("error connecting with database!", 404, $conn, 0);
    }

    $names_array = [];
    foreach($array_of_hat_ids as $hat_id) {

        $pre = $conn->prepare("SELECT hat_name FROM hats WHERE id = ?");
        $pre->bind_param("i", $hat_id);

        if (!$pre->execute()) {
            dieWithError("failed to excute query: getUserOwnedHatNamesFromHatIds.php", 404, $conn, $pre);
        }

        $res = $pre->get_result();
        $fetched = $res->fetch_assoc();
        $names_array[] = $fetched["hat_name"];
        

    }


    $conn->close();
    $pre->close();


    echo json_encode(["status" => 200, "ownedHatNames" => $names_array]);
} else {
    echo json_encode(["status" => 200, "ownedHatNames" => null]);
    
    }

}