export default function Size({ sizeSelected, handleSize }){

    const sizes = [
        { text: '1', value: 1},
        { text: '2', value: 2},
        { text: '3', value: 3},
        { text: '4', value: 4},
        { text: '5', value: 5},
        { text: '6', value: 6}
    ];

    return(
        <>
        <div className="w-full flex justify-end gap-2 items-center">
            <span className="text-sm">Numero de entradas:</span>
            <select name="size"
             value={sizeSelected}
             className="bg-slate-900 rounded-md w-12 h-7 px-1 hover:bg-slate-800 transition-colors"
             onChange={(event) => handleSize(event.target.value)}
            >
                {
                    sizes.map((size) => {
                        return <option className="bg-slate-800" key={size.value} value={size.value}>{size.text}</option>
                    })
                }
            </select>
        </div>
        </>
    )
}