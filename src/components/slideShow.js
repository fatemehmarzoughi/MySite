import React, {useEffect, useState} from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Getstrings } from "../assets/strings";

export function SlideShow(){

    const slidesInfo = Getstrings().slidesInfo;

    const toRight = (manualChange) => {
        if(manualChange) setManualChange(true);
        else setManualChange(false)

        switch(translate)
        {
            case 0:
                setTitle(slidesInfo[1].title)
                setSubTitle(slidesInfo[1].subTitle)
                setTranslate(-25)
            break;

            case -25 : 
                setTitle(slidesInfo[2].title)
                setSubTitle(slidesInfo[2].subTitle)
                setTranslate(-50)
            break;
            
            case -50 : 
                setTitle(slidesInfo[3].title)
                setSubTitle(slidesInfo[3].subTitle)
                setTranslate(-75)
            break;

            case -75 : 
                setTitle(slidesInfo[0].title)
                setSubTitle(slidesInfo[0].subTitle)
                setTranslate(0)
            break;
            default : 
            break;
        }
    }

    const toLeft = (manualChange) => {
        if(manualChange) setManualChange(true);
        else setManualChange(false)

        switch(translate)
        {
            case 0:
                setTitle(slidesInfo[0].title)
                setSubTitle(slidesInfo[0].subTitle)
                setTranslate(0)
            break;

            case -25 : 
                setTitle(slidesInfo[0].title)
                setSubTitle(slidesInfo[0].subTitle)
                setTranslate(0)
            break;
            
            case -50 : 
                setTitle(slidesInfo[1].title)
                setSubTitle(slidesInfo[1].subTitle)
                setTranslate(-25)
            break;

            case -75 : 
                setTitle(slidesInfo[2].title)
                setSubTitle(slidesInfo[2].subTitle)
                setTranslate(-50)
            break;
            default : 
            break;
        }
    }

    const [translate , setTranslate] = useState(0); // 0 =>toRight => -25 =>toLeft => 0 => toRight => -75
    const [title , setTitle] = useState(slidesInfo[0].title)
    const [subTitle , setSubTitle] = useState(slidesInfo[0].subTitle)
    const [manualChange ,setManualChange] = useState(false)

    // useEffect(() => {
    //     if(!manualChange)
    //        setTimeout(() => toRight(false) , 3000)
    // })


    return(

        <div className="slideShowContainer container-xxl" id="home">
            <div className="container-xxl cover">
                <div onClick={() => toRight(true)} className="IconStyle"><IoIosArrowForward size={22} /></div>
                <div className="texts">
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </div>
                <div onClick={() => toLeft(true)} className="IconStyle"><IoIosArrowBack size={22} /></div>
            </div>
            <div className="images" style={{transform : `translateX(${translate}%)`}}>
               <img className="imageStyle img-fluid" alt={slidesInfo[0].title} src={slidesInfo[0].img} />
               <img className="imageStyle img-fluid" alt={slidesInfo[1].title} src={slidesInfo[1].img} />
               <img className="imageStyle img-fluid" alt={slidesInfo[2].title} src={slidesInfo[2].img} />
               <img className="imageStyle img-fluid" alt={slidesInfo[3].title} src={slidesInfo[3].img} />
            </div>
        </div>
    )
}