<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

// Validate username and token
if (empty($data["userId"]) || empty($data["token"])) {
    die(json_encode(["status" => 404, "message" => "Username or token is missing"]));
}

$user_id = $data["userId"];
$token = $data["token"];
$new_token = $data["newToken"];

try {
    require "db_connection.php";
} catch (e) {
    dieWithError("connection to db failed", 404, $conn, 0);
}

$pre = $conn->prepare("SELECT id, token FROM users WHERE id = ? AND token = ?");
$pre->bind_param("is", $user_id, $token);

try {
    $pre->execute();
} catch (e) {
    $conn->close();
    die(json_encode(["status" => 404, "message" => "failed to get result from the db"]));
}

$res = $pre->get_result();

if ($res->fetch_assoc()) {

    $pre = $conn->prepare("UPDATE users SET token = ? WHERE token = ? AND id = ?;");
    $pre->bind_param("ssi",  $new_token, $token, $user_id);

    try {
        $pre->execute();
    } catch (Exception $e) {
        dieWithError("failed to get result from the db", 404, $conn, $pre);
    }

    echo json_encode(["status" => 200, "message" => "valid quick login"]);
    $conn->close();
    $pre->close();

} else
    dieWithError("unvalid quick login", 404, $conn, $pre);