import { Card } from "@/app/components/cta/cta";
import { Reviews } from "@/app/components/reviews/reviews";
import {
  CheckIcon,
  FastIcon,
  GalleryIcon,
  PriceIcon,
  SettingsIcon,
  UserIcon,
} from "@/app/utils/icons";

import box from "@/public/images/box.png";
import coin from "@/public/images/coin.png";
import profile from "@/public/images/profile.png";
import space from "@/public/images/space.png";
import square from "@/public/images/square.png";
import study from "@/public/images/study.png";

export const CTA_DATA: Card[] = [
  {
    icon: <FastIcon />,
    title: "سریع و قابل اعتماد",
    description:
      "شما میتوانید در کمتر از یک دقیقه آیکون های مورد نظر را ایجاد و استفاده کنید، این عالی نیست؟",
    id: 1,
  },
  {
    icon: <UserIcon />,
    title: "دسترسی دائمی",
    description:
      "همیشه از طریق پروفایل خود به تمام آیکون هایی که ایجاد کردید دسترسی دارید",
    id: 2,
  },
  {
    icon: <SettingsIcon />,
    title: "شخصی سازی بالا",
    description:
      "با قالب های آماده شده هر مدلی که آیکونتان را خواستید سفارش بدهید",
    id: 3,
  },
  {
    icon: <CheckIcon />,
    title: "کیفیت بی نظیر",
    description:
      "آیکون ها با ابعاد 1024 در 1024 ساخته میشوند و از کیفیت بالایی برخوردار هستند",
    id: 4,
  },
  {
    icon: <PriceIcon />,
    title: "قیمت بسیار مناسب",
    description:
      "با کمترین قیمت میتوانید کلی آیکون دانلود کنید و از اون ها استفاده کنید",
    id: 5,
  },
  {
    icon: <GalleryIcon />,
    title: "اشتراک در فضای مجازی",
    description:
      "از این آیکون ها میتوانید هرجایی که خواستید استفاده کنید یا به دوستانتان نشان دهید",
    id: 6,
  },
];
export const REVIEWS_DATA: Reviews[] = [
  {
    name: "سینا",
    comment: "بهتر از این ندیدم! توصیه میکنم حتما امتحان کنید!",
    username: "sinabd",
    user_profile: box,
    id: 1,
  },
  {
    name: "علی",
    comment:
      "هوش مصنوعی هر روز زندگیمون رو در بر میگیره، این سایت کار باهاش رو خیلی آسون کرده",
    username: "aj",
    user_profile: space,
    id: 2,
  },
  {
    name: "کیمیا",
    comment: "چه سایتی بهتر از این؟ در عرض 1 دقیقه آیکون تحویل میده.",
    username: "kimia_",
    user_profile: profile,
    id: 3,
  },
  {
    name: "نیما",
    comment: "بهترین جا برای طراحا و گرافیستا :)",
    username: "_nima.",
    user_profile: coin,
    id: 4,
  },
  {
    name: "ناشناس",
    comment: "تجربه استفاده از این سایت رو برای همه توصیه میکنم!",
    username: "unknown",
    user_profile: square,
    id: 5,
  },
  {
    name: "محمد",
    comment: "بی نظیر، چیزی بود که مدت ها دنبالش بودم",
    username: "mohammd___",
    user_profile: study,
    id: 6,
  },
];
