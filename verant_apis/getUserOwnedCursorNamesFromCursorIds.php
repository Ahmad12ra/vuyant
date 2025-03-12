<?php
require_once "adjust_cors_permissions_&_take_request.php";
require_once "dieWithError.php";

$cursors_array = [];
function getUserCursorFromIds($array_of_cursorIds)
{
    if ($array_of_cursorIds[0] !== null) {

        try {
            require "db_connection.php";
        } catch (Exception $e) {
            dieWithError("error connecting with database!", 404, $conn, 0);
        }

        foreach ($array_of_cursorIds as $cursor_id) {

            $pre = $conn->prepare("SELECT cursor_name FROM cursors WHERE id = ?");
            $pre->bind_param("i", $cursor_id);

            if (!$pre->execute()) {
                dieWithError("failed to excute query", 404, $conn, $pre);
            }

            $res = $pre->get_result();
            $fetched = $res->fetch_assoc();
            $GLOBALS["cursors_array"][] = $fetched["cursor_name"];


        }


        $conn->close();
        $pre->close();
    } 


}