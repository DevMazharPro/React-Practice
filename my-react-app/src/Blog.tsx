
interface BlogProps {
    heading: string;
    content: string;
}

export function Blog(props : BlogProps) { 
    return (
        <div>
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
        </div>
    )
}