import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import {Counter} from './components/Counter.jsx'

function App() {
  return (
    <>
      <div>
         <WelcomeMessage />
         <Header />
         <MainContent />
         <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
         <Footer />
         <Counter />
      </div>
    </>
  )
}

export default App
