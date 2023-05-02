import { Card } from "@/app/components/cta";
import {
  CheckIcon,
  FastIcon,
  GalleryIcon,
  PriceIcon,
  SettingsIcon,
  UserIcon,
} from "@/app/utils/icons";

export const DATA: Card[] = [
  {
    icon: <FastIcon />,
    title: "سریع و قابل اعتماد",
    description:
      "شما میتوانید در کمتر از یک دقیقه آیکون های مورد نظر را ایجاد و استفاده کنید، این عالی نیست؟",
  },
  {
    icon: <UserIcon />,
    title: "دسترسی دائمی",
    description:
      "همیشه از طریق پروفایل خود به تمام آیکون هایی که ایجاد کردید دسترسی دارید",
  },
  {
    icon: <SettingsIcon />,
    title: "شخصی سازی بالا",
    description:
      "با قالب های آماده شده هر مدلی که آیکونتان را خواستید سفارش بدهید",
  },
  {
    icon: <CheckIcon />,
    title: "کیفیت بی نظیر",
    description:
      "آیکون ها با ابعاد 1024 در 1024 ساخته میشوند و از کیفیت بالایی برخوردار هستند",
  },
  {
    icon: <PriceIcon />,
    title: "قیمت بسیار مناسب",
    description:
      "با کمترین قیمت میتوانید کلی آیکون دانلود کنید و از اون ها استفاده کنید",
  },
  {
    icon: <GalleryIcon />,
    title: "اشتراک در فضای مجازی",
    description:
      "از این آیکون ها میتوانید هرجایی که خواستید استفاده کنید یا به دوستانتان نشان دهید",
  },
];
