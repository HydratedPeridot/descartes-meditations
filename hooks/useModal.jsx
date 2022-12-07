import React, { useState } from 'react';

const useModal = (initialOpen) => {
    const [open, setOpen] = useState(initialOpen)

    const show = () => {
        setOpen(true)
    }

    const hide = () => {
        setOpen(false)
    }

    const toggle = () => {
        setOpen(current => !current)
    }

    return { open, show, hide, toggle }
}

export default useModal