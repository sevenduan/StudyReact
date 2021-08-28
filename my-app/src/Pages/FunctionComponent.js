//rfch
import React, {useState, useEffect} from 'react';

export default function FunctionComponent(props) {
    //useState
    const [date, setstate] = useState(new Date());
    
    // = componentDidMount, ComponentDidUpdate, componentWillUnmount
    useEffect(()=>{
        console.log('use effect'); //sy-log
        const timer = setInterval(() => {
            setstate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    },[])

    return (
        <div>
            <h3>FunctionComponent</h3>
            <p>Time: {date.toLocaleTimeString()}</p>
        </div>
    );
} 