import { App } from 'vue'

import registerELement from './register-elementplus'
export function registerApp(app: App): void {
  registerELement(app)
}
