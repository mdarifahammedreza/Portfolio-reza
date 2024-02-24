"use client";
import { Button } from "../ui/moving-border";

export function Btn({ text }) {
  return (
    <div>
      <Button borderRadius="1rem" className="bg-transparent">
        {text}
      </Button>
    </div>
  );
}
