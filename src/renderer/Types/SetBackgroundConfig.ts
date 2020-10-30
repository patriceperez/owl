import { Color } from "sharp"

export interface SetBackgroundConfig {
    mask: string
    color: Color
    threshold?: number
}