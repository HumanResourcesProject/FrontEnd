import React from 'react'
import Card from './Card'
import "./card.scss";
import { useState, useEffect } from "react";
import CompanyService from '../../service/CompanyService';

const CardList = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
      CompanyService.findAllCompany(sessionStorage.getItem("token")).then(
        (response) => {
          setCompanies(response.data);
          console.log(response.data);

        }
      );
    }, []);

    return (
<div className='cardlistcontainer'>
    {companies.map((company,index) => <Card company={company} key={index}/>)}
</div>
    )
}

export default CardList