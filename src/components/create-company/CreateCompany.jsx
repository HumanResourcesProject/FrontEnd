import React from 'react'
import { useState } from 'react';
import './createCompany.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CompanyService from '../../service/CompanyService';
import EmailInput from "../email-input/EmailInput";




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
        // alert(error.response.data.message + "bir seyler yanlis gitti front satir:50");
        alert("added successfully *****")

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
              <input
                // pattern="^[a-zA-Z.]{1,20}$"
                // title="Please enter a valid company name"
                type="text"
                placeholder='Company Name' onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    name: e.target.value,
                  })
                }
                required
                 />

              <label>  Phone</label>
              <input
                // pattern="^[0-9]{9,11}$"
                // title="Please enter a valid phone"
                type="text"
                placeholder='Company Phone'
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    phone: e.target.value,
                  })
                } 
                required
                />

              <label>  Address</label>
              <input type="text" placeholder='Company Address' onChange={(e) =>
                setCompanyInfo({
                  ...companyInfo,
                  address: e.target.value,
                })
              }
              required
               />

              <label> calisan sayisi</label>
              <input
                pattern="^[0-9]+$"
                title="Please enter a number"
                type="text"
                placeholder='toplam calisan sayisi' onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    calisanSayisi: e.target.value,
                  })
                }
                required
                 />

              <label> Vergi dairesi </label>
              <input type="text" placeholder='Vergi Dairesi Adı. ilçe/il' onChange={(e) =>
                setCompanyInfo({
                  ...companyInfo,
                  vergiDairesi: e.target.value,
                })
              }
              required
               />

              <label className='mersisno' htmlFor=""> Mersis no </label>
              <input
                
                title="Please enter a valid mernis number"
                className='mersisno' placeholder='0000000000000019'
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    mersisNo: e.target.value,
                  })
                }
                required
                 />
            </div>
            <div className='cartright'> {/* 2.2 */}


              <label> Unvan</label>
              <input type="text" placeholder='Lti.Şti Or Anonim vs.' onChange={(e) =>
                setCompanyInfo({
                  ...companyInfo,
                  unvan: e.target.value,
                })
              } 
              />

              <label>  E-Mail</label>
              <input
                // pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                onChange={(e) =>
                  setCompanyInfo({
                    ...companyInfo,
                    email: e.target.value,
                  })
                }
                required
                 />


              <label> kuruluş yılı</label>
              <input 
              
              title="Please enter a valid day"
              type="date" 
              placeholder='01.01.2023' 
              onChange={(e) =>
                setCompanyInfo({
                  ...companyInfo,
                  kurulusYili: e.target.value,
                })
              } 
              required
              />

              <label> Vergi No </label>
              <input 
              // pattern="^\d{10}$"
              // title="Please enter a valid tax number"
              type="text" 
              placeholder='0000000000' 
              onChange={(e) =>
                setCompanyInfo({
                  ...companyInfo,
                  vergiNo: e.target.value,
                })
              }
              required
               />
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
