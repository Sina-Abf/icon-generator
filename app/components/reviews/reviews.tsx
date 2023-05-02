import { REVIEWS_DATA as data } from "@/public/data";
import ReviewCard from "./review-card";
import { StaticImageData } from "next/image";

export interface Reviews {
  username: string;
  name: string;
  user_profile: StaticImageData;
  comment: string;
  id?: number;
}

const Reviews = () => {
  return (
    <section className="mb-24">
      <div className="md:text-center mb-6">
        <h2 className="text-4xl font-bold">نظرات کاربران</h2>
      </div>
      <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {data.map((review) => {
          return (
            <ReviewCard
              user_profile={review.user_profile}
              comment={review.comment}
              name={review.name}
              username={review.username}
              key={review.id}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Reviews;
