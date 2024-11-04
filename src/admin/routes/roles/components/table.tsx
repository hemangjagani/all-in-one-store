import { StatusBadge } from "@medusajs/ui"
import { useState } from "react"
import { Table } from "../../../components/table"

const TableComponent = () => {
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <Table
            columns={[
                {
                    key: "description",
                    label: "Description"
                }, 
                {
                    key: "code",
                    label: "Code"
                },
                {
                    key: "permission",
                    label: "Permission"
                },
                
            ]}
            data={[
                {
                    name: "John",
                    is_enabled: true
                },
                {
                    name: "Jane",
                    is_enabled: false
                }
            ]}
            pageSize={2}
            count={2}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    )
}

export default TableComponent;