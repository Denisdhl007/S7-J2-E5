// # Switch

// ### Exercice 1
// - Demande l'âge de l'utilisateur via un prompt. Si l'utilisateur indique 18, tu lui réponds via une console.log "tu es majeur". S'il indique 25, tu lui réponds, "Un quart de siècle ça se fête". S'il indique 50, tu lui réponds "1/2 siècle c'est quelque chose". 

let age = prompt("Quel âge avez-vous ?");
switch (true) {
  case age == 18:
    console.log("Tu es majeur");
    break;
  case age == 25:
    console.log("Un quart de siècle ça se fête");
    break;
  case age == 50:
    console.log("1/2 siècle c'est quelque chose");
    break;
}

let age = prompt("Quel âge avez-vous ?");
if (age == 18) {
  console.log("Tu es majeur");
} else if (age == 25) {
  console.log("Un quart de siècle ça se fête");
} else if (age == 50) {
  console.log("1/2 siècle c'est quelque chose");
}

// ### Exercice 2 pas adapté pour un switch. Mieux pour une fonction
// - Demande à l'utilisateur d'indiquer un mot via un prompt. Si le mot est de type string tu lui répond via une console.log "La valeur indiquez est un string". Si le mot est de type nombre, tu lui répond "La valeur indiquez est un nombre"

let mot = prompt("Indiquez un mot :");
if (typeof mot === "string") {
  console.log("La valeur indiquée est un string");
} else if (typeof mot === "number") {
  console.log("La valeur indiquée est un nombre");
}

LA CONSOLE NE RENVOIE QUE STRING

// ### Exercice 3
// - Stock la date d'aujourd'hui dans une variable const. (Attention utilise la méthode date). Une fois la date stockée, fais un swtich qui va nous renvoyer le jour de la semaine que nous sommes

let date = new Date();
switch (date.getDay()) {
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  case 7:
    console.log("Dimanche");
    break;
}

// ### Exercice 4 
// - Stock un mdp dans une variable via un prompt. Via un swtich vérifie si le mdp est le bon. Si oui tu renvoies "Connecté", sinon "Erreur"

let mdp = prompt(`Intorduisez un mot de passe?`)
let login = prompt(`Entrez votre mot de passe?`)

switch (true) {
    case mdp === login:
        alert("connecté");
        break;

    case mdp !== login:
        alert("Erreur");
        break;
}

let mdp = prompt(`Intorduisez un mot de passe?`)
let login = prompt(`Entrez votre mot de passe?`)
console.log(login);
console.log(mdp);

if (mdp === login) {
  console.log("Connecté");
  alert(`Connected`);
} else if(mdp !== login){
  console.log("Erreur");
  alert(`Erreur`);
}

// ### Exercice 5 
// - Stock une variable qui selon toi définit TON niveau en coding. (Une note sur 100). Via un switch, vérifie sur le nombre est égale ou supérieur à 90. 
// Si oui tu lui répond "Tu as un niveau de coach".
// Si le le nombre est = ou > à 70, tu lui répond "Tu peux mieux faire !". 
// Si le nombre est = ou > 50, tu lui répond "Attention, faut plus travailler ! ". 
// Sinon tu lui répond "Pas bon du tout, à travailler davantage ! "

let niveauCoding = 60;

switch(true){
  case niveauCoding >= 90:
  console.log("Tu as un niveau de coach");
  break;

  case niveauCoding >= 70:
  console.log("Tu peux mieux faire !");
  break;

  case niveauCoding >= 50:
  console.log("Attention, faut plus travailler !");
  break;

  default:
    console.log("Pas bon du tout, à travailler davantage !");
    break;
}

let niveauCoding = prompt(`quel est votre niveau en coding?`)

switch(true){
  case niveauCoding >= 90:
  console.log("Tu as un niveau de coach");
  break;

  case niveauCoding >= 70:
  console.log("Tu peux mieux faire !");
  break;

  case niveauCoding >= 50:
  console.log("Attention, faut plus travailler !");
  break;

  default:
    console.log("Pas bon du tout, à travailler davantage !");
    break;
}

