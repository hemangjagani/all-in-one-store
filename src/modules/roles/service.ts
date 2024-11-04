import { MedusaService } from "@medusajs/framework/utils"
import Role from "./models/role"

class RolesModuleService extends MedusaService({
  Role,
}){
}

export default RolesModuleService