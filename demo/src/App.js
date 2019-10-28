import React from 'react';
import './App.css';
import InputNumber from "./InputNumber";

function App(){
    const [value,setValue] = React.useState('aaa');
    return (
        <div>
            <InputNumber size='large'
                         max={10}
                         value={value}
                         onChange={e=>{
                            setValue(e.target.value)
                        }}
            />
        </div>
    )
}

export default App;





















