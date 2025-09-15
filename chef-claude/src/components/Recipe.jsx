import Markdown from "react-markdown";

export default function Recipe(props) {
    return (
        <section ref= {props.ref} className="suggested-recipe-container">
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    )
}