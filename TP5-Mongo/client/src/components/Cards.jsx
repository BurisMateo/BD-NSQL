import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const API = process.env.REACT_APP_API;

const Cards = () => {

const [superHero, setSuper] = useState([])

const getSuperheros = async () => {
  const res = await fetch (`${API}/all`)
  const data = await res.json();
  setSuper(data)
  console.log(data);
}

const [busc, setBusc] = useState('')


const handleChange = e =>  {
  setBusc(e.target.value)
}

useEffect(() => {
  getSuperheros();
}, []);


return(
      <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">SuperHero</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/cargar">Cargar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all">Ver Todos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all/marvel">Marvel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all/dc">DC</a>
                        </li>
                        <form class="d-flex">
                        <input
                        type = 'text'
                        placeholder = 'Buscar por nombre'
                        className = 'textField'
                        name = 'busqueda'
                        />
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </ul>
                </div>
            </div>
        </nav>
      <div className='row mx-0'>
         {superHero.filter((hero) => {
           if(busc == ""){
             return hero
           }else if (hero.name.toLowerCase().includes(busc.toLocaleLowerCase())){
             return hero
           }
         }).map(hero => (
              <div className='col-2'>
              <div className="card" style={{width:"18rem"}}>
                  <img src={hero.img}className="card-img-top"/>
                  <div className='card-body'>
                  <h5 className="card-title">Nombre : {hero.name}</h5>
                  <h6 className = 'card-text'>Nombre de super heroe : {hero.superheroName}</h6>
                  <p className="card-text">Descripcion : {hero.description}</p>
                  <Link  to = {`/details/${String(hero._id)}`} id = {hero._id} className="btn btn-primary">Mas info</Link>
                  </div>
                </div>
                </div>
         ))}
            </div>
            </div>
    )
}
export default Cards;