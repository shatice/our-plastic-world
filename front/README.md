# Développement Front - Rendu d'expertise

<p>Élèves concernés :</p>
<ul>
  <li>Lucas Moreno</li>
  <li>Sarah Güngör</li>
  <li><i>(avec l'aide très préciseuse de notre développeur back, Rami Çakir)</i></li>
</ul>

# Choix argumentés 

<strong><code>React</code></strong>
<p>Framework JS imposé, il s'est avéré être un bon allié pour le travail en groupe.</p>
<p>L'utilisation de la syntaxe <code>Jsx</code> nous a fait gagner du temps grâce :</p>
<ul>  
<li>aux messages d'erreur très précis</li>
<li>aux warnings qui prévient les doublons et le code itnutile</li>
<li>au renommage automatique</li>
<li>à la syntaxe courte et optimisée</li>
</ul>
<p>Après de longues heures de décryptage et d'incompréhension face à la logique des <code>Hooks</code>, nous avons finalement réussi à les dompter comme on a pu, inspirés par les avantages d'une syntaxe plus courte, plus pertinente et des fonctionnalités comme le <code>useEffect</code> facile à prendre en main une fois qu'on y a compris quelque chose.</p>
<p>L'environnement de travail général qu'offre <code>React</code> (à l'instar de ses cousins framework JS) facilite réellement la répartition des tâches et la structuration d'un projet. Ici, notre projet est divisé en trois routes :</p>
<ul>  
<li>Home - l'accueil avec le choix de la langue</li>
<li>Intro - l'introduction avec une mise en context du sujet</li>
<li>Main - une vue principale regroupant notre dataviz et tous nos composants</li>
</ul>
<p>Certains de ces composants sont encore un peu longs, comme celui de notre dataviz, mais nous avons essayé de découper au maximum et de s'organiser de manière à ce que la prise en main soit simplifiée.</p>
<br>
<strong><code>Assets</code></strong>
<p>Concernant les icônes, nous avons mis en place un <code>spritesheet</code> regroupant des <code>svg</code> dans un système de symbols, ce qui a plusieurs avantages :
<ul>  
<li>la possibilité d'entrer à la main nos <code>svg</code> si nous le souhaitons (depuis Illustrator par exemple)</li>
<li>l'intégration de ceux-ci dans une balise <code>use</code> avec un appel à l'<code>id</code> est simple et courte</li>
<li>la possibilités de cibler des <code>path</code> avec des <code>class</code> ce qui permet de personnaliser au maximum nos <code>svg</code> par le biais du <code>scss</code></li>
<li>la possibilité de créer des <code>animations</code> directement dans le code <code>svg</code>, ce n'est pas le cas ici mais c'est un choix qui avait été envisagée initialement</li>
</ul>
<p>Quant au style, nous avons utilisé <code>Scss</code> qui nous permet de mettre en place des <code>variables</code> ou encore des <code>mixines</code> et d'optimiser la lisibilité et la maintenabilité de notre code. Nous avons également fait le choix de scoper le style de nos composants pour faciliter la tâche de chacun et de découper de manière logique notre travail.</p>

# Librairies utilisées

<strong><code>Axios</code></strong>
<p>Client HTTP basé sur un système de promesses, nous avons préféré Axios à Fetch, par exemple, pour sa compatibilité avec les navigateurs et sa prise en main facile.</p>
<br>
<strong><code>amCharts4 (Maps)</code></strong>
<p><i>Voir : Travail personnel - Sarah Güngör (plus bas)</i></p>
<br>
<strong><code>i18next.js</code></strong>
<p>Facilite la traduction de notre application et permet donc à l'utilisateur de lire notre contenu dans les langues que nous souhaitons grâce à des fichiers <code>json</code> - dans lesquels nous stockons le contenu textuel dans les différentes langues - et des clés de traduction.</p>
<p><i>Voir : Travail personnel - Lucas Moreno (plus bas)</i></p>
<br>
<strong><code>React Sound</code></strong>
<p>Afin de rendre notre expérience digitale aussi immersive que possible, nous avons fait le choix d'intégré un son d'ambiance à l'aide de cette librairie, facile d'utilisation et interne à notre framework.</p>
<br>
<strong><code>Node Sass</code></strong>
<p>Pour compiler de manière automatique et perfomante le <code>Scss</code>.</p>
<br>
<strong><code>React Router DOM</code></strong>
<p>Pour utiliser le système de routes qui lie les trois étapes de notre site.</p>
<br>

# Travail personnel - Lucas Moreno

<strong>Utilisation de <code>i18next.js</code> :</strong>
<p>Pendant cette partie j'ai dû me charger d'internationaliser notre application en la rendant accessible en anglais comme en français, la cible que nous devions toucher n'était pas forcément un français, il fallait donc impérativement que notre application soit accessible en anglais.</p>
<p>J'ai fait des recherches sur internet pour voir si une librairie ne pouvais pas faciliter la tâche pour internationaliser l'application.</p>
<p>Après avoir trouvé i18next.js, j'ai dû apprendre à l'utiliser.</p>
<p>Tout d'abord il a fallu importer la librairie, puis dans le fichier i18next.js créer une variable qui utilise un tableau de deux valeurs représentant les deux langues que je devais traduire.</p>
<p>Ensuite dans la fonction .init il fallait remplacer la variable de base par la variable que nous avons créé.</p>
<p>Après ça il fallait créer deux fichiers json dans public pour pouvoir faire les traductions.</p>
<ul>
  <li>ex (dans le fichier en) : "current-year" : "In 2020"</li>
  <li>ex (dans le fichier fr) : "current-year" : "En 2020"</li>
</ul>
<p>Il fallait ensuite importer la fonction useTranslation() que la librairie nous met à disposition et la stocker dans une constante appelé i18n, puis créer une fonction :</p>
<code>function changeLanguage(lang) { i18n.changeLanguage(lang); }</code>
<p>A partir de ce moment la j'ai utilisé la fonction <code>changeLanguage()</code> sur les deux boutons qui servent à changer la langue.</p>
<p>Pour finir, il a juste fallu remplacer le texte brut par des clefs de traduction qui étaient créer dans le fichiers json dans public, avec une fonction qui était mise à disposition par la librairie :</p>
<p>ex : <code>{t('current-year')}</code></p>

# Travail personnel - Sarah Güngör
<strong>Utilisation de <code>amCharts4 (Maps)</code> :</strong>
<p>Le choix de notre <strong>dataviz</strong> s’est porté sur un globe interactif et pour le mettre en place nous avons choisi <code>amCharts4</code> qui est une librairie <code>JS</code> de datavisualisation bien documentée, basée sur le format <code>GeoJson</code>, renvoyant un template en <code>SVG</code> accessible dans le <code>DOM</code> et compatible avec TypeScript et les framework JS (ici, <code>React</code>).</p>
<p>Les propriétés qui nous ont été utiles :</p>
<ul>
<li>Choix de la projection de la map (ici, Orthographic)</li>
<li>Tooltips</li>
<li>Légendes</li>
<li>Répartitions des couleurs</li>
<li>Zoom</li>
<li>Rotation</li>
<li>Drag & drop</li>
</ul>
<p>Nous avons également eu recours à <code>amCharts4</code> pour gérer une scrollbar chronologique liée à nos données ainsi qu’au Globe.</p>
<p>Avec un peu plus de connaissances les scripts auraient pu être davantage optimisés et raccourcis, quoi qu’il en soit cette librairie nous a beaucoup facilité la tâche pour gérer notre dataviz</p>
<br>


