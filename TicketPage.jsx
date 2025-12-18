import Navbar from '../Components/Navbar'
import Main from '../Components/Main.jsx'
import ButtonBar from '../Components/ButtomBar.jsx'
import Footer from '../Components/Footer.jsx'
import Ticket from './TicketBooking.jsx'

function TicketBookFunction() {
  return (
    < >
      <Navbar />
      <Main />
      <ButtonBar />
      <Ticket />
      <Footer />
    </>
  );
}

export default TicketBookFunction;