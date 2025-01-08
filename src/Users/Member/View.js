import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link,useParams } from 'react-router-dom'

const View = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [file,setFile]=useState(null);
    const [image,setImage]=useState("");
  const { id } = useParams();

    useEffect(() => {
        const getMemberData = async () => {
          try {
            const response = await fetch(`http://personal.test/api/editMembers/${id}`);
            if (!response.ok) {
              throw new Error("Error fetching member data");
            }
            const data = await response.json();
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
          } catch (error) {
            alert(error.message);
          }
        };
    
        getMemberData();
      }, [id]);

      const handleFileChange= (event)=>{
        setFile(event.target.files[0]);
      };

      const handleUpload= async ()=> {
                if(!file){
                    alert("Please Select a File");
                    return;
                }
                const formdata=new FormData();
                formdata.append('profile_image',file);

            try {
                const response = await fetch(`http://personal.test/api/uploadProfile/${id}`, {
                    method: 'POST',
                    body: formdata, 

                });
                // console.log(response);
                if (!response.ok) {
                    throw new Error("Error While File Upload");
                    }
                else{
                    alert("File Uploaded Successfully");  
                }

            } catch (error) {
                alert(error.message);
            }
      };

    async function fetchImage(){
        try {
            const response=await fetch(`http://personal.test/api/image/${id}`);
            // console.log(response);
            if (!response.ok) {
                throw new Error("Error fetching image");
                }
                const data=await response.json();
                console.log(data.image);
                setImage(data.image);

        } catch (error) {
            console.error(error.message);
        }
     }
     useEffect(() => {
        fetchImage();    // Fetch image when component mounts
    }, [id]);
  return (
    <div>
        <Layout>
        <Link to="/members">
    <svg
      className="w-8 h-8 mb-6 text-blue-500 hover:text-blue-600 transition duration-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <polyline
        points="244 400 100 256 244 112"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 48,
        }}
      />
      <line
        x1="120"
        y1="256"
        x2="412"
        y2="256"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 48,
        }}
      />
    </svg>
  </Link>

  <center>
    <div className='flex flex-col justify-center items-center gap-3 bg-purple-100 p-3 w-fit rounded-xl'>
        
         {image ? <img src={image.url} alt="Profile_image" className='h-32 w-full rounded-xl' /> : <span>
        <input type='file' className='bg-white p-2 rounded-md' onChange={handleFileChange} />
        <button className='bg-green-500 m-2 p-2 text-white hover:scale-95' onClick={handleUpload}>Upload Profile</button>
        </span>}   
        
    <p>Name : {name}</p>
    <p>Email : {email}</p>
    <p>phone : {phone}</p>
  </div>
    </center>
        </Layout>
    </div>
  )
}

export default View