import { useState } from "react";
import Status from "./Status";

const IndecisionApp = () => {

    const [count, setCount] = useState(0);

    const app = {
        title: "Indecision App",
        subTitle: "",
        items: []
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = e.target.elements.option.value;
        if (data) {
            app.items.push(data);
            e.target.elements.option.value = "";
            console.log(app.items);
            // const msg = app.items.length+" items are available";
            setCount(app.items.length);
            printTemplate();
        }
    }

    const removeAll = () => {
        app.items = [];
        console.log(app.items);
    }

    const printTemplate = () => {
        const template = (
            <div>
                <h1>{app.title}</h1>
                <h4>{app.subTitle && app.subTitle}</h4>
                {
                    app.items ? (<div>{count} items are available</div>) : (<div>Items not available</div>)
                }
                {/* <Status data={arr} /> */}
                {/* <div>{status}</div> */}
                <hr />
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option" placeholder="Enter Item" />
                    <button type="submit">Add Item</button>
                    <button type="button" onClick={removeAll}>Remove All</button>
                </form>
            </div>
        )
        return template;
    }
    return printTemplate();
}

export default IndecisionApp;

// try to implement app that allow us to add data, remove all data where data will an object like {firstName:'asdsads',lastName:'sdsdsd'}