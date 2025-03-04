<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn, 0);
}

$userId = $data["userId"];
$cursor_id = $data["cursorId"];

$pre = $conn->prepare("INSERT INTO user_owned_cursors (user_id, cursor_id) VALUES (?, ?)");
$pre->bind_param("ii", $userId, $cursor_id);

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn, $pre);
} 
$conn->close();
$pre->close();

echo json_encode(["status" => 200, "message" => "cursor added to the user"]);
