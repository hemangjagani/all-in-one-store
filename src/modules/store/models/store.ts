import { model } from "@medusajs/framework/utils"
import Role from "src/modules/roles/models/role"

const Store = model.define("store", {
  id: model.id().primaryKey(),
  
  roles: model.hasMany(() => Role, {
    mappedBy: "store"
  })
})

export default Store
