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


const CustomNodeComponent = ({ id, data }: any) => {
    if (id === 'dummy') {
        return (
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    //   background: '#000',
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

    if (data.label === '') {
        return <div style={{ width: 0, height: 0 }} />;
    }
    return (
        <div style={{ border: '1px solid #000', padding: '5px' }}>
            <Handle type="source" position={Position.Left} id="a" style={{ background: '#555' }} />
            {data.label}
            <Handle type="source" position={Position.Right} id="b" style={{ background: '#555' }} />
            <Handle type="target" position={Position.Left} id="a" style={{ background: '#555' }} />

        </div>
    );
};


const initialNodes = [
    //level one
    {
        id: 'level-one-1',
        type: 'custom',
        data: { label: 'Research' },
        position: { x: 0, y: 100 },
    },
    {
        id: 'level-one-2',
        type: 'custom',

        data: { label: 'Planning' },
        position: { x: 0, y: 200 },
    },
    {
        id: 'level-one-3',
        type: 'custom',

        data: { label: 'Desining' },
        position: { x: 0, y: 300 },
    },
    {
        id: 'level-one-4',
        type: 'custom',

        data: { label: 'Manufacturing' },
        position: { x: 0, y: 400 },
    },
    {
        id: 'level-one-5',
        type: 'custom',

        data: { label: 'Sales/Marketing' },
        position: { x: 0, y: 500 },
    },
    {
        id: 'dummy',
        type: 'custom',
        data: { label: '' },
        position: { x: -100, y: 322.7 },
    },

    // level two
    {
        id: 'level-two-1',
        type: 'custom',
        data: { label: 'External' },
        position: { x: 250, y: 75 },
    },
    {
        id: 'level-two-2',
        type: 'custom',
        data: { label: 'Internal' },
        position: { x: 250, y: 125 },
    },
    {
        id: 'level-two-3',
        type: 'custom',
        data: { label: 'PRD' },
        position: { x: 250, y: 175 },
    },
    {
        id: 'level-two-4',
        type: 'custom',
        data: { label: 'Spece' },
        position: { x: 250, y: 225 },
    },
    {
        id: 'level-two-5',
        type: 'custom',
        data: { label: 'Hardware' },
        position: { x: 250, y: 275 },
    },
    {
        id: 'level-two-6',
        type: 'custom',
        data: { label: 'Software' },
        position: { x: 250, y: 325 },
    },
    {
        id: 'level-two-7',
        type: 'custom',
        data: { label: 'Material' },
        position: { x: 250, y: 375 },
    },
    {
        id: 'level-two-8',
        type: 'custom',
        data: { label: 'Production' },
        position: { x: 250, y: 425 },
    },
    {
        id: 'level-two-9',
        type: 'custom',
        data: { label: 'Online' },
        position: { x: 250, y: 475 },
    },
   {
    id: 'level-two-10',
    type: 'custom',
    data: { label: 'Dealership' },
    position: { x: 250, y: 525 },

   }



];

const marker = {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
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

    },
    {
        id: 'e1-2-1',
        source: 'level-one-2',
        sourceHandle: 'a',
        target: 'level-one-1',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,

    },
    {
        id: 'e1-2-3',
        source: 'level-one-2',
        sourceHandle: 'a',
        target: 'level-one-4',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,

    },
    {
        id: 'dummy-level-one-3',
        source: 'dummy',
        sourceHandle: 'b',
        target: 'level-one-3',
        targetHandle: 'a',
        type: 'step',
        markerEnd: marker,
    },
    {
        id: 'e1-3-5',
        source: 'level-one-4',
        sourceHandle: 'a',
        target: 'level-one-5',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,

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
    },
    {
        id: 'e2-1-1',
        source: 'level-one-1',
        sourceHandle: 'b',
        target: 'level-two-1',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-2-3',
        source: 'level-one-2',
        sourceHandle: 'b',
        target: 'level-two-3',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-2-4',
        source: 'level-one-2',
        sourceHandle: 'b',
        target: 'level-two-4',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-3-5',
        source: 'level-one-3',
        sourceHandle: 'b',
        target: 'level-two-5',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-3-6',
        source: 'level-one-3',
        sourceHandle: 'b',
        target: 'level-two-6',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-4-7',
        source: 'level-one-4',
        sourceHandle: 'b',
        target: 'level-two-7',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-4-8',
        source: 'level-one-4',
        sourceHandle: 'b',
        target: 'level-two-8',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-5-9',
        source: 'level-one-5',
        sourceHandle: 'b',
        target: 'level-two-9',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
    },
    {
        id: 'e2-5-10',
        source: 'level-one-5',
        sourceHandle: 'b',
        target: 'level-two-10',
        targetHandle: 'a',
        type: 'smoothstep',
        markerEnd: marker,
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
                maxZoom={0.7}
            // attributionPosition="bottom-left"
            >
            </ReactFlow>
        </div>

    );
}

export default Flow
