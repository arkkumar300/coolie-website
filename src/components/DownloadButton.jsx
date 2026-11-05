import { ArrowUpRight, Download } from 'lucide-react';
const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL || 'https://play.google.com/store';
export default function DownloadButton({full=false}){return <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-red-500 ${full?'w-full':''}`}><Download size={17}/> Download App <ArrowUpRight size={16}/></a>}
