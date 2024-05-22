import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MedicineForm({ addMovie, editMovie, updateMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Quntaty, setQuntaty] = useState('');
  
  const navigate = useNavigate()

  useEffect(() => {
    if (editMovie) {
      setTitle(editMovie.title);
      setDescription(editMovie.description);
      setQuntaty(editMovie.Quntaty)
    }
  }, [editMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMovie) {
      updateMovie({ id: editMovie.id, title, description, Quntaty});
    } else {
        addMovie({id: Date.now(), title, description, Quntaty});
    }
    setTitle('');
    setDescription('');
    setQuntaty('');
    navigate('/Movies')
  };

  return (
    <form onSubmit={handleSubmit}>
        
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Quntaty </label>
        <input type="number" value={Quntaty} onChange={(e) => setQuntaty(e.target.value)} required/>
      </div>
      <button type="submit">{editMovie ? 'Update' : 'Add'} Medicine</button>
    </form>
  );
}

export default MedicineForm;
