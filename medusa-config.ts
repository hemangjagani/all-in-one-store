import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { PERMISSIONS_MODULE } from 'src/modules/permissions'
import { ROLES_MODULE } from 'src/modules/roles'
import { STORE_MODULE } from 'src/modules/store'
import { USER_MODULE } from 'src/modules/users'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  modules: {
    [USER_MODULE]: {
      resolve: "./modules/users"
    },
   [PERMISSIONS_MODULE]: {
      resolve: "./modules/permissions"
    },
    [STORE_MODULE]: {
      resolve: "./modules/store"
    },
    [ROLES_MODULE]: {
      resolve: "./modules/roles"
    },
    marketplaceModuleService: {
      resolve: "./modules/marketplace"
    }
  }
})
