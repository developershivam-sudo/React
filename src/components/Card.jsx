import React from 'react';

const Card = (props) => {
    
  return (
    
    <div className='bg-white text-black font-semibold inline-block p-6 text-center rounded'>
        <img className='ml-8 mr-8 h-32 w-32 rounded-full mb-3' src="example.jpg" alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.name} {props.surname} </h1>
        <h2>{props.city} </h2>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>

    </div>

    
  );
};

export default Card;