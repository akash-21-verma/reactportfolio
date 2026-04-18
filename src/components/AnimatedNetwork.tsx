"use client";
import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
};

export default function AnimatedNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);

  const NODE_COUNT = 40;
  const MAX_DISTANCE = 120;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    // Initialize nodes
    nodesRef.current = Array.from({ length: NODE_COUNT }).map(() => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return { x, y, baseX: x, baseY: y };
    });

    let time = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      time += 0.01;

      const nodes = nodesRef.current;

      // Update node positions (organic movement)
      nodes.forEach((node, i) => {
        node.x =
          node.baseX +
          Math.sin(time + i) * 10 +
          Math.cos(time * 0.5 + i) * 5;

        node.y =
          node.baseY +
          Math.cos(time + i) * 10 +
          Math.sin(time * 0.5 + i) * 5;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const opacity = 1 - dist / MAX_DISTANCE;

            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`; // purple

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#a855f7";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-80"
      />
    </div>
  );
}