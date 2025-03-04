<?php
require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn, 0);
}

$user_id = $data["userId"];
$user_status = $data["userStatus"];

$pre = $conn->prepare("INSERT INTO users_status (user_id, status) VALUES (?, ?)");
$pre->bind_param("ii",$user_id, $user_status);

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn, $pre);
}

$conn->close();
$pre->close();

echo json_encode(["status" => 200, "message" => "user is added", "user_status" => $user_status]);
