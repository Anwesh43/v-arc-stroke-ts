const w : number = window.innerWidth 
const h : number = window.innerHeight 
const scGap : number = 0.02 
const parts : number = 4 
const strokeFactor : number = 90 
const sizeFactor : number = 5.9 
const delay : number = 20 
const colors : Array<string> = [
    "#f44336",
    "#9C27B0",
    "#00C853",
    "#E65100",
    "#01579B"
]
const backColor : string = "#bdbdbd"
const deg : number = -Math.PI / 4 
const rot : number = 270 

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}
