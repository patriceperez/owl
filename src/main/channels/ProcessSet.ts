import { IpcChannelInterface } from '../IpcChannelInterface'
import { IpcMainInvokeEvent } from 'electron'
import { SetConfig } from '../../renderer/Types/SetConfig'
import { all as promiseAll, map as promiseMap } from 'bluebird'
import sharp from 'sharp'
import glob from 'glob'
import path from 'path'

class ProcessSet implements IpcChannelInterface {
    getName(): string { return 'processSet' }

    async handle(event: IpcMainInvokeEvent, options?: SetConfig): Promise<any> {
        if (options) {
            const files = glob.sync('*.jpg', { cwd: options.src, nocase: true, nodir: true })
                .filter(file => file.toLowerCase() !== options.background.mask.toLowerCase())

            const mask = await sharp(path.normalize(`${options.src}/${options.background.mask}`)).toBuffer()

            promiseMap(files, async image => {
                const imgMsk = await sharp(path.join(options.src, image))
                    .composite([{ input: mask, blend: "difference" }]).toBuffer()
                const refinedMask = await sharp(imgMsk)
                    .normalize()
                    .sharpen()
                    .threshold(options.background.threshold)
                    .toBuffer()

                const imgWithMask = await sharp(path.join(options.src, image))
                    .png()
                    .joinChannel(refinedMask).toBuffer()

                return sharp(imgWithMask)
                    .flatten({ background: options.background.color })
                    .toFormat('jpg')
                    .toFile(path.join(options.dest, image))
            }, { concurrency: 3 }).catch(err => console.error)
        }
    }
}

export default new ProcessSet()