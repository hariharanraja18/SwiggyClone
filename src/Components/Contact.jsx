const Contact=()=>{
    return (
			<div>
				<h1
					className="flex flex-col w-full sm:w-8/12 md:w-4/12 mx-auto p-4 bg-white rounded-lg shadow-md"
					action="">
					Contact Us
				</h1>
				<div>
					<form className="flex flex-col w-4/12 mx-auto" action="">
						<input
							type="text"
							className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500"
							placeholder="name"
						/>
						<input
							type="text"
							className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-500"
							placeholder="message"
						/>
						<button
							type="submit"
							className="border border-gray-300 p-2 mt-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 w-full">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
}
export default Contact;