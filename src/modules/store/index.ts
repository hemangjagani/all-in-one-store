import StoreModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const STORE_MODULE = "storeModuleService"

export default Module(STORE_MODULE, {
  service: StoreModuleService,
})