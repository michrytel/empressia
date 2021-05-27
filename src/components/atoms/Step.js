const Step = ({title, text, image, alt}) => {
    return (
        <div className="step">
            <img alt={alt}src={image}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Step