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
			class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
			id="navbar"
		>
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img
						src={require("../img/lcd-favicon.png")}
						alt="Logo"
						className="nav__logo me-3"
					/>
					LouCyanCoder
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i class="fas fa-bars"></i>
				</button>

				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="#header">
								<i class="fa-solid fa-house-chimney me-2"></i>
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#about">
								<i class="fa-solid fa-address-card me-2"></i>
								About me
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#skills">
								<i class="fa-solid fa-code me-2"></i>
								Skills
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#portfolio">
								<i class="fa-solid fa-images me-2"></i>
								Portfolio
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#contact">
								<i class="fa-solid fa-paper-plane me-2"></i>
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
