import Logo from './Logo';
import {useState} from "react";
import {Link} from 'react-router-dom'


export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolling, setIsScrolling] = useState(false);

	function handleToggleMenu() {
		setIsOpen(!isOpen);
		setIsScrolling(false);

		if (window.scrollY >= 80 && isOpen) {
			setIsScrolling(true);
		}
	}

	function navbarScrolling() {
		if (window.scrollY >= 80 && !isOpen) {
			setIsScrolling(true);
		} else if (window.scrollY >= 80 && isOpen) {
			setIsScrolling(false);
		} else {
			setIsScrolling(false);
		}
	}

	window.addEventListener('scroll', navbarScrolling);

	return (
		<header className="navbar" data-scrolling={isScrolling}>
			<div className="navbar__container">
				<Logo/>

				<button className="navbar__hamburger" onClick={handleToggleMenu}>
					{isOpen ? <svg width="14" height="13">
						<use href="assets/sprites.svg#hamburger"/>
					</svg> : <svg width="16" height="15">
						<use href="assets/sprites.svg#cross"/>
					</svg>}
					<span className="sr-only">click to open menu</span>
				</button>

				<nav className="nav" data-nav-open={isOpen}>
					<ul className="nav__list">
						<li onClick={handleToggleMenu} className="nav__item"><Link to="/">home</Link></li>
						<li onClick={handleToggleMenu} className="nav__item"><Link to="/about">about</Link></li>
						<li onClick={handleToggleMenu} className="nav__item"><Link to="/plan">create your plan</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}