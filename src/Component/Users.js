import React ,{useEffect, useState,useContext} from 'react';
import { themeContext } from "../Context";
import Link from '@mui/material/Link';
import "./Users.css";


export default function Users() {  
//ทศนิยม
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
    // context
    const theme = useContext(themeContext);
    const language = theme.state.language;
    const Titlelanguage = language? "Company Profile on the Stock Exchange" : "ข้อมูลบริษัทในตลาดหลักทรัพย์"; 
    const Nname = language? "STOCK" : "หุ้น";
    const Nmarketcap = language? "MARKETCAP (Million Baht)" : "มูลค่าตลาด (ล้านบาท)";
    const Ncompany = language? "COMPANY" : "บริษัท";
    const Nurl = language? "WEBSITE" : "เว็บไซด์";
    const Nbusiness = language? "COMPANY INFORMATION" : "ข้อมูลบริษัท";
    const Website = language ?"Home Page" :"เข้าสู่เว็บไซด์" ;
    const detail = language ?"DETAIL" :"รายระเอียด" ;
      const [items, setItems] = useState([])
  useEffect(() => {
    fetch("https://stockradars.co/assignment/data.php")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, [])
  return (
      <div >
      <div className='Title'>
         <h1 align='center' >{Titlelanguage}</h1>
        </div>
      <div >
          {items.map((row) => (
            <div className="head"><Link href={row.N_URL} target={"blank"} ><button  className="button n-button">
            <p className='spacebtw'> <span><span className='span'>{Nname}</span> : {row.N_name}  </span>
              {language ?  <span ><span className='span'> {Ncompany}</span> : {row.N_COMPANY_E}</span>
              :<span ><span className='span'> {Ncompany}</span> : {row.N_COMPANY_T}</span>}
              <span ><span className='span'>{Nmarketcap}</span> : {formatNumber((row.marketcap/1000000).toFixed(2))}฿</span></p>
              {language ?<div  align="left"><span className='span'>{Nbusiness}</span> : {row.N_BUSINESS_TYPE_E}</div> 
               : <div  align="left"><span className='span'>{Nbusiness}</span> : {row.N_BUSINESS_TYPE_T}</div>}</button></Link>
            </div>
          ))}
      </div>
      </div>

  );
}  