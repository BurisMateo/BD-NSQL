import React from 'react';
const Index = () => {
    return (
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
        <div>
        <img src="https://i.pinimg.com/originals/2c/a7/ec/2ca7ec6f14771610a50f3dec5596c7a6.jpg" style = 
        {{backgroundAttachment:"fixed",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover" }}/>
        </div>
    </div>
    )
}

export default Index;