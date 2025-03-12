<?php

require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";
require_once "getUserOwnedCharacterNamesFromCharacterIds.php";
require_once "getUserOwnedCursorNamesFromCursorIds.php";
require_once "getUserOwnedHatNamesFromHatIds.php";
require_once "getUserOwnedGlassesNamesFromGlassesId.php";

try {
    require "db_connection.php";
} catch (Exception $e) {
    dieWithError("error connecting with database!", 404, $conn, 0);
}

$userId = $data["userId"];

$pre = $conn->prepare("SELECT user_skin_id, profile_pic, user_hat_id, user_glasses_id, user_cursor_id FROM user_costume WHERE user_id = ?");
$pre->bind_param("i", $userId);

if (!$pre->execute()) {
    dieWithError("failed to excute query", 404, $conn, $pre);
}

$res = $pre->get_result();
$fetched = $res->fetch_assoc();

$conn->close();
$pre->close();

$character_id = $fetched["user_skin_id"];
$profile_pic = $fetched["profile_pic"];
$hat_id = $fetched["user_hat_id"];
$glasses_id = $fetched["user_glasses_id"]; 
$cursor_id = $fetched["user_cursor_id"];

getUserCharactersFromIds([$character_id]);
getUserCursorFromIds([$cursor_id]);
getUserHatFromIds([$hat_id]);
getUserGlassesFromIds([$glasses_id]);


// echo json_encode(["status" => 200, "result" => "hiu"]);
echo json_encode(["status" => 200, "userCostume" => ["characterName" => $characters_array, "profile_pic" => $profile_pic, "hatName" => $hats_array, "glassesName" => $glasses_array, "cursorName" => $cursors_array]]);