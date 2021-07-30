export class Commentaire{
    id: number ;
    userName: string ;
    userPdp: string ;
    contenu: string ;

    constructor(id = 0, userName = "", userPdp = "", contenu = ""){
        this.id = id ;
        this.userName = userName ;
        this.userPdp = userPdp ;
        this.contenu = contenu ;
    }
}