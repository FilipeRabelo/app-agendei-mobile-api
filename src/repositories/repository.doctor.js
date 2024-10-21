// faz a conexão com o bd - acessa os dados
// É QUEM SE PREOCUPA COMO FAZ O ACESSO AO BD
// SÓ MUDA AQUI
// nao tem acesso ao response e a req
// acesso ao banco e trás o dados - DEVOLVE OS DADOS
async function Listar() {                           // recebe os métodos do route

  const doctors = [
    { id: 1, name: 'Rafael', specialty: 'Neuro', icon: 'M' },
    { id: 2, name: 'Filipe', specialty: 'Cardio', icon: 'M' },
    { id: 3, name: 'Giulia', specialty: 'Pediatria', icon: 'F' },
    { id: 4, name: 'Daniela', specialty: 'Uro', icon: 'F' }
  ]

  return doctors;
}

export default { Listar };