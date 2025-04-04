<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn, 0);
}

$username = $data["username"];

$pre = $conn->prepare("SELECT id FROM users WHERE name = ?");
$pre->bind_param("s", $username);

$user_id = null;

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn, $pre);
} else {
    $res = $pre->get_result();
    $user_id = $res->fetch_assoc()["id"];
}

$conn->close();
$pre->close();

echo json_encode(["status" => 200, "userId" => $user_id]);
