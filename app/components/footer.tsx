const Footer = () => {
  return (
    <footer className="flex justify-center flex-col md:flex-row md:justify-between items-center border-t border-t-white/50 pt-8">
      <div className="flex gap-x-8">
        <span>© 2023</span>
        <span>Sina Abdollahi</span>
      </div>
      <ul className="flex gap-x-8">
        <li>قوانین</li>
        <li>حریم خصوصی</li>
      </ul>
    </footer>
  );
};
export default Footer;
