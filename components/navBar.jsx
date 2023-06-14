import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link
							href={"/"}
							className="text-lg font-medium leading-5 text-white"
						>
							servifinder
						</Link>
					</div>
					<div className="sm:hidden">
						<button
							type="button"
							className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden sm:flex sm:items-center sm:ml-6">
						<nav>
							<Link
								href="/about"
								className="text-base font-medium leading-5 text-white hover:text-gray-300 focus:outline-none focus:underline transition duration-150 ease-in-out"
							>
								About
							</Link>
							<Link
								href="/contact"
								className="text-base font-medium leading-5 text-white ml-8 hover:text-gray-300 focus:outline-none focus:underline transition duration-150 ease-in-out"
							>
								Contact
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
