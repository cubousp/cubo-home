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
            autoplaySpeed: 5000,
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
                            <div className="activities__section__title"
                                 style={this.state.current === this.ACTIVITIES.PALESTRA ? {opacity: 1} : {opacity: 0}}>
                                <h1>Palestras</h1>
                            </div>
                        </div>
                    </div>
                    <div className={"activities__section"}>
                        <div className="workshops">
                            <div className="activities__section__title">
                                <h1>Workshops</h1>
                            </div>
                        </div>
                    </div>
                    <div className={"activities__section"}>
                        <div className="hands-on">
                            <div className="activities__section__title"
                                 style={this.state.current === this.ACTIVITIES.HANDSON ? {opacity: 1} : {opacity: 0}}>
                                <h1>Hands-on</h1>
                            </div>
                        </div>
                    </div>
                    <div className={"activities__section"}>
                        <div className="cirurgias">
                                <div className="activities__section__title"
                                     style={this.state.current === this.ACTIVITIES.CIRURGIA ? {opacity: 1} : {opacity: 0}}>
                                    <h1>
                                        Cirurgias ao vivo
                                    </h1>
                                </div>
                        </div>
                    </div>
                    <div className={"activities__section"}>
                        <div className="stands">
                            <div className="activities__section__title"
                                 style={this.state.current === this.ACTIVITIES.STAND ? {opacity: 1} : {opacity: 0}}>
                                <h1>Stands</h1>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Activities