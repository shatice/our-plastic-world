import React, {useEffect, useState} from "react";
import axios from 'axios';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/***** COMPONENTS *****/
import Header from './Header.jsx';

const Home = () => {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/country`)
        .then(res => {
            setPersons(res.data);
        })
    });

    console.log(persons);

    return(
        <div className="home">
            <Header/>
            <div className="home__intro">
                <p>Les matières plastiques sont des ressources solides, durables et renouvelables. Pourtant leurs déchets représent  X% de la pollution mondiale....Découvre blablablablablablabla : </p>
                <Link to="/step1"><button>C'est parti</button></Link>
            </div>
            <ul>
                { persons.map(person => <li key="person.code">{person.country} {person.code} {person.population} </li>)}
            </ul>
        </div>
    );
}

export default Home;