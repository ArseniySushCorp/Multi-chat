import { action, task } from "nanostores"

import { LoginUserDto, UserReplyType } from "@multi-chat/backend-schemas"
import { authToken, HttpService } from "@multi-chat/frontend/api"

import { userMap } from "./index"
import { isLoggedInAtom } from "../Auth"

export const login = action(userMap, "login", (store, params: LoginUserDto) => {
  task(async () => {
    const { data } = await HttpService.post<UserReplyType>("/users/login", params)

    store.set(data.user)
    isLoggedInAtom.set(true)
    authToken.set(data.user.token)
  })
})
