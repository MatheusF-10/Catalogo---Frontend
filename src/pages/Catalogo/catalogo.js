import React from 'react';
import './catalogo.css';
import api_modulos from "../../service/api_get_modulos";
//import { useState } from 'react';

//import Cabecalho from "../components/header_home_page";

class Catalogo extends React.Component {


    state = {
        catalogo: [],
    }

    async componentDidMount() {
        const response = await api_modulos.get('');
        try {
            this.setState({ catalogo: response.data });
        } catch (error) {
            alert("Houve um problema na chamada ao servidor!")
        }


    }

    render() {

        const { catalogo } = this.state;
        console.log(catalogo)

        function showAulas(catalogo) {

            console.log(catalogo)
        }


        return (
            <div>
                <header>
                    <h1 className="default-font-collor"><a className="default-font-collor h1-catalogo" href="/">Catálogo de Aulas</a></h1>
                    <ul className="menu">
                        <li><a href="/login">Sign in</a></li>
                        <li><a href="/">Sign up</a></li>
                    </ul>
                </header>
                <div className="horizontal-line"></div>
                <div className="titulo-pagina">
                    <h1 className="default-font-collor">Módulos</h1>
                    <h3 className="color-subtitle">Selecione o módulo para verificar as aulas disponíveis:</h3>
                </div>
                <section className="container">


                    {/* DIV Listando os Catalogos */}
                    <div className="grid-modules">

                        {catalogo.map(catalogo => (

                            <button onClick={() => showAulas(catalogo.id)} className="button-class" key={catalogo}>
                                <div className="intra-button">
                                    <h5 className="default-font-collor">Aqui ficara uma imagem</h5>
                                </div>
                                <div>
                                    <h5 className="default-font-collor">{catalogo.nome}</h5>
                                    <span className="default-font-collor">{catalogo.num_aulas} aulas</span>
                                </div>
                            </button>
                        ))}

                    </div>


                    <div>

                    </div>

                </section>
            </div>
        );
    };
};

export default Catalogo;