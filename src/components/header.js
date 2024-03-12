import React from 'react';
import { CryptoState } from '../cryptocontext';
import { Select, MenuItem} from '@mui/material';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

function Header  () {
  const { currency, setCurrency } = CryptoState()
  
    const properties = {
      duration: 4000,
      autoplay: true,
      arrows: false,
    };

  return (
    <div>
      <div>
        CryptoHunter
      </div>
      <div className="Global">
         <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div>
              
            </div>
          </div>
          <div className="each-slide">
          
          
          </div>
          <div className="each-slide">
           <div>
           
           </div>
          </div>
          <div className="each-slide">
         
          </div>
          </Slide>
        </div>
        <div id="setCurrency" >
        <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            style={{ width: 100, height: 50, marginRight: 10}}
            onChange={(e) => setCurrency(e.target.value)}
        
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"GBP"}>GBP</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
       
        
       </div>

    </div>
  )
}


export default Header;