<?php 
function dieWithError($message, $status, $dbConnection, $pre) {
    $dbConnection->close();
    if ($pre <> 0) $pre->close();
    die(json_encode(["message" => $message, "status" => $status]));
}