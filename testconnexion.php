<?php
    /** Nom de la base de données */
    define('DB_NAME', 'anisabidtest');

    /** Utilisateur de la base de données MySQL. */
    define('DB_USER', 'anisabidtest');

    /** Mot de passe de la base de données MySQL. */
    define('DB_PASSWORD', '8tYTBzu');

    /** Adresse de l'hébergement MySQL. */
    define('DB_HOST', 'mysql51-50.pro');

    echo DB_PASSWORD;

    print_r(phpinfo());
    $link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
    or die("Impossible de se connecter : " . mysql_error());
    echo 'Connexion réussie';
    mysql_select_db(DB_NAME);
    $result = mysql_query("SELECT aid, type FROM main_actions");
    while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
       //printf("ID : %s  Nom : %s", $row[0], $row[1]);
        echo  $row[0];
    }
    mysql_free_result($result);
?>
