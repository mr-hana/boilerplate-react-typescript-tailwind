import React from 'react';

export const Section: React.FC = ({ children }) => {
  return (
    <div className="col-start-2 col-end-3">
      {children}
    </div>
  )
}