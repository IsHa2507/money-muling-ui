import React, { useRef } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import ForceGraph2D from "react-force-graph-2d";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ---------------- DEMO DATA ---------------- */

// Risk trend graph
const riskData = [
  { day: "Mon", risk: 10 },
  { day: "Tue", risk: 40 },
  { day: "Wed", risk: 30 },
  { day: "Thu", risk: 80 },
  { day: "Fri", risk: 60 },
];

// Transaction network (money flow)
const graphData = {
  nodes: [
    { id: "User Account", risk: "low" },
    { id: "Mule Account", risk: "high" },
    { id: "Shell Company", risk: "medium" },
    { id: "Offshore Wallet", risk: "high" },
    { id: "Exchange", risk: "low" },
  ],
  links: [
    { source: "User Account", target: "Mule Account" },
    { source: "Mule Account", target: "Shell Company" },
    { source: "Shell Company", target: "Offshore Wallet" },
    { source: "Offshore Wallet", target: "Exchange" },
  ],
};

// Flowchart data
const flowNodes = [
  { id: "1", data: { label: "Deposit" }, position: { x: 0, y: 50 } },
  { id: "2", data: { label: "Layering" }, position: { x: 180, y: 50 } },
  { id: "3", data: { label: "Circular Transfer" }, position: { x: 360, y: 50 } },
];

const flowEdges = [
  { id: "e1", source: "1", target: "2", animated: true },
  { id: "e2", source: "2", target: "3", animated: true },
];

/* ---------------- RISK COLOR ---------------- */

const getRiskColor = (risk: string) => {
  if (risk === "high") return "#ef4444";
  if (risk === "medium") return "#facc15";
  return "#3b82f6";
};

/* ---------------- PREMIUM NETWORK GRAPH ---------------- */

const TransactionNetwork = () => {
  const fgRef = useRef<any>(null);


  return (
    <div className="h-[260px] rounded-xl overflow-hidden">
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        cooldownTicks={100}
        d3VelocityDecay={0.25}
        linkDirectionalParticles={3}
        linkDirectionalParticleSpeed={0.005}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleColor={() => "#60a5fa"}
        linkCurvature={0.25}
        linkWidth={1.5}
        linkColor={() => "rgba(255,255,255,0.2)"}
        backgroundColor="rgba(0,0,0,0)"
        minZoom={0.5}
        maxZoom={4}

        /* glowing nodes */
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale;

          ctx.shadowBlur = 15;
          ctx.shadowColor = getRiskColor(node.risk);

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.risk === "high" ? 10 : 6, 0, 2 * Math.PI);
          ctx.fillStyle = getRiskColor(node.risk);
          ctx.fill();

          ctx.shadowBlur = 0;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = "white";
          ctx.fillText(label, node.x + 12, node.y + 4);
        }}
      />
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const MoneyMulingFeatures = () => {
  return (
    <section className="py-32 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold">
          AI That Works for You <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Money Muling Detection
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Detect suspicious transaction networks, risk patterns, and layered
          financial behavior using graph-based intelligence.
        </p>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Risk Pattern */}
          <Card title="Risk Pattern Detection">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={riskData}>
                <XAxis dataKey="day" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line type="monotone" dataKey="risk" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Network Graph */}
          <Card title="Transaction Network Graph">
            <TransactionNetwork />
          </Card>

          {/* Flowchart */}
          <Card title="Money Flow Structure">
            <div className="h-[220px] rounded-lg overflow-hidden">
              <ReactFlow nodes={flowNodes} edges={flowEdges} fitView />
            </div>
          </Card>

          {/* Suspicious Records */}
          <Card title="Flagged Records">
            <div className="text-sm text-gray-300 space-y-3">
              <Record name="Mule Account" risk="High Risk" color="text-red-400" />
              <Record name="Circular Transfers" risk="Medium" color="text-yellow-400" />
              <Record name="Rapid Withdrawals" risk="High Risk" color="text-red-400" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MoneyMulingFeatures;

/* ---------------- UI COMPONENTS ---------------- */

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="p-8 rounded-2xl text-left border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur hover:border-blue-400/30 transition">
    <h3 className="text-xl font-semibold mb-6">{title}</h3>
    {children}
  </div>
);

const Record = ({
  name,
  risk,
  color,
}: {
  name: string;
  risk: string;
  color: string;
}) => (
  <div className="flex justify-between border-b border-white/10 pb-2">
    <span>{name}</span>
    <span className={color}>{risk}</span>
  </div>
);
