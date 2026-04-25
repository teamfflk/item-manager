import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
const [items, setItems] = useState([]);
const [form, setForm] = useState({
name: "",
price: "",
category: "",
description: "",
quantity: "",
status: ""
});

const getItems = async () => {
const res = await API.get("/");
setItems(res.data);
};

useEffect(() => {
getItems();
}, []);

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const addItem = async () => {
await API.post("/", form);
getItems();
};

const deleteItem = async (id) => {
await API.delete(`/${id}`);
getItems();
};

const updateItem = async (id) => {
const name = prompt("Enter name:");
const price = prompt("Enter price:");
const category = prompt("Enter category:");
const description = prompt("Enter description:");
const quantity = prompt("Enter quantity:");
const status = prompt("Enter status:");
const author = prompt("Enter Author Name:");
await API.put(`/${id}`, {
name,
price,
category,
description,
quantity,
status,
author
});
getItems();
};
return (
<div style={{ padding: "20px" }}>
<h2>Item Manager</h2>
<input name="name" placeholder="Name" onChange={handleChange} />
<input name="price" placeholder="Price" onChange={handleChange} />
<input name="category" placeholder="Category" onChange={handleChange} />
<input name="description" placeholder="Description" onChange={handleChange} />
<input name="quantity" placeholder="Quantity" onChange={handleChange} />
<input name="author" placeholder="author" onChange={handleChange} />


<select name="status" placeholder="Status" onChange={handleChange}>
    <option value = "">Select Status </option>
    <option value = "avaliable">avaliable </option>
    <option value = "not avaliable">not avaliable </option>

    </select>  


<button onClick={addItem}>Add Item</button>
{items.map((item) => (
<div key={item._id}>
<p>
{item.name} - {item.price} - {item.quantity} - {item.description} - {item.status} - {item.author}
</p>
<button onClick={() => updateItem(item._id)}>Update</button>
<button onClick={() => deleteItem(item._id)}>Delete</button>
</div>
))}
</div>
);
}
export default App;
