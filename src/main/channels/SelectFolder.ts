import { IpcChannelInterface } from '../IpcChannelInterface'
import { IpcMainInvokeEvent, dialog } from 'electron'
import { OpenDialogOptions } from 'electron/main'

const defaultOptions: OpenDialogOptions = {
    buttonLabel: 'Select Folder',
    properties: ['openDirectory']
}

class SelectFolder implements IpcChannelInterface {
    getName(): string { return 'selectFolder' }

    async handle(event: IpcMainInvokeEvent, options?: OpenDialogOptions): Promise<any> {
        const result = await dialog.showOpenDialog({ ...defaultOptions, ...options })
        return result.filePaths[0]
    }
}

export default new SelectFolder()