import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
	const rows = [
		{
			id: 1143155,
			product: 'Fjallraven Backpack',
			img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			customer: 'John Smith',
			date: '1 March',
			amount: 785,
			method: 'Cash on Delivery',
			status: 'Approved'
		},
		{
			id: 1243155,
			product: 'Mens Casual T-Shirts',
			img: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
			customer: 'Michael Doe',
			date: '1 March',
			amount: 900,
			method: 'Online Payment',
			status: 'Pending'
		},
		{
			id: 1343155,
			product: 'Mens Cloth Jacket',
			img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
			customer: 'Jane Smith',
			date: '1 March',
			amount: 920,
			method: 'Online',
			status: 'Approved'
		},
		{
			id: 1443155,
			product: 'Jewelry',
			img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
			customer: 'Micheal',
			date: '1 March',
			amount: 500,
			method: 'Online Payment',
			status: 'Pending'
		},
	]
	return ( 
		<TableContainer component={Paper} className='table'>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
				<TableRow>
					<TableCell className='tableCell'>Tracking ID</TableCell>
					<TableCell className='tableCell'>Product</TableCell>
					<TableCell className='tableCell'>Customer</TableCell>
					<TableCell className='tableCell'>Date</TableCell>
					<TableCell className='tableCell'>Amount</TableCell>
					<TableCell className='tableCell'>Payment Method</TableCell>
					<TableCell className='tableCell'>Status</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row) => (
					<TableRow
						key={row.id}>
						<TableCell className='tableCell'>{row.id}</TableCell>
						<TableCell className='tableCell'>
							<div className="cellWrapper">
								<img src={row.img} alt="" className='image' />
								{row.product}
							</div>
						</TableCell>
						<TableCell className='tableCell'>{row.customer}</TableCell>
						<TableCell className='tableCell'>{row.date}</TableCell>
						<TableCell className='tableCell'>{row.amount}</TableCell>
						<TableCell className='tableCell'>{row.method}</TableCell>
						<TableCell className='tableCell'>
							<span className={`status ${row.status}`}>{row.status}</span>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	 );
}
 
export default List;