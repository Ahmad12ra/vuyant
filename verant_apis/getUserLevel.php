<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!", 404, $conn ?? null);
}

$userId = $data["userId"];

$pre = $conn->prepare("SELECT goal_level, current_xp, goal_xp FROM levels WHERE user_id = ?");
$pre->bind_param("i", $userId);

if (!$pre->execute()) {
    dieWithError("failed to excute query", 404, $conn);
}

$lvl_res = $pre->get_result();
$lvl_res = $lvl_res->fetch_assoc();

$goal_level = $lvl_res["goal_level"];
$current_xp = $lvl_res["current_xp"];
$goal_xp = $lvl_res["goal_xp"];

$conn->close();

echo json_encode(["status" => 200, "goalLevel" => $goal_level, "currentXp" => $current_xp, "goalXp" => $goal_xp]);
