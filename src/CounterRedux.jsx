import { useSelector,useDispatch } from "react-redux";
import { incriment,decriment } from "./counterSlice";

const CounterRedux=()=>{
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()

    return(
        <div>
            <h2>count:{count}</h2>
            <button onClick={()=>dispatch(incriment())}>Incriment</button>
            <button onClick={()=>dispatch(decriment())}>Decriment</button>
        </div>
    )
}
export default CounterRedux;