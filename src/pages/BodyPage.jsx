import React from 'react';

const BodyPage = ({ match, bodies }) => {
  // Extracting the product ID from the URL parameter
  const bodyId = match.params.id;
  const body = bodies.find((p) => p.id === parseInt(bodyId, 10));


  return (
    <div>
      <h2>{body.name}</h2>
      <p>{body.description}</p>
      <p>Price: ${body.price}</p>
      {/* Add other product details or features */}
    </div>
  );
};

export default BodyPage;
