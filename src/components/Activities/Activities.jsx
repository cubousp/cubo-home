import React from 'react'
import './Activities.css'
import classNames from 'classnames'
import Slider from 'react-slick'

class Activities extends React.Component {
    state = {
        selected: undefined
    }

    select(type) {
        this.setState({
            selected: type
        })
    }

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2500,
            pauseOnHover: true,
            arrows: true,
            className: 'slides'
        };

        return (
          <div>
            <Slider  {...settings}>
                <div className={classNames("activities__section", { selected: this.state.selected === 'palestras', nonSelected: this.state.selected !== 'palestras' && this.state.selected})} onClick={() => this.select('palestras')}>
                        <div className="palestras">
                            <div className="activities__section__title">
                                <h1>Palestras</h1>
                            </div>
                        </div>
                    </div>
                    <div className={classNames("activities__section", { selected: this.state.selected === 'workshops', nonSelected: this.state.selected !== 'workshops' && this.state.selected})} onClick={() => this.select('workshops')}>
                        <div className="workshops">
                            <div className="activities__section__title">
                                <h1>Workshops</h1>
                            </div>
                        </div>
                    </div>
                    <div className={classNames("activities__section", { selected: this.state.selected === 'handsOn', nonSelected: this.state.selected !== 'handsOn' && this.state.selected})} onClick={() => this.select('handsOn')}>
                        <div className="hands-on">
                            <div className="activities__section__title">
                                <h1>Hands-on</h1>
                            </div>
                        </div>
                    </div>
                    <div className={classNames("activities__section", { selected: this.state.selected === 'cirurgias', nonSelected: this.state.selected !== 'cirurgias' && this.state.selected})} onClick={() => this.select('cirurgias')}>
                        <div className="cirurgias">
                            <div className="activities__section__title">
                                <h1>
                                    Cirurgias <br/>
                                    ao vivo 
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={classNames("activities__section", { selected: this.state.selected === 'stands', nonSelected: this.state.selected !== 'stands' && this.state.selected})} onClick={() => this.select('stands')}>
                        <div className="stands">
                            <div className="activities__section__title">
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