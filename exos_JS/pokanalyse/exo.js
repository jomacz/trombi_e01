const pokemons = require("./pokemons.json");

// ET Z'EST PARTI pour l'analyse des pokemons !!

// Compléter les fonctions suivantes. 
// La première fonction vous est donnée comme exemple (complexe certes, mais bon à prendre !). 

// Toutes les fonctions peuvent-être implémentées sans boucle FOR, et c'est bien là l'intérêt !
// Vous êtes donc encouragé à utiliser uniquement les méthodes disponibles sur les instances d'Array et String :) 

// En cas de difficulté, des indices (très brefs) sont donnés en bas du fichier. A utiliser si besoin :) 

// \o GOTTA FILL THEM ALL o/


// ------------------------------------------------------------------
// ------------------------------------------------------------------


function computeSumOfHPOfTinyWaterPokemons() {
    // Celle fonction là, c'est pour vous ~imprégner~ de la puissance de la programmation fonctionnelle 😍 !
    // À lire et comprendre, à l'aide de la documentation si besoin ! 
    return pokemons
        .filter(pokemon => pokemon.height < 50) // On garde les pokemon dont la taille est inférieur à 50 cm
        // [...pokemons.height < 50]
        .filter(isWaterPokemon) // On garde les pokemon de type 'water'
        // [...pokemons.height < 50 && type water]
        .map(pokemon => pokemon.stats[0].base_stat) // On transforme notre array de pokemon en un array de nombre (base_stat)
        // [...hp]
        .reduce((sumHp, hp) => sumHp + hp); // On aggrège ce tableau de nombre en une seule valeur : la somme.
        // => somme

    function isWaterPokemon(pokemon) {
        return pokemon.types.some(type => type.name === "water"); // S'il y a un au moins un 'type' tel que type.name === "water", la fonction some retourne "true".
    }
}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


/**
 * @returns {number} the number of pokemons of height above or equal to 200 cm
 */
