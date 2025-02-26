import React from 'react'
import numeral from 'numeral'


const CurencyFormater = ({amount})=>{
    const formatedAmount = numeral(amount).format("$0,0.00");
    return (
        <div>
            <p>{formatedAmount}</p>
        </div>
    );
}
export default CurencyFormater;