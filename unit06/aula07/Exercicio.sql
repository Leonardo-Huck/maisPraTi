/* Dado o modelo relacional abaixo que visa resolver uma alocação de alunos.

Respondam as perguntas usando comandos SQL que atendem o solicitado:

ALUNO (aluno_id, nome, curso, nivel, idade)
TURMA (turma_id, nometurma, sala, horario)
MATRÍCULA (matricula_id, aluno_id, turma_id, nota_1, nota_2, nota_3, nota_fiscal, nr_faltas)*/

-- 1. Quais os nomes de todos os alunos?

SELECT aluno.nome
FROM aluno;

-- 2. Quais os números das matrículas dos alunos?
SELECT aluno.nome, matricula.matricula_id
FROM aluno
JOIN matricula ON aluno.aluno_id = matricula.aluno_id;

-- 3. Quais os números das matrículas dos alunos que não estão matriculados em uma turma?
SELECT aluno.nome, matricula.matricula_id
FROM aluno
LEFT JOIN matricula ON aluno.aluno_id = matricula.aluno_id
WHERE matricula.turma_id IS NULL;

-- 4. Quais os números dos alunos matriculados em uma turma do número "30"?
SELECT aluno.aluno_id, aluno.nome, matricula.matricula_id, turma.nometurma
FROM aluno
JOIN matricula ON aluno.aluno_id = matricula.aluno_id
JOIN turma ON turma.turma_id = matricula.turma_id
WHERE turma.nometurma = 'Turma 30';

-- 5. Qual o horário da turma do aluno "Perna Longa"?
SELECT aluno.aluno_id, aluno.nome, matricula.matricula_id, turma.nometurma, turma.horario
FROM aluno
JOIN matricula ON aluno.aluno_id = matricula.aluno_id
JOIN turma ON turma.turma_id = matricula.turma_id
WHERE aluno.nome = 'Perna Longa';

-- 6. Quais os nomes dos alunos  matriculados em uma turma de número "30"?
SELECT aluno.aluno_id, aluno.nome, matricula.matricula_id, turma.nometurma
FROM aluno
JOIN matricula ON aluno.aluno_id = matricula.aluno_id
JOIN turma ON turma.turma_id = matricula.turma_id
WHERE turma.nometurma = 'Turma 30';

-- 7. Quais os nomes dos alunos que não estão matriculados em uma turma de número "30"?
SELECT aluno.aluno_id, aluno.nome, matricula.matricula_id, turma.nometurma
FROM aluno
JOIN matricula ON aluno.aluno_id = matricula.aluno_id
JOIN turma ON turma.turma_id = matricula.turma_id
WHERE turma.nometurma != 'Turma 30';

-- 8. Quais os nomes das turmas com alunos com uma nota final maior que 8?
SELECT turma.nometurma, aluno.nome, matricula.nota_final
FROM turma
JOIN matricula ON turma.turma_id = matricula.turma_id
JOIN aluno ON aluno.aluno_id = matricula.aluno_id
WHERE matricula.nota_final > 8;

-- ---------------------------------------------------------------------------------------------------------------------------------------------

/* A Cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda.
 Uma comanda tem um código único, data, o número da mesa do cliente e o nome do cliente registrado. Nos itens da comanda é possivél relacionar
 vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do cardápio e a quantidade requisitada deste,
 não é possivel inserir o mesmo código de cardápio mais de uma vez na mesma comanda. No cardápio é apresentado o nome único do café, a descrição
 da sua composição e o preço unitário.
 
 Desenvolva os scripts SQL para atender cada uma das questões abaixo: */
 
 -- 1) Faça uma listagem do cardápio ordenada por nome;
 SELECT cardapio.* FROM cardapio ORDER BY cardapio.nomeCafe;
 
 /* 2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descrição, quantidade,
 preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;*/
 SELECT comanda.comanda_id, comanda.`data`, comanda.mesa, comanda.nomeCliente, pedido.cardapio_id, cardapio.nomeCafe, cardapio.composicao, 
 pedido.quantidade, cardapio.valorUnitario, (pedido.quantidade * cardapio.valorUnitario) AS valorTotal
 FROM comanda
 JOIN pedido ON pedido.comanda_comanda_id = comanda.comanda_id
 JOIN cardapio ON cardapio.cardapio_id = pedido.cardapio_id
 WHERE comanda.comanda_id = 3
 ORDER BY comanda.`data`, comanda.comanda_id, cardapio.nomeCafe;
 
 -- 3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
 SELECT comanda.*, sum((pedido.quantidade * cardapio.valorUnitario)) AS totalComanda
 FROM comanda
 JOIN pedido ON pedido.comanda_comanda_id = comanda.comanda_id
 JOIN cardapio ON cardapio.cardapio_id = pedido.cardapio_id
 GROUP BY comanda.comanda_id
 ORDER BY comanda.`data`;
 
 -- 4) Faça a mesma listagem das comandas da questão anterior (3), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
 SELECT comanda.*, sum((pedido.quantidade * cardapio.valorUnitario)) AS totalComanda
 FROM comanda
 JOIN pedido ON pedido.comanda_comanda_id = comanda.comanda_id
 JOIN cardapio ON cardapio.cardapio_id = pedido.cardapio_id
 GROUP BY comanda.comanda_id
 HAVING COUNT(DISTINCT pedido.cardapio_id) > 1
 ORDER BY comanda.`data`;
 
 -- 5) Qual o total de faturamento por data? Ordene por data esta consulta;
