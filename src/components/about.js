import { Heading } from "./heading"
import { Getstrings } from "../assets/strings"
import { useContext } from "react"
import context from "../context/context"

export function About(){

    const contexts = useContext(context);
    const isFarsi = contexts.language === 'fa';

    return(
        <div className="container" id='about'>
            <Heading title={Getstrings().about.mainTitle} />
            <div className="row aboutUs-firstSection" style={isFarsi ? {direction : 'rtl'} : {direction : 'ltr'}}>
                <div className="col">
                   <img className="col img-fluid img-thumbnail figure-img" src="img/img1.jpeg" alt="" />

                </div>
                <div className="col">
                    <h3>{Getstrings().about.firstSection.title}</h3>
                    <h5>{Getstrings().about.firstSection.subTitle}</h5>
                    <p>{Getstrings().about.firstSection.paragraph}</p>
                </div>

                <div className="row about_row">
                    <div style={{order : '1'}} className="col">
                       <h3>{Getstrings().about.secondSection[0].title}</h3>
                       <h5>{Getstrings().about.secondSection[0].subTitle}</h5>
                       <p>{Getstrings().about.secondSection[0].paragraph}</p>
                    </div>
                    <div style={{order : '2'}} className="col">
                       <h3>{Getstrings().about.secondSection[1].title}</h3>
                       <h5>{Getstrings().about.secondSection[1].subTitle}</h5>
                       <p>{Getstrings().about.secondSection[1].paragraph}</p>
                    </div>
                    <div style={{order : '3'}} className="col">
                       <h3>{Getstrings().about.secondSection[2].title}</h3>
                       <h5>{Getstrings().about.secondSection[2].subTitle}</h5>
                       <p>{Getstrings().about.secondSection[2].paragraph}</p>
                    </div>
                </div>
                <div className="row about_row">
                    <div className="col">
                       <h3>{Getstrings().about.secondSection[3].title}</h3>
                       <h5>{Getstrings().about.secondSection[3].subTitle}</h5>
                       <p>{Getstrings().about.secondSection[3].paragraph}</p>
                    </div>
                    <div className="col">
                       <h3>{Getstrings().about.secondSection[4].title}</h3>
                       <h5>{Getstrings().about.secondSection[4].subTitle}</h5>
                       <p>{Getstrings().about.secondSection[4].paragraph}</p>
                    </div>
                    <div className="col">
                       <h3>{Getstrings().about.secondSection[5].title}</h3>
                       <h5>{Getstrings().about.secondSection[5].subTitle}</h5>
                       <p>{Getstrings().about.secondSection[5].paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}