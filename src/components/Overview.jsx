import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Packages",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Rate (in sqft)",
    dataIndex: "rate",
    key: "rate",
    width: "20%",
    render: (text, record) =>
      record.type === "civil" || record.type === "activity" ? text : "",
  },
  {
    title: "Total",
    dataIndex: "total",
    width: "30%",
    key: "total",
    render: (text, record) =>
      record.type === "civil" || record.type === "activity" ? text : "",
  },
];

const data = [
  {
    key: "civil-1",
    name: "Civil 1",
    type: "civil",
    rate: 567.8,
    total: 2986792,
    children: [
      {
        key: "activity-1-1",
        name: "Activity 1",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-1-1-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-1-1-2",
            name: "Work Item 2",
            type: "workitem",
          },
          {
            key: "workitem-1-1-3",
            name: "Work Item 3",
            type: "workitem",
          },
        ],
      },
      {
        key: "activity-1-2",
        name: "Activity 2",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-1-2-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-1-2-2",
            name: "Work Item 2",
            type: "workitem",
          },
          {
            key: "workitem-1-2-3",
            name: "Work Item 3",
            type: "workitem",
          },
        ],
      },
    ],
  },
  {
    key: "civil-2",
    name: "Civil 2",
    type: "civil",
    rate: 567.8,
    total: 2986792,
    children: [
      {
        key: "activity-2-1",
        name: "Activity 1",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-2-1-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-2-1-2",
            name: "Work Item 2",
            type: "workitem",
          },
          {
            key: "workitem-2-1-3",
            name: "Work Item 3",
            type: "workitem",
          },
        ],
      },
      {
        key: "activity-2-2",
        name: "Activity 2",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-2-2-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-2-2-2",
            name: "Work Item 2",
            type: "workitem",
          },
        ],
      },
    ],
  },
  {
    key: "civil-3",
    name: "Civil 3",
    type: "civil",
    rate: 567.8,
    total: 2986792,
    children: [
      {
        key: "activity-3-1",
        name: "Activity 1",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-3-1-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-3-1-2",
            name: "Work Item 2",
            type: "workitem",
          },
        ],
      },
      {
        key: "activity-3-2",
        name: "Activity 2",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-3-2-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-3-2-2",
            name: "Work Item 2",
            type: "workitem",
          },
        ],
      },
    ],
  },
  {
    key: "civil-4",
    name: "Civil 4",
    type: "civil",
    rate: 567.8,
    total: 2986792,
    children: [
      {
        key: "activity-4-1",
        name: "Activity 1",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-4-1-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-4-1-2",
            name: "Work Item 2",
            type: "workitem",
          },
        ],
      },
      {
        key: "activity-4-2",
        name: "Activity 2",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-4-2-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-4-2-2",
            name: "Work Item 2",
            type: "workitem",
          },
        ],
      },
    ],
  },
  {
    key: "civil-5",
    name: "Civil 5",
    type: "civil",
    rate: 567.8,
    total: 2986792,
    children: [
      {
        key: "activity-5-1",
        name: "Activity 1",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-5-1-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-5-1-2",
            name: "Work Item 2",
            type: "workitem",
          },
        ],
      },
      {
        key: "activity-5-2",
        name: "Activity 2",
        type: "activity",
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "workitem-5-2-1",
            name: "Work Item 1",
            type: "workitem",
          },
          {
            key: "workitem-5-2-2",
            name: "Work Item 2",
            type: "workitem",
          },
        ],
      },
    ],
  },
];

// rowSelection object for row selection handling
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const DataTable = () => {
  return (
    <>
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={data}
        defaultExpandAllRows={false}
      />
    </>
  );
};

export default DataTable;
