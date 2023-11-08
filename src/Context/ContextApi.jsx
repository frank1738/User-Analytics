import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState('dark-mode');
  const [profile, showProfile] = useState(false);
  const [user, setUser] = useState({});
  const toggleMode = () => {
    setMode(mode === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  const toggleProfile = () => {
    showProfile((state) => !state);
  };
  return (
    <stateContext.Provider
      value={{
        mode,
        toggleMode,
        profile,
        toggleProfile,
        user,
        setUser,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(stateContext);
