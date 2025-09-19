interface CardProps { 
    name: string;
    description: string;
}

const Card = (props : CardProps) => {
    return (
        <div className="flex justify-center items-center">
            <main className="border p-4 m-4 w-1/3 rounded-2xl bg-black/20">
                <h3 className="text-xl font-black">{props.name}</h3>
                <p className="text-white font-bold mt-4">{props.description}</p>
            </main>
        </div>
    );
};

export default Card;