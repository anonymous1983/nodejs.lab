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
    echo json_encode(get_cadeau());
    function get_cadeau(){
        $date = date('Y-m-d');
        $result = mysql_query("SELECT id, description
                    FROM  `tunisiana_cadeau`
                    WHERE  `date` =  '".$date."'
                    AND  `nbr` !=0
                    ORDER BY RAND()
                    LIMIT 1");
        if(mysql_num_rows( $result ) != 0)
            $row = mysql_fetch_array($result);
        else
            $row = '0';
        mysql_free_result($result);
        return $row;
    }

    function set_cadeau($id){
        $result = mysql_query("UPDATE tunisiana_cadeau SET nbr = nbr -1 WHERE id =".$id);
        mysql_free_result($result);
    }

?>
