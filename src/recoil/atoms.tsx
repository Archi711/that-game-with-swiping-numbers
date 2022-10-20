import { atom } from "recoil";

type UserState = {
  name: string
  highscores: number[]
}

export const userState = atom<UserState>({
  key: "user",
  default: {
    name: "Stranger",
    highscores: []
  }
})