// ### Exercice 6
// - Créer un programme qui va demander via un prompt le résultat d'un test scolaire. (La notation est celui inspiré du systeme Americain. Ex: A,B,C,..)
// Par rapport à la notation, vous repondez via une console.log une appréciation du résultat.
// Ex: Si l'étudiant a eu un B, tu lui réponds via une console.log "Bravo, belle côte"

let resultTest = prompt("Quel est le résultat du test ? A, B, C ou D ?");

switch(true){
  case resultTest == "A":
  console.log("Tu as un niveau A");
  break;

  case resultTest == "B":
    console.log("Tu as un niveau B");
  break;

  case resultTest == "C":
    console.log("Tu as un niveau C");
  break;

  case resultTest == "D":
    console.log("Tu as un niveau D");
  break;

  default:
    console.log("Veuillez entrer une note");
    break;
}

// # If..else

// ## Introduction
// ### Exercice 1
// - déclare une variable avec ton prénom
// - via un if, vérifie dans l'instruction si le contenu de la variable est égale à ton prénom.
// - pour qu'une condition soit vérifiée, l'instruction doit répondre vrai

let name = 'Denis';
if (name === 'Denis') {
  alert('Vrai');
}else if(name !== 'Denis'){
  alert('Faux');
}

// ### Exercice 2
// - Reprend la condtion de l'exerice 1 et dans l'instruction verifie la condition avec un seul "="
// - dans le bloc du if, rajoute un console.log de : 'je suis dans le if"
// - à la suite du if, affiche le résultat de la variable que vous avez verifié
// - regarde le résultat et analyse le.

let name = 'Denis';
if (name = 'Denis') {
  console.log("je suis dans le if")
  alert('Vrai');
}else if(name !== 'Denis'){
  alert('Faux');
}

// ### Exercice 3
// - Déclarer une variable du nom de agePerso1 avec comme valeur 30 (integer) 
// - Déclarer une variable du nom de agePerso2 avec comme valeur 40 (integer)
// - Déclarer une variable "comparaison" dans laquelle se trouve le résultat de la comparaison des deux autres variables. Compararer s'ils sont égal.
// - Dans un if else, passer en instruction la variable (comparaison) sans une autre instruction. Dans le if, mettez un console.log de "je suis dans le if" et dans le else, mettez un console.log de "je suis dans le else".
// - Regardez le résultat et analyser le

let agePerso1 = 30;
let agePerso2 = 40;
let comparaison = agePerso1;
if (comparaison === agePerso1 ) {
  console.log("je suis dans le if");
} else if(comparaison === agePerso2){
  console.log("je suis dans le else");
}

// ## Exercice logique
// # Exercice 1
// - A l'aide de 2 prompts, demander 2 nombres et dite quel est le plus grand

let nombre1 = prompt("Entrez un nombre");
let nombre2 = prompt("Entrez un autre nombre");
if (nombre1 > nombre2) {
  console.log("Le premier nombre est plus grand");
} else if (nombre1 < nombre2) {
  console.log("Le second nombre est plus grand");
} else {
  console.log("Les deux nombres sont identiques");
}

// # Exercice 2
// - A l'aide d'un prompt, demander un nombre
// - Afficher si le nombre est paire ou impaire 

let nombre = prompt("Entrez un nombre");
if (nombre % 2 == 0) {
  console.log("Le nombre est paire");
} else {
  console.log("Le nombre est impaire");
}

// # Exercice 3
// - A l'aide d'un prompt, demande le prenom
// - Afficher `Votre prenom a moins de 5 caractères` si la taille du prenom est < 5
// - Afficher `Votre prenom a 5 caractères` si la taille du prenom est == 5
// - Afficher `Votre prenom a plus de 5 caractères` si la taille du prenom est > 5

