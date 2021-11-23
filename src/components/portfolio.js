import { Heading } from './heading';
import { Getstrings } from '../assets/strings';

export function Portfolio() {

    return(
        <div className="container" id="portfolio">
            <Heading title={Getstrings().portfolio.mainTitle} />
            <div className="rows">
                <div className="columns">
                   <div className="cardContent">
                        <img className="img-fluid img"  src="img/img1.jpeg" alt="" />
                        <div className="portfoilio_covers">
                            <div className="texts">
                               <h6>{Getstrings().portfolio.items[0].title}</h6>
                               <p>{Getstrings().portfolio.items[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardContent">
                        <img className="img-fluid img"  src="img/img6.jpeg" alt="" />
                        <div className="portfoilio_covers">
                            <div className="texts">
                               <h6>{Getstrings().portfolio.items[1].title}</h6>
                               <p>{Getstrings().portfolio.items[1].description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns">
                   <div className="cardContent">
                        <img className="img-fluid img"  src="img/img6.jpeg" alt="" />
                        <div className="portfoilio_covers">
                            <div className="texts">
                               <h6>{Getstrings().portfolio.items[2].title}</h6>
                               <p>{Getstrings().portfolio.items[2].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardContent">
                        <img className="img-fluid img"  src="img/img1.jpeg" alt="" />
                        <div className="portfoilio_covers">
                            <div className="texts">
                               <h6>{Getstrings().portfolio.items[3].title}</h6>
                               <p>{Getstrings().portfolio.items[3].description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns">
                   <div className="cardContent">
                        <img className="img-fluid img"  src="img/img1.jpeg" alt="" />
                        <div className="portfoilio_covers">
                            <div className="texts">
                               <h6>{Getstrings().portfolio.items[4].title}</h6>
                               <p>{Getstrings().portfolio.items[4].description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardContent">
                        <img className="img-fluid img"  src="img/img6.jpeg" alt="" />
                        <div className="portfoilio_covers">
                            <div className="texts">
                               <h6>{Getstrings().portfolio.items[5].title}</h6>
                               <p>{Getstrings().portfolio.items[5].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}