// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Règles du Jeu",
        "main":    "<p>Préparez-vous à répondre à nos questions<br>&<br>Gagnez pleins de cadeaux</p>",
        "results": "<h5>Cliquez pour continuer ...</h5>",
        "level1":  "<div class=\"res\" style=\"background-image:url(assets/images/iconmonstr-christmas-gift-2-icon.svg)\"><span class=\"txt\">Bravo !</span> Vous avez gagné une Recharge de <span class=\"txt\">2 DT.</span></div>",
        "level2":  "<div class=\"res\" style=\"background-image:url(assets/images/iconmonstr-smiley-sad-2-icon.svg)\">Merci pour votre participation. <span class=\"txt\">A la prochaine!</span></div>",
        "level3":  "<div class=\"res\" style=\"background-image:url(assets/images/iconmonstr-smiley-sad-2-icon.svg)\">Merci pour votre participation. <span class=\"txt\">A la prochaine!</span></div>",
        "level4":  "<div class=\"res\" style=\"background-image:url(assets/images/iconmonstr-smiley-sad-2-icon.svg)\">Merci pour votre participation. <span class=\"txt\">A la prochaine!</span></div>",
        "level5":  "<div class=\"res\" style=\"background-image:url(assets/images/iconmonstr-smiley-sad-2-icon.svg)\">Merci pour votre participation. <span class=\"txt\">A la prochaine!</span></div>" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "La souscription à l'option Se3a S3ida au *132#, vous permet de bénéficier de :",
            "a": [
                {"option": "1 minute gratuite à  1dt",      "correct": false},
                {"option": "5 minutes gratuites  à 1dt ",     "correct": false},
                {"option": "60 minutes gratuites à 1dt",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 2
            "q": "L'offre « Carta Klem » de Tunisiana vous fait bénéficier en permanence de : ",
            "a": [
                {"option": "D'un prix min unique de 90 millimes vers tous les opérateurs et  de 50% bonus  sur les recharges de 5DT et +",      "correct": true},
                {"option": "1 SMS gratuit pour chaque SMS envoyé, ",     "correct": false},
                {"option": "D'un prix min unique de 300 millimes vers tous les opérateurs",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 3
            "q": "Le numéro gratuit de l'Offre Amigos est accordé à partir de :",
            "a": [
                {"option": "10 dt de consommation ",      "correct": true},
                {"option": "50 dt de consommation",     "correct": false},
                {"option": "100 dt de consommation ",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 4
            "q": "Quelle est le nom du nouveau service de Tunisiana qui permet d'avoir un deuxième numéro  sans changer ni de téléphone ni de carte SIM?",
            "a": [
                {"option": "Otlobni",      "correct": false},
                {"option": "Nwimer",     "correct": true},
                {"option": "Noumrou",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 5
            "q": "Avec le Service Dhayafni de TUNISIANA (*113#), l'abonné:",
            "a": [
                {"option": "Doit payer 2dt pour Chaque N° pris en charge",      "correct": false},
                {"option": "Ne peut prendre en charge que les frais des MMS reçus de la part des membres qu'il a inscrit dans son groupe",     "correct": false},
                {"option": "Peut choisir gratuitement jusqu'à 5N° pour prendre en charge tous les appels reçus de leur  part",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 6
            "q": "Comment s'appelle le service qui vous permet d'appeler même  lorsque vous n'avez plus de solde : ",
            "a": [
                {"option": "Le service Ra7a",      "correct": false},
                {"option": "Le service  SOS",     "correct": true},
                {"option": "Le service Far7a",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 7
            "q": "A partir de quel seuil de consommation, l'offre Awal  à carte vous permet de bénéficier d'un bonus mensuel ?",
            "a": [
                {"option": "15 DT",      "correct": true},
                {"option": "30 DT",     "correct": false},
                {"option": "70 DT",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 8
            "q": "En adhérant au service SMS MAX au *121#, vous avez le choix entre :",
            "a": [
                {"option": "2 forfaits SMS allant jusqu'à 300 SMS",      "correct": false},
                {"option": "5 forfaits SMS allant jusqu'à 1000 SMS",     "correct": true},
                {"option": "10 forfaits SMS allant jusqu'à 300 SMS",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 9
            "q": "Pour changer de votre offre actuelle à une autre offre à carte, il suffit de composer :",
            "a": [
                {"option": "*140#",      "correct": true},
                {"option": "*111#",     "correct": false},
                {"option": "*100#",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 10
            "q": "Grâce à la promo clé à 0 DT avec les packs clés 3G prépayées de Tunisiana:",
            "a": [
                {"option": "Vous bénéficiez de 1Go gratuit/mois pendant 3 mois",      "correct": false},
                {"option": "vous bénéficiez d'une clé 3G gratuite + 3 mois de forfaits Flexi 30 jours   ",     "correct": true},
                {"option": "vous bénéficiez de 150 SMS gratuits /mois pendant 3 mois",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 11
            "q": "Quels sont les 4 forfaits Internet Flexi proposés par Tunisiana lorsque vous composez *124# ? (cochez les bonnes réponses)",
            "a": [
                {"option": "Flexi 1 jour / 2 jours  / 7 jours /30 jours",      "correct": true},
                {"option": "Flexi  5 jours / 15 Jours / 25 jours/ 45 jours",     "correct": false},
                {"option": "Flexi  30 minutes/ 1 heure/ 2 heures / 5 heures",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 12
            "q": "Le forfait combiné d'internet mobile vous permet de bénéficier de 1Go pour 2DT seulement, suite à l'atteinte de 7DT de consommation. Les frais d'achat (2DT) sont déduits du compte recharge mais aussi, et en EXCLUSIVITE, du compte:",
            "a": [
                {"option": "Compte recharge",      "correct": false},
                {"option": "Compte Bonus ",     "correct": false},
                {"option": "Des 2 (Compte bonus et recharge)",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 13
            "q": "Avec le Forfait Facebook plus à 4dt, vous avez la possibilité non seulement de naviguer sur Facebook mais aussi de :",
            "a": [
                {"option": "Lire les vidéos Youtube et Daily motion à partir de ce forfait",      "correct": true},
                {"option": "Envoyer des MMS",     "correct": false},
                {"option": "Appeler vos amis par téléphone",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 14
            "q": "Quels sont les forfaits internet proposés par Tunisiana ? ",
            "a": [
                {"option": "Forfait Flexi, Start, Evolution, Combiné, Connect",      "correct": true},
                {"option": "Forfait flexibilité, stop, evolutif, combo, contact",     "correct": false},
                {"option": "Forfait flexible, startup, combinaison, connexion",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 15
            "q": "Comment pouvez-vous recharger une clé 3G ?",
            "a": [
                {"option": "Avec une recharge light",      "correct": false},
                {"option": "Avec Tunisiana Banka",     "correct": false},
                {"option": "Avec tous les moyens de recharge",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 16
            "q": "Pour transformer mes points MERCI, il suffit de composer :",
            "a": [
                {"option": "*11111111111111#",      "correct": false},
                {"option": "*1000000000#",     "correct": false},
                {"option": "*111#",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 17
            "q": "Avec mes points Merci je peux acheter :",
            "a": [
                {"option": "Un téléphone portable",      "correct": true},
                {"option": "Une voiture",     "correct": false},
                {"option": "Un séjour à l'étranger",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 18
            "q": "L'inscription au programme Merci est :",
            "a": [
                {"option": "Payante à 1 000 DT par mois",      "correct": false},
                {"option": "Gratuite",     "correct": true},
                {"option": "Payante à 10 DT par jour",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },/*
		{ // Question 19
            "q": "Avec le service « mobiflouss » et ma carte e-Dinar Smart, je peux :",
            "a": [
                {"option": "Encaisser un mandat bourse ",      "correct": true},
                {"option": "transférer de l'argent",     "correct": true},
                {"option": "payer mes factures",      "correct": true},
				{"option": "faire sortir de l'argent du téléphone",      "correct": false},
				{"option": "encaisser un mandat",      "correct": true}			
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },*/
		{ // Question 20
            "q": "Quelle commande faut-il taper  pour activer Samma3ni et accéder aux tonalités?",
            "a": [
                {"option": "*100#",      "correct": false},
                {"option": "*150#",     "correct": true},
                {"option": "*111#",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 21
            "q": "Naja7ni est un service qui permet de réviser les examens pour les élèves du primaire à partir de la 3ième jusqu'à la 6ième, du collège et du BAC. Quelle est la commande pour le service Naja7ni de Tunisiana :",
            "a": [
                {"option": "*160#",      "correct": false},
                {"option": "*124#",     "correct": false},
                {"option": "*136#",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 22
            "q": "L'inscription au service horoscope permet de recevoir chaque jour :",
            "a": [
                {"option": "Un message par jour de l'horoscope de votre choix",      "correct": true},
                {"option": "Dix messages par jour des nouveautés du monde automobile ",     "correct": false},
                {"option": "Dix messages par jour des nouveautés de la mode. ",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 23
            "q": "Pour s'inscrire au service SMS CHAT, il suffit de composer :",
            "a": [
                {"option": "*160#",      "correct": true},
                {"option": "*1600#",     "correct": false},
                {"option": "*1700#",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 24
            "q": "Combien y-a-t-il de chaines dans le bouquet « MobiForja » de la Mobile TV du portail EddenyaUP",
            "a": [
                {"option": "13",      "correct": false},
                {"option": "27",     "correct": true},
                {"option": "17",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 25
            "q": "Combien de jeux mobiles pouvez-vous télécharger en vous inscrivant au Club Game ON",
            "a": [
                {"option": "10/jour",      "correct": false},
                {"option": "15/semaine",     "correct": false},
                {"option": "illimité",      "correct": true}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 26
            "q": "Tunisiana a lancé sa Tunisiana Box qui permet d'avoir : ",
            "a": [
                {"option": "Connexion internet + téléphonie mobile",      "correct": false},
                {"option": "Connexion internet + téléphonie fixe",     "correct": true},
                {"option": "Téléphonie fixe ",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        }/*,
		{ // Question 27
            "q": "souscription",
            "a": [
                {"option": "Carta",      "correct": false},
                {"option": "Carta",     "correct": false},
                {"option": "Carta",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        },
		{ // Question 28
            "q": "souscription",
            "a": [
                {"option": "Carta",      "correct": false},
                {"option": "Carta",     "correct": false},
                {"option": "Carta",      "correct": false}
            ],
            "correct": "correct",
            "incorrect": "incorrect"
        }*/
    ]
};
