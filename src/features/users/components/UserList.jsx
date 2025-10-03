import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, updateUser, deleteUser } from "../slices/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.users);
  const [formData, setFormData] = useState({ id:null, name:"", email:"" });

  useEffect(() => { dispatch(fetchUsers()); }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) dispatch(updateUser(formData));
    else dispatch(addUser({ name: formData.name, email: formData.email }));
    setFormData({ id:null, name:"", email:"" });
  };

  return (
    <div className="container">
      <h3>User Management</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>
        <input type="email" placeholder="Email" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
        <button type="submit">{formData.id ? "Update" : "Add"}</button>
      </form>
      {list.map(user => (
        <div className="user-card" key={user.id}>
          <div>{user.name} ({user.email})</div>
          <div>
            <button className="edit" onClick={()=>setFormData(user)}>Edit</button>
            <button className="delete" onClick={()=>dispatch(deleteUser(user.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
