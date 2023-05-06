import User from "./user.mjs";

export default class Docente extends User {
    constructor (nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudantes(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}.`
    }
}