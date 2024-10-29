import React, { useState } from 'react';
import { useRouter } from 'next/router'; 


const sampleCars = [
  { id: 1, model: 'Toyota Corolla', rentalDate: '2024-10-15', rentals: 3 },
  { id: 2, model: 'Honda Civic', rentalDate: '2024-11-01', rentals: 1 },
  { id: 3, model: 'Ford Mustang', rentalDate: '2024-09-22', rentals: 2 },
  { id: 4, model: 'Chevrolet Malibu', rentalDate: '2024-10-28', rentals: 4 },
  { id: 5, model: 'Nissan Altima', rentalDate: '2024-11-05', rentals: 2 },
  { id: 6, model: 'BMW 3 Series', rentalDate: '2024-09-30', rentals: 1 },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter(); 
  
 
  const filteredCars = sampleCars.filter(car =>
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <div 
      className="p-8 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/customer.jpg')` }} // تعیین تصویر پس‌زمینه
    >
      <h1 className="text-3xl font-bold mb-6 text-white">Rental Cars</h1>
      
      
      <button 
        onClick={handleBackButtonClick} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 mr-3"
      >
        Back
      </button>

      
      <input 
        type="text"
        placeholder="Search car models..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-md p-2 mb-6 w-full max-w-md"
      />

      
      <div className="bg-black bg-opacity-50 rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full bg-transparent">
          <thead>
            <tr className="text-white">
              <th className="py-2 px-4 border-b">Car Model</th>
              <th className="py-2 px-4 border-b">Rental Date</th>
              <th className="py-2 px-4 border-b">Total Rentals</th>
            </tr>
          </thead>
          <tbody>
            {filteredCars.map((car) => (
              <tr key={car.id} className="text-center text-white">
                <td className="py-2 px-4 border-b">{car.model}</td>
                <td className="py-2 px-4 border-b">{car.rentalDate}</td>
                <td className="py-2 px-4 border-b">{car.rentals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
