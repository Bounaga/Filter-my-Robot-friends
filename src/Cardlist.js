// import react from 'react';
import Card from './Card';

const Cardlist = ({robots}) => 
{
    const cardComponent = robots.map((user,i) =>  {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;

    })

    return(
        <div className='allcards'>
           {cardComponent}
        </div>
   );
}

export default Cardlist;