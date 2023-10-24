import React, { useState } from 'react';

import './css/LogInForm.css';

const LogInForm = () => {
    const [name, setName] = useState('');
    const [agreed, setAgreed] = useState(false);
    
    const TermsAgreed = () => {
        if(agreed){
            return <h2>You have agreed to the terms</h2>
        } else {
            return <h2>You need to agree to the terms</h2>
        }
    }

    return (
        <>
            <div className='login-form-wrapper'>
                <TermsAgreed />

                <label>
                    Name: 
                    <input value={name} onChange={e => setName(e.target.value)} />
                </label>
                <hr />
                <label>
                    Do you agree with the terms: 
                    <input
                        type="checkbox"
                        name="myCheckbox"
                        onChange={e => setAgreed(e.target.checked)}
                        onClick={e => setAgreed(e.target.checked)}
                        value={agreed}
                        defaultChecked={false}
                        />
                </label>
                <hr />
                <p>
                    Radio buttons:
                    <label>
                        <input type="radio" name="myRadio" value="option1" />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option2" />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option3" />
                        Option 3
                    </label>
                </p>
            </div>
        </>
    );
}

export default LogInForm;