import React from "react";
import { ReactNode } from "react";
import styles from "../../../../styles/utilities.module.css";
interface FixedTablePropTypes {
	headers: ReactNode[];
	children: ReactNode;
	className?: string;
}
export function FixedTable({
	children,
	headers,
	className,
}: FixedTablePropTypes) {
	return (
		<>
			<div className="flex executionHeaderShadow">
				<thead className="bg-indigo-50 text-gray-600 dark:bg-stone-800 dark:text-gray-50  w-full  block">
					<tr className="w-full inline-flex text-sm font-semibold text-left uppercase">
						{headers.map((header, index) => header)}
					</tr>
				</thead>
			</div>
			<table className="table-fixed w-full">
				<tbody
					className={`inline-block overflow-y-auto w-full ${styles.scrollBarThin} ${className}`}
				>
					{children}
				</tbody>
			</table>
		</>
	);
}

interface FixedTableRowPropTypes {
	children: ReactNode;
	className?: string;
}
export function FixedTableRow(props: FixedTableRowPropTypes) {
	const { children, className } = props;
	return (
		<tr
			className={`${
				className
					? className
					: "border-b  noUnderline dark:border-darkGray-800 dark:text-white"
			}`}
		>
			{children}
		</tr>
	);
}

interface FixedTableCellPropTypes {
	children?: ReactNode;
	className?: string;
	colspan?: number;
}

export function FixedTableCell(props: FixedTableCellPropTypes) {
	const { children, className, colspan } = props;
	return (
		<td
			colSpan={colspan}
			className={`${className ? className : "text-md font-medium"}`}
		>
			{children}
		</td>
	);
}
