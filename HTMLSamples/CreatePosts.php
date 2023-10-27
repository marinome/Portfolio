<style> <?php include '../homestyle.css'; ?> </style>
<?php
    if($_POST["content"] == ""){
        echo "Not saved. Post has no text"; exit();
    }
    $mysqli = new mysqli("mysql.eecs.ku.edu", "m183m438", "oogh3Ahx", "m183m438");
    if ($mysqli->connect_error){
        printf("Connect failed: %s\n", $mysqli->connect_error); exit();
    }
    
    $query = "SELECT * FROM Users WHERE user_id'" . $_POST["user_id"] . "';";
    $result = $mysqli->query($query);
    if(mysqli_num_rows($result) == 0){
        echo "Not saved. Post was not written by existing user"; exit();
    }
    $query = "INSERT INTO Posts(content,author_id) VALUES ('" . $POST["content"] . "', '" . $_POST["user_id"] . "')";
    if($mysqli->query($query)){
        echo "Post saved";
    }
    $result->free();
    $mysqli->close();
?>
