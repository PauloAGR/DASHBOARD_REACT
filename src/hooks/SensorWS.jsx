import { useEffect, useRef, useState } from "react";

let targetUrl = "ws://"+window.location.hostname+"/ws";

export default function SensorWS(props) {
  const [isPaused, setPause] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current =
      props.url != null
        ? new WebSocket(props.url)
        : new WebSocket(targetUrl);
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      if (isPaused) return;
      const message = JSON.parse(e.data);
      console.log("e", message);
    };
  }, [isPaused]);

  return (
    <div>
      <button onClick={() => setPause(!isPaused)}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
}
