"use client";
import Countdown from "react-countdown";
import { AlarmClockCheck } from "lucide-react";
import { div } from "framer-motion/client";

const endingDate = new Date("2026-02-28");

const CountDown = () => {
  return (
    <div className="flex gap-4">
      <Countdown
        className="font-bold text-5xl text-muted-foreground"
        date={endingDate}
      />
      <AlarmClockCheck className="bg-red-400 text-gray-100 rounded p-1 w-8 h-8 dark:bg-red-500" />
    </div>
  );
};

export default CountDown;
