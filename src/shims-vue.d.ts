/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }


declare module 'vite-plugin-checker' {
    import type {DefineComponent} from 'vue'
    const component : DefineComponent <{}, {}, any>
    export default component
  }

  // declare module 'firebase' {
  //   import type {DefineComponent} from 'vue'
  //   const component : DefineComponent <{}, {}, any>
  //   export default component
  // }