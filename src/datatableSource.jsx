export const userColumns = [
	{
		field: 'id',
		headerName: 'ID',
		width: 70,
	},
	{
		field: 'user',
		headerName: 'User',
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img src={params.row.image} alt="" className="cellImg" />
					{params.row.username}
				</div>
			)
		}
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 230
	},
	{
		field: 'age',
		headerName: 'Age',
		width: 100
	},
	{
		field: 'status',
		headerName: 'Status',
		width: 160,
		renderCell: (params) => {
			return (
				<div className={`cellWithStatus ${params.row.status}`}>
					{params.row.status}
				</div>
			)
		}
	},
]

export const userRows = [
	{
		id: 1,
		username: 'John',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'active',
		email: 'john@gmail.com',
		age: 20,
	},
	{
		id: 2,
		username: 'Rake',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'passive',
		email: 'rake@gmail.com',
		age: 22,
	},
	{
		id: 3,
		username: 'Mario',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'active',
		email: 'mario@gmail.com',
		age: 25,
	},
	{
		id: 4,
		username: 'yoshi',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'pending',
		email: 'yoshi@gmail.com',
		age: 27,
	},
	{
		id: 5,
		username: 'Babloo',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'passive',
		email: 'babloo@gmail.com',
		age: 21,
	},
	{
		id: 6,
		username: 'Kim',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'active',
		email: 'kim@gmail.com',
		age: 28,
	},
	{
		id: 7,
		username: 'John',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'passive',
		email: 'john@gmail.com',
		age: 20,
	},
	{
		id: 8,
		username: 'Rake',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'active',
		email: 'rake@gmail.com',
		age: 22,
	},
	{
		id: 9,
		username: 'Mario',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'pending',
		email: 'mario@gmail.com',
		age: 25,
	},
	{
		id: 10,
		username: 'Rake',
		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
		status: 'passive',
		email: 'rake@gmail.com',
		age: 22,
	},
]