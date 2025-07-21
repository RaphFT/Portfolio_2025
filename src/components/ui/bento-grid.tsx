"use client";

import { motion } from 'framer-motion';

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    githubUrl?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative p-4 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 bg-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 will-change-transform ${item.colSpan === 2 ? "md:col-span-2" : "col-span-1"} ${item.hasPersistentHover ? "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5" : ""}`}
                >
                    {/* Background pattern */}
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 group-hover:bg-gradient-to-br transition-all duration-300">
                                {item.icon}
                            </div>
                            <span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 text-gray-600 transition-colors duration-300 group-hover:bg-black/10">
                                {item.status || "Projet"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 tracking-tight text-[15px] font-clash"
                                style={{
                                    fontFamily: '"Clash Display", sans-serif',
                                    fontWeight: 500
                                }}
                            >
                                {item.title}
                                <span className="ml-2 text-xs text-gray-500 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-gray-600 leading-snug font-clash"
                                style={{
                                    fontFamily: '"Clash Display", sans-serif',
                                    fontWeight: 400
                                }}
                            >
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-black/5 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 font-clash"
                                        style={{
                                            fontFamily: '"Clash Display", sans-serif',
                                            fontWeight: 400
                                        }}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            {item.githubUrl && (
                                <a
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity hover:text-gray-700 font-clash"
                                    style={{
                                        fontFamily: '"Clash Display", sans-serif',
                                        fontWeight: 400
                                    }}
                                >
                                    {item.cta || "GitHub →"}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Gradient border */}
                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export { BentoGrid } 