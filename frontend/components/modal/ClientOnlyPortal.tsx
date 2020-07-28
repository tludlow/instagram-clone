import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ClientOnlyPortalType = {
    selector: string,
}

const ClientOnlyPortal: React.FC<ClientOnlyPortalType> = ({ selector, children }) => {
    //TODO: Using type any here because idk what to use here for this ref the types are weird
    const modalContainerRef: any = useRef()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        modalContainerRef.current = document.querySelector(selector)
        setMounted(true)
    }, [selector])

    return mounted ? createPortal(children, modalContainerRef.current) : null
}

export default ClientOnlyPortal
