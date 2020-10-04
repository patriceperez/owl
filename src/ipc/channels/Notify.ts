import { IpcChannelInterface } from '../IpcChannelInterface'
import { IpcMainEvent, Notification, NotificationConstructorOptions } from 'electron'

class Notify implements IpcChannelInterface {
    getName(): string { return 'notify' }

    handle(event: IpcMainEvent, options?: NotificationConstructorOptions): void {
        new Notification(options).show()
    }
}

export default new Notify()