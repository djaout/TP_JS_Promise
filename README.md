# TP_JS_Promise

Ce qui a été effectué pour ce TP : 
- Utilisation de l'API Itunes
- Utilisation de Async / wait / fetch
- Gestion des erreur : 
    - Si on clique sur le bouton 'rechercher' sans mettre un nom d'artiste --> message d'erreur affiché
    - Si on met un nom d'artiste non existant --> message d"erreur affiché

Scénario de test : 
1 - Cliquer sur " recherche " sans rien écrire, 
				Expected result : le message ' Veuillez saisir un nom d'artiste...' est affiché
				
2- refresh la page 

3 - Ecrivez n'importe quoi dans la barre de recherche " lhmfjaermhù",
				Expected result :  Le message ' no content...' est affiché 

4 - refresh la page

5 - Saisissez un nom d'artiste, exemple ' gims ' 
					Expected result : - Une liste contenant les titres est affichée
														- Sur chaque element de la liste il y a un bouton 'play'
														- Cliquer sur 'play'  --> l'audio est affiché
														- Ensuite cliquer sur play de l'audio 

Remarque : à la fin de chauqe test, il faut rafraichir la page.													
										
					