SELECT comanda.`data`, SUM(pedido.quantidade * cardapio.valorUnitario) AS totalFaturamento 
FROM comanda 
JOIN pedido ON pedido.comanda_comanda_id = comanda.comanda_id 
JOIN cardapio ON cardapio.cardapio_id = pedido.cardapio_id 
GROUP BY comanda.`data` 
ORDER BY comanda.`data`;

 -- 6) Quais são os cafés que nunca foram vendidos?;
 SELECT cardapio.*
 FROM cardapio
 LEFT JOIN pedido ON pedido.cardapio_id = cardapio.cardapio_id
 WHERE pedido.pedido_id IS NULL;

 -- 7) Escreva um script para excluir do cardápio os cafés que nunca foram vendidos;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM cardapio
WHERE cardapio_id NOT IN (
    SELECT DISTINCT cardapio_id
    FROM pedido
);

SET SQL_SAFE_UPDATES = 1;

 -- 8) Aumente em 10% o valor de todos os cafés da cafeteria;
UPDATE cardapio
SET valorUnitario = valorUnitario * 1.10;

 -- 9) Faça uma listagem do cardápio apresentando as seguintes colunas extras: quantidade de cafés vendidos e total vendido por café
 SELECT cardapio.*, count(pedido.cardapio_id) AS unidadesVendidas, (cardapio.valorUnitario * count(pedido.cardapio_id)) AS totalVendido
 FROM cardapio
 JOIN pedido ON pedido.cardapio_id = cardapio.cardapio_id
 GROUP BY pedido.cardapio_id;
 
 -- 10) Diminua 5% do valor de todos os cafés que tiveram mais que 50 quantidades vendidas;
 SET SQL_SAFE_UPDATES = 0;
 UPDATE cardapio
 SET valorUnitario = valorUnitario * 0.95
 WHERE cardapio_id IN (
    SELECT cardapio_id
    FROM pedido
    GROUP BY pedido.cardapio_id
    HAVING count(pedido.quantidade) > 50
 );
 SET SQL_SAFE_UPDATES = 1;
 
 -- ---------------------------------------------------------------------------------------------------------------------------------------------
/* Estudo de Caso - Escola de Informática

Uma escola de informática deseja manter um controle do seu funcionamento. 
Os alunos são organizados em turmas associadas a um tipo específico de curso.
As informações sobre uma turma são a quantidade de alunos, horário da aula, duração da aula, data inicial, data final e tipo de curso. 
Cada turma é orientada por um único professor para o qual são cadastrados CPF, nome, data de nascimento, titulação e 
todos os telefones possíveis para sua localização. Um professor pode orientar várias turmas que podem ser de diferentes cursos. 
Para cada turma existe um aluno monitor que auxilia o professor da turma, sendo que um aluno pode ser monitor no máximo em uma turma. 
Os dados cadastrados dos alunos são: código de matricula, data de matrícula, nome, endereço, telefone, data de nascimento, altura e peso. 
Um aluno pode estar matriculado em várias turmas se deseja realizar cursos diferentes e para cada matrícula é mantido um registro das ausências
do aluno.*/


/* 1) Crie o modelo ER físico que representa a Escola de Informática descrita. 
 este modelo deve conter todos os elementos/objetos de banco de dados que atendam as restrições descritas no enunciado:
 tabelas, colunas, tipos, nulidade, chaves primárias, chaves estrangeiras com cascade e índices únicos. 
 Crie campos adicionais se julgares conveniente;*/

-- Está no arquivo.

-- 2) Gere os scripts de criação da base de dados no MySQL;

-- Está no arquivo SQL script.

-- 3) Inserir com SQL ao menos 3 tuplas em cada uma das tabelas criadas;

-- Está no arquivo Insert.

-- 4) Fazer consultas SQL que respondam as seguintes questões:
-- 4.1) Listar os dados dos alunos;
-- 4.2) Listar os dados dos alunos e as turmas que eles estão matriculados;
-- 4.3) Listar os alunos que não possuem faltas;
-- 4.4) Listar os professores e a quantidade de turmas que cada um leciona;
-- 4.5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;
-- 4.6) Listar os nomes dos professores e a turma que cada um leciona com maior número de alunos;  
-- 4.7) Listar os nomes dos alunos ordenados pela turma que estes possuem maior número de faltas. Deve aparecer apenas a turma que cada um dos alunos tem maior quantidade de faltas;
-- 4.8) Listar a quantidade média de alunos por curso.
-- 5) Fazer alterações nas tabelas:
-- 5.1) Alterar o nome de todos os professores para maiúsculo;
-- 5.2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
-- 6) Excluir as ausências dos alunos nas turmas que estes são monitores;
