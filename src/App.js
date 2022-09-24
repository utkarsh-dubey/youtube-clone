
import { Box } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Video from './Components/Video';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      
      <Box sx={{backgroundColor:"#000"}}>
        <Navbar/>
         <Home/>
      </Box>
      
    </div>
  );
}

export default App;
