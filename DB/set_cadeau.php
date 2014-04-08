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


    //echo get_cadeau();
    echo set_cadeau();

    function set_cadeau(){
        $result = mysql_query("UPDATE tunisiana_cadeau SET nbr = nbr -1 WHERE id =".$_REQUEST['id']);
        mysql_free_result($result);
        return '1';
    }
?>
