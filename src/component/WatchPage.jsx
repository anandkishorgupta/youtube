import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'

const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"))
    useEffect(() => {

        dispatch(closeMenu())
    }, [])

    return (
        <div className='ml-12 mt-7'>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=I8E3Yg6ZVeLaKxUX`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                className='rounded-2xl w-[964px] h-[542px]'
            ></iframe>
        </div>
    )
}

export default WatchPage