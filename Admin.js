import User from "./user.mjs";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '20-01-1987')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JS', '20'))