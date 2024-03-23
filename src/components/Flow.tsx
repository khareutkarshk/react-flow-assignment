"use client";
import React, { useCallback } from 'react'
import 'reactflow/dist/style.css';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
    Position,
    Handle,
    MarkerType,
    getBezierPath, getMarkerEnd, EdgeProps,
} from 'reactflow';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';
const CustomNodeComponent = ({ id, data }: any) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const [showTooltip, setShowTooltip] = React.useState(false);
    if (id === 'dummy') {
        return (
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: '1px solid #000',
                    position: 'relative',
                    left: '-5px',
                    top: '-5px'
                }}
            >
                <Handle type="source" position={Position.Right} id="a" style={{ background: '#000', borderRadius: '50%', width: '10px', height: '10px', opacity: 0 }} />
            </div>
        );
    }
    if (id === 'dummy-0') {
        return (
            <div
                className=''
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: '1px solid #000',
                    position: 'relative',
                    left: '-5px',
                    top: '-5px',
                    opacity: '0'
                }}
            >
                <Handle type="target" position={Position.Left} id="a" style={{ background: '#000', borderRadius: '50%', width: '10px', height: '10px', opacity: 0 }} />
            </div>
        );
    }
    return (
        <div className={`w-32 ${data.color? data.color : 'bg-slate-50 text-gray-700'} text-white text-sm flex justify-center border-2 px-1 py-1 border-gray-600`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}>
            {showTooltip && (
                <div className="custom-tooltip absolute z-10 bottom-full mb-2 p-2 bg-gray-700 text-white rounded">
                    {/* bar graph here */}
                    <Bar
                        data={{
                            labels,
                            datasets: [
                                {
                                    label: '1',
                                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                                    borderColor: 'rgb(255, 99, 132)',
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                },
                                {
                                    label: '2',
                                    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                                    borderColor: 'rgb(53, 162, 235)',
                                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                },
                            ],
                        }}
                        options={{
                            indexAxis: 'y' as const,
                            elements: {
                                bar: {
                                    borderWidth: 2,
                                },
                            },
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'right' as const,
                                    labels: {
                                        color: 'white'
                                    }
                                },
                                title: {
                                    display: true,
                                    text: 'Annual Report',
                                    color: 'white',
                                },
                                
                            },
                            scales: {
                                y: {
                                  ticks: {
                                    color: 'white',
                                  },
                                },
                                x: {
                                  ticks: {
                                    color: 'white',
                                  },
                                },
                              },
                        }}
                    />

                    <span className="absolute top-full w-3 h-3 text-white bg-gray-700 left-1/2 transform -translate-x-1/2 rotate-45"></span>
                </div>
            )}
            <Handle type="source" position={Position.Left} id="a" className='opacity-0' />
            {data.label}
            <Handle type="source" position={Position.Right} id="b" className='opacity-0' />
            <Handle type="target" position={Position.Left} id="a" className='opacity-0' />

        </div>
    );
};


const initialNodes = [
    //level one
    {
        id: 'level-one-1',
        type: 'custom',
        data: { label: 'Research', color: 'bg-blue-700' },
        position: { x: 0, y: 100 },
    },
    {
        id: 'level-one-2',
        type: 'custom',

        data: { label: 'Planning', color: 'bg-teal-500' },
        position: { x: 0, y: 200 },
    },
    {
        id: 'level-one-3',
        type: 'custom',

        data: { label: 'Desining', color: 'bg-yellow-500'},
        position: { x: 0, y: 300 },
    },
    {
        id: 'level-one-4',
        type: 'custom',

        data: { label: 'Manufacturing', color: 'bg-red-500'},
        position: { x: 0, y: 400 },
    },
    {
        id: 'level-one-5',
        type: 'custom',

        data: { label: 'Sales/Marketing', color: 'bg-green-500'},
        position: { x: 0, y: 500 },
    },
    {
        id: 'dummy',
        type: 'custom',
        data: { label: '' },
        position: { x: -100, y: 316 },
    },

    // level two
    {
        id: 'level-two-1',
        type: 'custom',
        data: { label: 'External', color: 'bg-blue-700' },
        position: { x: 300, y: 75 },
    },
    {
        id: 'level-two-2',
        type: 'custom',
        data: { label: 'Internal', color: 'bg-blue-700' },
        position: { x: 300, y: 125 },
    },
    {
        id: 'level-two-3',
        type: 'custom',
        data: { label: 'PRD', color: 'bg-teal-500' },
        position: { x: 300, y: 175 },
    },
    {
        id: 'level-two-4',
        type: 'custom',
        data: { label: 'Spece', color: 'bg-teal-500' },
        position: { x: 300, y: 225 },
    },
    {
        id: 'level-two-5',
        type: 'custom',
        data: { label: 'Hardware',  color: 'bg-yellow-500' },
        position: { x: 300, y: 275 },
    },
    {
        id: 'level-two-6',
        type: 'custom',
        data: { label: 'Software',  color: 'bg-yellow-500' },
        position: { x: 300, y: 325 },
    },
    {
        id: 'level-two-7',
        type: 'custom',
        data: { label: 'Material', color: 'bg-red-500' },
        position: { x: 300, y: 375 },
    },
    {
        id: 'level-two-8',
        type: 'custom',
        data: { label: 'Production', color: 'bg-red-500' },
        position: { x: 300, y: 425 },
    },
    {
        id: 'level-two-9',
        type: 'custom',
        data: { label: 'Online', color: 'bg-green-500' },
        position: { x: 300, y: 475  }
    },
    {
        id: 'level-two-10',
        type: 'custom',
        data: { label: 'Dealership',  color: 'bg-green-500' },
        position: { x: 300, y: 525},

    },

    // level three

    {
        id: 'level-three-1',
        type: 'custom',
        data: { label: 'B2C', color: 'bg-blue-700' },
        position: { x: 600, y: 50 },
    },
    {
        id: 'level-three-2',
        type: 'custom',
        data: { label: 'B2C', color: 'bg-blue-700' },
        position: { x: 600, y: 100 },
    },

    // level four

    {
        id: 'level-four-1',
        type: 'custom',
        data: { label: 'Online', color: 'bg-blue-700' },
        position: { x: 900, y: -25 },
    },
    {
        id: 'level-four-2',
        type: 'custom',
        data: { label: 'Interview', color: 'bg-blue-700' },
        position: { x: 900, y: 25 },
    },
    {
        id: 'level-four-3',
        type: 'custom',
        data: { label: 'Public Data', color: 'bg-blue-700' },
        position: { x: 900, y: 75 },
    },
    {
        id: 'level-four-4',
        type: 'custom',
        data: { label: 'Health', color: 'bg-blue-700' },
        position: { x: 900, y: 125 },
    },
    {
        id: 'dummy-0',
        type: 'custom',
        data: { label: 'endNode', color: 'bg-blue-700' },
        position: { x: 1200, y: 60 },
    }


];

