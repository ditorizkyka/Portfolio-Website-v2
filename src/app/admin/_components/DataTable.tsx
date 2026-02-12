'use client';

import { Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

export interface Column<T> {
    header: string;
    accessorKey: keyof T | ((row: T) => React.ReactNode);
    className?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    onDelete: (id: string | number) => void;
    editUrl: (id: string | number) => string;
}

export default function DataTable<T extends { id: string | number }>({
    data,
    columns,
    onDelete,
    editUrl,
}: DataTableProps<T>) {
    return (
        <div className="overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] shadow-xl">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#1f1f1f]">
                    <thead className="bg-[#141414]">
                        <tr>
                            {columns.map((col, idx) => (
                                <th
                                    key={idx}
                                    scope="col"
                                    className={`px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-[#888888] ${col.className || ''}`}
                                >
                                    {col.header}
                                </th>
                            ))}
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1f1f1f] bg-[#0a0a0a]">
                        {data.map((row) => (
                            <tr key={String(row.id)} className="transition-colors hover:bg-[#1f1f1f]/50">
                                {columns.map((col, idx) => (
                                    <td
                                        key={idx}
                                        className="whitespace-nowrap px-6 py-4 text-sm text-[#CCCCCC]"
                                    >
                                        {typeof col.accessorKey === 'function'
                                            ? col.accessorKey(row)
                                            : (row[col.accessorKey] as React.ReactNode)}
                                    </td>
                                ))}
                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                    <div className="flex justify-end gap-2">
                                        <Link
                                            href={editUrl(row.id)}
                                            className="rounded-lg p-2 text-blue-500 hover:bg-blue-500/10 transition-colors"
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Link>
                                        <button
                                            onClick={() => onDelete(row.id)}
                                            className="rounded-lg p-2 text-red-500 hover:bg-red-500/10 transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="px-6 py-12 text-center text-[#555555]"
                                >
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