function computeNbOfTallPokemons() {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------

/**
 * @param {string} searchTerm 
 * @return {Pokemon} returns the pokemon whose name matches the searchTerm. Case insensitive.
 * @example searchPokemonByName("pikachu"); // return the object corresponding of the 'pikachu' pokemon
 * @example searchPokemonByName("Pikachu"); // return the object corresponding of the 'pikachu' pokemon
 * @example searchPokemonByName("kachu"); // return undefined
 * @example searchPokemonByName("toto"); // return undefined
 */
function searchPokemonByName(searchTerm) {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


/**
 * @returns {Array<string>} returns the list of pokemon names that have the 'electric' type
 * @example getElectricPokemonNames(); // returns ["pikachu", "raichu", "magnemite", "magneton", ...... ]
 */
function getElectricPokemonNames() {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


/**
 * @returns {number} returns the sum of the XP of all multi-type pokemons (ie. pokemon that have more than 1 type). 
 * @exemple // bulbasaur has 2 types (grass and poison) and his XP is 64.
 */
function computeMultitypePokemonXP() {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


/**
 * @returns {number} returns the number of pokemons that have at least one 'hidden' ability
 * @example // bulbasaur has a 'hidden' ability named 'overgrow'
 */
function computeNbOfPokemonsWithHiddenAbilities() {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


/**
 * @returns {Array<string>} returns an array of strings representing the stats of each pokemon, in the following format:
 *   "NAME_OF_STAT1: VALUE_OF_STAT1 | NAME_OF_STAT2: VALUE_OF_STAT2 | NAME_OF_STAT3: VALUE_OF_STAT3 | ... "
 * 
 * @example // the string for bulbasaur would be : 
 * 'HP: 45 | ATTACK: 49 | DEFENSE: 49 | SPECIAL-ATTACK: 65 | SPECIAL-DEFENSE: 65 | SPEED: 45'
 * 
 * Note that the stat names are upper-cased.
 * 
 */
function getPokemonsDisplayableStats() {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


/**
 * Improved version of the previous 'searchPokemonByName' function
 * 
 * @param {string} searchTerm 
 * @returns {Array<Pokemon>} returns an array of all the pokemons that match one of the following criteria:
 * 
 * - the name of the pokemon contains the searchTerm (case insensitive)
 *     ex: searchTerm = 'SAUR' would give the 3 pokemons : bulbasaur, ivysaur, and venusaur
 * 
 * - one of the habilities contains the searchTerm (case insensitive)
 *     ex: searchTerm = 'GROW' would returns all pokemons that have the 'overgrow' ability
 * 
 * @example searchPokemons("leaf"); // the result would include the "nuzleaf" pokemon (the name matches) and the "tangela" pokemon (has "leaf-guard" ability), as well as other pokemons...
 */
function searchPokemons(searchTerm) {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


/**
 * // /!\ WARNING : difficulty 'League Pokemon 1st generation' !!!! /!\
 * 
 * @returns {string} returns a STRING that corresponds to the HTML list of all pokemons with their relative power. Like so :
 * 
 * @example `<ol>
 *   <li>Arceus power: 720 points</li>
 *   <li>Eternatus power: 690 points</li>
 *   <li>Mewtwo power: 680 points</li>
 *   ...
 *   <li>Blipbug power: 180 points</li>
 *   <li>Wishiwashi-solo power: 175 points</li>
 * </ol>`
 * 
 * @description
 * The 'power' of a pokemon is the sum of all stats 'base_stat' of a pokemon
 *     ex: bulbasaur power is (45 + 49 + 49 + 65 + 65 + 45) = 318 points
 *     
 * The pokemons must be sorted by decreasing power. Most powerful on top, least powerful at the bottom.
 * 
 * Note 1: The `<li>`s should be enclosed by a `<ol>` tag.
 * Note 2: You can IGNORE the line jumps and simply stick all 'ol' and 'li' together in the string. 
 */
function formatPokemonHTML() {

}


// ------------------------------------------------------------------
// ------------------------------------------------------------------


// DO NOT REMOVE THE EXPORTED METHODS. THEY ARE USED IN THE TESTS !
module.exports = {
    computeSumOfHPOfTinyWaterPokemons,
    computeNbOfTallPokemons,
    searchPokemonByName,
    getElectricPokemonNames,
    computeMultitypePokemonXP,
    computeNbOfPokemonsWithHiddenAbilities,
    getPokemonsDisplayableStats,
    searchPokemons,
    formatPokemonHTML
};


// ------------------------------------------------------------------
// ------------------------------------------------------------------



// -----------------------------------------
// ---- /!\ --- INDICE SECTION --- /!\ -----
// -----------------------------------------
// NE PAS SCROLLER PLUS BAS SI VOUS SOUHAITEZ CONTINUER A CHERCHER







// computeNbOfTallPokemons 
// => Utiliser .filter et .length













// searchPokemonByName
// => Utiliser .find











// getElectricPokemonNames
// => .filter les pokemons dont l'UN (.some) des types est 'electric'
// => .map pour récupérer les noms uniquement des pokemons, et pas les pokemons entier (objet)









// computeMultitypePokemonXP
// => .filter les pokemons avec 2 types ou plus
// => .map pour récupérer un array de nombre avec les XP uniquement
// => .reduce pour sommer les ces nombres
// NOTE 1: .map est facultatif. 
// NOTE 2: passer par une boucle pour sommer les XP est tout à fait acceptable !! 








// computeNbOfPokemonsWithHiddenAbilities
// => .filter pour filtrer les pokemons tels que...
//  => .some pour savoir s'il existe une ability (dans abilities) qui serait is_hidden). 
//  => .length pour terminer en beauté !








// getPokemonsDisplayableStats
// => C'est un .map !
// => Conseil : utiliser une sous fonction qui gère le cas d'UN pokemon puis l'appliquer au niveau du map.








// searchPokemons
// => C'est un .filter !
// => Conseil : utiliser une sous fonction qui s'occupe de savoir si UN pokemon doit être filtré ou non, puis l'appliquer au niveau du .filter.
// => Cette fonction peut-être faite en deux temps : une étape pour chacun des 2 critères.







// formatPokemonHTML
// Hop hop on se débrouille, c'est la ligue pokemon quand même !! 

// BON OK...
// N'hésitez pas à écrire une sous fonction pour calculer la puissance d'un pokemon
// N'hésitez pas à écrire une sous fonction pour capitaliser le nom d'un pokemon
// On utilise la méthode .sort pour ranger les pokemon par puissance décroisante
// Pensez à "join" pour transformer un array en une string