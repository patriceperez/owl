import { IpcMainInvokeEvent } from 'electron'

export interface IpcChannelInterface {
    getName(): string
    handle(event: IpcMainInvokeEvent, data: any): Promise<any>
}