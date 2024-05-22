import React,{useState,useEffect} from 'react';
import { API_URL } from '../api';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import {ColorRing} from 'react-loader-spinner';
const Chains=()=>{
    const [vendorData, setVendorData]=useState([])
   const [scrollPosition, setScrollPosition]=useState(0); 
   const [loading, setLoading]=useState(true);
    
    
    
    const vendorFirmHandler=async()=>{
        try{
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const newData= await response.json();
            setVendorData(newData);
            console.log("this is API data", newData);
            setLoading(false);
            
        } catch (error){
            alert("failed to fetch the data");
         console.log("failed to fetch data");
         setLoading(true);
        }

    } 
    useEffect(()=>{
vendorFirmHandler()
    },[]);

//for scrolling
const handleScroll =(direction)=>{
    const gallery =document.getElementById("chainGallery")
    const scrollAmount=500;

    if(direction==='left'){
        gallery.scrollTo({
          left : gallery.scrollLeft-scrollAmount,
          behavior:"smooth"
    })
    }
    else if(direction==="right"){
        gallery.scrollTo({
            left: gallery.scrollLeft+scrollAmount,
            behavior:"smooth"
        })
    }
}



    return(
    <div className='mediaChainSection'>
    <div className='loaderSection'>
    {loading && <>
        <div className='loader'>
        Your request for 🍜 is loading..
        </div>

        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </>
}

    </div>
    <div className='btnSection'>
        <button onClick={()=>handleScroll("left")}><FaRegArrowAltCircleLeft className='btnIcons'/></button>
        <button onClick={()=>handleScroll("right")} ><FaRegArrowAltCircleRight className='btnIcons'/></button>
    </div>
     <h3> Top restaurants in Hyderabad </h3>
    <section className='chainSection' id="chainGallery" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
           
            {vendorData.vendors && vendorData.vendors.map((vendor)=>{
                return (<>

              <div className='vendorBox'>
                    {vendor.firm.map((item)=>{

                        return(
                            <>
                            <div>
                                <label style={{fontSize:16}}>
                                {/*item.firmName*/}
                                </label>
                                </div>
                                <div className='firmImage'>
                                    <img style={{height:100,width:150}} src={`${API_URL}/uploads/${item.image}`}/>
                                </div>
                            </>
                        )
                    })}
                </div>
                </>
                )
            })}
        </section>

   </div> 
    )
}
export default Chains;