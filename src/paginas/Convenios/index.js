import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

import EstruturaPagina from '../../componentes/EstruturaPagina';


const Convenios = () => {
    return(
        <EstruturaPagina>
            <div className="convenios-container">
                <div className="Convenios">
                    <h2 className="titulo-sessao">Lista de <b>Convênios</b></h2>

                    <div className="square1"><strong>Convênios Clássico</strong></div>
                    <br></br>
                    <select id="pfClassic" class="select1" name="PlanoClassico">
                        <option value="200Doc" selected>Mês</option>
                        <option value="50" selected>Anual</option>
                    </select>

                    <div id="Pessoas"></div>
                    <select id="pfClassic" class='select2' name='PlanoClassico'>
                        <option value='1ou3' selected>1 ou 2 pessoas </option>
                        <option value='3oumais' selected>3 ou mais pessoas</option>
                    </select>

                    <div id='Apartir' class='Apartir'><b>A partir de:</b></div>
                    <div class='Cifra'>R$</div>
                    <div id='ValorRedondo' class='ValorRedondo'>29,90</div>
                    <div id='Cent' class='Cent'> 12/mês</div>
                    <br/><br/>
                
                </div>
            </div>

            <div>
                <Link to="/contato" className="btn-contato">Entrar em contato</Link>

            </div>
        </EstruturaPagina>
    );
}

export default Convenios;