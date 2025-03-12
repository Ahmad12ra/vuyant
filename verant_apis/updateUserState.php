<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

$userId = $data["userId"];
$newState = $data["newState"];

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!", 404, $conn, 0);
}



$pre = $conn->prepare("UPDATE user_status SET state = ? WHERE user_id = ?");
$pre->bind_param("ii", $newState, $userId);


if (!$pre->execute()) {
    dieWithError("failed to excute query", 404, $conn, $pre);
}

$conn->close();
$pre->close();

echo json_encode(["status" => 200, "message" => "user status updated to $newState"]);
