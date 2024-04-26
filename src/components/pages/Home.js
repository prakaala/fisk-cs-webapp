import React from "react";
import { useRef, useState, useEffect } from "react";
import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "../../utils/initial-elements";

const onInit = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );



  const divRefs = useRef([]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    divRefs.current.forEach((div) => observer.observe(div));
  }, []);

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }

  return (
    <div class="home" style={{maxWidth: "1650px", margin: "0 auto"}}>
      <div className="home--title">
        Computer Science and Data Science at Fisk
      </div>

      <section class="section">
        <div class="grid">
          <div
            class="item item--medium animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[0] = el)}
          ></div>
          <div
            class="item item--large animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[1] = el)}
          ></div>
          <div
            class="item item--medium animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[2] = el)}
          ></div>
          <div
            class="item item--large animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[3] = el)}
          ></div>
          <div
            class="item item--full animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[4] = el)}
          ></div>
          <div
            class="item item--medium-1 animated-div"
            tabIndex={0}
            ref={(el) => (divRefs.current[5] = el)}
          ></div>
          {/* <div class="item item--medium"></div> */}
        </div>
      </section>
      <section
        className="home--aboutACM animated-div"
        tabIndex={0}
        ref={(el) => (divRefs.current[6] = el)}
      >
          <p className="heading">Why CS at Fisk?</p>
        <p className="description">
        At Fisk University, our legacy in the tech field spans back to the 1800s, and we continue to excel in providing opportunities and placements for our students. We serve and contribute to our students to thrive in today’s competitive market offering a diverse range of opportunities. Moreover, we have offered bridge programs with esteemed institutions like Vanderbilt, Case Western Reserve University and few more. Through partnership with leading tech companies, we ensure the growth and success of our students.  
        </p>
      </section>
      <section
        className="home--aboutChapter animated-div"
        tabIndex={0}
        ref={(el) => (divRefs.current[7] = el)}
      >
     

        <p className="description">
        Fisk University produces graduates from diverse backgrounds with the integrity and intellect required for substantive contributions to society. Our curriculum is grounded in the liberal arts. Our faculty and administrators emphasize the discovery and advancement of knowledge through research in the natural and social sciences, business and the humanities. We are committed to the success of scholars and leaders with global perspective.
        </p>
      </section>

      <section className="home--courses">
        <p className="home--courses--title">Courses Offered</p>
        <div className="home--courses--course-chart">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            attributionPosition="top-right"
            preventScrolling={false}
          >
            <MiniMap />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </section>
    </div>
  );
}
