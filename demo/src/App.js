import React from 'react';
import './App.css';
import InputNumber from "./InputNumber";

function App(){
    const [value,setValue] = React.useState('aaa');
    return (
        <div>
            <InputNumber size='large'
                         min={0}
                         value={value}
                         onChange={val=>{
                            setValue(val)
                        }}
            />
        </div>
    )
}

export default App;





















