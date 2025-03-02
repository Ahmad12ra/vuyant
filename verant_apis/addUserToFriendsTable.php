<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn);
}

$userId = $data["userId"];
$friend_id = $data["friendId"];

$pre = $conn->prepare("INSERT INTO friends (user_id, friend_id) VALUES (?, ?)");
$pre->bind_param("ii", $userId, $friend_id);

$username = null;

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn);
} 
$conn->close();

echo json_encode(["status" => 200, "message" => "user added to friends table"]);
