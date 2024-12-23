document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('graph-container');

    const nodes = new vis.DataSet([
        { id: 1, label: 'Advertisements of Life Insurance and Annuities Model Regulation', color: { background: '#7ec8f7' } },

        { id: 2, label: 'Life Insurance Illustrations Model Regulation', color: { background: '#78d89a' } },
        { id: 3, label: 'Annuity Disclosure Model Regulation', color: { background: '#78d89a' } },
        { id: 4, label: 'Suitability in Annuity Transactions Model Regulation', color: { background: '#78d89a' } },
        { id: 5, label: 'Producer Licensing Model Act', color: { background: '#78d89a' } },
        { id: 6, label: 'Non-Guaranteed Elements', color: { background: '#f5a7a7' } },
        { id: 7, label: 'Institutional Advertising', color: { background: '#f5a7a7' } },
        { id: 8, label: 'Testimonial and Endorsement Regulations', color: { background: '#f5a7a7' } },
        { id: 9, label: 'Control Over Advertising Content', color: { background: '#f5a7a7' } },
        { id: 10, label: 'Definitions Related to Advertising', color: { background: '#f5a7a7' } },

        { id: 11, label: 'Unfair Trade Practices Act', color: { background: '#d3a8f9' } },
        { id: 12, label: 'Market Conduct Examination', color: { background: '#d3a8f9' } },
        { id: 13, label: 'Regulatory Compliance for Insurers', color: { background: '#d3a8f9' } },
        { id: 14, label: 'Advertising Misleading Terms', color: { background: '#d3a8f9' } },
        { id: 15, label: 'Safe Harbor Provisions in Advertising', color: { background: '#d3a8f9' } },
        { id: 16, label: 'Composite Advertisements and Ratings', color: { background: '#b0b9c7' } },
        { id: 17, label: 'State-Specific Adoption of Model Regulations', color: { background: '#b0b9c7' } },
        { id: 18, label: 'Amendments and Historical Changes to Regulations', color: { background: '#b0b9c7' } }
    ]);

    const edges = new vis.DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 1, to: 5 },
        { from: 2, to: 6 },
        { from: 3, to: 7 },
        { from: 4, to: 8 },
        { from: 5, to: 9 },
        { from: 1, to: 10 },
        { from: 1, to: 11 },
        { from: 1, to: 12 },
        { from: 1, to: 13 },
        { from: 1, to: 14 },
        { from: 1, to: 15 },
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
