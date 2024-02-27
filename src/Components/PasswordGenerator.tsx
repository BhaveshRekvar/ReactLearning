import { useCallback, useEffect, useRef, useState } from 'react';

export const PasswordGenerator = () => {
    const [isNumberAllow, setIsNNumberAllow] = useState(false);
    const [isSpecialCharacters, setIsSpecialCharacters] = useState(false);
    const [passwordLength, setPasswordLength] = useState(8);
    const [passwordValue, setPasswordValue] = useState("");
    const passwordInputFieldRef = useRef(null);

    const passwordGeneratorCal = useCallback(() => {
        let alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let generatePassword = "";
        isNumberAllow ? alphabet += "0123456789" : "";
        isSpecialCharacters ? alphabet += "`~!@#$%^&*()_-=+{}[]" : "";

        for (let index = 0; index <= passwordLength; index++) {
            const randomValue = Math.floor(Math.random() * alphabet.length + 1);
            generatePassword += alphabet.charAt(randomValue);
        }
        setPasswordValue(generatePassword);
    }, [isNumberAllow, isSpecialCharacters, passwordLength])

    const copyPassword = useCallback(() => {
        passwordInputFieldRef.current?.select();
        // passwordInputFieldRef.current?.setSelectionRange(0, 5);
        window.navigator.clipboard.writeText(passwordValue);
    }, [passwordValue]);

    useEffect(() => {
        passwordGeneratorCal();
    }, [isNumberAllow, isSpecialCharacters, passwordLength])

    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
                <div className='text-4xl text-center text-white p-4 mb-4'>Password Generator</div>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input type='text' value={passwordValue} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordInputFieldRef} />
                    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items=center gap-x-1'>
                        <input type='range' min={6} max={25} value={passwordLength} className='cursor-pointer' onChange={(e) => setPasswordLength(Number(e.target.value))} />
                        <label>Length : {passwordLength}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type='checkbox' defaultChecked={isNumberAllow} onChange={() => setIsNNumberAllow(prev => !prev)} />
                        <label>Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type='checkbox' defaultChecked={isSpecialCharacters} onChange={() => setIsSpecialCharacters(prev => !prev)} />
                        <label>Special Character</label>
                    </div>
                </div>
            </div>
        </>
    )
}
