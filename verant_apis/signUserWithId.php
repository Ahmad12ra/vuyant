<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

$id = $data["userId"];
$token = $data["token"];

try {
    require_once "db_connection.php";
} catch (e) {
    dieWithError("error connecting with database!", 404, $conn);
}

$check = $conn->prepare("SELECT id, token FROM users WHERE id = ?, token = ?");
$check->bind_param("ss", $id, $token );

if (!$check->execute()) {
    dieWithError("error connecting with database!", 404, $conn);
}

$checkRes = $check->get_result();
$result = $checkRes->fetch_assoc();
$conn->close();


if ($result) {
    echo json_encode(["status" => 200, "message" => "valid quick login"]);
}