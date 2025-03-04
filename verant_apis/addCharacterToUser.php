<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!",404 , $conn,0);
}

$userId = $data["userId"];
$character_id = $data["characterId"];

$pre = $conn->prepare("INSERT INTO user_owned_characters (user_id, character_id) VALUES (?, ?)");
$pre->bind_param("ii", $userId, $character_id);

if (!$pre->execute()) {
    dieWithError("failed to excute query",404 , $conn, $pre);
} 
$conn->close();
$pre->close();

echo json_encode(["status" => 200, "message" => "Character added to the user"]);
