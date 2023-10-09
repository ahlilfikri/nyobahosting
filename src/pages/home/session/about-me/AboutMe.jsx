import { Fragment } from "react";
import './AboutMe.css'

const AboutMe = () =>{

    return (
        <Fragment>
            <div className="about-me-container">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus iusto inventore quae! Repellat aliquid veritatis commodi velit deleniti impedit, aut iusto dolor aspernatur, officia sequi unde voluptate alias atque!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum vel nisi incidunt possimus libero aperiam unde eligendi voluptatum quod voluptatem ipsa delectus, eaque, quidem veniam impedit sint esse aliquid!</p>   
                <button><a href="#">My Resume</a></button>
            </div>
        </Fragment>
    )
};

export default AboutMe;