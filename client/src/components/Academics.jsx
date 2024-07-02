import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Academics = () => {
  useEffect(() => {
    window.location.href = 'https://iitmandi.ac.in/courses.php';
  }, []);

  return null;
};

//export default Acadmics;
