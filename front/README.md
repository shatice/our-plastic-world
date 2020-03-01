# Développement Front - Rendu d'expertise

<p>Élèves concernés :</p>
<ul>
  <li>Lucas Moreno</li>
  <li>Sarah Güngör</li>
  <li><i>(avec l'aide très préciseuse de notre développeur back, Rami Çakir)</i></li>
</ul>

# Choix argumentés 

<p>à venir</p>

# Librairies utilisées

<strong><code>Axios</code></strong>
<p>Client HTTP basé sur un système de promesses, nous avons préféré Axios à Fetch, par exemple, pour sa compatibilité avec les navigateurs et sa prise en main facile.</p>
<br>
<strong><code>Amcharts4 (Maps)</code></strong>
<br>
<a>https://www.amcharts.com/</a>
<br>
<p>Le choix de notre <strong>dataviz</strong> s’est porté sur un globe interactif et pour le mettre en place nous avons choisi <code>Amcharts4</code> qui est une librairie de datavisualisation bien documentée, basée sur le format <code>GeoJson</code>, renvoyant un template en <code>SVG</code> accessible dans le <code>DOM</code> et compatible avec TypeScript et les framework JS (ici, <code>React</code>).</p>
<p>Les propriétés qui nous ont été utiles :</p>
<ul>
<li>Choix de la projection de la map (ici Orthographic)</li>
<li>Tooltips</li>
<li>Légendes</li>
<li>Répartitions des couleurs</li>
<li>Zoom</li>
<li>Rotation</li>
<li>Drag & drop</li>
</ul>
<p>Nous avons également eu recours à Amcharts4 pour gérer une scrollbar chronologique reliée à nos données ainsi qu’au Globe.</p>
<p>Avec un peu plus de connaissances les scripts auraient pu être davantage optimisés et raccourcis, quoi qu’il en soit cette librairie nous a beaucoup facilité la tâche pour gérer notre dataviz</p>
<br>
<strong><code>i18next.js</code></strong>
<p>Facilite la traduction de notre application et permet donc à l'utilisateur de lire notre contenu dans les langues que nous souhaitons grâce à des fichiers <code>json</code> - dans lesquels nous stockons le contenu textuel dans les différentes langues - et des clés de traduction.</p>
<br>
<strong><code>react-sound</code></strong>
<p>Afin de rendre notre expérience digitale aussi immersive que possible, nous avons fait le choix d'intégré un son d'ambiance à l'aide de cette librairie, facile d'utilisation et interne à notre framework.</p>

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

