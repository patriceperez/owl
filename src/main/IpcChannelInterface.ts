import { IpcMainEvent } from 'electron'

export interface IpcChannelInterface {
    getName(): string
    handle(event: IpcMainEvent, data: any): Promise<void>
}