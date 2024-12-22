class Rectangle {
    constructor(width, height, color){//initializing 
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4, "red") //instantiating
 const area = rect.area();
 const color = rect.paint();
 console.log(area);