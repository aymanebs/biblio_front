import { Checkbox, Table } from "flowbite-react";
import { ActionButtons } from "./ActionButtons";

const TableComponent = ({ headers, items = [], onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          {headers.map((header) => (
            <Table.HeadCell key={header}>{header}</Table.HeadCell>
          ))}
          <Table.HeadCell>
            <span>Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              {headers.map((header) => (
                <Table.Cell key={header}>{item[header]}</Table.Cell>
              ))}
              <Table.Cell>
                <ActionButtons
                  onEdit={() => onEdit(item)}
                  onDelete={() => onDelete(item.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};


export default TableComponent;
