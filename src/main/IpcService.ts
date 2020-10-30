interface IpcService {
  call(action: String, data?: any): Promise<any>
}

export default (window as any).backbone as IpcService 