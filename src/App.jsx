import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import AddItemForm from './pages/AddItemForm'
import Inventory from './pages/Inventory'
import RemovedItems from './pages/RemovedItems'
import RemainingItems from './pages/RemainingItems'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/inventory'>Inventory</Link>
          </li>
          <li>
            <Link to='/removedItems'>Removed Items</Link>
          </li>
          <li>
            <Link to='/remainingItems'>Remaining Items</Link>
          </li>
          <li>
            <Link to='/'>Add New Items</Link>
          </li>
        </ul>      
      </nav>    
      <Routes>
        <Route 
          path='/'
          element={<AddItemForm />}/>
        <Route 
          path ='/inventory'
          element={<Inventory />}/>
        <Route 
          path ='/removedItems'
          element={<RemovedItems />}/>
        <Route 
          path ='/remainingItems'
          element={<RemainingItems />}/>
      </Routes>
    </Router>
  )
}

export default App
