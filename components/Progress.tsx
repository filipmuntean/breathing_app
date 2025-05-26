"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Calendar, Clock, AlertCircle } from "lucide-react";

interface DailyProgress {
  date: string;
  totalSeconds: number;
}

const Progress: React.FC = () => {
  const { data: session, status } = useSession();
  const [dailyProgress, setDailyProgress] = useState<DailyProgress[]>([]);
  const [totalTime, setTotalTime] = useState({ minutes: 0, seconds: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user progress data
  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setIsLoading(true);
      
      // Fetch real data from your API endpoint
      fetch('/api/user/breathing-sessions')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch breathing session data');
          }
          return response.json();
        })
        .then(data => {
          // Process the data into daily totals
          const sessionsByDay = new Map<string, number>();
          
          // Initialize last 7 days with 0 seconds
          for (let i = 0; i <= 6; i++) {
            sessionsByDay.set(getDateString(-i), 0);
          }
          
          // Aggregate session times by day
          if (data.sessions && Array.isArray(data.sessions)) {
            data.sessions.forEach((session: any) => {
              const sessionDate = new Date(session.createdAt).toISOString().split('T')[0];
              if (sessionsByDay.has(sessionDate)) {
                sessionsByDay.set(
                  sessionDate, 
                  (sessionsByDay.get(sessionDate) || 0) + (session.duration || 0)
                );
              }
            });
          }
          
          // Convert Map to array of DailyProgress objects
          const progressData: DailyProgress[] = Array.from(sessionsByDay.entries())
            .map(([date, totalSeconds]) => ({ date, totalSeconds }))
            .sort((a, b) => b.date.localeCompare(a.date));
          
          setDailyProgress(progressData);
          
          // Calculate total time
          const totalSeconds = progressData.reduce((acc, day) => acc + day.totalSeconds, 0);
          setTotalTime({
            minutes: Math.floor(totalSeconds / 60),
            seconds: totalSeconds % 60
          });
        })
        .catch(error => {
          console.error('Error fetching breathing sessions:', error);
          // Fallback to empty data if API fails
          const emptyData = Array.from({ length: 7 }, (_, i) => ({
            date: getDateString(-i),
            totalSeconds: 0
          }));
          setDailyProgress(emptyData);
          setTotalTime({ minutes: 0, seconds: 0 });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [status, session]);

  // Helper function to get date string for n days ago
  const getDateString = (daysAgo: number): string => {
    const date = new Date();
    date.setDate(date.getDate() + daysAgo);
    return date.toISOString().split('T')[0];
  };

  // Calculate the maximum progress value for scaling
  const maxProgress = Math.max(...dailyProgress.map(day => day.totalSeconds), 1);

  // Format time for display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  // Get color based on percentage of max value
  const getColorClass = (seconds: number): string => {
    const percentage = (seconds / maxProgress) * 100;
    
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-green-400";
    if (percentage >= 40) return "bg-green-300";
    if (percentage >= 20) return "bg-green-200";
    return "bg-green-100";
  };

  if (isLoading) {
    return (
      <div className="w-full p-6 bg-[#fefae0] rounded-xl shadow-md">
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (status !== "authenticated") {
    return (
      <div className="w-full p-6 bg-[#fefae0] rounded-xl shadow-md text-[#283618]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center h-40">
          <AlertCircle className="w-12 h-12" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Sign in to track your progress</h3>
            <p className="text-gray-600">Your breathing session data will be saved and visualized here</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-[#fefae0] rounded-xl shadow-md text-[#283618]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Your Breathing Journey</h2>
        <div className="flex items-center space-x-2 text-blue-600">
          <Clock className="w-5 h-5" />
          <span className="font-medium">
            Total: {totalTime.minutes} minutes {totalTime.seconds > 0 ? `${totalTime.seconds} seconds` : ''}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-600 mb-3 flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          Last 7 Days
        </h3>
        
        <div className="grid grid-cols-7 gap-2">
          {dailyProgress.map((day) => (
            <div key={day.date} className="flex flex-col items-center">
              <div className="relative w-full pt-[100%]">
                <div 
                  className={`absolute inset-0 rounded-md ${getColorClass(day.totalSeconds)} transition-all duration-300 hover:scale-105`}
                  style={{ 
                    height: `${Math.max((day.totalSeconds / maxProgress) * 100, 10)}%`,
                    top: 'auto'
                  }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-xs font-medium">{formatTime(day.totalSeconds)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>Taking time to breathe has given you {totalTime.minutes} minutes of relaxation this week.</p>
        <p className="text-blue-600 font-medium mt-1">Keep practicing for greater benefits!</p>
      </div>
    </div>
  );
};

export default Progress;