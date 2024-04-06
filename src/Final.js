import React, { useState } from 'react';
import './Final.css';

const Final=()=>{

     return(
        <>
        <div className='done'>Done!</div>
        <div className='finalimage'><img src="paymentSuccess.png" alt="" width={"700px"} height={"400px"}/></div>
        <div className='payments'>Payment Successful</div>
        </>
     );
}

export default Final;