# Our Plastic World

<i>La pollution plastique à l'échelle mondiale</i>

Une datavisualisation de : 

<li>Rami Çakir (développement back)</li>
<li>Nastasia Dotlic (design)</li>
<li>Lucas Moreno (développement front)</li>
<li>Sarah Güngör (développement front)</li>

<br>

<strong>Prérequis</strong>

<ul>
	<li>Composer</li>
	<li>PHP 7.3</li>
</ul>

<i>Si vous avez une version de PHP antérieure à 7.3, vous devez faire une màj</i>

<code>brew install brew-php-switcher</code>

<code>brew install php@7.3</code>

<code>brew-php-switcher 7.3</code>

<strong>Récupérer et lancer le projet en local</strong>

<code>git clone</code> https://github.com/shatice/filrouge.git

<code>cd filrouge</code>

<strong>Lancer le front en local</strong>

<code>cd front</code>

<code>npm install</code>

<code>npm start</code>

<strong>Lancer le back en local</strong>

<i>Lancer un server local (avec Mamp ou autres)</i>

<code>cd api</code>

<code>composer install</code>

<code>composer run-script setupBDD</code>

<code>php -S 127.0.0.1:8000 -t public</code>
