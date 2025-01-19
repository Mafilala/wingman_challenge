"use client";
import { icons } from "@/icons/detailIcons";
import data from "../data/data.json";
import {
  Column,
  ColumnDef,
  PaginationState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Image from "next/image";

type Product = {
  product: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
  action: string;
  productImage: string;
};

const defaultData: Product[] = data;

const columnHelper = createColumnHelper<Product>();

export const columns = [
  columnHelper.accessor("product", {
    header: "Product",
    cell: (info) => {
      const row = info.row.original; // Access the original row data
      return (
        <div className="flex items-center gap-4 p-4 py-1 max-w-72">
          <Image
            src={row.productImage}
            alt="Product"
            width={32}
            height={32}
            className="w-5 h-5 md:w-8 md:h-8 rounded-full"
          />
          <span className="text-[#212636] text-xs md:text-[16px] font-normal">
            {row.product}
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => {
      const [d, t] = info.getValue().split(",");
      return (
        <div className="flex flex-col p-4 py-1 min-w-36 ">
          <span className="text-[#212636] text-xs md:text-[16px] font-normal">
            {d}
          </span>
          <span className="text-[#212636] text-[10px] md:text-xs">{t}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("timeSpent", {
    header: "Time Spent",
    cell: (info) => (
      <span className="text-[#212636] text-xs md:text-[16px] font-normal p-4 py-1">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("orderValue", {
    header: "Order Value",
    cell: (info) => {
      const intVal = parseInt(info.getValue());
      return (
        <span className="p-4 py-1 text-[#212636] text-xs md:text-[16px] font-normal">
          {`$${intVal}`}
        </span>
      );
    },
  }),
  columnHelper.accessor("commission", {
    header: "Commission",
    cell: (info) => {
      const intVal = parseInt(info.getValue());
      return (
        <span className="p-4 py-1 text-[#212636] text-xs md:text-[16px] font-bold">
          {`$${intVal}`}
        </span>
      );
    },
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => {
      const LinkIcon = icons.link;
      return (
        <div className="flex items-center gap-3 p-4 py-1">
          <a
            href={info.getValue()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A94A6] hover:underline"
          >
            View Chat
          </a>
          <LinkIcon />
        </div>
      );
    },
  }),
];

const Table = () => {
  const [data, _setData] = useState(() => [...defaultData]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="rounded rounded-t-lg border border-[#DCDFE4]  w-full overflow-x-auto">
      <table className="border-collaps w-full min-w-[768px]">
        <thead className="border-b bg-[#F9FAFB] border-[#DCDFE4]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-sm leading-[23px] text-[#667085] text-left font-normal p-4"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="self-center flex w-full justify-center relative">
        <div className="flex items-center gap-2 sticky left-1/2">
          <button
            className="border rounded px-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded px-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="border rounded px-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded px-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <span className="flex items-center gap-1">
            <div className="text-[10px]">Page</div>
            <strong className="text-[10px]">
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>

          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="text-[10px]"
          >
            {[5, 10, 15, 20, 25].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                <span className="text-[10px]">Show {pageSize}</span>
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Table;
