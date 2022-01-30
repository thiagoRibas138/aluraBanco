import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Lais", 1234456300, "lais1234");
const diretor = new Diretor("Rodrigo", 10000, 1235464897);
diretor.cadastrarSenha("diretor123")
const gerente = new Gerente("Marcelo", 5000, 1235648779);
gerente.cadastrarSenha("gerente123")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "diretor123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "gerente123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "lais1234");



console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);





