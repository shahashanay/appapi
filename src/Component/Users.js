import React ,{useEffect, useState,useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { themeContext } from "../Context";
import Link from '@mui/material/Link';
import "./Users.css";
import Popover from '@mui/material/Popover';


export default function Users() {  
//ทศนิยม
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
    const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = () => {
    setAnchorEl(true)
};
  const handleClose = () => {
    setAnchorEl(null)
  };
    const open = Boolean(anchorEl);
    const Id = open ? 'simple-popover' : undefined;
    // context
    const theme = useContext(themeContext);
    const language = theme.state.language;
    const Titlelanguage = language? "Company Profile on the Stock Exchange" : "ข้อมูลบริษัทในตลาดหลักทรัพย์"; 
    const Nname = language? "STOCK NAME" : "ชื่อหุ้น";
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
    <React.Fragment>
      <CssBaseline />
      <Container  sx={{p:2}} >
      <Box >
         <Box >
         <Typography variant="h6"align='center' gutterBottom>{Titlelanguage}</Typography></Box>
        </Box>
        <TableContainer component={Paper} >
      <Table   >
        <TableHead>
          <TableRow  className="Fonttitle">
          <TableCell align="center">{Nname}</TableCell>
         <TableCell align="center">{Ncompany}</TableCell>
         <TableCell  align="center">{Nmarketcap}</TableCell>
         <TableCell align="center">{Nbusiness}</TableCell>
         <TableCell align="center">{Nbusiness}</TableCell>
            <TableCell align="center">{Nurl}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
            height="200px"
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
            >
             <TableCell  align="center" >{row.N_name}</TableCell>
              {language ?  <TableCell align="left" >{row.N_COMPANY_E}</TableCell>
              :<TableCell align="left">{row.N_COMPANY_T}</TableCell>}
              <TableCell align="center">{formatNumber((row.marketcap/1000000).toFixed(2))}</TableCell>
              {language ?<TableCell  align="center">{row.N_BUSINESS_TYPE_E}</TableCell> 
               : <TableCell  align="center">{row.N_BUSINESS_TYPE_T}</TableCell>}
              <TableCell  align="center"  height="80px" ></TableCell>
              <button  className="button2 D-button"aria-describedby={Id} variant="contained" onClick={handleClick}>{detail}</button>
              <Popover
  Id={Id}
  open={open}
  onClose={handleClose}
  anchorReference="anchorPosition"
  anchorPosition={{ top: 380, left: 200 }}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
>
  {language ?<div>{row.N_BUSINESS_TYPE_E}</div>
  : <div >{row.N_BUSINESS_TYPE_T}</div>}
</Popover>
              <TableCell align="left" ><Link href={row.N_URL} target={"blank"} ><button className="button n-button">{Website}</button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
    </React.Fragment>
  );
}  