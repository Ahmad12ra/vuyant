<?php

require_once "adjust_cors_permissions_&_take_request.php";

function dieField() {
    die(json_encode(["status" => 200, "message" => "error"]));
}

$name = filter_var($data["username"], FILTER_SANITIZE_ADD_SLASHES);
$password = filter_var($data["password"], FILTER_SANITIZE_ADD_SLASHES);

try {
    require_once "db_connection.php";
} catch (e) {
    die(json_encode(["status" => 404, "message" => "error connecting with database!"]));
}
$check = $conn->prepare("SELECT name, password, token FROM users WHERE name = ?");
$check->bind_param("s", $name );
$check->execute();
$checkRes = $check->get_result();
$result = $checkRes->fetch_assoc();
if (!$result) {
        echo json_encode(["status" => 200, "message" => "unvalid login"]);
} else {
    $resultUser = $result["name"];
    $resultPassword = $result["password"];
    $resultToken = $result["token"];
    if (password_verify($password,$resultPassword)) {
        echo json_encode(["status" => 200, "message" => "valid login", "token" => $resultToken]);
    } else {
        echo json_encode(["status" => 200, "message" => "unvalid login"]);
    }
}