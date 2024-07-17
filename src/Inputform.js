import React, {useState} from 'react';
// import NumericalConverter from './NumericalConverter';

export default function InputForm() {

    const [inputValue, setInputValue] = useState('');
    const [inputBase, setInputBase] = useState('');
    const [outputBase, setOutputBase] = useState('');
    const [outputValue1, setOutputValue] = useState('');
    const [outputValue2, setOutputValue2] = useState('');
    
    const handleChange = (e) => {
        e.preventDefault(); 
        let resultValue = (inputBase*inputValue)/(inputBase*inputValue+ (100-outputBase)*(100-inputValue));
        setOutputValue(resultValue);
        let negative = (outputBase*inputValue)/(outputBase*inputValue + (100-inputBase)*(100-inputValue));
        setOutputValue2(negative);
    };

    return (
        <div>
            <form style={{ display:'flex', flexDirection: 'column', maxWidth: '800px', margin:'auto'}}>
                <label>
                    Prevalence of the disease: 
                    <input 
                        type='number'
                        min='0'
                        max='99'
                        value={inputValue} 
                        onChange={e=> setInputValue(e.target.value)}
                        style={{margin: '8px 0'}}
                    />
                </label>
                <label>
                    Probability of testing positive given having the disease: 
                    <input 
                        type='number'
                        min='0'
                        max='99'
                        value={inputBase} 
                        onChange={e=> setInputBase(e.target.value)}
                        style={{margin: '8px 0'}}
                    />
                </label>
                <label>
                    Probability of testing negative given not having the disease: 
                    <input 
                        type='number'
                        min='0'
                        max='99'
                        value={outputBase} 
                        onChange={e=> setOutputBase(e.target.value)}
                        style={{margin: '8px 0'}}
                    />
                </label>
                <button type="submit" onClick={handleChange}>Convert</button>
            </form>
            <p>
                The probability of having the desease if tested positive is {outputValue1} <br></br>
                The probability of having the desease if tested negative is {outputValue2}
            </p>

        </div>
    )
}