import React, { Component, Fragment } from 'react'

import './content-about.css'

class ContentAbout extends Component {
    render() {
        return (
            <Fragment>
                <div id="content-about">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <h2 className="sr-4">sobre nós</h2>
                            <h3 className="sr-3">Oi, sou a Geovanna Garcia</h3>
                            <p className="sr-1">Nosso objetivo é proporcionar segurança e despreocupação no planejamento e no dia do casamento, por isso, contamos com uma consultoria especializada que visa orientar as necessidades dos noivos, através de uma análise completa do seu perfil para oferecer o melhor custo-benefício e a certeza de um planejamento tranquilo.</p>
                            <p className="sr-1">No site é possível solicitar cotações, tirar dúvidas e compreender em detalhes tudo sobre nossa assessoria. Conheça nossos serviços!</p>
                            <img src='/assets/images/geovanna-icon-heart.svg' className="sr-4" alt="Ícone de dois corações" />
                            <h3 className="sr-3">A nossa missão</h3>
                            <p className="sr-1">é planejar com total dedicação o momento mais importante na vida de um casal, acompanhando todo processo com muito profissionalismo transmitindo tranquilidade e confiança para que os noivos possam desfrutar ao máximo esse momento único e especial.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ContentAbout