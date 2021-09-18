import { App } from 'vue'
import 'element-plus/lib/theme-chalk/index.css'
import {
  ElAffix,
  ElAlert,
  ElAside,
  ElButton,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'

const components = [
  ElButton,
  ElRadio,
  ElInput,
  ElAside,
  ElAlert,
  ElAffix,
  ElFormItem
]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
