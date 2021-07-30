export class Publication{
    id: number ;
    userName: string ;
    userPdp: string ;
    imagePath: string
    description: string ;

    constructor(id = 0, userName = "", userPdp = "", imagePath = "", description = ""){
        this.id = id ;
        this.userName = userName ;
        this.userPdp = userPdp ;
        this.imagePath = imagePath ;
        this.description = description ;
    }
}