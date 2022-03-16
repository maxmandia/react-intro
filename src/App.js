import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xs">
        <header className="App-header">
          <ButtonGroup>
            <Button 
            startIcon={<SaveIcon />}
            size='large'
            variant="contained" 
            color='primary'>
            Hello World
            </Button>
            <Button 
            endIcon={<SaveIcon />}
            size='large'
            variant="contained" 
            color='secondary'>
            Hello World
            </Button>
            <Button 
            endIcon={<SaveIcon />}
            size='large'
            variant="contained" 
            color='secondary'>
            Hello World
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </Container>
      
    </div>
  );
}

export default App;