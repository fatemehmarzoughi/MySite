import { Heading } from "./heading"

export function Contact(){
    return(
        <div className="container contact-container" id="contact">
            <Heading title="Contact" isContact={true} />

            <div className="row">
                <div className="col">
                    <h2>For more Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate velit esse </p>
                    <b>Address : Lorem ipsum dolor sit amet ,</b> 
                    <br /> 
                    <b>Telephone : 021-21111111</b>
                </div>
                <form className="col">
                    <input className='row input' name="name" placeholder="Name" type="text" required/>
                    <input className='row input' name="email" placeholder="Email" type="email" required />
                    <textarea placeholder="Commment" className='row input' name="comment" type="text"></textarea>
                    <input className="btn" name="submit" value="Send" type="submit" />
                </form>
            </div>
        </div>
    )
}