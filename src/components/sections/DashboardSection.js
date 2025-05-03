import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  MessageSquare, 
  Calendar, 
  AlertCircle, 
  FolderOpen,
  BarChart3,
  Send,
  Sparkles,
  ChevronRight,
  Clock,
  Users,
  GitBranch,
  PlayCircle,
  CheckCircle2,
  Archive,
  Brain,
  Lightbulb,
  Target,
  Layers,
  UserCircle,
  Zap
} from 'lucide-react';

const DashboardSection = () => {
  const [activeTabPM, setActiveTabPM] = useState('persona');
  const [activeTabProject, setActiveTabProject] = useState('sprints');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Manager Copilot UI - White Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl text-gray-900"
          >
            {/* Header with Status Pills */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Brain className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Product Manager Copilot</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
            </div>
            
            {/* Modern Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Panel - Chat Interface (3 cols) */}
              <div className="md:col-span-3 border-r border-gray-200">
                <div className="h-[420px] flex flex-col">
                  {/* AI Assistant Header */}
                  <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Feature Assistant</h4>
                        <p className="text-xs text-gray-500">Powered by Alfred AI</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                    {/* User Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                        <p className="text-sm text-gray-900">Create a save/share feature for cat videos</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                          <p className="text-sm mb-3 text-gray-900">I'll create a feature plan for Catflix playlists. Let me analyze your requirements...</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs flex items-center gap-1">
                              <UserCircle className="w-3 h-3" />
                              Target: Busy Millennial
                            </span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              MoSCoW Applied
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              RICE: High/Medium
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI Suggestion */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                          <p className="text-sm text-gray-900">I suggest adding "Favorite" and "Custom Tags" features to enhance user engagement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modern Input Area */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Ask about features, prioritization, or user personas..."
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-indigo-500 placeholder-gray-500 text-gray-900"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors">
                          <Send className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    {/* Quick Action */}
                    <div className="mt-3 flex justify-center">
                      <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Generate MVP Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Panel - Feature Details (2 cols) */}
              <div className="md:col-span-2 bg-gray-50">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 bg-white">
                  <button
                    onClick={() => setActiveTabPM('persona')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTabPM === 'persona' 
                        ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <UserCircle className="w-4 h-4" />
                    Persona
                  </button>
                  <button
                    onClick={() => setActiveTabPM('features')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTabPM === 'features' 
                        ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Lightbulb className="w-4 h-4" />
                    Features
                  </button>
                  <button
                    onClick={() => setActiveTabPM('insights')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTabPM === 'insights' 
                        ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    Insights
                  </button>
                </div>
                
                {/* Tab Content */}
                <div className="p-4 h-[384px] overflow-y-auto">
                  {activeTabPM === 'persona' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <UserCircle className="w-4 h-4 text-indigo-600" />
                          <span className="font-medium text-sm text-gray-900">Primary User</span>
                        </div>
                        <p className="text-sm text-gray-700">"Busy Millennial"</p>
                        <p className="text-xs text-gray-500 mt-1">Age: 25-35 • Tech-savvy • Limited time</p>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-purple-600" />
                          <span className="font-medium text-sm text-gray-900">Use Case</span>
                        </div>
                        <p className="text-sm text-gray-700">Save & share favorite cat videos</p>
                        <p className="text-xs text-gray-500 mt-1">Primary goal: Quick content organization</p>
                      </div>
                    </div>
                  )}
                  
                  {activeTabPM === 'features' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-sm text-gray-900">Add "Favorite" functionality</span>
                          </div>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Must have</span>
                        </div>
                        <div className="text-xs text-gray-500">Priority: High • Impact: High</div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-sm text-gray-900">Implement "Custom Tags"</span>
                          </div>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Must have</span>
                        </div>
                        <div className="text-xs text-gray-500">Priority: High • Impact: Medium</div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-sm text-gray-900">Social sharing integration</span>
                          </div>
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Should have</span>
                        </div>
                        <div className="text-xs text-gray-500">Priority: Medium • Impact: Medium</div>
                      </div>
                    </div>
                  )}
                  
                  {activeTabPM === 'insights' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div className="flex items-start gap-3">
                          <Zap className="w-4 h-4 text-indigo-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">RICE Score Analysis</h4>
                            <p className="text-xs text-gray-600 mt-1">High Impact • Medium Effort • Priority: 8.5/10</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-start gap-3">
                          <Target className="w-4 h-4 text-purple-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">MoSCoW Prioritization</h4>
                            <p className="text-xs text-gray-600 mt-1">Must have: 2 • Should have: 1 • Could have: 3</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-start gap-3">
                          <Brain className="w-4 h-4 text-gray-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">AI Recommendation</h4>
                            <p className="text-xs text-gray-600 mt-1">Focus on core save/share features first</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Manager Copilot UI - White Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl text-gray-900"
          >
            {/* Header with Status Pills */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Project Manager Copilot</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>
              </div>
            </div>
            
            {/* Modern Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Panel - Chat Interface (3 cols) */}
              <div className="md:col-span-3 border-r border-gray-200">
                <div className="h-[420px] flex flex-col">
                  {/* AI Assistant Header */}
                  <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Sprint Assistant</h4>
                        <p className="text-xs text-gray-500">Powered by Alfred AI</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                    {/* User Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                        <p className="text-sm text-gray-900">Let's start sprint for Playlist MVP</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-purple-50 border border-purple-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                          <p className="text-sm mb-3 text-gray-900">Okay, Sprint "Playlist v1" created (May 6–May 17)</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              5 tasks assigned
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs flex items-center gap-1">
                              <GitBranch className="w-3 h-3" />
                              Auto-synced to Jira
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                        <p className="text-sm text-gray-900">Add standup for tomorrow</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-purple-50 border border-purple-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                          <p className="text-sm text-gray-900">Scheduled. Want me to track blockers?</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modern Input Area */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Ask about sprint progress, blockers, or tasks..."
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-purple-500 placeholder-gray-500 text-gray-900"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors">
                          <Send className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    {/* Quick Action */}
                    <div className="mt-3 flex justify-center">
                      <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        Generate Sprint Board
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Panel - Timeline & History (2 cols) */}
              <div className="md:col-span-2 bg-gray-50">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 bg-white">
                  <button
                    onClick={() => setActiveTabProject('sprints')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTabProject === 'sprints' 
                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    Sprints
                  </button>
                  <button
                    onClick={() => setActiveTabProject('blockers')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTabProject === 'blockers' 
                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4" />
                    Blockers
                  </button>
                  <button
                    onClick={() => setActiveTabProject('versions')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTabProject === 'versions' 
                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <FolderOpen className="w-4 h-4" />
                    Versions
                  </button>
                </div>
                
                {/* Tab Content */}
                <div className="p-4 h-[384px] overflow-y-auto">
                  {activeTabProject === 'sprints' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border border-gray-500 hover:border-purple-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <PlayCircle className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-sm text-gray-900">Sprint 1: Active</span>
                          </div>
                          <span className="text-xs text-gray-500">May 6-17</span>
                        </div>
                        <div className="text-xs text-gray-500">5 tasks • 2 in progress</div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200 opacity-75">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-sm text-gray-700">Sprint 0: Done</span>
                          </div>
                          <span className="text-xs text-gray-500">Apr 22-May 5</span>
                        </div>
                        <div className="text-xs text-gray-500">8 tasks completed</div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200 opacity-50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Archive className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-sm text-gray-600">Backlog grooming</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">12 items pending</div>
                      </div>
                    </div>
                  )}
                  
                  {activeTabProject === 'blockers' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-red-900">Dev B: Firebase bug</h4>
                            <p className="text-xs text-red-700 mt-1">Write permissions failing on playlist save</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-yellow-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-yellow-900">UI delay: 2 days</h4>
                            <p className="text-xs text-yellow-700 mt-1">Design review pending</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-start gap-3">
                          <MessageSquare className="w-4 h-4 text-gray-600 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Notes from Copilot</h4>
                            <p className="text-xs text-gray-600 mt-1">Consider alternative Firebase SDK version</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTabProject === 'versions' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900">Standup v2</span>
                          <span className="text-xs text-gray-500">Today</span>
                        </div>
                        <div className="text-xs text-gray-500">Updated meeting format</div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900">Standup v1</span>
                          <span className="text-xs text-gray-500">Yesterday</span>
                        </div>
                        <div className="text-xs text-gray-500">Initial template</div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900">Jira sync logs</span>
                          <span className="text-xs text-gray-500">2 days ago</span>
                        </div>
                        <div className="text-xs text-gray-500">Integration history</div>
                      </div>
                      
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm text-gray-900">Task reassigns</span>
                          <span className="text-xs text-gray-500">3 days ago</span>
                        </div>
                        <div className="text-xs text-gray-500">Resource optimization</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default DashboardSection;