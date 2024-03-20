import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServiceById } from '../../redux/slice/serviceDetailSlice'

const Highlight = ({ serviceId }) => {
  const dispatch = useDispatch()
  const detail = useSelector(state => state.serviceDetail.data)

  useEffect(() => {
    dispatch(fetchServiceById(serviceId))
  }, [serviceId])

  return (
    <div className='flex w-full gap-4'>
        <div className='w-1/3'>
            <img src={detail.image} className='w-full h-auto'/>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-6xl'>{detail.title}</h1>
            <p>{detail.description}</p>
        </div>
    </div>
  )
}

export default Highlight