const marker = {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: 'black',
}

const initialEdges = [
    {
        id: 'e1-1-2',
        source: 'level-one-1',
        sourceHandle: 'a',
        target: 'level-one-2',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e1-2-1',
        source: 'level-one-2',
        sourceHandle: 'a',
        target: 'level-one-1',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }


    },
    {
        id: 'e1-2-3',
        source: 'level-one-2',
        sourceHandle: 'a',
        target: 'level-one-4',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }


    },
    {
        id: 'dummy-level-one-3',
        source: 'dummy',
        sourceHandle: 'b',
        target: 'level-one-3',
        targetHandle: 'a',
        type: 'step',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e1-3-5',
        source: 'level-one-4',
        sourceHandle: 'a',
        target: 'level-one-5',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }


    },

    // level two
    {
        id: 'e2-1-2',
        source: 'level-one-1',
        sourceHandle: 'b',
        target: 'level-two-2',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-1-1',
        source: 'level-one-1',
        sourceHandle: 'b',
        target: 'level-two-1',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-2-3',
        source: 'level-one-2',
        sourceHandle: 'b',
        target: 'level-two-3',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-2-4',
        source: 'level-one-2',
        sourceHandle: 'b',
        target: 'level-two-4',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-3-5',
        source: 'level-one-3',
        sourceHandle: 'b',
        target: 'level-two-5',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-3-6',
        source: 'level-one-3',
        sourceHandle: 'b',
        target: 'level-two-6',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-4-7',
        source: 'level-one-4',
        sourceHandle: 'b',
        target: 'level-two-7',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-4-8',
        source: 'level-one-4',
        sourceHandle: 'b',
        target: 'level-two-8',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-5-9',
        source: 'level-one-5',
        sourceHandle: 'b',
        target: 'level-two-9',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e2-5-10',
        source: 'level-one-5',
        sourceHandle: 'b',
        target: 'level-two-10',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },

    // level three
    {
        id: 'e3-1-2',
        source: 'level-two-1',
        sourceHandle: 'b',
        target: 'level-three-1',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e3-1-2',
        source: 'level-two-1',
        sourceHandle: 'b',
        target: 'level-three-2',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }


    },

    // level four
    {
        id: 'e4-1-1',
        source: 'level-three-1',
        sourceHandle: 'b',
        target: 'level-four-1',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e4-1-2',
        source: 'level-three-1',
        sourceHandle: 'b',
        target: 'level-four-2',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e4-1-3',
        source: 'level-three-1',
        sourceHandle: 'b',
        target: 'level-four-3',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e4-1-4',
        source: 'level-three-1',
        sourceHandle: 'b',
        target: 'level-four-4',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },

    {
        id: 'e5-dummy-1',
        source: 'level-four-1',
        sourceHandle: 'b',
        target: 'dummy-0',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
        style: { stroke: 'black' }

    },
    {
        id: 'e5-dummy-2',
        source: 'level-four-4',
        sourceHandle: 'b',
        target: 'dummy-0',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,       
        style: { stroke: 'black' }

    },


];

function Flow() {
    const [nodes, _, onNodesChange] = useNodesState<any>(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params: any) => setEdges((els) => addEdge(params, els)), []);

    const nodeTypes = {
        custom: CustomNodeComponent,
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                maxZoom={1}
            // attributionPosition="bottom-left"
            >
            </ReactFlow>
        </div>

    );
}

export default Flow
