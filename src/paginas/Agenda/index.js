import React from 'react';
import './estilo.css';

import EstruturaPagina from '../../componentes/EstruturaPagina';

const Agenda = () => {
    return(
        <EstruturaPagina>
            <div className="formulario-container">
                <section>
                    <h1 className='title-formulario'>AGENDE SUA CONSULTA <span>CONOSCO</span></h1>
                    <form className='formulario'>
                        <ul className='lista-formulario'>
                            <li>
                                <label>Nome:</label>
                                <input type='text' placeholder='Nome Completo'/>
                            </li>

                            <li>
                            <label>Email:</label>
                                <input type='email' placeholder='E-mail'/>
                            </li>

                            <li>
                            <label>Telefone para contato:</label>
                                <input type='telefone' placeholder='(11)4678-8764'/>
                            </li>

                            <li>
                            <label>CPF:</label>
                                <input type='email' placeholder='000.000.000-00'/>
                            </li>
                            
                            <li>
                            <label>Data de Nascimento:</label>
                                <input type='date' placeholder='00/00/00'/>
                            </li>
                            
                            <li>
                            <label>Gênero</label>
                                <select>
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </select>
                            </li>

                            <li>
                            <label>CEP:</label>
                                <input type='text' placeholder='00000-000'/>
                            </li><br></br>

                            <div class='cta'>
                            <p className='text-title'><a href='/agenda' class="btn-agenda">AGENDAR</a></p>
                            </div>
                        </ul>
                    </form>
                </section>
            </div>

        </EstruturaPagina>
    );
}

export default Agenda;
