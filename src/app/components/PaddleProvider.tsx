"use client";
import { useEffect, useState } from "react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";

export default function PaddleProvider() {
  const [paddle, setPaddle] = useState<Paddle>();
  useEffect(() => {
    initializePaddle({
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
      checkout: { settings: { displayMode: "overlay" } },
    }).then(setPaddle);
  }, []);
  useEffect(() => { if (paddle) (window as any).paddle = paddle; }, [paddle]);
  return null;
}
