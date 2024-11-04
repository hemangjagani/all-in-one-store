import { defineRouteConfig } from "@medusajs/admin-sdk"
import { UserGroup } from "@medusajs/icons"
import { Container } from "@medusajs/ui"
import { Header } from "../../components/header"
import TableComponent from "./components/table"

const RolesPage = () => {
    return (
        <Container className="divide-y p-0">
            <Header
                title="Roles"
                subtitle="Manage roles"
                actions={[
                    {
                        type: "button",
                        props: {
                            children: "Create New Role",
                            variant: "secondary",
                            onClick: () => {
                                alert("You clicked the Create action!")
                            }
                        }
                    }
                ]}
            />
            <TableComponent/>
        </Container>
    )
}

export const config = defineRouteConfig({
    label: "Roles",
    icon: UserGroup,
})

export default RolesPage