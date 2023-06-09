import { useState } from "react";

function Card({id, image, info, price, name, removeTour}) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info: `${info.substring(0,201)}...` // kyonki details sirf info ke 200 characters tak dikha rhi uske bad 'show more' ka option hai
    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} alt="" className="image"></img>

            <div className='tour-info'>
            <div className="tours-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">{description}
                <span className='read-more' onClick={readmoreHandler}>
                    {readmore ? 'Show Less' : 'Read More'};
                </span>
                </div>
            </div>
            <button className='btn-red' onClick = {() => removeTour(id)}>Not intreseted</button>
        </div>
    );
}

export default Card;