import { ChatBubbleOutline, ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNone, SearchOutlined } from "@mui/icons-material";
import './navbar.scss'

const Navbar = () => {
	return ( 
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchOutlined/>
				</div>
				<div className="items">
					<div className="item">
						<LanguageOutlined className="icon"/>
						English
					</div>
					<div className="item">
						<DarkModeOutlined className="icon"/>
					
					</div>
					<div className="item">
						<FullscreenExitOutlined className="icon"/>
					
					</div>
					<div className="item">
						<NotificationsNone className="icon"/>
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineOutlined className="icon"/>
						<div className="counter">2</div>
					</div>
					<div className="item">
						<ListOutlined className="icon"/>
						
					</div>
					<div className="item">
						<img src="./mickey_mouse.jpg" alt="" className="avatar"/>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default Navbar;