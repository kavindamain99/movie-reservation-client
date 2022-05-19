import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import CreditCardForm from "./moviePayment/components/CreditCardForm";

function Home() {
    return(
         
        <Routes>
        <CreditCardForm />
        </Routes>
         
        );

}
export default Home;