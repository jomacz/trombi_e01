# BDD

BDD : Base De Données

--

## C'est quoi ?

<p class="fragment">Un service indépendant !</p>
<ul class="fragment">
  <li>Tourne tout seul dans son coin</li>
  <li>Peut être atteint depuis plusieurs autres services en même temps</li>
  <li>Possède une interface pour dialoguer</li>
</ul>
<p class="fragment">Ça vous rappelle rien ?</p>
<p class="fragment">Un serveur !</p>

--

## À quoi ça sert ?

<p class="fragment">À stocker, organiser, gérer et bien sûr renvoyer des données.</p>

---

## SGBD

Système de Gestion de Bases de Données

(DBMS – _DataBase Management System_)

<p class="fragment">Il en existe 2 sortes : </p>
<ul class="fragment">
  <li>Les SGBDR : SGBD Relationnel</li>
  <li>Les NoSQL </li>
</ul>

--

## SGBDR

<ul>
  <li>MySQL</li>
  <li>MariaDB</li>
  <li>PostgreSQL</li>
  <li>SQLite</li>
  <li>Access</li>
  <li>...</li>
</ul>

--

## NoSQL

<ul>
  <li>Redis</li>
  <li>MongoDB</li>
  <li>Cassandra</li>
  <li>CouchDB</li>
  <li>...</li>
</ul>

**Important :** NoSQL (_Not only SQL_) signifie « pas seulement SQL ». Ça ne veut pas dire que ces systèmes ne sont pas relationnels !

(ok, la plupart ne sont _pas_ relationnels, mais faut pas faire de généralités !)

---

## Principes des SGBDR

<ul>
  <li class="fragment">Un serveur contient X bases de données.</li>
  <li class="fragment">Une BDD contient X <strong>tables</strong> appelées aussi <strong>relations</strong>.</li>
  <li class="fragment">Une table est composée de X <strong>champs</strong> appelés aussi <strong>colonnes</strong>.</li>
  <li class="fragment">Une table contient X <strong>lignes</strong> appelées aussi <strong>enregistrements</strong>.</li>
</ul>

--

## Table

Ensemble d'enregistrements respectant la même structure.

<strong>prof</strong>

|id|nom|prenom|age|
|---|---|---|---|
|1|Pruliere|Jean|32|
|2|Martin|Simon|33|
|3|Guilloux|Yann|17|
|...|

--

Lors de la définition de la table, on fixe le type de chaque champ.

<strong>prof</strong>

|champ|type|
|---|---|
|id|INT|
|nom|VARCHAR|
|prenom|VARCHAR|
|age|INT|

<p class="fragment">Impossible de mettre autre chose dans le champ !</p>

--

Différents types possibles :

<ul>
  <li>INT</li>
  <li>DOUBLE</li>
  <li>BOOLEAN</li>
  <li>VARCHAR</li>
  <li>DATE</li>
  <li>...</li>
</ul>

--

Petite parenthèse « bonnes pratiques » :

- Les tables sont nommées en minuscule.
- Les tables sont nommées au singulier.
- Toutes les tables ont un champ de type entier unique nommé « id ».
- Les tables et les champs sont nommés en _snake_case_.

---

## Processus de création

On va utiliser la méthode MERISE : **MCD** => **MLD**

<p class="fragment"><strong>MCD</strong> : Modèle Conceptuel de Données</p>
<p class="fragment"><strong>MLD</strong> : Modèle Logique de Données</p>

--

## MCD

Le but : _identifier_ les différentes entités et leurs associations.

- On liste les attributs des entités.
- On « associe » les entités entre elle, sans spécifier le mode de liaison.


--

## MLD

Le but: *représenter* toutes les relations de la BDD et leurs associations.

- Pour les associations, il existe de nombreuses méthodes (spoiler S4E7)
- Ne pas hésiter à rajouter des champs, voire des tables !

<p class="fragment">Allez hop, on fait le <strong>MCD</strong> et le <strong>MLD</strong> de Trombin-O'clock !</p>