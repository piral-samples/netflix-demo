import * as React from 'react'
import { useLocation } from 'react-router-dom';

/**
 * Hook that executes a function when clicked outside the provided ref or
 * navigating away
 */
const useDismiss = (onClickOutside: Function, ref: React.MutableRefObject<any>) => {

    //Clicking outside the element
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside()
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickOutside]);


    //Navigating away
    React.useEffect(() => onClickOutside(), [useLocation()]);
}

export default useDismiss;