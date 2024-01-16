import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CustomComponent = ({show,removeItem}) => {
    return (
        <>
        {(
            show.map((item) => (
        <div className='d-flex justify-content-start'>
      <button className="btn btn-danger mt-2" onClick={()=>removeItem(item)}>
        {item}
      <FontAwesomeIcon icon={faTimes} />
    </button>
      </div>
      
     )) 
      )}
      </>
      
    );
  };


export default CustomComponent