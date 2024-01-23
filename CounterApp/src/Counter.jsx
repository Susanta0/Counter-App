const Counter=({countNumber, increment, decrement})=>{
    return(
        <>
        <div className="main">
        <h2>count {countNumber}</h2>
            <button onClick={()=>increment()}>Increment By 1</button>
            <button onClick={()=>decrement()}>Decrement By 1</button>
        </div>
        </>
    )
    }
    export default Counter