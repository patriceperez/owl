import { NotificationConstructorOptions } from "electron"

interface BackBone {
  notify: (data: NotificationConstructorOptions) => Promise<void>
  sharpTest: () => Promise<void>
}

export default (window as any).backbone as BackBone 