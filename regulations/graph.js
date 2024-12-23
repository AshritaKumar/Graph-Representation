document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('graph-container');

    const nodes = new vis.DataSet([
        { id: 1, label: 'Regulation A: Life Insurance Illustrations Model Regulation' },
        { id: 2, label: 'Regulation B: Annuity Disclosure Model Regulation' },
        { id: 3, label: 'NAIC Model Regulation on Non-Guaranteed Elements' },
        { id: 4, label: 'Unfair Trade Practices Act' },
        { id: 5, label: 'Suitability in Annuity Transactions Model Regulation' },
        { id: 6, label: 'Producer Licensing Model Act' },
        { id: 7, label: 'Actuarial Standards of Practice (ASOP)' },
        { id: 8, label: 'Model Unfair Trade Practices Act' },
        { id: 9, label: 'NAIC Suitability Model Regulation' },
        { id: 10, label: 'NAIC Producer Licensing Model Regulation' },
        { id: 11, label: 'ASOP No. 24' },
        { id: 12, label: 'NAIC Model Act' },
        { id: 13, label: 'Regulation on Training Requirements' },
        { id: 14, label: 'Continuing Education Requirements' },
        { id: 15, label: 'Specific Guidelines on Non-Guaranteed Elements' },
        { id: 16, label: 'Specific Provisions' },
        { id: 17, label: 'Curriculum Standards' },
        { id: 18, label: 'State-Specific Regulations' }
    ]);
    
    const edges = new vis.DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 2, to: 5 },
        { from: 2, to: 6 },
        { from: 3, to: 7 },
        { from: 4, to: 8 },
        { from: 5, to: 9 },
        { from: 6, to: 10 },
        { from: 7, to: 11 },
        { from: 8, to: 12 },
        { from: 9, to: 13 },
        { from: 10, to: 14 },
        { from: 11, to: 15 },
        { from: 12, to: 16 },
        { from: 13, to: 17 },
        { from: 14, to: 18 }
    ]);

    const data = {
        nodes: nodes,
        edges: edges
    };

    const options = {
        nodes: {
            shape: 'box',
            size: 20,
            font: { size: 16 },
            margin: 20 
        },
        edges: {
            arrows: 'to',
            smooth: { type: 'continuous' }
        },
        physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            stabilization: { iterations: 300 }, 
            forceAtlas2Based: {
                gravitationalConstant: -200,
                centralGravity: 0.01,        
                springLength: 150,           
                springConstant: 0.04         
            }
        },
        layout: {
            improvedLayout: true
        }
    };

    const network = new vis.Network(container, data, options);

    network.on("click", function (params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0]; 
            const clickedNode = nodes.get(nodeId); 

            console.log(`Clicked on Node: ${clickedNode.label}`);


            alert(`Node ID: ${nodeId}\nLabel: ${clickedNode.label}`);
        }
    });
});
