import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
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
            <div className="main-header-wrapper slideDown">
                <div className="main-header-icon">
                    <HiOutlineClipboardList />
                </div>
                <div className="main-header-text">
                    {INVENTORY}
                </div>
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
            <div className="table-wrapper">
                {gridOptions && (
                    <div 
                        className="ag-theme-custom-react table"
                        style={{
                          height: '100%',
                          width: '100%'
                        }}
                    >
                        <AgGridReact
                            gridOptions={gridOptions}
                            onGridReady={onGridReady}
                        />
                    </div>
                    
                )}
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