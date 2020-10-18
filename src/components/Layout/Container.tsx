import React from 'react';

export const Container: React.FC = ({ children }) => {
  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr min(800px, 100%) 1fr" }}>
      {children}
    </div>
  )
}