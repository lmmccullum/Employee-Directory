import React from "react";
import TableRow from "./TableRow";

const style = {
  pad: {
    padding: "5px",
  },
};

function TableList({ people }) {
	return (
		<div
		>
			<table className="table table-success table-striped">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Picture</th>
						<th scope="col">Location</th>

						<th scope="col">Email</th>
					</tr>
				</thead>
				<tbody>
					{people.map((employee) => (
						<tr>
							<TableRow key={employee.id.value} employee={employee} />
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TableList;
