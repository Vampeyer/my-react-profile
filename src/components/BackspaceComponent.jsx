// useBackspace.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackspace = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace') {
        const activeElement = document.activeElement;
        
        // Don't navigate back if user is typing in an input
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
          event.preventDefault();
          navigate(-1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);
};

// Wrapper component that uses the hook
const BackspaceWrapper = ({ children }) => {
  useBackspace();
  return children;
};

export default useBackspace;
export { BackspaceWrapper };