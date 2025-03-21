import { MouseEventHandler, ReactEventHandler } from "react"

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick: MouseEventHandler<HTMLButtonElement>
}