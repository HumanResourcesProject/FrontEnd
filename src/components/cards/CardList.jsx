import React from 'react'
import Card from './Card'
import "./card.scss";

const CardList = ({ people }) => {
    return (
<div className='cardlistcontainer'>
    {people.map((person) => <Card userData={person} />)}
</div>
    )
}

export default CardList