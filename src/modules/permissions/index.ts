import PermissionsModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const PERMISSIONS_MODULE = "permissionsModuleService"

export default Module(PERMISSIONS_MODULE, {
  service: PermissionsModuleService,
})