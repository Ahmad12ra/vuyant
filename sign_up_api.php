<?php
require_once "adjust_cors_permissions_&_take_request.php";


// ready function to show up a message for uncompleted fields and other
function dieField()
{
    die(json_encode(["status" => 200, "message" => "uncompleted field"]));
}

$name = strlen($data["username"]) > 3 ? filter_var($data["username"], FILTER_SANITIZE_ADD_SLASHES) : dieField();
$password = strlen($data["password"]) > 8 ? password_hash(filter_var($data["password"], FILTER_SANITIZE_ADD_SLASHES), PASSWORD_DEFAULT) : dieField();
$plain_password = strlen($data["password"]) > 8 ? filter_var($data["password"], FILTER_SANITIZE_ADD_SLASHES) : dieField();
$email = filter_var($data["email"], FILTER_VALIDATE_EMAIL) ? $data["email"] : dieField();
$role = "user";
$token = filter_var($data["token"], FILTER_SANITIZE_ADD_SLASHES);

// this is a random characters function for when storing data in the local storage so that the hacker can't find the secert information easily
function randChars()
{
    $chars = ["a", "b", 'c', 'd', "e", 2, 6, 9, "$", "@"];
    return password_hash($chars[rand(0, 9)], PASSWORD_DEFAULT);
}

try {
    require_once "db_connection.php";
} catch (e) {
    die(json_encode(["status" => 404, "message" => "error connecting with database!"]));
}
$check = $conn->prepare("SELECT name FROM users WHERE name = ?");
$check->bind_param("s", $name);
$check->execute();
$checkRes = $check->get_result();
// at first lets check if the name exists, if the name doesn't exist.
if (!$checkRes->fetch_assoc()) {
    $pre = $conn->prepare("INSERT INTO users (name,password,email,role,token) VALUES (?,?,?,?,?)");
    $pre->bind_param("sssss", $name, $password, $email, $role, $token);
    if (!$pre->execute())
        die(json_encode(["status" => 200, "message" => "cannot excute statement"]));
    else
        echo json_encode(["status" => 200, "message" => "added"]);
} else {
    echo json_encode(["status" => 200, "message" => "already exists"]);
}