const AccordionSingle = ({faq, index, toggle}) => {
    return (
        <div className={"accordion " + (faq.open ? `open` : ``)} key={index} onClick={() => toggle(index)}>
            <div className="accordion__question">
                {faq.question}
            </div>
            <div className="accordion__answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default AccordionSingle