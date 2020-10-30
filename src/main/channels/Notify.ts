import { IpcChannelInterface } from '../IpcChannelInterface'
import { IpcMainInvokeEvent, Notification, NotificationConstructorOptions } from 'electron'

class Notify implements IpcChannelInterface {
    getName(): string { return 'notify' }

    async handle(event: IpcMainInvokeEvent, options?: NotificationConstructorOptions): Promise<any> {
        new Notification(options).show()
    }
}

export default new Notify()