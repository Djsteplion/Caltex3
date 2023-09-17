import { useState } from 'react';
import  ReactDOM  from 'react-dom/client';

function MyForm(){
    const [name, setName ] = useState('');
    const [currency, setCurrency ] = useState('');

    return(
<form>
    <label>Enter your amount:
        <input 
         type = "number"
         value = {name}
         onChange = {(e) => setName(e.target.value)}
        />
    </label>

    <select id="currency" name="currency" size="1" value={currency} onChange = {(e) => setCurrency(e.target.value)} >
                                            <option value="USD" id="usd">USD</option>
                                            <option value="EURO" id="euro">EURO</option>
                                        </select>
</form> 

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm/>); 