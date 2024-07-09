import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import "./Events.css";
import Hero from "./Hero/hero";

function Events() {
    return (
        <>
            <Header />
            <div id="events">
                <div className="container">
                    <div className="events">
                        <div className="events__button">
                            <button>Добавить мероприятие</button>
                        </div>
                    </div>
                </div>
            </div>
            <Hero />
            <Footer />
        </>
    );
}

export default Events;
