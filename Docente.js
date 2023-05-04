import User from "./user.mjs";

class Docente extends User {
    constructor (nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudantes(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}.`
    }
}

const novoDocente = new Docente('Mariana', 'm@m.com', '10-01-2022')
console.log(novoDocente);
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudantes('Juliana', 'JS'))