import React, { useEffect, useState } from 'react';

const useModalTransition = (open, onClose, transitionDuration) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (open) {
            setVisible(true)
        }
    }, [open])

    const handleTransitionEnd = () => {
        if (!open) {
            setVisible(false)
        }
    }

    const handleClose = (event) => {
        event.preventDefault()
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    const overlayStyle = {
        visibility: visible? 'visible' : 'hidden',
        backgroundColor: open? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
        transition: `backgroundColor ${transitionDuration}ms cubic-bezier(0.23, 1, 0.320, 1)`,
    }

    return { visible, overlayStyle, handleClose, handleTransitionEnd }
}

export default useModalTransition;