function HotelCard(props){
    return(
        <div className="border border-black">
            <h1>{props.name}</h1>
            <h2>{props.location}</h2>
            <p>{props.rating}{props.reviews.length}</p>
            <h3>${props.price}</h3>
        </div>
    );
}

export default HotelCard;