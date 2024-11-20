import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redux/itemsSlice';

const Home = () => {
    const items = useSelector((state) => state.items)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    };

    return (
        <div className="container mx-auto p-4">
            <div className=" flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Inventories</h1>
                <Link to="/add-item" className="text-blue-500 py-2 px-4 font-semibold text-sm rounded-md border-2 border-blue-500 hover:bg-blue-500 hover:text-white">Add New Item</Link>
            </div>
            <ul className="mt-4 space-y-4">
                {items.map((item) => (
                    <li key={item.id} className="p-4 border rounded-md shadow-md">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                            <div className=" flex flex-col gap-2 text-sm font-semibold text-right">
                                <Link to={`/edit-item/${item.id}`} className="text-blue-500 hover:underline">Edit</Link>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
