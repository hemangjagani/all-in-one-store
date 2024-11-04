import { model } from "@medusajs/framework/utils"

const Permission = model.define("permission", {
  id: model.id().primaryKey(),
  name: model.text(),
  metadata: model.json().nullable(),
})

export default Permission
