<style> <?php include '../homestyle.css'; ?> </style>
<?php
    $mysqli = new mysqli("mysql.eecs.ku.edu", "m183m438", "oogh3Ahx", "m183m438");
    if ($mysqli->connect_errno){
        printf("Connect: %s\n", $mysqli->connect_error); exit();
    }
    $user = $_POST["user_id"];
    echo "Posts from user " . $user_id . ": ";
    $query = "SELECT * FROM Posts WHERE author_id = '" . $user_id . "';";
    if($result = $mysqli->query($query)){
        while($row=$result->fetch_assoc()){
            echo($row["content"]);
        }
        $result->free();
    }
    $mysqli->close();
?>
