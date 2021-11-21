import {AiOutlineCopyrightCircle} from 'react-icons/ai'

export function Footer(){

    return(
        <div className="container-xxl footer">
            <p className="footerText">
                <AiOutlineCopyrightCircle className="footerIcon" size={22} /> 
                All Rights are reserved. Created by fatemeh marzoughi
            </p>
        </div>
    )
}