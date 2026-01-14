import { useEffect, useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0)
    let [data, setData] = useState(100)
    /*
    useState - renders itself when state changes/value updates
    let [variable, function] = useState(initial value)

    variable - name of the state variable
    function - function to update state variable
    initial value - starting value of the state variable
        0 - 9 : Numbers
        '' or "" : String
        true or false : Boolean
        [] : array
        {} : object
    
    useEffect - shows some side effects when state changes
        useEffect(function, dependency array)
        
        function - side effect to be shown
        dependency array - states that trigger the function
            [] - side effect is shown on page load
            [a,b,c] - side effect is shown on page load, and when a or b or c updates
            null - if no dependency array is provided, side effect is shown on page load and when any of the state variable updates
    
        */

    useEffect(() => {
        alert("Value updated")
    }, [])

    const addCount = () => {
        setCount(++count)
        console.log(count)
    }
    const decreaseCount = () => {
        setCount(--count)
    }
    const resetCount = () => {
        setCount(0)
    }

    const increase = () => {
        setData(data + 10)
    }
    const decrease = () => {
        setData(data - 10)
    }
    const reset = () => {
        setData(100)
    }
    return (<div className="text-center">
        <h1 className="text-center text-3xl mt-5">Count: {count}</h1>
        {
            count < 10 &&
            <button onClick={addCount} className="btn btn-warning">Increase Count</button>
        }
        {
            count > 0 ?
                <button className="btn btn-error" onClick={decreaseCount}>Decrease Count</button>
                :
                <button className="btn btn-error" disabled>Decrease Count</button>
        }
        <button className="btn btn-info" onClick={resetCount}>Reset Count</button>

        <h1 className="text-center text-3xl mt-5">Data: {data}</h1>
        <button className="btn btn-success" onClick={increase}>INCREASE DATA</button>
        <button className="btn btn-error" onClick={decrease}>DECREASE DATA</button>
        <button className="btn btn-primary" onClick={reset}>RESET DATA</button>
    </div>)
}

export default Counter