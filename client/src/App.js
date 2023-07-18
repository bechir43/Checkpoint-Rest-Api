import './App.css';
import { Route, Routes } from 'react-router';
import ContactList from './components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContact } from './redux/reducers/actions/contactAction';
import AddContact from './components/AddContact';
import NavBar from './components/NavBar';

function App() {

  const contacts = useSelector(state => state.contactReducers)
  const dispatch =useDispatch()

  console.log(contacts)

  useEffect( () =>{
    dispatch(getContact())
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      <Routes>
        <Route path="/" element={<ContactList  contacts={contacts}/>}></Route>
        <Route path="/add" element={<AddContact/>}></Route>

      </Routes>
      </header>
    </div>
  );
}

export default App;
