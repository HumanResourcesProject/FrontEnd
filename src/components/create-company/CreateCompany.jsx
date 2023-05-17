import React from 'react'
import { useState } from 'react';
import './createCompany.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CompanyService from '../../service/CompanyService';



const CreateCompany = () => {

    const [companyInfo, setCompanyInfo] = useState({
        name: "",
        unvan: "",
        phone: "",
        address: "",
        email: "",
        calisanSayisi: "",
        kurulusYili: "",
        vergiDairesi: "",
        vergiNo: "",
        mersisNo: "",
        logo: "",
    })
    const [image, setImage] = useState('');

    const onchangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }


    const handleCreate = async (event) => {
        event.preventDefault();
        if (image === "https://png.pngtree.com/element_origin_min_pic/16/07/06/23577d1d403788d.jpg") {
            const newImage = URL.createObjectURL(image)
            setCompanyInfo({
                ...companyInfo,
                logo: newImage
            })
        }
        console.log(companyInfo);
        CompanyService.register(companyInfo).then(
            () => {

                alert("added successfully *****")
            })
            .catch((error) => {
                alert(error.response.data.message + "bir seyler yanlis gitti front satir:50");
            });

    };


    return (
        
        <div className='companyregistermain'>
            <div className='companyregistercart'>

                <div className='logo'> {/* 1.0 */}

                    <div className='company-register-logo'> {/* 1.1 */}
                        {image ? <img src={URL.createObjectURL(image)} /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Rengoku" />}

                    </div>

                    <div className='company-choose-logo'> {/*1.2 */}
                        <label htmlFor="file" className='choosefilebutton' ><DriveFolderUploadIcon className='uploadicon' />Choose a Logo</label>
                        <input type="file" id='file' style={{ display: 'none' }} onChange={onchangeImage} />
                    </div>
                </div>
                <form onSubmit={handleCreate}>
                    <div className='inputs'> {/* 2.0 */}


                        <div className='cartleft'> {/* 2.1 */}

                            <label htmlFor=""> Name</label>
                            <input type="text" placeholder='Company Name' onChange={(e) =>
                                setCompanyInfo({
                                    ...companyInfo,
                                    name: e.target.value,
                                })
                            } />

                            <label>  Phone</label>
                            <input type="text" placeholder='Company Phone'  onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    phone: e.target.value,
                  })
                } />

                            <label>  Address</label>
                            <input type="text" placeholder='Company Address'  onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    address: e.target.value,
                  })
                } />

                            <label> calisan sayisi</label>
                            <input type="text" placeholder='toplam calisan sayisi' onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    calisanSayisi: e.target.value,
                  })
                } />

                            <label> Vergi dairesi </label>
                            <input type="text" placeholder='Vergi Dairesi Adı. ilçe/il'  onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    vergiDairesi: e.target.value,
                  })
                } />

                            <label className='mersisno' htmlFor=""> Mersis no </label>
                            <input className='mersisno' placeholder='0000000000000019' onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    mersisNo: e.target.value,
                  })
                } />
                        </div>
                        <div className='cartright'> {/* 2.2 */}


                            <label> Unvan</label>
                            <input type="text" placeholder='Lti.Şti Or Anonim vs.'  onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    unvan: e.target.value,
                  })
                } />

                            <label>  E-Mail</label>
                            <input type="text" placeholder='xxx@companyname.com'  onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    email: e.target.value,
                  })
                } />


                            <label> kuruluş yılı</label>
                            <input type="text" placeholder='01.01.2023'  onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    kurulusYili: e.target.value,
                  })
                } />

                            <label> Vergi No </label>
                            <input type="text" placeholder='0000000000'  onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    vergiNo: e.target.value,
                  })
                } />
                        </div>
                    </div>

                    <button type="submit" onClick={(e) =>
                        setCompanyInfo({
                            ...companyInfo,
                            logo: image
                        })
                    }>Create</button>
                </form>

            </div>
        </div>
    )
}
export default CreateCompany;
