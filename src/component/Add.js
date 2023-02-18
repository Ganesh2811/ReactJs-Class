import { useRef } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";

function Add(){
    const nameRef = useRef();
    const ageRef = useRef();
    
    const submithandler = (ev)=>{
        ev.preventDefault();
        console.log('test11');
        var userTextboxData = {
            name: nameRef.current.value,
            age: ageRef.current.value
        }
        console.log(userTextboxData);

        const ref = collection(firestore, "users") // Firebase creates this automatically

        try 
        {
            var ans_insert = addDoc(ref, userTextboxData);
            // console.log("ans_insert");
            console.log(ans_insert);
        } 
        catch(err) 
        {
            console.log("error in firebase");
            console.log(err)
        }
    }
    
    return(
    <div className="App">
      <form onSubmit={submithandler}>
        <input type= "text"  placeholder="Enter your name" ref={nameRef} />
        <input type= "text" placeholder="Enter your age" ref={ageRef} />

        <button type = "submit">Save</button>
        </form>
    </div>
    );
}

export default Add;