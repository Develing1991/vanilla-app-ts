import { Store } from "../core/core";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'Develing / LeeSuhan',
  email: 'dddd@naver.com',
  blog: 'https://velog.io/@completed1991',
  github: 'https://github.com/Develing1991',
  repository: 'https://github.com/Develing1991/vanilla-app'
})