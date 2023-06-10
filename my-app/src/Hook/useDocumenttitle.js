import {useEffect} from 'react'

function useDocumenttitle(count,i) {
    useEffect(()=>{
        document.title=`COUNT ${count}`
        console.log(`${i}`)
    },[count])
}

export default useDocumenttitle
