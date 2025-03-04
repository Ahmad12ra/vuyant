<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

$name = filter_var($data["username"], FILTER_SANITIZE_ADD_SLASHES);
$password = filter_var($data["password"], FILTER_SANITIZE_ADD_SLASHES);

try {
    require_once "db_connection.php";
} catch (e) {
    dieWithError("error connecting with database!", 404, $conn, 0);
}
$check = $conn->prepare("SELECT name, password, token FROM users WHERE name = ?");
$check->bind_param("s", $name );
if (!$check->execute()) {
    $conn->close();
    $check->close();
}
$checkRes = $check->get_result();
$result = $checkRes->fetch_assoc();
$conn->close();
$check->close();
if (!$result) {
        echo json_encode(["status" => 404, "message" => "unvalid login"]);
} else {
    $resultUser = $result["name"];
    $resultPassword = $result["password"];
    $resultToken = $result["token"];
    if (password_verify($password,$resultPassword)) {
        echo json_encode(["status" => 200, "message" => "valid login", "token" => $resultToken]);
    } else {
        echo json_encode(["status" => 404, "message" => "unvalid login"]);
    }
}