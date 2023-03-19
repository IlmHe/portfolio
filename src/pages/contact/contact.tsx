import React from 'react';
import './contact.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);
interface IndexProps {
    sectionRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<IndexProps> = ({sectionRef}) => {

    return (
        <div ref={sectionRef} className="contactWrapper">
            <div className="textDivContact">
                <h1 id="contacth1">Contact me</h1>
                <p>Whether you have a question, a project idea, or just want to say hello,
                    I'd love to hear from you. Looking forward to chatting with you!

                </p>
                <a href="mailto:Ilmar.Heinonen@metropolia.fi" target="_blank">
                    <FontAwesomeIcon className="envelopeIcon" icon="envelope" />
                </a>
            </div>
        </div>
    );
};


export default Contact;
