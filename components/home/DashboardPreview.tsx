import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Calendar,
  Users,
  MessageSquare,
  Settings,
  Bell,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  XCircle,
  BarChart3,
  Zap,
  Briefcase,
  Search,
  Menu
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <section className="pb-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Browser Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto max-w-7xl perspective-1000 group"
        >
            {/* Glow Behind */}
            <div className="absolute inset-0 bg-brand-500/20 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
            <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-sm -z-10" />

            <div className="bg-white rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 ring-1 ring-white/20">
                {/* Browser Toolbar */}
                <div className="bg-[#f3f4f6] px-4 py-3 flex items-center gap-4 border-b border-gray-200">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-300 border border-black/5" />
                        <div className="w-3 h-3 rounded-full bg-gray-300 border border-black/5" />
                        <div className="w-3 h-3 rounded-full bg-gray-300 border border-black/5" />
                    </div>
                    <div className="flex-1 max-w-xl mx-auto bg-white h-8 rounded-lg border border-gray-200 shadow-sm flex items-center px-3 text-xs text-gray-400">
                        <span className="text-gray-300 mr-2">🔒</span> app.rjglobal.ai/dashboard
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex bg-[#f8f9fa] min-h-[700px] text-gray-800 font-sans">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-gray-200 p-6 hidden md:flex flex-col bg-white">
                         <div className="flex items-center gap-2 mb-8 text-brand-600 font-bold text-xl">
                            <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600">
                                <Zap size={18} fill="currentColor" />
                            </div>
                            AI Booker
                         </div>

                         <div className="space-y-1">
                            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
                            <SidebarItem icon={Calendar} label="Appointments" />
                            <SidebarItem icon={Users} label="Customers" />
                            <SidebarItem icon={MessageSquare} label="Conversations" />
                            <SidebarItem icon={Briefcase} label="Services" />
                            <SidebarItem icon={Clock} label="Availability" />
                            <SidebarItem icon={Zap} label="Automation" />
                            <SidebarItem icon={BarChart3} label="Analytics" />
                         </div>

                         <div className="mt-auto pt-6 border-t border-gray-100">
                            <SidebarItem icon={Settings} label="Settings" />
                         </div>
                    </div>

                    {/* Main Area */}
                    <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <div className="flex items-center gap-4 md:hidden">
                                <Menu className="text-gray-500" />
                                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 hidden md:block">Dashboard Overview</h2>
                            
                            <div className="flex items-center gap-6 w-full md:w-auto justify-end">
                                <div className="relative hidden md:block">
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 w-64"
                                    />
                                    <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                </div>
                                <div className="relative">
                                    <Bell className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
                                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                </div>
                                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=0ea5e9&color=fff" className="w-8 h-8 rounded-full" alt="User" />
                                    <div className="text-xs hidden lg:block">
                                        <div className="font-bold text-gray-900">Admin User</div>
                                        <div className="text-gray-500">admin@rjglobal.ai</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <StatCard 
                                title="Total Bookings (Month)" 
                                value="4,293" 
                                trend="+12.5%" 
                                isUp={true} 
                                icon={<BarChart3 size={20} className="text-brand-600" />}
                                delay={0.3} 
                            />
                            <StatCard 
                                title="New vs Returning" 
                                value="63%" 
                                trend="2.1%" 
                                isUp={false} 
                                icon={<Users size={20} className="text-emerald-600" />}
                                delay={0.4} 
                                bgIcon="bg-emerald-50"
                            />
                            <StatCard 
                                title="Conversion Rate" 
                                value="81.2%" 
                                trend="+5.3%" 
                                isUp={true} 
                                icon={<Zap size={20} className="text-orange-600" />}
                                delay={0.5} 
                                bgIcon="bg-orange-50"
                            />
                            <StatCard 
                                title="Drop-off Rate" 
                                value="18.8%" 
                                trend="1.8%" 
                                isUp={false} 
                                goodDown={true} 
                                icon={<TrendingDown size={20} className="text-rose-600" />}
                                delay={0.6} 
                                bgIcon="bg-rose-50"
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Chart Area */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 }}
                                className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-gray-800">Daily Bookings</h3>
                                </div>
                                <div className="h-64 relative w-full">
                                    <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-400 pointer-events-none">
                                        {[32, 24, 16, 8, 0].map(val => (
                                            <div key={val} className="w-full border-b border-dashed border-gray-100 flex items-center h-0">
                                                <span className="mb-4">{val}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mock Chart SVG */}
                                    <div className="absolute inset-0 pl-6 pb-6 pt-2">
                                     <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 250">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                                            d="M0,200 C80,150 160,180 240,120 C320,60 400,100 480,40 C540,20 580,30 600,20"
                                            fill="none"
                                            stroke="#0ea5e9"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <motion.path
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 2 }}
                                            d="M0,200 C80,150 160,180 240,120 C320,60 400,100 480,40 C540,20 580,30 600,20 L600,250 L0,250 Z"
                                            fill="url(#chartGradient)"
                                        />
                                        {[
                                            {cx:0, cy:200}, {cx:120, cy:160}, {cx:240, cy:120}, 
                                            {cx:360, cy:80}, {cx:480, cy:40}, {cx:600, cy:20}
                                        ].map((p, i) => (
                                            <motion.circle 
                                                key={i}
                                                cx={p.cx} cy={p.cy} r="4" fill="white" stroke="#0ea5e9" strokeWidth="2"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ delay: 0.8 + (i * 0.2) }}
                                            />
                                        ))}
                                     </svg>
                                    </div>
                                    
                                    <div className="absolute bottom-0 left-6 right-0 flex justify-between text-xs text-gray-400">
                                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Side Status */}
                            <div className="space-y-4">
                                <StatusCard 
                                    icon={<Clock size={20} className="text-amber-600" />} 
                                    label="Pending Confirmations" 
                                    value="12" 
                                    color="bg-amber-100" 
                                    delay={0.8}
                                />
                                <StatusCard 
                                    icon={<XCircle size={20} className="text-rose-600" />} 
                                    label="Cancellations Today" 
                                    value="3" 
                                    color="bg-rose-100" 
                                    delay={0.9}
                                />
                                <StatusCard 
                                    icon={<CheckCircle2 size={20} className="text-emerald-600" />} 
                                    label="Completed Today" 
                                    value="27" 
                                    color="bg-emerald-100" 
                                    delay={1.0}
                                />
                                <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl p-5 text-white shadow-lg mt-2">
                                    <h4 className="font-bold mb-1">Weekly Report</h4>
                                    <p className="text-brand-100 text-sm mb-3">Your agents are performing 14% better than last week.</p>
                                    <button className="text-xs bg-white text-brand-600 font-bold px-3 py-2 rounded-lg w-full hover:bg-brand-50 transition-colors">
                                        View Full Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
      active 
      ? 'bg-brand-50 text-brand-600' 
      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:pl-4'
    }`}>
    <Icon size={18} />
    {label}
  </div>
);

interface StatCardProps {
    title: string;
    value: string;
    trend: string;
    isUp: boolean;
    goodDown?: boolean;
    icon: React.ReactNode;
    bgIcon?: string;
    delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, isUp, goodDown = false, icon, bgIcon = "bg-brand-50", delay }) => {
    const isPositive = goodDown ? !isUp : isUp;
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">{title}</p>
                    <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
                </div>
                <div className={`p-2.5 rounded-lg ${bgIcon}`}>{icon}</div>
            </div>
            <div className={`text-xs font-medium flex items-center gap-1 ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {trend} <span className="text-gray-400 font-normal">vs last month</span>
            </div>
        </motion.div>
    );
};

interface StatusCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    color: string;
    delay: number;
}

const StatusCard: React.FC<StatusCardProps> = ({ icon, label, value, color, delay }) => (
    <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-xs text-gray-500 font-medium">{label}</p>
            <p className="text-xl font-bold text-gray-900">{value}</p>
        </div>
    </motion.div>
);