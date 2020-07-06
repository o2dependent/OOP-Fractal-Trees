function Branch(begin,end) {
  this.begin = begin;
  this.end = end;
  this.cur = this.begin.copy();
  this.finished = false;
  this.branched = false;
  this.radius = 0;
  
  this.show = function(maxLen) {
    //on fractal break
    if(this.begin.dist(this.end) <= 4){
      // noStroke();
      // stroke(0,(abs(this.end.y - height)/height) * 155,0,50);
      // fill(0,50 + (abs(this.end.y - height)/height) * 155,0);
      // let max_radius = 5 + (abs(this.end.y - height)/height) * 10;
      // if(this.radius < max_radius){
      //   this.radius += max_radius * 0.1;
      // }
      // ellipse(this.end.x,this.end.y,this.radius,this.radius);
    }
    //to make green branches
    if(this.begin.dist(this.end) < 15){
      strokeWeight(2);
      stroke(34,139,34);
    }
    //else make bark
    else {
      if(this.begin.dist(this.end)/maxLen * 8 > 2) {
        strokeWeight(this.begin.dist(this.end)/maxLen * 8);
        stroke(139,69,19);
      }
      else{
        strokeWeight(2);
        stroke(136,69,19);
      }
    }
    if(this.finished){
      line(this.begin.x,this.begin.y,this.end.x,this.end.y);
    }
    else {
      let move = p5.Vector.sub(this.end,this.begin);
      //move rate percent
      move.mult(1);
      // move.mult(0.2);
      //move rate
      this.cur.add(move);
      line(this.begin.x,this.begin.y,this.cur.x,this.cur.y);
      if(round(this.cur.x) == round(this.end.x) && round(this.cur.y) == round(this.end.y)) {
        this.finished = true;
        print("Finished");
      }
    }
  }
  this.branchRight = function() {
    let dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(random(PI/8,PI/4));
    dir.mult(random(0.5,0.9));
    let newEnd = p5.Vector.add(this.end,dir);
    let right = new Branch(this.end,newEnd);
    return right;
  }
  this.branchLeft = function() {
    let dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(random(-PI/4,-PI/8));
    dir.mult(random(0.5,0.9));
    let newEnd = p5.Vector.add(this.end,dir);
    let left = new Branch(this.end,newEnd);
    return left;
  }
}
