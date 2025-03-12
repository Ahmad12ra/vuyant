<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";
require_once "getUsernameFromId.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!", 404, $conn, 0);
}

$userId = $data["userId"];

$pre = $conn->prepare("SELECT friend_id FROM friends WHERE user_id = ?");
$pre->bind_param("i", $userId);

if (!$pre->execute()) {
    dieWithError("failed to excute query", 404, $conn, $pre);
}

$res = $pre->get_result();
$array = [];

while ($fetched = $res->fetch_assoc()) {
    $array[] = $fetched["friend_id"];
}

$conn->close();
$pre->close();
if (count($array) === 0) {
    die(json_encode(["status" => 200, "message" => "user friends fetched", "friendIds" => []]));
}


getUserName($array);

echo json_encode(["status" => 200, "message" => "user friends fetched", "friendIds" => $username]);