import React from "react";

/* STYLES */
import '../infos.scss';
 
const Continents = () => {
  const colors = [
    "#C00B0B",
    "#D34C2D",
    "#E07844",
    "#EA9956",
    "#F3B665",
    "#FEDC79",
    "#FFEBB2"
  ]

  const continents = 
  [
    {
      id: 1,
      title: 'Asie',
      indice: '60'
    },
    {
      id: 2,
      title: 'Europe',
      indice: '11'
    },
    {
      id: 3,
      title: 'Amérique du Nord',
      indice: '8'
    },
    {
      id: 4,
      title: 'Amérique du Sud',
      indice: '9'
    },
    {
      id: 5,
      title: 'Afrique',
      indice: '2'
    },
    {
      id: 6,
      title: 'Océanie',
      indice: '5'
    }
  ]

	return(
		<section className="infos__bloc infos__bloc--continents">
      <h2>CLASSEMENT</h2>
      <h3>du plus polluant au moins polluant en fonction de leur part de déchets se retrouvant dans la nature</h3>
			<ol>
        { continents.map(c => <li key={ c.id }><span className="itemOrder">{ c.id }</span>{ c.title }</li> )}
			</ol>
		</section>
	);
}
   
export default Continents;