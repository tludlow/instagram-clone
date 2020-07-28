import { useState } from 'react'

export default function RegisterModal() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(!open)}>Open Modal</button>
            {open && 
            .}
        </>
    )
}
