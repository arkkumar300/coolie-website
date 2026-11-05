import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import DownloadButton from './DownloadButton';
const links = [{label:'Home',to:'/'},{label:'Privacy Policy',to:'/privacy-policy'},{label:'Terms & Conditions',to:'/terms'},{label:'Account Deletion',to:'/account-deletion'}];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur-xl"><div className="container-width flex h-[78px] items-center justify-between"><Link to="/" onClick={()=>setOpen(false)} aria-label="Coolie home" className="block"><img src="/images/coolie-logo.jpeg" alt="Coolie" className="h-[54px] w-[180px] object-contain object-left"/></Link>
 <nav className="hidden items-center gap-6 lg:flex">{links.map(l=><NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive})=>`text-[13px] font-bold transition hover:text-red-500 ${isActive?'text-red-500':'text-neutral-300'}`}>{l.label}</NavLink>)}<DownloadButton/></nav>
 <button type="button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 lg:hidden">{open?<X/>:<Menu/>}</button></div>
 {open&&<nav className="container-width flex flex-col gap-1 border-t border-white/10 py-4 lg:hidden">{links.map(l=><NavLink key={l.to} to={l.to} end={l.to==='/'} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-bold text-neutral-200 hover:bg-white/5">{l.label}</NavLink>)}<div className="mt-2"><DownloadButton full/></div></nav>}</header>
}
