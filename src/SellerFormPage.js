import React, { useState } from 'react';  

function SellerFormPage() {  
  const [formData, setFormData] = useState({  
    firstName: '',  
    lastName: '',  
    gmail: '',  
    age: ''  
  });  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });  
  };  

  const handleSubmit = () => {  
    if (!formData.firstName || !formData.lastName || !formData.gmail || !formData.age) {  
      alert('Please fill in all fields.');  
      return;  
    }  
    alert('Form submitted');  
  };  

  return (  
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f7f9', padding: '20px' }}>  
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Fill in the Form Below to Become a Seller</h2>  
      <form style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px', 
        backgroundColor: 'white', 
        padding: '85px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
        width: '700px' 
      }}>  
        <label style={{ color: '#555', fontWeight: 'bold' }}>  
          First Name  
          <input  
            type="text"  
            name="firstName"  
            value={formData.firstName}  
            onChange={handleChange}  
            required  
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}  
          />  
        </label>  
        <label style={{ color: '#555', fontWeight: 'bold' }}>  
          Last Name  
          <input  
            type="text"  
            name="lastName"  
            value={formData.lastName}  
            onChange={handleChange}  
            required  
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}  
          />  
        </label>  
        <label style={{ color: '#555', fontWeight: 'bold' }}>  
          Gmail  
          <input  
            type="email"  
            name="gmail"  
            value={formData.gmail}  
            onChange={handleChange}  
            required  
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}  
          />  
        </label>  
        <label style={{ color: '#555', fontWeight: 'bold' }}>  
          Age  
          <input  
            type="number"  
            name="age"  
            value={formData.age}  
            onChange={handleChange}  
            required  
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}  
          />  
        </label>  
        <button  
          type="button"  
          onClick={handleSubmit}  
          style={{  
            padding: '10px 15px',  
            borderRadius: '5px',  
            border: 'none',  
            backgroundColor: '#4CAF50',  
            color: 'white',  
            fontWeight: 'bold',  
            cursor: 'pointer',  
            transition: 'background-color 0.3s'  
          }}  
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}  
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}  
        >  
          Submit  
        </button>  
      </form>  
    </div>  
  );  
}  

export default SellerFormPage;
