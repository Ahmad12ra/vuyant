<?php

function getUserCursorFromIds($array_of_cursorIds) {
    require_once "../adjust_cors_permissions_&_take_request.php";
    require_once "../dieWithError.php";

    try {
        require "../db_connection.php";
    } catch (Exception $e) {
        dieWithError("error connecting with database!", 404, $conn, 0);
    }

    $names_array = [];
    foreach($array_of_cursorIds as $cursor_id) {

        $pre = $conn->prepare("SELECT cursor_name FROM cursors WHERE id = ?");
        $pre->bind_param("i", $cursor_id);

        if (!$pre->execute()) {
            dieWithError("failed to excute query", 404, $conn, $pre);
        }

        $res = $pre->get_result();
        $fetched = $res->fetch_assoc();
        $names_array[] = $fetched["cursor_name"];
        

    }


    $conn->close();
    $pre->close();


    echo json_encode(["status" => 200, "ownedCursorNames" => $names_array]);

}