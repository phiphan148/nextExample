'use client'

import {validateCacheFourRoute} from "@/app/fetchServer";

export default function ReloadComment() {

    function clickHandler() {
        validateCacheFourRoute('/blog')
    }

    return (
        <div>
            <button onClick={clickHandler}>Reload comments</button>
        </div>
    )
}
