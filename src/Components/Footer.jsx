import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<h2 className="text-lg font-semibold">Delicious Foods</h2>
						<p className="text-sm text-gray-400">
							© 2024 Delicious Foods. All rights reserved.
						</p>
					</div>
					<div className="flex space-x-4">
						<a
							href="#"
							className="text-gray-400 hover:text-white transition duration-300">
							Home
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition duration-300">
							Menu
						</a>
						<a
							href="#"
							className="text-gray-400 hover:text-white transition duration-300">
							Contact
						</a>
					</div>
				</div>
				<div className="flex justify-center mt-4 space-x-6">
					<a
						href="#"
						className="text-gray-400 hover:text-white transition duration-300">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a
						href="#"
						className="text-gray-400 hover:text-white transition duration-300">
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="#"
						className="text-gray-400 hover:text-white transition duration-300">
						<i className="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
