import React from 'react';

function MyContainer(props) {
  return (
    <div className="my-container">
      {props.children}
    </div>
  );
}

export default MyContainer;