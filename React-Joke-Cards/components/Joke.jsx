export default function Joke({ header, content, point }) {
    return (
        <div className="joke-container">
            <h3>{header}</h3>
            <p>{content}</p>
            <span>{point}</span>
        </div>
    );
}