import { BsInstagram, BsWhatsapp, BsTwitter } from 'react-icons/bs';


export function Heading(props){
    return(
        <div className="container heading">
            <h1>{props.title}</h1> 
            <>
            {props.isContact ? 
            <div className="socialLinks">
                <a href="#contact"><BsInstagram size={19} className="socialIcon" /></a>
                <a href="#contact"><BsWhatsapp size={19} className="socialIcon" /></a>
                <a href="#contact"><BsTwitter size={19} className="socialIcon" /></a>
            </div> 
            : 
            <div></div>}
            </>
        </div>
    )
}