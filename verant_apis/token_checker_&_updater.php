<?php

require_once "adjust_cors_permissions_&_take_request.php";

// Validate username and token
if (empty($data["username"]) || empty($data["token"])) {
    die(json_encode(["status" => 400, "message" => "Username or token is missing"]));
}

$username = filter_var($data["username"], FILTER_SANITIZE_ADD_SLASHES);
$token = filter_var($data["token"], FILTER_SANITIZE_ADD_SLASHES);


try {
    require "db_connection.php";
} catch (e) {
    die(json_encode(["status" => "404", "message" => "connection to db failed"]));
}

$pre = $conn->prepare("SELECT name, token FROM users WHERE name = ? AND token = ?");
$pre->bind_param("ss", $username, $token);

try {
    $pre->execute();
} catch (e) {
    die(json_encode(["status" => "404", "message" => "failed to get result from the db"]));
}

$res = $pre->get_result();

if ($res->fetch_assoc()) {
    $new_token = filter_var($data["newToken"], FILTER_SANITIZE_ADD_SLASHES);

    try {
        require "db_connection.php";
    } catch (e) {
        die(json_encode(["status" => "404", "message" => "connection to db failed"]));
    }

    $pre = $conn->prepare("UPDATE users SET  token = ? WHERE token = ?;");
    $pre->bind_param("ss",  $new_token, $token);

    try {
        $pre->execute();
    } catch (e) {
        die(json_encode(["status" => "404", "message" => "failed to get result from the db"]));
    }

    echo json_encode(["status" => 200, "message" => "valid quick login"]);

} else
    echo json_encode(["status" => 200, "message" => "unvalid quick login"]);