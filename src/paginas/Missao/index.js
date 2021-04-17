import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';


const Missao = () => {
    return (
        <EstruturaPagina>
            <div className="missao-consultorio">
                <div className="missao-container"></div>
                <h1>Nossa <b>missão</b></h1>
                <ul className="missao-lista">
                    <li>
                        <p>Somos um Centro Odontológico Especializado. Contamos com uma equipe de profissionais, altamente qualificados, que oferecem para nossos clientes os melhores tratamentos com eficiência, estética e solução.
                        Nossa equipe trabalha para seu conforto e de sua família, estamos sempre a disposição para tornar seu sorriso e saúde melhor! </p>

                    </li>

                    <li>
                        <p><b>Procuramos proporcionar o melhor para nosso clientes, com atendimentos para:</b></p>
                    </li>

                    <li>
                        <p>Preservar a saúde, sorria para a vida.</p>
                    </li>

                    <li>
                        <p>Serviços de implantes, com segurança e precisão.</p>
                    </li>
                    
                    <li>
                        <p>Tecnologia de ponta com tratamentos avançados e rapizes no diagnóstico. </p>
                    </li>

                    <li>
                        <p>Satisfação do cliente, promovendo excelência estética. </p>
                    </li>

                
                    
                </ul>
            </div>

            <div>
                <Link to="/contato" className="btn-contato">Entrar em contato</Link>

            </div>
        </EstruturaPagina>
    );
}

export default Missao;