import React from 'react'
import Card from './Card'
import "./card.scss";

const CardList = ({ people }) => {
    return (
<div className='cardlistcontainer'>
    {people.map((person,index) => <Card userData={person} key={index}/>)}
</div>
    )
}

export default CardList