import React, { useEffect, useRef } from 'react';
import { Application, Graphics } from 'pixi.js';

const CursorComponent = () => {
  const pixiRef = useRef(null);

  useEffect(() => {
    const app = new Application({
      antialias: true,
      backgroundColor: 0x1099bb,
      resizeTo: window,
    });

    pixiRef.current.appendChild(app.view);

    const circle = new Graphics();
    circle.beginFill(0xffffff);
    circle.lineStyle(1, 0x111111, 0.87);
    circle.drawCircle(0, 0, 8);
    circle.endFill();
    app.stage.addChild(circle);

    circle.position.set(app.screen.width / 2, app.screen.height / 2);

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;

    app.stage.on('pointermove', (event) => {
      circle.position.copyFrom(event.data.global);
    });

    return () => {
      app.destroy(true, true);
    };
  }, []);

  return <div ref={pixiRef} />;
};

export default CursorComponent;
