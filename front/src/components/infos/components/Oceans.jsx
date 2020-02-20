import React from "react";

/* STYLES */
import '../infos.scss';
 
const Oceans = () => {
  const oceans = 
  [
    {
      id: 0,
      title: 'Total',
      masse: '268,950 tonnes'
    },
    {
      id: 1,
      title: 'Océan Pacifique Nord',
      indice: '60'
    },
    {
      id: 2,
      title: 'Océan Indien',
      indice: '11'
    },
    {
      id: 3,
      title: 'Mer Méditerranée',
      indice: '8'
    },
    {
      id: 4,
      title: 'Océan Pacifique Sud',
      indice: '9'
    },
    {
      id: 5,
      title: 'Océan Atlantique Nord',
      indice: '2'
    },
    {
      id: 6,
      title: 'Océan Atlantique Sud',
      indice: '5'
    }
  ]

	return(
    <div>
      <section className="infos__bloc">
        <h2>CLASSEMENT</h2>
        <h3>du plus polluant au moins polluant en fonction de leur part de déchets se retrouvant dans la nature</h3>
        <ol>
          { oceans.map(c => <li key={ c.id }><span className="itemOrder">{ c.id }</span>{ c.title }</li> )}
        </ol>
      </section>
      <section className="infos__bloc">
        <h2>CLASSEMENT</h2>
        <h3>du plus polluant au moins polluant en fonction de leur part de déchets se retrouvant dans la nature</h3>
        <ol>
          { oceans.map(c => <li key={ c.id }><span className="itemOrder">{ c.id }</span>{ c.title }</li> )}
        </ol>
      </section>
    </div>
	);
}
   
export default Oceans;