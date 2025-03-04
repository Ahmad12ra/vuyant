<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn, 0);
}

$userId = $data["userId"];

$pre = $conn->prepare("SELECT owned_verants FROM verants_count WHERE user_id = ?");
$pre->bind_param("i", $userId);

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn, $pre);
} else {
    $res = $pre->get_result();
    $verants_amount = $res->fetch_assoc()["owned_verants"];
}

$conn->close();
$pre->close();

echo json_encode(["status" => 200, "verantsAmount" => $verants_amount]);
