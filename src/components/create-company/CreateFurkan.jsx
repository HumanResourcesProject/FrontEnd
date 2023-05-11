import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './createCompany.scss'
import './createFurkan.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AdminService from '../../service/AdminService';



const ProfilPage = () => {

    const [imageUrl, setImageUrl] = useState('');
    const [userId, setUserId] = useState('');

    const [adminInfo, setAdminInfo] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        avatar: "",
    })
    const [image, setImage] = useState('');
    const onchangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleImageUpload = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        formData.append('id', userId);

        axios.post('http://localhost:7070/admin/imagescloud', formData)
            .then(response => setImageUrl(response.data.imageUrl))
            .catch(error => console.log(error));
    };

    const handleCreate = async (event) => {


        event.preventDefault();

        if (image === "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png") {
            const newImage = URL.createObjectURL(image)
            setAdminInfo({
                ...adminInfo,
                avatar: newImage
            })
        }
        console.log(adminInfo);
        AdminService.postCreateAdmin(adminInfo).then(
            () => {

                alert("added successfully *****")
            })
            .catch((error) => {
                alert(error.response.data.message + "isterler: password 3'den asaği olmucak ... mail: gmail.com ile bitecek.... telefon sadece numara olmalı... hicbir alan bos gecilemez");
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

                <div className='inputs'> {/* 2.0 */}
                

                    <div className='cartleft'> {/* 2.1 */}

                        <label htmlFor=""> Name</label>
                        <input type="text" placeholder='Company Name' name="" id="" />

                        <label htmlFor="">  Phone</label>
                        <input type="text" placeholder='Company Phone' name="" id="" />

                        <label htmlFor="">  Address</label>
                        <input type="text" placeholder='Company Address' name="" id="" />

                        <label htmlFor=""> calisan sayisi</label>
                        <input type="text" placeholder='toplam calisan sayisi' name="" id="" />

                        <label htmlFor=""  > Vergi dairesi </label>
                        <input type="text" placeholder='Vergi Dairesi Adı. ilçe/il' name="" id="" />

                        <label className='mersisno' htmlFor=""> Mersis no </label>
                        <input className='mersisno' placeholder='0000000000000019' type="text" name="" id="" />




                    </div>
                    <div className='cartright'> {/* 2.2 */}


                        <label htmlFor=""> Unvan</label>
                        <input type="text" placeholder='Lti.Şti Or Anonim vs.' name="" id="" />

                        <label htmlFor="">  E-Mail</label>
                        <input type="text" placeholder='xxx@companyname.com' name="" id="" />

                        <label htmlFor="">  Address</label>
                        <input type="text" placeholder='Company Address' name="" id="" />

                        <label htmlFor=""> kuruluş yılı</label>
                        <input type="text" placeholder='01.01.2023' name=""  id="" />

                        <label htmlFor=""> Vergi No </label>
                        <input type="text" placeholder='0000000000' name="" id="" />


                    </div>
                    

                </div>
                
                <button type="submit" onClick={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    avatar: image
                  })
                }>Create</button>
            </div>
        </div>
    )
}
export default ProfilPage
