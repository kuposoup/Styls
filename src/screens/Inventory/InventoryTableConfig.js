import React from "react";
import { FaPen, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ActionCellRenderer } from "../../components/CellRenderers/ActionsCellRenderer/ActionsCellRenderer.component";

const INVENTORY_COLUMNS = ['ID', 'Item', 'Manufacturer', "Type","Price", "Count"]

const inventoryList = [
    {ID: 34259374612475, Item: "All Soft™ Conditioner with Argan Oil for Dry Hair", Type:"Shampoo", Manufacturer: "Redken", Size: "10.1oz", Price: 10, Count: 5},
    {ID: 34259374612476, Item: "All Soft™ Conditioner with Argan Oil for Dry Hair", Type:"Shampoo", Manufacturer: "Redken", Size: "16.9oz", Price: 15, Count: 4},
    {ID: 34259374612477, Item: "All Soft™ Conditioner with Argan Oil for Dry Hair", Type:"Shampoo", Manufacturer: "Redken", Size: "1lt", Price: 20, Count: 1},
    {ID: 34259374612465, Item: "All Soft™ Shampoo with Argan Oil for Dry Hair", Type:"Conditioner", Manufacturer: "Redken", Size: "10.1oz", Price: 10, Count: 4},
    {ID: 34259374612466, Item: "All Soft™ Shampoo with Argan Oil for Dry Hair", Type:"Conditioner", Manufacturer: "Redken", Size: "16.9oz", Price: 15, Count: 2},
    {ID: 34259374612467, Item: "All Soft™ Shampoo with Argan Oil for Dry Hair", Type:"Conditioner", Manufacturer: "Redken", Size: "1lt", Price: 20, Count: 5},
    {ID: 34259374613134, Item: "HydraSource Detangling Solution for Dry Hair", Type:"Detangling Solution", Manufacturer: "Biolage", Size: "13.5oz", Price: 20, Count: 5},
    {ID: 34259374613135, Item: "HydraSource Detangling Solution for Dry Hair", Type:"Detangling Solution", Manufacturer: "Biolage", Size: "1lt", Price: 22, Count: 6},
    {ID: 34259374615123, Item: "Color Obsessed Shampoo", Type:"Shampoo", Manufacturer: "Matrix", Size: "1lt", Price: 25, Count: 1},
    {ID: 34259374615124, Item: "Keep Me Vivid Shampoo", Type:"Shampoo", Manufacturer: "Matrix", Size: "10.1oz", Price: 16, Count: 6},
    {ID: 34259374614353, Item: "Miracle Leave-in Plus Keratin", Type:"Leave-in", Manufacturer: "Its A 10", Size: "6.6oz", Price: 16, Count: 4},
    {ID: 34259374614356, Item: "Miracle Leave-in Plus Keratin", Type:"Leave-in", Manufacturer: "Its A 10", Size: "10.1oz", Price: 26, Count: 6},
    {ID: 34259374612475, Item: "All Soft™ Conditioner with Argan Oil for Dry Hair", Type:"Shampoo", Manufacturer: "Redken", Size: "10.1oz", Price: 10, Count: 5},
    {ID: 34259374612476, Item: "All Soft™ Conditioner with Argan Oil for Dry Hair", Type:"Shampoo", Manufacturer: "Redken", Size: "16.9oz", Price: 15, Count: 4},
    {ID: 34259374612477, Item: "All Soft™ Conditioner with Argan Oil for Dry Hair", Type:"Shampoo", Manufacturer: "Redken", Size: "1lt", Price: 20, Count: 1},
    {ID: 34259374612465, Item: "All Soft™ Shampoo with Argan Oil for Dry Hair", Type:"Conditioner", Manufacturer: "Redken", Size: "10.1oz", Price: 10, Count: 4},
    {ID: 34259374612466, Item: "All Soft™ Shampoo with Argan Oil for Dry Hair", Type:"Conditioner", Manufacturer: "Redken", Size: "16.9oz", Price: 15, Count: 2},
    {ID: 34259374612467, Item: "All Soft™ Shampoo with Argan Oil for Dry Hair", Type:"Conditioner", Manufacturer: "Redken", Size: "1lt", Price: 20, Count: 5},
    {ID: 34259374613134, Item: "HydraSource Detangling Solution for Dry Hair", Type:"Detangling Solution", Manufacturer: "Biolage", Size: "13.5oz", Price: 20, Count: 5},
    {ID: 34259374613135, Item: "HydraSource Detangling Solution for Dry Hair", Type:"Detangling Solution", Manufacturer: "Biolage", Size: "1lt", Price: 22, Count: 6},
    {ID: 34259374615123, Item: "Color Obsessed Shampoo", Type:"Shampoo", Manufacturer: "Matrix", Size: "1lt", Price: 25, Count: 1},
    {ID: 34259374615124, Item: "Keep Me Vivid Shampoo", Type:"Shampoo", Manufacturer: "Matrix", Size: "10.1oz", Price: 16, Count: 6},
    {ID: 34259374614353, Item: "Miracle Leave-in Plus Keratin", Type:"Leave-in", Manufacturer: "Its A 10", Size: "6.6oz", Price: 16, Count: 4},
    {ID: 34259374614356, Item: "Miracle Leave-in Plus Keratin", Type:"Leave-in", Manufacturer: "Its A 10", Size: "10.1oz", Price: 26, Count: 6},
];


export const inventoryDropdownOptions = (edit, add, del) => {
    return [
      {
          id: 'edit-inventory',
          text: 'Edit Items',
          icon: <FaPen />,
          onClick: edit
      },
      {
          id: 'add-inventory',
          text: 'Add Items',
          icon: <FaPlus />,
          onClick: add
      },
      {
          id: 'delete-inventory',
          text: 'Delete Items',
          icon: <FaTrashAlt />,
          onClick: del
      },
    ]
}

export const getInventoryGridConfig = (edit, del, gridApi) => {
  const standardColumnDefs = INVENTORY_COLUMNS.map((columnName) => ({
    colId: columnName,
    headerName: columnName,
    field: columnName,
    headerClass: 'table-column-heading',
    cellClass: 'table-row-data',
    sortable: true,
    unSortIcon: true,
  }));

  const checkboxColumnDefs = [{
    colId: 'column-menu-checkbox',
    headerClass: 'table-column-heading',
    sortable: false,
    unSortIcon: false,
    checkboxSelection: true,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    minWidth: 60,
    maxWidth: 60,
    suppressMovable: true,
    pinned: 'left',
    hide: false,
  }];

  const actionsColumnDefs = [{
    colId: 'column-menu-actions',
    headerClass: 'table-column-heading',
    headerName: "Actions",
    sortable: false,
    unSortIcon: false,
    cellRenderer: 'ActionCellRenderer',
    cellRendererParams: {
      content: inventoryDropdownOptions(edit, null, del),
      api: gridApi,
    },
    suppressMovable: true,
    hide: false,
  }]
  
  return {
    rowData: Object.values(inventoryList),
    rowSelection: 'multiple',
    pagination: true,
    paginationPageSize: 50,
    columnDefs: [...checkboxColumnDefs, ...standardColumnDefs, ...actionsColumnDefs],
    rowHeight: 45,
    suppressRowClickSelection: true,
    suppressCellSelection: true,
    defaultColDef: {
      sortingOrder: ['asc', 'desc'],
      resizable: true,
      minWidth: 80,
      flex: 1,
    },
    frameworkComponents: {
      ActionCellRenderer
    },
  };
};
