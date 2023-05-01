const user = {
    nome: "Diego",
    email: "diego-paulucci@hotmail.com",
    nascimento: "1988/06/20",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "mariana@hotmail.com",
    role: "admin",
    ativo: true,
    criarCurso(){
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();