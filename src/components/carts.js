
import { Getstrings } from "../assets/strings"


export function Carts() {

    const cards = Getstrings().cards;
    
    return(
        <div className="container">
            <div className="carts row">
                <div className="col cart">
                    <h1>{cards[0].h1}</h1>
                    <h5>{cards[0].h5}</h5>
                    <p>{cards[0].paragraph}</p>
                </div>
                <div className="col cart">
                    <h1>{cards[1].h1}</h1>
                    <h5>{cards[1].h5}</h5>
                    <p>{cards[1].paragraph}</p>
                </div>
                <div className="col cart">
                    <h1>{cards[2].h1}</h1>
                    <h5>{cards[2].h5}</h5>
                    <p>{cards[2].paragraph}</p>
                </div>
            </div>
        </div>
    )
}