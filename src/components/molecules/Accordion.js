import AccordionData from "../../assets/Accordion.json";
import AccordionSingle from "../atoms/AccordionSingle";
import {useState} from "react";
const Accordion = () => {
    const [questions, setQuestions] = useState(AccordionData)
    const toggle = index => {
        setQuestions(questions.map ((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))}
    return (
        <div className="accordion__container">
            {questions.map((faq, i) =>
                <AccordionSingle faq={faq} index={i} toggle={toggle}/>
            )}
        </div>
    )
}

export default Accordion