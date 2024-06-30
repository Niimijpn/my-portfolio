// table.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Item {
  title: string;
  image: string;
}

interface TableProps {
  items: Item[];
}

const CustomTable: React.FC<TableProps> = ({ items }) => {
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <Table className="">
      <TableBody>
        {items.map((item) =>
          item.title.length > 0 ? (
            <TableRow key={item.title}>
              <TableCell className="">
                <Image
                  alt="nippou"
                  height={100}
                  src={`${item.image}`}
                  width={100}
                />
              </TableCell>
              <TableCell>
                <Link
                  className="p-10 pl-0"
                  href={`https://scrapbox.io/toB-no-nikki/${item.title}`}
                >
                  {item.title}
                </Link>
              </TableCell>
            </TableRow>
          ) : null
        )}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
