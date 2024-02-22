import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

interface propsType {
	img: string;
	title: string;
	desc: string;
	rating: number;
	price: string;
}

const ProductCard = ({ img, title, desc, rating, price }: propsType) => {
	const generateRating = (rating: number) => {
		switch (rating) {
			case 1:
				return (
					<div className="flex gap-1 text-[20px] text-[#ff9529]">
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
				);
			case 2:
				return (
					<div className="flex gap-1 text-[20px] text-[#ff9529]">
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
				);
			case 3:
				return (
					<div className="flex gap-1 text-[20px] text-[#ff9529]">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
				);
			case 4:
				return (
					<div className="flex gap-1 text-[20px] text-[#ff9529]">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
					</div>
				);
			case 5:
				return (
					<div className="flex gap-1 text-[20px] text-[#ff9529]">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
				);

			default:
				return null;
		}
	};
	return (
		<div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
			<div>
				<Image className="w-full h-auto" src={img} width={200} height={300} alt={title} />
			</div>

			<div className="space-y-2 py-2">
				<h2 className="text-accent font-medium uppercase">{title}</h2>
				<div className="text-gray-500 max-w-[150px">{desc}</div>
				<div>{generateRating(rating)}</div>
				<div className="font-bold flex gap-4">${price}</div>
				<del className="text-gray-500 font-normal">${parseInt(price) + 50}.00</del>
			</div>
		</div>
	);
};
export default ProductCard;
