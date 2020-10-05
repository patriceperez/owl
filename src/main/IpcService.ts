import { NotificationConstructorOptions } from "electron"

interface BackBone {
  notify: (data: NotificationConstructorOptions) => void
}

export default (window as any).backbone as BackBone 