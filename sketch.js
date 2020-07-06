let tree = [];
let oldTree = [];
let trees = [];
let leaves = [];
let count = 0;
let len = 50;

function setup() {
	createCanvas(windowWidth, windowHeight-50);
}

function mousePressed() {
	if(trees.length > 0) {
		for(let i = 0;i < tree.length;i++) {
			tree[i].finished = true;
			tree[i].branched = true;
		}
	}
	let newTree = new Array();
	tree = newTree;
	trees.push(newTree);
	let a = createVector(mouseX,mouseY);
	let b = createVector(mouseX,mouseY - len);
	let root = new Branch(a,b);
	tree[0] = root;
}

function draw() {
	background(51);
	for(let j = 0; j < trees.length;j++) {
		for(let i = 0; i < trees[j].length;i++) {
			trees[j][i].show(len);
		}
	}
	// for(let i = 0; i < leaves.length;i++) {
	// 	fill(255,0,100,80);
	// 	noStroke();
	// 	ellipse(leaves[i].x,leaves[i].y,10,10);
	// }
	for(let i = 0;i < trees.length;i++) {
		drawTree(trees[i]);
	}
}

function drawTree(_tree) {
	for(let i = _tree.length-1; i >= 0; i--) {
		if(_tree[i].finished){
			if(!_tree[i].branched && (abs(round(_tree[i].end.x) - round(_tree[i].begin.x)) > 4 || abs(round(_tree[i].end.y) - round(_tree[i].begin.y)) > 4)){
				_tree.push(tree[i].branchLeft());
				_tree.push(tree[i].branchRight());
				_tree[i].branched = true;
			}
		}
	}
}
