import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';
import { firestore } from './firebasecon'; // 🔥 import firestore from your config
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function TexicarForm() {
  // State for cars
  const [cars, setCars] = useState([]);

  // Add form states
  const [name, setName] = useState('');
  const [example, setExample] = useState('');
  const [seating, setSeating] = useState('');
  const [luggage, setLuggage] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // UI states
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Edit states
  const [editingCar, setEditingCar] = useState(null);
  const [editForm, setEditForm] = useState({ name:"", example:"", seating:"", luggage:"", price:"", imageUrl:"" });

  // Fetch cars realtime
  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, 'taxicars'), (snapshot) => {
      const list = [];
      snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
      setCars(list);
    }, (err) => {
      console.error(err);
      setMessage("Error fetching cars.");
      setMessageType("error");
    });
    return () => unsub();
  }, []);

  // Add new car
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setMessage('');
    try {
      if (!name || !example || !seating || !luggage || !price || !imageUrl) {
        setMessage("Please fill all fields."); setMessageType("error"); setLoading(false); return;
      }
      await addDoc(collection(firestore, "taxicars"), {
        name, example,
        seating: Number(seating),
        luggage: Number(luggage),
        price: Number(price),
        imageUrl
      });
      setMessage("Car added successfully!"); setMessageType("success");
      setName(""); setExample(""); setSeating(""); setLuggage(""); setPrice(""); setImageUrl("");
    } catch (err) {
      console.error(err);
      setMessage("Error adding car.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  // Delete car
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, "taxicars", id));
      setMessage("Car deleted successfully!"); setMessageType("success");
    } catch (err) {
      console.error(err);
      setMessage("Error deleting car."); setMessageType("error");
    }
  };

  // Open edit modal
  const handleEdit = (car) => {
    setEditingCar(car);
    setEditForm({
      name: car.name,
      example: car.example,
      seating: car.seating,
      luggage: car.luggage,
      price: car.price,
      imageUrl: car.imageUrl
    });
  };

  // Save edited car
  const handleUpdate = async () => {
    try {
      await updateDoc(doc(firestore, "taxicars", editingCar.id), {
        ...editForm,
        seating: Number(editForm.seating),
        luggage: Number(editForm.luggage),
        price: Number(editForm.price)
      });
      setMessage("Car updated successfully!"); setMessageType("success");
      setEditingCar(null);
    } catch (err) {
      console.error(err);
      setMessage("Error updating car."); setMessageType("error");
    }
  };

  // Tailwind helpers
  const inputClass = "w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6f61] transition-colors duration-200 text-black";
  const labelClass = "block text-sm font-medium text-gray-700 mt-4";
  const buttonClass = "w-full py-3 px-6 mt-6 text-white font-semibold rounded-full bg-[#ff6f61] hover:bg-[#ff5a4d] transition-colors duration-300 shadow-lg";

  return (
    <>
     <button onClick={() => setShowForm(!showForm)}
        className="mb-6 py-2 px-6 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600">
        {showForm ? "Hide Form" : "Show Add Car Form"}
      </button>
    <div className="flex flex-col    p-4">

     

      {/* Messages */}
      {message && (
        <div className={`p-4 mb-4 rounded-lg w-full max-w-lg text-center ${messageType==="success" ? "bg-green-100 text-green-700":"bg-red-100 text-red-700"}`}>
          {message}
        </div>
      )}

      {/* Add Form */}
      {showForm && (
        <>
        <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">Add New Car</h2>
          <form onSubmit={handleSubmit}>
            <label className={labelClass}>Car Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} className={inputClass} required />

            <label className={labelClass}>Example Models</label>
            <input value={example} onChange={e=>setExample(e.target.value)} className={inputClass} required />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Seating</label>
                <input type="number" value={seating} onChange={e=>setSeating(e.target.value)} className={inputClass} required />
              </div>
              <div>
                <label className={labelClass}>Luggage</label>
                <input type="number" value={luggage} onChange={e=>setLuggage(e.target.value)} className={inputClass} required />
              </div>
            </div>

            <label className={labelClass}>Price (₹)</label>
            <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className={inputClass} required />

            <label className={labelClass}>Image URL</label>
            <input value={imageUrl} onChange={e=>setImageUrl(e.target.value)} className={inputClass} required />

            <button type="submit" disabled={loading} className={buttonClass}>
              {loading ? "Adding..." : "Add Car"}
            </button>
          </form>
        </div>
        
      {/* Cars List */}
      <div className="w-full max-w-5xl">
   
        {cars.length === 0 ? (
          <p className="text-center text-gray-500">No cars found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cars.map(car => (
              <div key={car.id} className="bg-white p-4 rounded-lg shadow text-center">
                <img src={car.imageUrl} alt={car.name}
                  className="mx-auto mb-2 w-full h-32 object-cover rounded-md"
                  onError={(e)=>e.target.src="https://placehold.co/150x150?text=No+Image"} />
                <h4 className="font-bold text-black">{car.name}</h4>
                <p className="text-sm text-gray-600">{car.example}</p>
                <p className="text-sm text-gray-600">{car.seating} Seater | {car.luggage} Bags</p>
                <p className="font-bold text-lg mt-2 text-black">₹{car.price}</p>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 rounded"
                    onClick={() => handleEdit(car)}>Edit</button>
                  <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded"
                    onClick={() => handleDelete(car.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
        </>
      )}


     
{/* Edit Modal */}
{editingCar && (
  <Dialog open={true} onClose={() => setEditingCar(null)} className="relative z-50">
    <DialogBackdrop className="fixed inset-0 bg-black/40" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <DialogPanel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
        <DialogTitle className="text-xl font-bold mb-4 text-black">
          Edit Car
        </DialogTitle>

        <input value={editForm.name} onChange={e=>setEditForm({...editForm,name:e.target.value})} className={inputClass}/>
        <input value={editForm.example} onChange={e=>setEditForm({...editForm,example:e.target.value})} className={inputClass}/>
        <input type="number" value={editForm.seating} onChange={e=>setEditForm({...editForm,seating:e.target.value})} className={inputClass}/>
        <input type="number" value={editForm.luggage} onChange={e=>setEditForm({...editForm,luggage:e.target.value})} className={inputClass}/>
        <input type="number" value={editForm.price} onChange={e=>setEditForm({...editForm,price:e.target.value})} className={inputClass}/>
        <input value={editForm.imageUrl} onChange={e=>setEditForm({...editForm,imageUrl:e.target.value})} className={inputClass}/>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={()=>setEditingCar(null)} className="px-4 py-2 bg-gray-400 text-white rounded">
            Cancel
          </button>
          <button onClick={handleUpdate} className="px-4 py-2 bg-green-600 text-white rounded">
            Save
          </button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
)}

    </div>
    </>
  );
}
