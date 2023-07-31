
const TableRows = ({RowsData, handleChange, deleteTableRows}) => {

    return (
        <>
        {
            
            RowsData.map((data, index) => {
                const {prodName, price, quantity} = data;
                return(
                <tr key={index}>
                    <td>{index +1}</td>
                    <td><input type="text" value={prodName} name="prodName" onChange={(evnt)=>(handleChange(index, evnt))}></input></td>
                    <td><input type="text" value={price} name="price" onChange={(evnt)=>(handleChange(index, evnt))}></input></td>
                    <td><input type="text" value={quantity} name="quantity" onChange={(evnt)=>(handleChange(index, evnt))}></input></td>
                    <td><button onClick={deleteTableRows}>Remove</button></td>
                </tr>
                )
            })
                
        }
        </>
    )
}

export default TableRows