import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Brain,
  Calendar,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Mic,
  Bell,
  Users,
  Folder,
  Settings,
  Layers,
  Target,
  Grid,
  TrendingUp,
  Send,
  MoreVertical,
  Plus,
  ArrowRight,
  Bot,
  PencilLine,      
  Maximize2,      
  X  
} from 'lucide-react';

const DashboardSection = () => {
  // Reference for scroll animation
  const dashboardRef = useRef(null);
  
  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to animation values
  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const yOffset = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 50]);

  // state
  const [activeCopilot, setActiveCopilot] = useState('pm');
  const [pmMessages, setPmMessages] = useState([]);
  const [pjMessages, setPjMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  const [cursorPosition, setCursorPosition] = useState({ x: 300, y: 200, active: true });
  const [currentUser, setCurrentUser] = useState('Mclovin');
  const [cursorColor, setCursorColor] = useState('#8B5CF6');
  const [cursorType, setCursorType] = useState('user');
  const [showPmChat, setShowPmChat] = useState(true);
  const [showPjChat, setShowPjChat] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [fullScreenId, setFullScreenId] = useState(null);

  const [scrumColumns, setScrumColumns] = useState({
    todo: [],
    inProgress: [],
    review: [],
    done: []
  });
  const [draggingCard, setDraggingCard] = useState(null);

  // cursor configs
  const cursorConfigs = {
    Mclovin: { color: '#8B5CF6', type: 'user' },
    'PM Copilot': { color: '#7C3AED', type: 'copilot' },
    Regina: { color: '#EC4899', type: 'user' },
    'PJ Copilot': { color: '#DB2777', type: 'copilot' }
  };

  // helper tweens
  const animateCursorTo = (tx, ty, dur = 1000) =>
    new Promise((res) => {
      const start = Date.now();
      const { x: sx, y: sy } = cursorPosition;
      const loop = () => {
        const p = Math.min((Date.now() - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setCursorPosition({ ...cursorPosition, x: sx + (tx - sx) * e, y: sy + (ty - sy) * e });
        p < 1 ? requestAnimationFrame(loop) : res();
      };
      loop();
    });
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const switchCursor = (who) => {
    setCurrentUser(who);
    setCursorColor(cursorConfigs[who].color);
    setCursorType(cursorConfigs[who].type);
  };

  // Add a key state to force re-renders
  const [demoKey, setDemoKey] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // demo sequence
  const runDemoSequence = async () => {
    if (isRunning) return;
    setIsRunning(true);
    
    // Force a complete reset by updating the key
    setDemoKey(prev => prev + 1);
    
    // Reset all state
    setPmMessages([]);
    setPjMessages([]);
    setScrumColumns({ todo: [], inProgress: [], review: [], done: [] });
    setActiveCopilot('pm');
    switchCursor('Mclovin');
    setShowPmChat(true);
    setShowPjChat(false);
    
    await wait(500); // Give React time to process state changes
    
    // Initial PM sequence
    await wait(1500);
    setPmMessages([{ sender: 'user', text: 'I need help analyzing requirements for our new CatFlix streaming app.', timestamp: new Date() }]);
    
    await wait(1200);
    switchCursor('PM Copilot');
    await animateCursorTo(600, 400);
    await animateCursorTo(700, 300);
    setPmMessages(prev => [...prev, { sender: 'pm', text: "MoSCoW analysis complete. Video player and playlist features are 'Must Have'. Social sharing is 'Should Have'.", timestamp: new Date() }]);
    
    await wait(1500);
    await animateCursorTo(900, 300);
    await animateCursorTo(700, 480);
    await wait(1200);
    switchCursor('Mclovin');
    await animateCursorTo(500, 600);
    setPmMessages(prev => [...prev, { sender: 'user', text: "Great! Let's move these features to sprint planning.", timestamp: new Date() }]);
    
    await wait(1500);
    await animateCursorTo(130, 180);
    await wait(400);
    
    // Switch to PJ sequence
    setActiveCopilot('pj');
    switchCursor('Regina');
    setShowPmChat(false);
    setShowPjChat(true);
    
    await wait(800);
    setPjMessages([{ sender: 'user', text: 'Can you help organize the MVP features into sprint tasks?', timestamp: new Date() }]);
    
    await wait(1200);
    switchCursor('PJ Copilot');
    setPjMessages(prev => [...prev, { sender: 'pj', text: "I'll convert the MVP features into sprint tasks and add them to our board.", timestamp: new Date() }]);
    
    // Add tasks with unique keys per demo run
    const taskTimestamp = Date.now();
    const tasks = [
      { id: `${taskTimestamp}-1`, title: 'Design video player UI', assignee: 'Dev A' },
      { id: `${taskTimestamp}-2`, title: 'Implement playlist backend', assignee: 'Dev B' },
      { id: `${taskTimestamp}-3`, title: 'Create favorites API', assignee: 'Dev C' },
      { id: `${taskTimestamp}-4`, title: 'Setup Firebase auth', assignee: 'Dev D' }
    ];
    
    for (let i = 0; i < tasks.length; i++) {
      await animateCursorTo(900, 450 + i * 40);
      await wait(500);
      setScrumColumns(prev => ({
        ...prev,
        todo: [...prev.todo, tasks[i]]
      }));
      await wait(400);
    }
    
    setPjMessages(prev => [...prev, { sender: 'pj', text: "I've added all MVP tasks to the TODO column. Ready for sprint planning!", timestamp: new Date() }]);
    
    await wait(1800);
    switchCursor('Regina');
    setPjMessages(prev => [...prev, { sender: 'user', text: "Perfect! Let's start the sprint tomorrow.", timestamp: new Date() }]);

    await wait(3000);
    setIsRunning(false);
    
    // Restart the demo
    setTimeout(() => {
      runDemoSequence();
    }, 1000);
  };

  // sidebar items
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard' },
    { icon: Brain, label: 'PM Copilot' },
    { icon: Calendar, label: 'PJ Copilot' },
    { icon: Folder, label: 'Projects', count: 5 },
    { icon: Users, label: 'Team', count: 8 },
    { icon: CheckCircle2, label: 'Tasks', count: 24 },
    { icon: Layers, label: 'Integrations' },
    { icon: Settings, label: 'Settings' }
  ];

  useEffect(() => {
    // Initialize component
    setMounted(true);
    
    // Start demo sequence after component mounts
    const demoTimer = setTimeout(() => {
      runDemoSequence();
    }, 1500);
    
    return () => {
      clearTimeout(demoTimer);
      setIsRunning(false);
    };
  }, []);

  if (!mounted) return null;
  
  const PanelHeader = ({ id, title, icon: Icon, color, editable = true }) => (
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold flex items-center gap-1 text-sm" style={{ color }}>
        <Icon className="w-4 h-4" />
        {title}
      </h3>

      <div className="flex items-center gap-1">
        {editable && (
          <button
            onClick={() => console.log('edit', id)}
            className="p-0.5 rounded hover:bg-gray-100"
          >
            <PencilLine className="w-3 h-3 text-gray-500" />
          </button>
        )}

        <button
          onClick={() => setFullScreenId(id)}
          className="p-0.5 rounded hover:bg-gray-100"
        >
          <Maximize2 className="w-3 h-3 text-gray-500" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center p-8 relative overflow-hidden" ref={dashboardRef}>
      {/* Decorative elements matching Problem page */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500 opacity-5 rounded-full filter blur-3xl" />
      
      <motion.div 
        style={{ 
          scale,
          y: yOffset
        }}
        className="relative w-[1400px] h-[900px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200"
      >
        {/* fake browser chrome */}
        <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-200 rounded px-4 py-1 text-sm text-gray-600 w-96 text-center">🔒 alfred.ai</div>
          </div>
        </div>

        <div className="flex h-[calc(100%-2.5rem)]">
          {/* SIDEBAR */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Alfred ai</h1>
                <p className="text-xs text-gray-500">Abc's Workspace</p>
              </div>
            </div>

            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setActiveTab(item.label.toLowerCase());
                    if (item.label === 'PM Copilot') {
                      setActiveCopilot('pm');
                      setShowPmChat(true);
                      setShowPjChat(false);
                    } else if (item.label === 'PJ Copilot') {
                      setActiveCopilot('pj');
                      setShowPmChat(false);
                      setShowPjChat(true);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition
                    ${
                      (item.label === 'PM Copilot' && activeCopilot === 'pm') ||
                      (item.label === 'PJ Copilot' && activeCopilot === 'pj') ||
                      (activeTab === item.label.toLowerCase() && !['pm copilot', 'pj copilot'].includes(activeTab))
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{item.count}</span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* MAIN COLUMN */}
          <div className="flex-1 flex flex-col relative">
            {/* header */}
            <header className="h-16 border-b border-gray-200 px-6 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${activeCopilot === 'pm' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                  <Brain className="w-4 h-4 inline-block mr-1" />
                  PM: Mclovin
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${activeCopilot === 'pj' ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-600'}`}>
                  <Calendar className="w-4 h-4 inline-block mr-1" />
                  PJ: Regina
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">J</div>
              </div>
            </header>

            {/* GRID */}
            <div className="flex-1 p-4 bg-gray-50">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* LEFT - cards + chat */}
                <div className="flex flex-col h-full space-y-3">
                  {/* cards */}
                  <div className="flex-none">
                    {activeCopilot === 'pm' && (
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg p-4 border border-purple-200">
                          <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Prioritized Features
                          </h3>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Video Playlists</li>
                            <li>• User Favorites</li>
                            <li>• Social Sharing</li>
                          </ul>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg p-4 border border-purple-200">
                          <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            MVP Planning
                          </h3>
                          <p className="text-sm text-gray-600">Phase 1: Core features</p>
                          <p className="text-sm text-gray-600">Phase 2: Enhancements</p>
                        </motion.div>
                      </div>
                    )}

                    {activeCopilot === 'pj' && (
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg p-4 border border-pink-200">
                          <h3 className="font-semibold text-pink-700 mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Sprint Progress
                          </h3>
                          <p className="text-sm text-gray-600">Tasks: {scrumColumns.todo.length + scrumColumns.inProgress.length + scrumColumns.review.length + scrumColumns.done.length}</p>
                          <p className="text-sm text-gray-600">In Progress: {scrumColumns.inProgress.length}</p>
                          <p className="text-sm text-gray-600">Completed: {scrumColumns.done.length}</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-lg p-4 border border-pink-200">
                          <h3 className="font-semibold text-pink-700 mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Team Allocation
                          </h3>
                          <p className="text-sm text-gray-600">Dev A: {scrumColumns.todo.filter(t => t.assignee === 'Dev A').length} task{scrumColumns.todo.filter(t => t.assignee === 'Dev A').length !== 1 ? 's' : ''}</p>
                          <p className="text-sm text-gray-600">Dev B: {scrumColumns.todo.filter(t => t.assignee === 'Dev B').length} task{scrumColumns.todo.filter(t => t.assignee === 'Dev B').length !== 1 ? 's' : ''}</p>
                          <p className="text-sm text-gray-600">Dev C: {scrumColumns.todo.filter(t => t.assignee === 'Dev C').length} task{scrumColumns.todo.filter(t => t.assignee === 'Dev C').length !== 1 ? 's' : ''}</p>
                          <p className="text-sm text-gray-600">Dev D: {scrumColumns.todo.filter(t => t.assignee === 'Dev D').length} task{scrumColumns.todo.filter(t => t.assignee === 'Dev D').length !== 1 ? 's' : ''}</p>
                        </motion.div>
                      </div>
                    )}
                  </div>

                {/* chat boxes */}
<div className="flex-1 flex flex-col">
  {/* PM CHAT */}
  {showPmChat && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col flex-1 bg-white rounded-lg border border-purple-200 overflow-hidden"
    >
      {/* header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-purple-100">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-purple-700">PM Copilot - Mclovin</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {pmMessages.map((m, i) => (
          <div
            key={`pm-${demoKey}-${i}`}
            className={`rounded-lg p-3 ${m.sender === 'user' ? 'bg-gray-100' : 'bg-purple-50'}`}
          >
            <p className="text-sm text-gray-700">{m.text}</p>
          </div>
        ))}
      </div>

      {/* input */}
      <div className="border-t border-purple-100 px-3 py-2 flex gap-2">
        <input
          placeholder="Ask Copilot"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <Mic className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )}

  {/* PJ CHAT */}
  {showPjChat && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col flex-1 bg-white rounded-lg border border-pink-200 overflow-hidden"
    >
      {/* header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-pink-100">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-pink-600" />
          <h3 className="font-semibold text-pink-700">PJ Copilot - Regina</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {pjMessages.map((m, i) => (
          <div
            key={`pj-${demoKey}-${i}`}
            className={`rounded-lg p-3 ${m.sender === 'user' ? 'bg-gray-100' : 'bg-pink-50'}`}
          >
            <p className="text-sm text-gray-700">{m.text}</p>
          </div>
        ))}
      </div>

      {/* input */}
      <div className="border-t border-pink-100 px-3 py-2 flex gap-2">
        <input
          placeholder="Ask Copilot"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
        />
        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <Mic className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )}
</div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col h-full">
                  {/* PM tools */}
                  {activeCopilot === 'pm' ? (
                    <>
                      {/* content without scroll */}
                      <div className="flex-1 space-y-3">
                        {/* MoSCoW */}
                        <div className="bg-white rounded-lg border border-gray-200 p-3">
                          <PanelHeader
                            id="moscow"
                            title="MoSCoW Prioritization"
                            icon={Grid}
                            color="#1F2937"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-red-50 p-2 rounded border border-red-200">
                              <h4 className="font-medium text-red-700 mb-1 text-sm">Must Have</h4>
                              <ul className="text-xs text-gray-600 space-y-0.5">
                                <li>• Video Player</li>
                                <li>• Playlist Creation</li>
                                <li>• User Authentication</li>
                              </ul>
                            </div>
                            <div className="bg-orange-50 p-2 rounded border border-orange-200">
                              <h4 className="font-medium text-orange-700 mb-1 text-sm">Should Have</h4>
                              <ul className="text-xs text-gray-600 space-y-0.5">
                                <li>• Social Sharing</li>
                                <li>• Comments</li>
                                <li>• User Profiles</li>
                              </ul>
                            </div>
                            <div className="bg-yellow-50 p-2 rounded border border-yellow-200">
                              <h4 className="font-medium text-yellow-700 mb-1 text-sm">Could Have</h4>
                              <ul className="text-xs text-gray-600 space-y-0.5">
                                <li>• Advanced Search</li>
                                <li>• Analytics</li>
                              </ul>
                            </div>
                            <div className="bg-green-50 p-2 rounded border border-green-200">
                              <h4 className="font-medium text-green-700 mb-1 text-sm">Won't Have</h4>
                              <ul className="text-xs text-gray-600 space-y-0.5">
                                <li>• Live Streaming</li>
                                <li>• Monetization</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Lean Canvas */}
                        <div className="bg-white rounded-lg border border-gray-200 p-3">
                          <PanelHeader id="canvas" title="Lean Canvas" icon={Grid} color="#1F2937" />
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="border border-gray-200 rounded p-2">
                              <h4 className="font-medium text-gray-700 mb-0.5 text-sm">Problem</h4>
                              <p className="text-gray-600">No dedicated platform for cat-video fans</p>
                            </div>
                            <div className="border border-gray-200 rounded p-2">
                              <h4 className="font-medium text-gray-700 mb-0.5 text-sm">Solution</h4>
                              <p className="text-gray-600">Curated cat video playlists</p>
                            </div>
                            <div className="border border-gray-200 rounded p-2">
                              <h4 className="font-medium text-gray-700 mb-0.5 text-sm">Unique Value</h4>
                              <p className="text-gray-600">Best cat content in one place</p>
                            </div>
                          </div>
                        </div>

                        {/* SWOT */}
                        <div className="bg-white rounded-lg border border-gray-200 p-3">
                          <PanelHeader id="swot" title="SWOT Analysis" icon={Grid} color="#1F2937" />
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-blue-50 p-2 rounded border border-blue-200">
                              <h4 className="font-medium text-blue-700 mb-0.5 text-sm">Strengths</h4>
                              <p className="text-xs text-gray-600">Niche focus, Simple UX</p>
                            </div>
                            <div className="bg-purple-50 p-2 rounded border border-purple-200">
                              <h4 className="font-medium text-purple-700 mb-0.5 text-sm">Weaknesses</h4>
                              <p className="text-xs text-gray-600">Limited content initially</p>
                            </div>
                            <div className="bg-green-50 p-2 rounded border border-green-200">
                              <h4 className="font-medium text-green-700 mb-0.5 text-sm">Opportunities</h4>
                              <p className="text-xs text-gray-600">Growing pet-content market</p>
                            </div>
                            <div className="bg-red-50 p-2 rounded border border-red-200">
                              <h4 className="font-medium text-red-700 mb-0.5 text-sm">Threats</h4>
                              <p className="text-xs text-gray-600">Established platforms</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* action button */}
                      <div className="shrink-0 pt-2 flex justify-end">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 shadow">
                          <CheckCircle2 className="w-4 h-4" />
                          Approve Features
                        </button>
                      </div>
                    </>
                  ) : (
                    /* PJ board */
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-2">
                        <PanelHeader
                          id="sprint"
                          title="Sprint Board"
                          icon={TrendingUp}
                          color="#1F2937"
                          editable={false}
                        />
                        <div className="flex items-center gap-1">
                          <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                            <Plus className="w-3 h-3 text-gray-600" />
                          </button>
                          <button className="px-4 py-2 text-xs bg-pink-600 text-white rounded-lg hover:bg-pink-700 flex items-center gap-1 shadow">
                            <ArrowRight className="w-3 h-3" />
                            Create Sprint & Add to Jira
                          </button>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="grid grid-cols-4 gap-3 h-full">
                          {Object.entries(scrumColumns).map(([id, cards]) => (
                            <div key={id} className="bg-gray-50 rounded-lg p-2">
                              <h4 className="font-medium text-gray-700 mb-2 capitalize text-sm">
                                {id.replace(/([A-Z])/g, ' $1').trim()}
                              </h4>
                              <div className="space-y-1 min-h-[240px]">
                                {cards.map((c) => (
                                  <motion.div 
                                    key={`task-${demoKey}-${c.id}`} 
                                    initial={{ opacity: 0, scale: 0.8 }} 
                                    animate={{ opacity: 1, scale: 1 }} 
                                    className="bg-white rounded p-2 shadow-sm border border-gray-200"
                                  >
                                    <p className="text-xs font-medium">{c.title}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{c.assignee}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* cursor */}
            {cursorPosition.active && (
              <motion.div animate={{ x: cursorPosition.x, y: cursorPosition.y }} transition={{ type: 'spring', damping: 30, stiffness: 200 }} className="absolute pointer-events-none z-50" style={{ left: 0, top: 0 }}>
                <div className="relative">
                  {cursorType === 'user' ? (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold shadow-lg" style={{ backgroundColor: cursorColor }}>
                      {currentUser[0]}
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: cursorColor }}>
                      <Bot className="w-5 h-5" />
                    </div>
                  )}
                  <div className="absolute left-10 top-0 px-2 py-1 rounded text-xs font-medium text-white whitespace-nowrap shadow-lg" style={{ backgroundColor: cursorColor }}>
                    {currentUser}
                  </div>
                </div>
              </motion.div>
            )}

            {/* drag ghost */}
            {draggingCard && (
              <motion.div animate={{ x: cursorPosition.x, y: cursorPosition.y }} className="absolute pointer-events-none z-40 bg-white rounded p-3 shadow-lg border border-gray-200 opacity-80" style={{ left: 0, top: 0 }}>
                <p className="text-sm font-medium">{draggingCard.title}</p>
                <p className="text-xs text-gray-500">{draggingCard.assignee}</p>
              </motion.div>
            )}
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardSection;