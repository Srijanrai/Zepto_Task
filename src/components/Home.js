import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomComponent from './CustomComponent';
function Home() {
    const [inputValue, setInputValue] = useState('');
    const [showList, setShowList] = useState(false);
    const [show, setShow] = useState([])
    const [namesArray, updatedarray] = useState([
        'John Doe', 'Jane Doe', 'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'David Clark', 'Emily Davis', 'Frank Johnson', 'Grace White',
        'Henry Miller', 'Ivy Turner', 'Jack Thompson', 'Katherine Lee', 'Liam Harris', 'Mia Taylor', 'Noah Davis', 'Olivia Wilson', 'Penelope Lewis', 'Quinn Foster',
        'Ryan Parker', 'Sophia Adams','Thomas Turner', 'Ursula Taylor', 'Vincent Lee','Wendy Hall','Xander Davis', 'Yasmine Reed', 'Zane Foster', 'Ava Baker', 'Benjamin Turner', 'Chloe Lewis', 'Daniel Thompson', 'Ella Harris', 'Finn Walker', 'Gabriella Parker', 'Harrison Harris', 'Isabella Adams', 'James Turner', 'Kylie Foster','Landon Davis', 'Mila Turner', 'Nathan Parker', 'Oscar Harris', 'Peyton Foster', 'Quentin Turner', 'Rebecca Adams', 'Samuel Parker', 'Taylor Turner', 'Ulysses Harris', 'Victoria Foster', 'William Davis', 'Xander Harris', 'Yasmine Walker', 'Zane Turner',
    ]);

    const handleArray = () => {
        setShowList(!showList);
    };
    const filteredNames = namesArray.filter(name =>
        name.toLowerCase().includes(inputValue.toLowerCase())
    );
    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const handleSet = (index) => {
        setShow([...show, namesArray[index]]);
        const updatedarray1 = [...namesArray];
        updatedarray1.splice(index, 1);
        updatedarray(updatedarray1);

    }
    const displayNames = () => {
        show.map((item, index) => (
            <div>
                <button
                    type="button"
                    className="btn btn-primary btn-lg rounded-pill shadow"
                >{item}
                </button>
            </div>

        ))
    }

    const removeItem = (name) => {
        let item = show.filter((item) => item !== name);
        setShow(item);
        let dummy = namesArray;
        dummy.push(name);
        updatedarray(dummy)
       
    }

    return (
        <div>
            <div className="container mt-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control rounded-0 border-right-0"
                        placeholder="Type something..."
                        onClick={handleArray}
                        onChange={handleChange}
                    />

                </div>
           
            <div className="container mt-3">
                <CustomComponent show={show} removeItem={removeItem} />
            </div>
            <div className="mt-2">
                {(
                    <ul className="list-group mt-2">
                        {filteredNames.map((item, index) => (
                            <div className="d-flex justify-content-center align-items-center vh-5">
                                <li >
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg rounded-pill shadow"
                                        onClick={() => handleSet(index)}
                                    >{item}
                                    </button>
                                </li>
                            </div>

                        ))}
                    </ul>
                )}
            </div>
        </div>
        </div>
    )
}

export default Home