import { useState } from 'react'

function useInputHooks(initvalues) {
    const [state, setstate] = useState(initvalues);
    const reset = () => setstate(initvalues);
    const bind = {
        value: state,
        onChange: e => {
            setstate(e.target.value)
        }
    }
    return [bind, reset];
}

export default useInputHooks
