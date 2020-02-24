import React from "react";
import '../infos.scss';

const Continents = () => {

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
			<ol>
        { continents.map(c => <li key={ c.id }><span className="itemOrder">{ c.id }</span>{ c.title }</li> )}
			</ol>
		</section>
	);
}
   
export default Continents;