import RolesModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const ROLES_MODULE = "rolesModuleService"

export default Module(ROLES_MODULE, {
  service: RolesModuleService,
})