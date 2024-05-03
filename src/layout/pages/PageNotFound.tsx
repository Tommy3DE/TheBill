import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from "../Navbar"; 
import error from '../../assets/error404.png'

const PageNotFound: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <img src={error} alt='404' className='w-1/3'/>
        <p className="text-xl text-gray-600 mt-4">Przykro nam, nie możemy znaleźć strony, której szukasz.</p>
        <Link to="/" className="mt-6 px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
          Powrót na stronę główną
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
