export const Link = (props: any) => {
    const url = "https://" + props.url;
    return (
        <div className="mb-8">
            <div className="text-text-darker text-lg mb-2 leading-6">
                <h1 className="block sm:inline-block mr-4">
                    {props.title}
                </h1>
                <a href={url} className="text-text-darkest transition-all ease-in-out duration-300 hover:text-pink-accent">
                    {props.url}
                </a>
            </div>
            <div className="text-text-darker text-sm">
                <p>{props.description}</p>
            </div>
        </div>
    )
}