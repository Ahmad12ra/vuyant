<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";
$username = [];
function getUserName($userIdArray)
{

    try {
        require "db_connection.php";
    } catch (Exception $e) {
        dieWithError("error connecting with database!", 404, $conn, 0);
    }


    foreach ($userIdArray as $userId) {
        $pre = $conn->prepare("SELECT name, id FROM users WHERE id = ?");
        $pre->bind_param("i", $userId);


        if (!$pre->execute()) {
            dieWithError("failed to excute query", 404, $conn, $pre);
        }

        $res = $pre->get_result();
        $fetched = $res->fetch_assoc();
        $GLOBALS["username"][] = [$fetched["name"], $fetched["id"]];
    }



    $conn->close();
    $pre->close();
}

// for geting user id on login to the website bec can't use func. Func is for other php files.
if (isset($data["autoUserId"])) {
    getUserName($data["userId"]);
    echo json_encode(["status" => 200, "username" => $username]);
}