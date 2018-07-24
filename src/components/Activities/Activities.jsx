import React from 'react'
import './Activities.css'
import Slider from 'react-slick'

class Activities extends React.Component {
    ACTIVITIES = {
        PALESTRA: 0,
        WORKSHOP: 1,
        HANDSON: 2,
        CIRURGIA: 3,
        STAND: 4
    }
    state = {
        current: 0
    }

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            dots: true,
            arrows: true,
            className: 'slides'
        };

        return (
            <div>
                <Slider  {...settings} afterChange={(index) => this.setState({current: index})}>
                    <div className={"activities__section"}>
                        <div className="palestras">
                            <div className="activities__section__title">
                                <h1>Palestras e Workshops</h1>
                                <h6>Os melhores profissionais do mercado compartilhando conhecimento técnico e inovador.</h6>
                            </div>
                        </div>
                    </div>
                    <div className={"activities__section"}>
                        <div className="hands-on">
                            <div className="activities__section__title">
                                <h1>Hands-on</h1>
                                <h6>Atividades conectando o mundo acadêmico com a prática na Odontologia.</h6>
                            </div>
                        </div>
                    </div>
                    <div className={"activities__section"}>
                        <div className="cirurgias">
                                <div className="activities__section__title">
                                    <h1>Cirurgias ao vivo</h1>
                                    <h6>Aprendendo com as técnicas mais modernas do mercado e casos clínicos diferenciados.</h6>
                                </div>
                        </div>
                    </div>
                    <div className={"activities__section"}>
                        <div className="stands">
                            <div className="activities__section__title">
                                <h1>Stands</h1>
                                <h6>Stands de produtos com ofertas e brindes exclusivos para os participantes.</h6>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Activities