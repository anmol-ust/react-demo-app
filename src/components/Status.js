const Status = (props) => {
    
    const data = props.data;
    console.log(data);
    return data.length ? (<div>{data.length} items are available</div>) : (<div>Items not available</div>);

}

export default Status;