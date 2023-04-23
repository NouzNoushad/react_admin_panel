import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../../datatableSource';
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const Datatable = () => {

	const [data, setData] = useState(userRows)

	const handleDelete = (id) => {
		const filterData = data.filter((user) => user.id !== id)
		setData(filterData)
	}

	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to='/users/view' style={{textDecoration: 'none'}}>
							<div className="viewButton">View</div>
						</Link>
						<div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
					</div>
				)
			}
		}
	]
	return ( 
		<div className="datatable">
			<div className="datatableTitle">
				Add New User
				<Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
					Add New
				</Link>
			</div>
			<DataGrid
			className='datagrid'
			rows={data}
			columns={userColumns.concat(actionColumn)}
			pageSize={5}
			rowsPerPageOptions={[5]}
			checkboxSelection
			/>
		</div>
	 );
}
 
export default Datatable;