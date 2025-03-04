<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn, 0);
}

$userId = $data["userId"];

$pre = $conn->prepare("INSERT INTO user_costume (user_id, user_skin_id, profile_pic, user_hat_id, user_glasses_id, user_cursor_id) VALUES (?, 1, null, null, null, 1)");
$pre->bind_param("i", $userId);

$username = null;

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn, $pre);
} 
$conn->close();
$pre->close();

echo json_encode(["status" => 200, "message" => "user added to user_costume table"]);
