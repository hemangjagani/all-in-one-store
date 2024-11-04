import { MedusaService } from "@medusajs/framework/utils"
import Store from "./models/store"

class StoreModuleService extends MedusaService({
  Store,
}){
}

export default StoreModuleService