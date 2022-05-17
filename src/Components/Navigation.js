import React from "react";

const Navigation = () => {
	return (
		// <nav className="nav  navbar navbar-expand-lg">
		//   <div>
		//     <img src={require("../img/lcd-logo.jpg")} alt="Logo" className="nav__logo" />
		//     LouCyanCoder
		//   </div>
		//     <ul className="nav__container">
		//         <li><a href="#header" className="nav__link">Home</a></li>
		//         <li><a href="#about" className="nav__link">About me</a></li>
		//         <li><a href="#skills" className="nav__link">Skills</a></li>
		//         <li><a href="#portfolio" className="nav__link">Portfolio</a></li>
		//         <li><a href="#contact" className="nav__link">Contact</a></li>
		//     </ul>
		// </nav>
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5"
			id="navbar"
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src={require("../img/lcd-favicon.png")}
						alt="Logo"
						className="nav__logo me-3"
					/>
					LouCyanCoder
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#header">
								<i className="fa-solid fa-house-chimney me-2"></i>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								<i className="fa-solid fa-address-card me-2"></i>
								About me
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#skillsReel">
								<i className="fa-solid fa-code me-2"></i>
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#portfolio">
								<i className="fa-solid fa-images me-2"></i>
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								<i className="fa-solid fa-paper-plane me-2"></i>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
