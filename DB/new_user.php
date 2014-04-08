<?php
    /** Nom de la base de données */
    define('DB_NAME', 'tunisiana');

    /** Utilisateur de la base de données MySQL. */
    define('DB_USER', 'root');

    /** Mot de passe de la base de données MySQL. */
    define('DB_PASSWORD', '');

    /** Adresse de l'hébergement MySQL. */
    define('DB_HOST', 'localhost');


    $link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
    or die("Impossible de se connecter : " . mysql_error());
    mysql_select_db(DB_NAME);

    echo new_user();
     function new_user(){
        $date = date('Y-m-d');
        $result = mysql_query("INSERT INTO  `anisabidtest`.`tunisiana_user` (
                `id` ,
                `first_name` ,
                `last_name` ,
                `phone` ,
                `date_inscription` ,
                `id_cadeau`
                )
                VALUES (
                NULL ,  '".$_REQUEST['first_name']."',  '".$_REQUEST['last_name']."',  '".$_REQUEST['phone']."',  '".$date ."',  '0'
                );
            ");
        return mysql_insert_id();
     }
?>
