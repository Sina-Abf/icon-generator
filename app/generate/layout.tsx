export const metadata = {
  title: "ایجاد آیکون",
  description: "آیکونت رو همین حالا به راحتی ایجاد کن!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-full">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">آیکونت رو بساز!</h1>
        <p>
          دوست من، ممکنه که نتیجه نهایی عین همون چیزی که دقیقا میخواستی نباشه
          ولی در آینده حتما این مورد را رفع خواهیم کرد
        </p>
      </div>
      {children}
    </section>
  );
}
