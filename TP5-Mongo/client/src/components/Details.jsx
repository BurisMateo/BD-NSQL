import React, {useEffect, useState} from 'react';
import { useParams, Redirect } from 'react-router';

const API = process.env.REACT_APP_API;

const Details = () => {

        const [super1, setSuper] = useState([])
        const [houseState, setHouseState] = useState('');

        const {id} = useParams();

        const getSuperhero = async () => {
          const res = await fetch (`${API}/details/${id}`)
          const data = await res.json();
          setSuper(data)
          console.log('Recibido');
        }

        const getHouse = () => {

          const dc = 'https://www.marketingdirecto.com/wp-content/uploads/2016/05/dc-comics.jpg'
        
          const marvel = 'https://pm1.narvii.com/6169/c7654592853555614d539f4a36018dc5f5ca561f_hq.jpg'
        
          if ((super1.house === 'Marvel') || (super1.house === 'marvel')){
            setHouseState(marvel);
          }else if ((super1.house == 'dc') || (super1.house == 'DC') || (super1.house == 'Dc')){
            setHouseState(dc);
          }
        }
      
        const deleteSuper = async () => {
          const res = await fetch (`${API}/details/${id}`,{
            method:'DELETE'
          });
          if (res){
            window.alert('Eliminado correctamente')
          }else
          window.alert('Error al eliminar')
        }


        useEffect(() => {
          getSuperhero();
        }, []);
        
        useEffect(()=>{
          getHouse();
        },[]);

        return(
          <>
                <div className="card" style={{width: '18rem'}}>
                <img src={super1.img} className="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title">Nombre real : {super1.name}</h5>
                    <p className="card-text">Nombre de superheroe : {super1.superheroName}</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Descripcion : {super1.description}</li>
                <li className="list-group-item">Ano de aparicion : {super1.year}</li>
                <li className="list-group-item">Casa : {super1.house}</li>
                <li className="list-group-item">Equipamiento : {super1.equipment}</li>
                <div>
                {/* <button className = 'btn btn-warning'>Editar</button> */}
                <button className = 'btn btn-danger' onClick = { () => deleteSuper({id})}>Delete</button>
                </div>
                </ul> 
                </div>
                <div>
                <img src={houseState} className="card-img-top"/>
                </div>
          </>
            )
        }

export default Details;