import React from 'react'
import './Activities.css'

const Activities = () => (
    <div id="activities" className="activities">
        <div className="activities__section palestras">
            <div className="activities__section__title">
                <h1>Palestras</h1>
            </div>
        </div>
        <div className="activities__section workshops">
            <div className="activities__section__title">
                <h1>Workshops</h1>
            </div>
        </div>
        <div className="activities__section hands-on">
            <div className="activities__section__title">
                <h1>Hands-on</h1>
            </div>
        </div>
        <div className="activities__section cirurgias">
            <div className="activities__section__title">
                <h1>
                    Cirurgias <br/>
                    ao vivo
                </h1>
            </div>
        </div>
        <div className="activities__section stands">
            <div className="activities__section__title">
                <h1>Stands</h1>
            </div>
        </div>
    </div>
)

export default Activities