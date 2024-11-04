import { MedusaService } from "@medusajs/framework/utils"
import Permission from "./models/permission"

class PermissionsModuleService extends MedusaService({
  Permission,
}){
}

export default PermissionsModuleService