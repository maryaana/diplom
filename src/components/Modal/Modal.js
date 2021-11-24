import React, { useEffect, useRef, useState } from 'react';
import reactDOM from 'react-dom';

const Modal = ({ children }) => {
  let el = useRef(null);
  let [root, setRoot] = useState(null);
  useEffect(() => {
    el.current = document.getElementById('modalRoot');
    setRoot(el.current);
  }, []);
  return el.current && reactDOM.createPortal(children, root);
};

export default Modal;
