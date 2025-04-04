<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn, 0);
}

$userId = $data["userId"];

$pre = $conn->prepare("INSERT INTO levels (user_id, goal_level, current_xp, goal_xp) VALUES (?, 2, 0, 2000)");
$pre->bind_param("i", $userId);

$username = null;

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn, $pre);
} 
$conn->close();
$pre->close();

echo json_encode(["status" => 200, "message" => "user added to levels table"]);
