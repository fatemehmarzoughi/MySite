import { Heading } from "./heading"
import { AiOutlineLoading } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import { useContext, useRef, useState } from "react";
import { Getstrings } from "../assets/strings";
import context from "../context/context";

export function Contact(){

    const contexts = useContext(context);
    const isFarsi = contexts.language === 'fa';

    let btnText = isFarsi ? 'ارسال' : 'Send';
    let btnTextOnClick = isFarsi ? 'در حال ارسال' : 'Sending';
    let messageSent = isFarsi ? 'پیام ارسال شد' : 'Message Sent';
    let messageFailed = isFarsi ? 'مشکلی در ارسال پیام رخ داد. لطفا مجددا سعی کنید' : 'Something went wrong. Please try again';

    const [sendText , setSendText] = useState(btnText);
    const [loadingIconOpacity , setLoadingIconOpacity] = useState(0);
    const [errorDisplay , setErrorDisplay] = useState('none');
    const [sentMsgDisplay , setSentMsgDisplay] = useState('none');
    const [formDisplay , setFormDisplay] = useState('block');
    
    const form = useRef();
    const sendEmail = (e) => {
        setErrorDisplay('none');
        setSendText(btnTextOnClick);
        setLoadingIconOpacity(1);
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);

              setSendText(btnText);
              setLoadingIconOpacity(0);
              setErrorDisplay('none');
              setSentMsgDisplay('flex');
              setFormDisplay('none')
          }
          ,
           (error) => {
              console.log(error.text);
              setSendText(btnText);
              setLoadingIconOpacity(0);
              setErrorDisplay('block')
          });
    }


    return(
        <div className="container contact-container" id="contact">
            <Heading title={Getstrings().contact.mainTitle} isContact={true} />

            <div className="row contact" style={isFarsi ? {direction : 'rtl'} : {direction : 'ltr'}}>
                <div data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1500" className="col contact_texts">
                    <h2>{Getstrings().contact.secondSection.title}</h2>
                    <p>{Getstrings().contact.secondSection.paragraph}</p>
                    <b>{Getstrings().contact.secondSection.Address}</b> 
                    <br /> 
                    <b>{Getstrings().contact.secondSection.telephone}</b>
                </div>
                <form data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1500" style={{display : formDisplay}} className="col" onSubmit={(e) => sendEmail(e)}>
                    <b style={{color : 'red', display : errorDisplay}}>{messageFailed}</b>
                    <div className="row emailName" style={{margin : '0px'}}>
                       <input className='col input' name="name" placeholder={Getstrings().contact.form.name} type="text" required/>
                       <input className='col input' name="email" placeholder={Getstrings().contact.form.email} type="email" required />
                    </div>
                    <textarea placeholder={Getstrings().contact.form.comment} className='row input' name="comment" type="text"></textarea>
                    <div style={{position : 'relative', width : 'fit-content'}}>
                       <AiOutlineLoading className="loading_icon sendingIcon" style={{opacity : loadingIconOpacity}} size={20}/>
                       <input className="btn" name="submit" value={sendText} type="submit" />
                    </div>
                </form>
                <div className="sentMessage col" style={{display : sentMsgDisplay}}>
                    <b style={{ color : 'darkgreen'}}>{messageSent}</b>
                </div>
            </div>
        </div>
    )
}