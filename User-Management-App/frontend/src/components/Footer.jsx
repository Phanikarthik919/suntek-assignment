export default function Footer() {
  return (
    <footer className="bg-[#fbfbfd] text-[#86868b] text-[12px] py-8 border-t border-[#d2d2d7]/50 mt-auto">
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-[#1d1d1f] font-medium">UserManager Inc.</span> All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</a>
          <div className="w-[1px] bg-[#d2d2d7]"></div>
          <a href="#" className="hover:text-[#1d1d1f] transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
