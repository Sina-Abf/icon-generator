import { StarIcon } from "@/app/utils/icons";
import Image from "next/image";
import { Reviews } from "./reviews";
import classNames from "classnames";

const ReviewCard = ({ name, username, comment, user_profile }: Reviews) => {
  return (
    <li className="border border-white/30 bg-background-darker rounded-lg p-4 shadow-xl py-6">
      <div className="flex items-center gap-x-4 mb-4">
        <Image
          className="rounded-full"
          src={user_profile}
          alt={name}
          width={80}
          height={80}
        />
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="mb-1">{username}@</span>
          <div className="flex mb-4400 -mr-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </div>

      <p>{comment}</p>
    </li>
  );
};
export default ReviewCard;
