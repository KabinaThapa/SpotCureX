import './App.css'



import Landingpage from './pages/landingpage'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
   
     
     
    
<BrowserRouter>

     
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        
      
      </Routes>
   
    </BrowserRouter>
        
     
        
         
       
        
       



     

  
  )
}

export default App
