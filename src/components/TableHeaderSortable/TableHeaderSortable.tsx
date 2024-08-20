import React from "react";
interface TableHeaderSortableProps {
    caption: string;
    isDescending: boolean;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void
};

const TableHeaderSortable = ({ caption, isDescending = false, isActive = false, onClick }: TableHeaderSortableProps) => (
    <th className="table-header-sortable" onClick={onClick}>
        {caption} {isActive && isDescending ? "up" : "down"}
    </th>
);

export default TableHeaderSortable;