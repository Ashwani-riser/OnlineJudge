// import { ReactNode } from "react";

// interface FloatingCardProps {
//   title: string;
//   value: string;
//   icon: ReactNode;
//   className?: string;
// }

// export default function FloatingCard({
//   title,
//   value,
//   icon,
//   className,
// }: FloatingCardProps) {
//   return (
//     <div
//       className={`
//         absolute
//         hidden
//         lg:flex
//         w-56
//         items-center
//         gap-4
//         rounded-2xl
//         border
//         border-white/10
//         bg-white/5
//         p-4
//         backdrop-blur-xl
//         shadow-[0_20px_80px_rgba(0,0,0,.35)]
//         transition-all
//         duration-300
//         hover:scale-105
//         hover:border-indigo-500/40
//         ${className}
//       `}
//     >
//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
//         {icon}
//       </div>

//       <div>
//         <p className="text-xs uppercase tracking-wider text-zinc-400">
//           {title}
//         </p>

//         <p className="mt-1 text-lg font-semibold text-white">
//           {value}
//         </p>
//       </div>
//     </div>
//   );
// }