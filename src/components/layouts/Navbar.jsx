import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Navbar = () => {
  return <div className="h-16 bg-white/80 border-b border-emerald-50 backdrop-blur-md py-2 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5 mt-1">
        <Link to='/dashboard'>
          <div className="text-2xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hidden sm:block">
              Resume Builder
            </span>
          </div>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
};

export default Navbar;
