const Card = (props) => {
    return(
        <div className='Card'>
            <div className='container 	bg-light-green  dib br3 ba tc ma3 grow shadow-5'>
                <img alt='robot' src={`https://robohash.org/${props.id} `}></img> 
                <h3> {props.name} </h3>
                <p className='f6'>{props.email}</p>
            </div>
           </div>
    );
}

export default Card;