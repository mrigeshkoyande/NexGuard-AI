"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LiveLogFeed from "@/components/LiveLogFeed";
import ThreatMonitor from "@/components/ThreatMonitor";
import AgentBrain from "@/components/AgentBrain";
import AttackGraph from "@/components/AttackGraph";
import NetworkMap from "@/components/NetworkMap";
import ControlPanel from "@/components/ControlPanel";
import StatsPanel from "@/components/StatsPanel";
import DashboardLayout, { Card, DashboardGrid, Section } from "@/components/DashboardLayout";
import { Copy, Terminal, ShieldAlert, Cpu, Activity, Zap } from "lucide-react";

export default function Dashboard() {
    const [isConnected, setIsConnected] = useState(false);
    const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

    useEffect(() => {
        // Check connection status logic can be added here
        setIsConnected(true);
    }, []);

    const handleControlPanelClick = (buttonId: string) => {
        console.log(`Button pressed: ${buttonId}`);
    };

    // Header Component
    const DashboardHeader = (
        <div className="flex justify-between items-center px-8 py-2 w-full h-full">
            <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <ShieldAlert className="w-8 h-8 text-red-500" />
                <div>
                    <h1 className="text-2xl font-black tracking-tighter text-glow text-green-400 leading-none">
                        SENTINEL-X
                    </h1>
                    <p className="text-[10px] text-green-700 font-bold tracking-[0.2em] mt-1">
                        SEC-OPS DASHBOARD
                    </p>
                </div>
                <span className="text-[10px] border border-green-800 px-2 py-0.5 rounded text-green-500 font-mono ml-2">
                    v2.0
                </span>
            </motion.div>

            <div className="flex items-center gap-8">
                <motion.div
                    className="flex items-center gap-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500 shadow-[0_0_8px_#22c55e]" : "bg-red-500 shadow-[0_0_8px_#ef4444]"}`}></div>
                    <span className="text-[11px] font-bold tracking-widest">{isConnected ? "SYSTEM ONLINE" : "OFFLINE"}</span>
                </motion.div>
                <div className="text-[10px] text-green-800 border-l border-green-900/50 pl-6 font-mono">
                    AUTONOMOUS MODE: ACTIVE
                </div>
            </div>
        </div>
    );

    // Sidebar Component
    const DashboardSidebar = (
        <div className="p-6 space-y-6 h-full overflow-y-auto">
            <ControlPanel onButtonClick={handleControlPanelClick} />
        </div>
    );

    return (
        <DashboardLayout
            header={DashboardHeader}
            sidebar={DashboardSidebar}
        >
            {/* Main Content Grid */}
            <div className="space-y-8 pb-8">
                {/* Primary Section: Network Map & Threat Monitor */}
                <Section title="NETWORK TOPOLOGY & THREATS">
                    <DashboardGrid cols={2} gap={6}>
                        {/* Network Map */}
                        <motion.div
                            className="h-[500px]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <NetworkMap />
                        </motion.div>

                        {/* Threat Monitor & Live Logs */}
                        <div className="flex flex-col gap-4 h-[500px]">
                            <motion.div
                                className="flex-1 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card title="THREAT MONITOR" icon={<ShieldAlert size={18} />}>
                                    <ThreatMonitor />
                                </Card>
                            </motion.div>

                            <motion.div
                                className="flex-1 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Card title="LIVE LOGS" icon={<Terminal size={18} />}>
                                    <LiveLogFeed />
                                </Card>
                            </motion.div>
                        </div>
                    </DashboardGrid>
                </Section>

                {/* Secondary Section: Attack Graph & Agent Brain */}
                <Section title="ANALYSIS & INTELLIGENCE">
                    <DashboardGrid cols={2} gap={6}>
                        {/* Attack Graph */}
                        <motion.div
                            className="h-80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card title="ATTACK VECTOR GRAPH" icon={<Zap size={18} />}>
                                <AttackGraph />
                            </Card>
                        </motion.div>

                        {/* Agent Brain */}
                        <motion.div
                            className="h-80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Card title="AGENT REASONING" icon={<Cpu size={18} />}>
                                <AgentBrain />
                            </Card>
                        </motion.div>
                    </DashboardGrid>
                </Section>

                {/* Tertiary Section: System Metrics */}
                <Section title="SYSTEM METRICS">
                    <DashboardGrid cols={4} gap={4}>
                        {[
                            { label: "CPU Usage", value: "12%", status: "normal" },
                            { label: "Memory", value: "4.2GB", status: "normal" },
                            { label: "Network", value: "1.2Gbps", status: "normal" },
                            { label: "Agents Active", value: "5", status: "active" },
                        ].map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="cursor-pointer"
                                onClick={() => setSelectedMetric(metric.label)}
                            >
                                <Card className={`text-center p-4 cursor-pointer transition-all ${selectedMetric === metric.label ? "ring-2 ring-green-500" : ""
                                    }`}>
                                    <div className="text-2xl font-bold text-green-400 mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs text-green-700 uppercase tracking-widest">
                                        {metric.label}
                                    </div>
                                    <div className={`text-xs mt-2 px-2 py-1 rounded inline-block ${metric.status === "active"
                                            ? "bg-blue-900 text-blue-300"
                                            : "bg-green-900 text-green-300"
                                        }`}>
                                        {metric.status.toUpperCase()}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </DashboardGrid>
                </Section>

                {/* Stats Panel Section */}
                <Section title="LIVE STATISTICS">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <StatsPanel />
                    </motion.div>
                </Section>
            </div>
        </DashboardLayout>
    );
}
