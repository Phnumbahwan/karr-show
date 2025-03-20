import { CustomButtonProps } from '@/types/CustomButtonProps'
import React from 'react'

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={'button'}
            className={`custom-btn ${containerStyles}`}
        >
            {title}
        </button>
    )
}

export default CustomButton