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

    //print_r(phpinfo());
    $link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
    or die("Impossible de se connecter : " . mysql_error());
    echo 'Connexion réussie';
    mysql_select_db(DB_NAME);
    $result = mysql_query("SELECT aid, type FROM main_actions");
    while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
       //printf("ID : %s  Nom : %s", $row[0], $row[1]);
        //echo  $row[0].'<br>';
    }
    mysql_free_result($result);
    echo get_cadeau();
    function get_cadeau(){
        $date = date('Y-m-d');
        $result = mysql_query("SELECT id
                    FROM  `tunisiana_cadeau`
                    WHERE  `date` =  '".$date."'
                    AND  `nbr` !=0
                    ORDER BY RAND()
                    LIMIT 1");
        if(int mysql_num_rows ( $result ) != 0)
            $row = mysql_fetch_array($result, MYSQL_NUM);
        else
            echo '0';
    }

    function set_cadeau($id){
        mysql_query("UPDATE tunisiana_cadeau SET nbr = nbr -1 WHERE id =".$id);
    }

?>