let prenom = prompt("Entrez votre prenom");
if (prenom.length < 5) {
  console.log("Votre prenom a moins de 5 caractères");
} else if (prenom.length == 5) {
  console.log("Votre prenom a 5 caractères");
} else if (prenom.length > 5) {
  console.log("Votre prenom a plus de 5 caractères");
}

// # Exercice 4
/* // // - Entrez 2 prenoms via des prompts */
/* // // - Afficher `Prenom1 a moins de caractères que Prenom2` si la taille de prenom1 est < taille de prenom2 */
/* // // - Afficher `Prenom1 a le meme nombre de caractères que Prenom2` si la taille du prenom1 est == taille de prenom2 */
/* // // - Afficher `Prenom1 a plus de caractères que Prenom2` si la taille du prenom1 est > taille de prenom2 */

let prenom1 = prompt("Entrez un prenom");
let prenom2 = prompt("Entrez un autre prenom");
if (prenom1.length < prenom2.length) {
  console.log("Prenom1 a moins de caractères que Prenom2");
} else if (prenom1.length == prenom2.length) {
  console.log("Prenom1 a le meme nombre de caractères que Prenom2");
} else if (prenom1.length > prenom2.length) {
  console.log("Prenom1 a plus de caractères que Prenom2");
}

// # Exercice 5
/* // // - Entrez une vitesse via un prompt */
/* // // - La vitesse limite de la route est 50km/h */
/* // // - Afficher `Vous pouvez continuer a cette vitesse si la vitesse du prompt est < à le vitesse limite. */
/* // // - Afficher `Attention vous roulez a la vitesse limite si la vitesse du prompt est égale à la vitesse limite */
/* // // - Afficher `Ralentissez, vous avez depassé la vitesse limite!!  si la vitesse du prompt est > que le vitesse limite */

let vitesse = prompt("Entrez une vitesse");
let vitesseLimite = 50;
if (vitesse < vitesseLimite) {
  alert("Vous pouvez continuer a cette vitesse");
} else if (vitesse == vitesseLimite) {
  alert("Attention vous roulez a la vitesse limite");
} else if (vitesse > vitesseLimite) {
  alert("Ralentissez, vous avez depassé la vitesse limite!!");
}

// # Exercice 6
// - Demander le prenom et l'age d'une personne vie prompt
// - Afficher `Salut, nom de la personne du prompt! Vu que t'as {l'age de la personne} ans, ce soir tu peux sortir en discoteque` si l'âge est >= 18
// - Afficher `Salut, {nom de la personne}! Vu que t'as {l'age de la personne} ans, aujourd'hui tu iras au cinema` si l'âge est < 18

let prenom = prompt("Entrez votre prenom");
let age = prompt("Entrez votre age");
if (age >= 18) {
  alert("Salut, " + prenom + "! Vu que t'as " + age + " ans, ce soir tu peux sortir en discoteque");
}
if (age < 18) {
  alert("Salut, " + prenom + "! Vu que t'as " + age + " ans, aujourd'hui tu iras au cinema");
}

// # Exercice 7
// - Entrer 2 nombres
// - Demander quel operateur utiliser via prompt : "quel operateur utiliser?"
// - Afficher le resultat pour l'operateur choisi
// - Ex: 3 * 2 = 6

let nombre1 = prompt("Entrez un nombre");
let nombre2 = prompt("Entrez un autre nombre");
let operateur = prompt("Donnez un opérateur: * - + ou /");
if (operateur == "+") {
  console.log(`${nombre1} + ${nombre2} = ${nombre1+nombre2}`);
} else if (operateur == "-") {
  console.log(`${nombre1} - ${nombre2} = ${nombre1-nombre2}`);
} else if (operateur == "*") {
  console.log(`${nombre1} * ${nombre2} = ${nombre1*nombre2}`);
} else if (operateur == "/") {
  console.log(`${nombre1} / ${nombre2} = ${nombre1/nombre2}`);
}