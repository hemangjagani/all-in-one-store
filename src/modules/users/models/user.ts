import { model } from "@medusajs/framework/utils"
import Role from "src/modules/roles/models/role"

const User = model.define("user", {
  id: model.id().primaryKey(),
  role_id: model.text().nullable(),
  
  teamRole: model.belongsTo(() => Role, {
    foreignKey: "role_id",
    nullable: true
  })
})

export default User
