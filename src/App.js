import './styles.css';
import Map from './map';
import Title from './title';
import { Box } from '@mui/material';

export default function App() {
  return (
    <div className='App'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Title />
        <Map />
      </Box>
    </div>
  );
}
