class LevelHandler {
    constructor(levelImages) {
        this.level = 0;
        this.levelImages = levelImages;
    }

    nextLevel() {
        this.level++;
    }

    getCurrentImage() {
        
        let index = this.level;
        if (this.levelImages.length <= index) {
            index = this.levelImages.length - 1;
        } 
        
        return this.levelImages[index];
    }
}

export default LevelHandler;