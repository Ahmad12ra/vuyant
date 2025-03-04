<?php
require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

function dieField()
{
    die(json_encode(["status" => 404, "message" => "uncompleted field"]));
}

$name = strlen($data["username"]) > 3 ? filter_var($data["username"], FILTER_SANITIZE_ADD_SLASHES) : dieField();
$password = strlen($data["password"]) > 8 ? password_hash(filter_var($data["password"], FILTER_SANITIZE_ADD_SLASHES), PASSWORD_DEFAULT) : dieField();
$plain_password = strlen($data["password"]) > 8 ? filter_var($data["password"], FILTER_SANITIZE_ADD_SLASHES) : dieField();
$email = filter_var($data["email"], FILTER_VALIDATE_EMAIL) ? $data["email"] : dieField();
$role = "user";
$token = filter_var($data["token"], FILTER_SANITIZE_ADD_SLASHES);

try {
    require_once "db_connection.php";
} catch (e) {
    dieWithError("error connecting with database!", 404, $conn, 0);
}

$check = $conn->prepare("SELECT name FROM users WHERE name = ?");
$check->bind_param("s", $name);
if (!$check->execute()) {
    $conn->close();
    $check->close();
};

$checkRes = $check->get_result();

if (!$checkRes->fetch_assoc()) {
    $pre = $conn->prepare("INSERT INTO users (name,password,email,role,token) VALUES (?,?,?,?,?)");
    $pre->bind_param("sssss", $name, $password, $email, $role, $token);
    if (!$pre->execute()) {
        dieWithError("cannot excute statement", 404, $conn, $pre);
    }
    else
        echo json_encode(["status" => 200, "message" => "added"]);
} else {
    echo json_encode(["status" => 404, "message" => "already exists"]);
}
$check->close();
$conn->close();