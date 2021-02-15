export { default as FooterComponent } from '../..\\components\\FooterComponent.vue'
export { default as HeaderComponent } from '../..\\components\\HeaderComponent.vue'
export { default as LoginComponent } from '../..\\components\\LoginComponent.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyFooterComponent = import('../..\\components\\FooterComponent.vue' /* webpackChunkName: "components/footer-component" */).then(c => c.default || c)
export const LazyHeaderComponent = import('../..\\components\\HeaderComponent.vue' /* webpackChunkName: "components/header-component" */).then(c => c.default || c)
export const LazyLoginComponent = import('../..\\components\\LoginComponent.vue' /* webpackChunkName: "components/login-component" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
