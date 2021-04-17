import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import './estilo.css';

const Home = () => {
    return(
        <EstruturaPagina>
            <div className='home-apresentacao'>
                <div className='limite-container'>
                    <h1>Os melhores <span>aparelhos dentários</span>!</h1>
                    <p>Confira abaixo todas as especialidades odontológicas que temos a sua disposição!</p>

                    <ul className='lista-servicos'>
                        <li>
                            <img src="assets/dente.png" alt='logo' tittle='logo' />
                            <p>Pré-avaliação</p>
                        </li>
                       
                        <li>
                            <img src="assets/dente.png" alt='logo' tittle='logo' />
                            <p>Raio-X digital</p>
                        </li>
                       
                        <li>
                            <img src="assets/dente.png" alt='logo' tittle='logo' />
                            <p>Aparelho Dentários</p>
                        </li>
                       
                        <li>
                            <img src="assets/dente.png" alt='logo' tittle='logo' />
                            <p>Clareamento dental</p>
                        </li>
                        
                    </ul>

                </div >
                
                    <h2 className='titulo-sessao'>Por que usar <b>aparelho</b></h2>

                    <img className='img-aparelho' src='assets/aparelho.png' alt='Imagem do uso de um aparelho' title='Imagem do uso de um aparelho'/>

                    <ul className='lista-sobre-aparelho limitar-container'>
                        <li>
                            <h3>Alinhar os dentes</h3>
                            <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                        </li>
                       
                        <li>
                            <h3>Melhorar a dicção e a higiene dentária</h3>
                            <p>Muitas pessoas não conseguem nem usar fio dental devido a posição de sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                        </li>
                       
                        <li>
                            <h3>Corrigir nespaço entre os dentes</h3>
                            <p>Uma dentição muito desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                        </li>
                    </ul>

                    <div className="home-depoimentos">
                        <h2 className='titulo-sessao'>Veja o que nossos <b>clientes</b> estão falando...</h2>
                        <ul className='lista-depoimentos'>
                            <li>
                                <img className='img-aparelho' src='assets/cliente01.png' alt='Cliente Alberto' title='Cliente Alberto' />
                                <p>Alberto Silva</p>
                                <p>Usei aparelho por dois anos e agora posso sorrir novamente. </p>
                            </li>
                           
                            <li>
                                <img className="img-aparelho" src="assets/cliente02.png" alt="Cliente Eliana" title="Cliente Eliana" />
                                <p>Eliana Torres</p>
                                <p>Meus dentes eram espaçados e depois de um ano estão no lugar certo</p>
                                </li>
                               
                                <li>
                                <img className="img-aparelho" src="assets/cliente03.png" alt="Cliente Carla" title="Cliente Carla" />
                                <p>Carla Souza</p>
                                <p>Comecei a usar no ano passado e já estou notando a diferença</p>
                                </li>
                        </ul>
                    </div>

                    <div>
                        <Link to='/contato' className='btn-contato'>Entrar em Contato </Link>
                    </div>

            </div>
        </EstruturaPagina>
    );
}

export default Home;
