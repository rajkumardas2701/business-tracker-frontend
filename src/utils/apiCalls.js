import axios from 'axios';

const authCall = async (user) => {
  try {
    const result = await axios.post('http://127.0.0.1:3000/auth/login', { user }, { withCredentials: true });
    console.log(result.data.message);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export default authCall;
