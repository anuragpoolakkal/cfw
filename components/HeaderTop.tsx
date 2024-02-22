import { SiFacebook, SiX, SiInstagram, SiLinkedin } from "react-icons/si";

const HeaderTop = () => {
	return (
		<div className="border-b border-gray-200 hidden sm:block">
			<div className="container py-4">
				<div className="flex justify-between items-center">
					<div className="hidden lg:flex gap-2">
						<div className="header_top__icon_wrapper">
							<SiFacebook />
						</div>
						<div className="header_top__icon_wrapper">
							<SiX />
						</div>
						<div className="header_top__icon_wrapper">
							<SiInstagram />
						</div>
						<div className="header_top__icon_wrapper">
							<SiLinkedin />
						</div>
					</div>

					<div className="text-gray-500 text-[12px]">
						<b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
					</div>

					<div className="flex gap-4">
						<select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px]">
							<option value="USD $">USD $</option>
							<option value="EUR €">EUR €</option>
							<option value="INR">INR</option>
						</select>

						<select name="language" id="language" className="text-gray-500 text-[12px] w-[80px]">
							<option value="English">English</option>
							<option value="French">French</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeaderTop;
