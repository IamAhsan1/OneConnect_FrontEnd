import React,{useState} from "react";
import {Outlet,Link,useNavigate} from "react-router";
import {LogOut,User} from "lucide-react";
import {Avatar,AvatarFallback} from "@/components/ui/avatar";

const CustomerLayout=()=>{
const navigate=useNavigate();
const [menuOpen,setMenuOpen]=useState(false);
const handleLogout=()=>navigate("/login");

return(
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">
<Link to="/" className="text-2xl font-extrabold tracking-tight text-blue-600 transition hover:text-blue-700">OneConnect</Link>
<div className="hidden md:flex items-center gap-6">
<Link to="/customer/dashboard" className="text-sm font-semibold text-blue-600 transition hover:text-blue-700">Dashboard Home</Link>
<Link to="/" className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">Search Providers</Link>
</div>
</div>

<div className="relative flex items-center">
<button onClick={()=>setMenuOpen(!menuOpen)} className="rounded-full transition hover:scale-105 focus:outline-none">
<Avatar className="h-10 w-10 border-2 border-white shadow-lg">
<AvatarFallback className="bg-gradient-to-r from-blue-600 to-emerald-500 font-bold text-white">C</AvatarFallback>
</Avatar>
</button>

{menuOpen&&(
<div className="absolute right-0 top-14 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-2xl">
<button className="flex w-full items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
<User className="h-4 w-4"/>Profile
</button>
<button onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50">
<LogOut className="h-4 w-4"/>Logout
</button>
</div>
)}
</div>
</div>
</header>

<main className="flex-1 px-4 py-6 md:px-8 md:py-10">
<div className="mx-auto max-w-7xl animate-in fade-in duration-500">
<Outlet/>
</div>
</main>
</div>
);
};
export default CustomerLayout;
