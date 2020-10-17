import React from 'react';

export const Button: React.FC = ({ children }) => {
  return (
    <button className="flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-white bg-secondary-dark hover:bg-secondary-light focus:outline-none focus:border-seconday-light focus:shadow-outline-indigo active:bg-secondary-light transition duration-150 ease-in-out">
      {children}
    </button>
  )
}