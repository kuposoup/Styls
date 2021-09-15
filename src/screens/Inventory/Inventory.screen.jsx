import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { FiChevronDown } from "react-icons/fi";
import { Dropdown } from '../../components/Dropdown/Dropdown.component';
import { 
    getInventoryGridConfig,
    inventoryDropdownOptions, 
} from './InventoryTableConfig';
import './Inventory.styles.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { INVENTORY } from '../../constants/constants';

export const Inventory = () => {
    /* -------------- State -------------- */
    const [gridApi, setGridApi] = useState([]);

    /* -------------- onReady -------------- */
    const onGridReady = (params) => {
        setGridApi(params.api);
    }

    /* -------------- CRUD functions -------------- */
    const editItems = () => {
        console.log(gridApi.getSelectedRows())
    }
    const addItems = () => {
        console.log(gridApi.getSelectedRows())
    }
    const deleteItems = () => {
        console.log(gridApi.getSelectedRows())
    }

    /* --------------  Render functions -------------- */
    const renderHeader = () => (
        <div className="inventory-header-wrapper">
            <div className="inventory-header-text slideDown">
                {INVENTORY}
            </div>
            <div className="inventory-btn-wrapper">
                <Dropdown
                    mainText="Bulk Options"
                    icon={<FiChevronDown />}
                    inputClassname="inventory-dropdown"
                    inputId="inventory-dropdown"
                    content={inventoryDropdownOptions(editItems, addItems, deleteItems)}
                />
            </div>
        </div>
    );

    const renderTable = () => {
        const gridOptions = getInventoryGridConfig(editItems, deleteItems, gridApi)
        return (
            <div className="inventory-table-wrapper">
                {gridOptions && <AgGridReact
                    className="ag-theme-alpine"
                    gridOptions={gridOptions}
                    onGridReady={onGridReady}
                />}
            </div>
        )
    }

    return (
        <div className="inventory-wrapper">
            {renderHeader()}
            {renderTable()}
        </div>
    )
}