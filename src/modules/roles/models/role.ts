import { model } from "@medusajs/framework/utils"
import Permission from "src/modules/permissions/models/permission"
import Store from "src/modules/store/models/store"
import User from "src/modules/users/models/user"

const Role = model.define("role", {
  id: model.id().primaryKey(),
  name: model.text(),
  store_id: model.text().nullable(),

  permissions: model.manyToMany(() => Permission, {
    pivotTable: "role_permissions",
    joinColumn: { name: "role_id" },
    inverseJoinColumn: { name: "permission_id" },
  }),

  users: model.hasMany(() => User, {
    mappedBy: "teamRole"
  }),

  store: model.belongsTo(() => Store, {
    foreignKey: "store_id",
  })
})
.cascades({
  delete: ["users"]
})

export default Role
