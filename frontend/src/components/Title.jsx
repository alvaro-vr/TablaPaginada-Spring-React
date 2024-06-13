export default function Title({title, urlImage, altImage}) {
    return (
        <>
        <div className="title-table flex gap-5 pb-3 border-b-2">
            <img src={urlImage} alt={altImage} className="w-10"/>
            <h1 className="text-3xl">{title}</h1>
        </div>
        </>
    );
}