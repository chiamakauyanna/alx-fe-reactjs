import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <div>
         <WelcomeMessage />
         <Header></Header>
         <MainContent></MainContent>
         <Footer></Footer>
         <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
    </>
  )
}

export default App
