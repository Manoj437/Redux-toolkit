import React, { useState} from 'react'
import TableRows from '../TableRows'
import './style.css'
const CartTable = () =>{

    const [rowsData, setRowsData] = useState([]);

    const addTableRows = ()=>{
        const rowsInput= {
            prodName: '',
            price: '',
            quantity: ''
        }
        setRowsData([...rowsData, rowsInput]);
    }

    const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }

    const handleChange = (index, evnt)=>{
    
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
     
    }
    return(
        <>
            <table>
            <tbody>
               
                <tr>
                    <th>S.no</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th className='add_but'><button onClick={addTableRows}>Add Item</button></th>
                </tr>
                
                
                <tr>
                    <td colSpan={5}>
                        <hr></hr>
                    </td>
                </tr>
                <TableRows RowsData={rowsData} handleChange={handleChange} deleteTableRows={deleteTableRows} />
                </tbody>
            </table>
        </>
    )
}
export default CartTable