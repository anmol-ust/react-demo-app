import Button from './Button';
const DataTable = (props) => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Product Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.length > 0 && props.data.map((value, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{value}</td>
                            <td>
                                <Button btnType="button" btnName="Edit" handlerEvent={() => props.editHandler(i)} />&nbsp;
                                <Button btnType="button" btnName="Delete" handlerEvent={() => props.deleteHandler(i)} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}

export default DataTable;