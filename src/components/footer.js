import {AiOutlineCopyrightCircle} from 'react-icons/ai';
import { Getstrings } from '../assets/strings';

export function Footer(){

    return(
        <div className="container-xxl footer">
            <p className="footerText">
                <AiOutlineCopyrightCircle className="footerIcon" size={22} /> 
                {Getstrings().footer}
            </p>
        </div>
    )
}