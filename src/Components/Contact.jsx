const Contact=()=>{
    return (
			<div>
				<h1 className="text-3xl font-bold text-center m-2">Contact Us</h1>
				<div>
					<form className="flex flex-col w-4/12 mx-auto" action="">
						<input
							type="text"
							className="border border-black p-2 my-2"
							placeholder="name"
						/>
						<input
							type="text"
							className="border border-black p-2 my-2"
							placeholder="message"
						/>
						<button type="submit" className="border border-black p-2 my-2 w-fit m-auto bg-gray-300 hover:bg-gray-600">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
}
export default Contact;