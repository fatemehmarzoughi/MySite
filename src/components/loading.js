import { AiOutlineLoading } from 'react-icons/ai';


export function Loading(){
    const height = window.innerHeight;

    return(
        <div className="container-fluid loading" style={{height : height}}>
            <AiOutlineLoading className="loading_icon" size={40}/>
        </div>
    )
}