import './App.css';
import MailList from './components/app-content/mailList';
import Sidebar from './components/app-content/sidebar';
import Header from './components/header/header';
import {BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom'
import Email from './components/app-content/email';
import SendEmail from './components/app-content/sendEmail';
import {selectComposeMessage} from './features/composeSlice';
import { useSelector } from 'react-redux';
function App() {

  const composeMessageIsOpen=useSelector(selectComposeMessage);

  return (
    <div className="App">
    <Router>
      <Header/>
      <div className="app-content">
          <Sidebar/>
         <Routes>
            <Route path="/" element={<MailList/>}></Route>
            <Route path='email' element={<Email/>}></Route>
         </Routes>
         {composeMessageIsOpen && <SendEmail/>}
        </div>
    </Router>
    </div>
  );
}

export default App;
