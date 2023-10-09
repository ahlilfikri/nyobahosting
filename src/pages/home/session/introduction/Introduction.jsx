import { Fragment } from "react";
import './Introduction.css'


const Introduction = () => {

    return (
        <Fragment>
            <div className="introduction-container">
                <div className="content-left">
                    <div className="text-content">
                        <h1 className="first-h1">Hey, I am</h1>
                        <h1 className="second-h1">Muhamad Ahlil Fikri</h1>
                        <p>programmer / student</p>
                    </div>
                </div>
                <div className="content-right">
                    <div className="image"></div>
                </div>
            </div>
        </Fragment>
    )
};

export default Introduction