import { IpcChannelInterface } from '../IpcChannelInterface'
import { IpcMainInvokeEvent } from 'electron'
import sharp from 'sharp'

class SharpTest implements IpcChannelInterface {
    getName(): string { return 'sharpTest' }

    async handle(event: IpcMainInvokeEvent, options?: any): Promise<any> {
        const mask = await sharp("static/images/01.jpg").toColorspace("lch")
            .composite([{ input: "static/images/mask.jpg", blend: "difference" }])
            // .normalize().sharpen()
            //.toFile(`static/images/masks/mask.jpg`)

        mask.toBuffer().then(async buf => {
            const maskBuf = await sharp(buf).threshold(10).toBuffer()
            sharp("static/images/01.jpg").png().joinChannel(maskBuf).flatten().toFile("static/images/test.jpg")
        })
    }
}

export default new SharpTest()