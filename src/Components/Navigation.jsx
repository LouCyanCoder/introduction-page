import React from "react";

const Navigation = () => {
	const navItems = [
		{
			href: "#header",
			icon: "fa-house-chimney",
			label: "Home",
		},
		{
			href: "#about",
			icon: "fa-address-card",
			label: "About me",
		},
		{
			href: "#skillsReel",
			icon: "fa-code",
			label: "Skills",
		},
		{
			href: "#portfolio",
			icon: "fa-images",
			label: "Projects",
		},
		{
			href: "#contact",
			icon: "fa-paper-plane",
			label: "Contact",
		},
	];

	const handleHomeClick = (e) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5"
			id="navbar"
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#header" onClick={handleHomeClick}>
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
						{navItems.map((item, idx) => (
							<li className="nav-item" key={idx}>
								<a
									className="nav-link"
									href={item.href}
									onClick={
										item.href === "#header" ? handleHomeClick : undefined
									}
								>
									<i className={`fa-solid ${item.icon} me-2`}></i>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
