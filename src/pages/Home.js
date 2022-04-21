import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CottageIcon from '@mui/icons-material/Cottage';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ElderlyIcon from '@mui/icons-material/Elderly';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FlightIcon from '@mui/icons-material/Flight';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

 function FloatingActionButtonExtendedSize() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab variant="extended" color="primary" aria-label="add">
          <CottageIcon sx={{ mr: 1 }} />
          House
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <DriveEtaIcon sx={{ mr: 1 }} />
          New Car
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <FlightIcon sx={{ mr: 1 }} />
          Vacation
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <LaptopChromebookIcon sx={{ mr: 1 }} />
          Education
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <LocalHospitalIcon sx={{ mr: 1 }} />
          Emergency
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <ElderlyIcon sx={{ mr: 1 }} />
          Retirement
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          <EmojiObjectsIcon sx={{ mr: 1 }} />
          Custom
        </Fab>
      </Box>
    );
  }
function Home(){
    const navigate = useNavigate();
    const logMeOut = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
    }
    useEffect(()=>{
        // axios.get("http://localhost:8080/me")
    },[])
    return(<div>
        <h2>Welcome, User!</h2>
        <h4>What are your current saving goals?</h4>
        <FloatingActionButtonExtendedSize></FloatingActionButtonExtendedSize>
        <button onClick={logMeOut}>Log Out</button>
    </div>);
}
export default Home;