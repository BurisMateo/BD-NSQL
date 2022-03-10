import React, {useState} from 'react'


const API = process.env.REACT_APP_API;

const Formulario = () => {
    const [name, setName] = useState('');
    const [superheroName, setsuperheroName] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [house, setHouse] = useState('');
    const [equipment, setEquipment] = useState('');
    const [img, setImg] = useState('');


    const cartel = () =>{
        const namec = document.getElementById('name').value
        const superheroNamec = document.getElementById('superheroName').value
        const descriptionc = document.getElementById('description').value
        const yearc = document.getElementById('year').value
        const housec = document.getElementById('house').value
        const equipmentc = document.getElementById('equipment').value
        const imgc = document.getElementById('img').value
        if ((namec === '') || (superheroNamec === '') || (descriptionc === '') || (yearc === '') || (housec === '') || (equipmentc === '') || (imgc === '')) {
            window.alert('Complete todos los campos')
        }else
        window.alert('Agregador correctamente')
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${API}/cargar`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name,
                superheroName,
                description,
                year,
                house,
                equipment,
                img
            })
        })
    }


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
                </ul>
            </div>
        </div>
    </nav>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder='Ingrese el nombre original' onChange = { e => setName(e.target.value)} value = {name} required/>
            </div>
            <div className="mb-3">
                <label for="superheroName" className="form-label">SuperHero Name</label>
                <input type="text" className="form-control" id="superheroName" placeholder='Ingrese el nombre del superheroe' onChange = {e => setsuperheroName(e.target.value)} value = {superheroName} required/>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" placeholder='Ingrese una descripcion' onChange = {e => setDescription(e.target.value)} value = {description} required/>
            </div>
            <div className="mb-3">
                <label for="year" className="form-label">Ano de aparicion</label>
                <input type="date" className="form-control" id="year" placeholder='Ingrese el ano de aparicion' onChange = {e => setYear(e.target.value)} value = {year} required/>
            </div>
            <div className="mb-3">
                <label for="house" className="form-label">House</label>
                <input type="text" className="form-control" id="house" placeholder='Ingrese la casa a la que pertence' onChange = {e => setHouse(e.target.value)} value = {house} required/>
            </div>
            <div className="mb-3">
                <label for="equipment" className="form-label">Equipment</label>
                <input type="text" className="form-control" id="equipment" placeholder='Ingrese el equipamiento del superheroe' onChange = {e => setEquipment(e.target.value)} value = {equipment} required/>
            </div>
            <div className="mb-3">
                <label for="img" className="form-label">Imagen</label>
                <input type="text" className="form-control" id="img" placeholder='Ingrese un link de imagen' onChange = {e => setImg(e.target.value)} value = {img} required/>
            </div>
            
                    <button type="submit" onClick= {cartel} className="btn btn-primary">Submit</button>
        </form>
        </div>
           )
}

export default Formulario;