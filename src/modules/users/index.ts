import UserModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const USER_MODULE = "userModuleService"

export default Module(USER_MODULE, {
  service: UserModuleService,
})