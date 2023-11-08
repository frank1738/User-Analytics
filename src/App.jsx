import './App.css';
import { useStateContext } from './Context/ContextApi';
import Home from './components/Home/Home';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { mode, setUser } = useStateContext();

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const sendRequest = await axios.get(import.meta.env.VITE_BASE_URL);

      if (sendRequest.status === 200) {
        setLoading(false);
        setUser(sendRequest.data);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      if (error.response) {
        console.log(error.response.data.message);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Server error:');
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <h1>An Error Occured</h1>}
      {!loading && !error && (
        <div className={`app ${mode}`}>
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
