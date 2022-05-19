import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import CreditCardForm from "./moviePayment/components/CreditCardForm";

function Home() {
    return(
        <BrowserRouter>
        <CreditCardForm />
        </BrowserRouter>
        );

}
export default Home;