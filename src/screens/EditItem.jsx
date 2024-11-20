import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../redux/itemsSlice';

const EditItem = () => {
  const { id } = useParams()
  const item = useSelector((state) =>
    state.items.find((item) => item.id === parseInt(id))
  )
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (item) {
      setName(item.name)
      setDescription(item.description)
    }
  }, [item])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !description) return

    const updatedItem = {
      id: item.id,
      name,
      description,
    }

    dispatch(updateItem(updatedItem))
    navigate('/')
  }

  if (!item) {
    return <p>Item not found!</p>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Item Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Update Item
        </button>
      </form>
    </div>
  );
};

export default EditItem;
