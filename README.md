Objectivo: Definir una API para gestionar nustro equipo pokemon

#Acciones:
- Identificarnos
- Añadir pokemon a nuestro equipo
- Eliminar pokemon de nuestro equipo
- Consultar informacion de nuestro equipo
- Intercambiar el orden de nuestro pokemon


#REST Design:
- Añadir Pokemon: POST /team/pokemons
- Consultar Equipo: GET /team
- Eliminar Pokemon: DELETE /team/pokemons:id
- Intercambiar el orden de nuestro Pokemon: PUT /team
- Sistema de credenciales