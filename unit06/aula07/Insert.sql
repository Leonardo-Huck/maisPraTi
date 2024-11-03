-- Inserindo dados na tabela aluno
INSERT INTO `dbescola`.`aluno` (`nome`, `curso`, `nivel`, `idade`) VALUES
('João Silva', 'Administração', 'Graduação', 20),
('Maria Oliveira', 'Engenharia', 'Graduação', 22),
('Carlos Souza', 'Direito', 'Graduação', 21),
('Ana Paula', 'Medicina', 'Graduação', 23),
('Pedro Santos', 'Arquitetura', 'Graduação', 24),
('Lucas Lima', 'Psicologia', 'Graduação', 22),
('Mariana Costa', 'Biologia', 'Graduação', 21),
('Fernanda Almeida', 'Química', 'Graduação', 20),
('Rafael Ferreira', 'Física', 'Graduação', 23),
('Juliana Rocha', 'Matemática', 'Graduação', 22),
('Gabriel Martins', 'História', 'Graduação', 21),
('Larissa Silva', 'Geografia', 'Graduação', 24),
('Vinícius Pereira', 'Filosofia', 'Graduação', 22),
('Beatriz Souza', 'Sociologia', 'Graduação', 23),
('Renato Oliveira', 'Educação Física', 'Graduação', 21),
('Camila Santos', 'Letras', 'Graduação', 20),
('Thiago Costa', 'Informática', 'Graduação', 22),
('Isabela Lima', 'Enfermagem', 'Graduação', 23),
('Perna Longa', 'Artes', 'Graduação', 21),
('Sofia Mendes', 'Música', 'Graduação', 24);

-- Inserindo dados na tabela turma
INSERT INTO `dbescola`.`turma` (`nometurma`, `sala`, `horario`) VALUES
('Turma A', 'Sala 101', '08:00 - 10:00'),
('Turma B', 'Sala 102', '10:00 - 12:00'),
('Turma C', 'Sala 103', '14:00 - 16:00'),
('Turma 30', 'Sala 104', '16:00 - 18:00');

-- Inserindo dados na tabela matricula
INSERT INTO `dbescola`.`matricula` (`nota_1`, `nota_2`, `nota_3`, `nota_final`, `nr_faltas`, `aluno_id`, `turma_id`) VALUES
(8.5, 7.0, 9.0, 8.2, 2, 1, 1),
(6.0, 7.5, 8.0, 7.2, 3, 2, 2),
(9.0, 8.5, 9.5, 9.0, 1, 3, 3),
(7.5, 6.0, 8.0, 7.2, 2, 4, 1),
(8.0, 7.5, 9.0, 8.5, 1, 5, 2),
(6.5, 7.0, 8.5, 7.3, 3, 6, 3),
(9.0, 8.0, 9.5, 8.8, 2, 7, 1),
(7.0, 6.5, 8.0, 7.1, 3, 8, 2),
(8.5, 7.5, 9.0, 8.3, 1, 9, 3),
(6.0, 7.0, 8.5, 7.2, 2, 10, 1),
(9.0, 8.5, 9.5, 9.0, 1, 11, 2),
(7.5, 6.0, 8.0, 7.2, 2, 12, 3),
(8.0, 7.5, 9.0, 8.5, 1, 13, 1),
(6.5, 7.0, 8.5, 7.3, 3, 14, 2),
(9.0, 8.0, 9.5, 8.8, 2, 15, 3),
(7.0, 6.5, 8.0, 7.1, 3, 16, 1),
(8.5, 7.5, 9.0, 8.3, 1, 17, 2),
(6.0, 7.0, 8.5, 7.2, 2, 18, 3),
(9.0, 8.5, 9.5, 9.0, 1, 19, 1),
(7.5, 6.0, 8.0, 7.2, 2, 20, 4);

-- -------------------------------------------------------------------------------------------

-- Inserindo dados na tabela comanda
INSERT INTO `BomGosto`.`comanda` (`data`, `mesa`, `nomeCliente`) VALUES
('2024-11-01', 6, 'Jaques Antunes'),
('2024-11-01', 6, 'Jaques Antunes'),
('2024-10-31', 1, 'João Silva'),
('2024-10-31', 2, 'Maria Oliveira'),
('2024-10-31', 3, 'Carlos Souza'),
('2024-10-31', 4, 'Ana Paula'),
('2024-10-31', 5, 'Pedro Santos');

-- Inserindo dados na tabela cardapio
INSERT INTO `BomGosto`.`cardapio` (`cardapio_id`, `nomeCafe`, `composicao`, `valorUnitario`) VALUES
(6, 'Café Jacu', 'Café especial fermentado pela ave Jacu, Água', 50.00),
(7, 'Café Elefante', 'Café especial fermentado pelos Elefantes, Água', 50.00),
(1, 'Café Expresso', 'Café, Água', 5.00),
(2, 'Cappuccino', 'Café, Leite, Chocolate', 7.50),
(3, 'Latte', 'Café, Leite', 6.00),
(4, 'Mocha', 'Café, Leite, Chocolate, Chantilly', 8.00),
(5, 'Macchiato', 'Café, Leite', 6.50);

-- Inserindo dados na tabela pedido
INSERT INTO `BomGosto`.`pedido` (`cardapio_id`, `quantidade`, `comanda_comanda_id`) VALUES
(1,2,6),
(1, 2, 1),
(2, 1, 2),
(3, 3, 3),
(4, 1, 4),
(5, 2, 5),
(1, 1, 1),
(2, 2, 2),
(3, 1, 3),
(4, 2, 4),
(5, 1, 5),
(1, 3, 1),
(2, 3, 2),
(3, 2, 3),
(4, 3, 4),
(5, 3, 5),
(1, 2, 1),
(2, 1, 2),
(3, 3, 3),
(4, 1, 4),
(5, 2, 5);

INSERT INTO `BomGosto`.`pedido` (`cardapio_id`, `quantidade`, `comanda_comanda_id`) VALUES
(1, 2, 1),
(2, 1, 1),
(3, 3, 1),
(4, 1, 2),
(5, 2, 2),
(1, 1, 2),
(2, 2, 3),
(3, 1, 3),
(4, 2, 3),
(5, 1, 4),
(1, 3, 4),
(2, 3, 4),
(3, 2, 5),
(4, 3, 5),
(5, 3, 5),
(1, 2, 5),
(2, 1, 1),
(3, 3, 2),
(4, 1, 3),
(5, 2, 4);


-- -----------------------------------------------------------------------------------------------------------------------------------------
-- Inserindo dados na tabela curso
INSERT INTO `escolaInformatica`.`curso` (`tipoCurso`, `nomeCurso`) VALUES
('Tecnologia', 'Desenvolvimento de Software'),
('Tecnologia', 'Redes de Computadores'),
('Tecnologia', 'Segurança da Informação'),
('Tecnologia', 'Inteligência Artificial'),
('Tecnologia', 'Banco de Dados'),
('Tecnologia', 'Desenvolvimento Web'),
('Tecnologia', 'Análise de Dados');

-- Inserindo dados na tabela professor
INSERT INTO `escolaInformatica`.`professor` (`cpf`, `nome`, `dataNascimento`, `titulacao`) VALUES
('12345678901', 'Carlos Silva', '1980-05-15', 'Mestre em Ciência da Computação'),
('23456789012', 'Ana Oliveira', '1975-08-22', 'Doutora em Engenharia de Software'),
('34567890123', 'Marcos Souza', '1982-11-30', 'Mestre em Redes de Computadores'),
('45678901234', 'Fernanda Lima', '1985-03-25', 'Mestre em Inteligência Artificial'),
('56789012345', 'Rafael Costa', '1978-09-10', 'Doutor em Banco de Dados'),
('67890123456', 'Juliana Mendes', '1983-07-14', 'Mestre em Desenvolvimento Web'),
('78901234567', 'Pedro Almeida', '1979-12-01', 'Doutor em Análise de Dados');

-- Inserindo dados na tabela aluno
INSERT INTO `escolaInformatica`.`aluno` (`matricula`, `dataMatricula`, `nomeAluno`, `dataNascimento`, `altura`, `peso`) VALUES
(1001, '2024-01-15', 'João Pereira', '2000-03-10', 1.75, 70.5),
(1002, '2024-01-15', 'Maria Santos', '1999-07-25', 1.65, 60.0),
(1003, '2024-01-15', 'Pedro Lima', '2001-12-05', 1.80, 75.0),
(1004, '2024-01-15', 'Ana Paula', '2000-05-20', 1.70, 65.0),
(1005, '2024-01-15', 'Lucas Silva', '1999-11-15', 1.85, 80.0),
(1006, '2024-01-15', 'Fernanda Costa', '2001-02-28', 1.60, 55.0),
(1007, '2024-01-15', 'Rafael Almeida', '2000-08-10', 1.75, 72.0),
(1008, '2024-01-15', 'Juliana Oliveira', '1999-04-05', 1.68, 58.0),
(1009, '2024-01-15', 'Gabriel Souza', '2001-09-25', 1.78, 77.0),
(1010, '2024-01-15', 'Larissa Lima', '2000-06-30', 1.62, 60.0),
(1011, '2024-01-15', 'Bruno Ferreira', '2000-01-20', 1.80, 75.0),
(1012, '2024-01-15', 'Carla Mendes', '1999-10-10', 1.65, 59.0),
(1013, '2024-01-15', 'Diego Martins', '2001-07-15', 1.75, 70.0),
(1014, '2024-01-15', 'Elisa Costa', '2000-12-25', 1.70, 65.0),
(1015, '2024-01-15', 'Felipe Rocha', '1999-05-05', 1.85, 80.0),
(1016, '2024-01-15', 'Gustavo Almeida', '2000-08-15', 1.75, 72.0),
(1017, '2024-01-15', 'Helena Souza', '1999-11-30', 1.68, 58.0),
(1018, '2024-01-15', 'Igor Lima', '2001-02-10', 1.80, 75.0),
(1019, '2024-01-15', 'Júlia Santos', '2000-04-20', 1.65, 60.0),
(1020, '2024-01-15', 'Kevin Pereira', '1999-09-15', 1.85, 80.0),
(1021, '2024-01-15', 'Laura Mendes', '2001-06-05', 1.70, 65.0),
(1022, '2024-01-15', 'Marcelo Costa', '2000-10-25', 1.75, 72.0),
(1023, '2024-01-15', 'Natália Oliveira', '1999-12-10', 1.68, 58.0),
(1024, '2024-01-15', 'Otávio Lima', '2001-03-30', 1.80, 75.0),
(1025, '2024-01-15', 'Paula Souza', '2000-07-20', 1.65, 60.0),
(1026, '2024-01-15', 'Quintino Santos', '1999-01-25', 1.85, 80.0),
(1027, '2024-01-15', 'Rafaela Mendes', '2001-05-15', 1.70, 65.0),
(1028, '2024-01-15', 'Samuel Costa', '2000-09-05', 1.75, 72.0),
(1029, '2024-01-15', 'Tatiana Oliveira', '1999-11-20', 1.68, 58.0),
(1030, '2024-01-15', 'Ubirajara Lima', '2001-01-10', 1.80, 75.0),
(1031, '2024-01-15', 'Valéria Souza', '2000-03-25', 1.65, 60.0),
(1032, '2024-01-15', 'Wagner Pereira', '1999-06-15', 1.85, 80.0),
(1033, '2024-01-15', 'Xavier Mendes', '2001-08-05', 1.70, 65.0),
(1034, '2024-01-15', 'Yara Costa', '2000-10-10', 1.75, 72.0),
(1035, '2024-01-15', 'Zilda Oliveira', '1999-12-20', 1.68, 58.0);

-- Inserindo dados na tabela turma
INSERT INTO `escolaInformatica`.`turma` (`quantidadeAlunos`, `horarioAula`, `duracaoAula`, `dataInicial`, `dataFinal`, `curso_idcurso`, `professor_idprofessor`, `aluno_idalunoMonitor`) VALUES
(30, '08:00 - 10:00', '02:00:00', '2024-02-01', '2024-06-30', 1, 1, 1),
(25, '10:00 - 12:00', '02:00:00', '2024-02-01', '2024-06-30', 2, 2, 2),
(20, '14:00 - 16:00', '02:00:00', '2024-02-01', '2024-06-30', 3, 3, 3),
(15, '16:00 - 18:00', '02:00:00', '2024-02-01', '2024-06-30', 4, 4, 4),
(10, '18:00 - 20:00', '02:00:00', '2024-02-01', '2024-06-30', 5, 5, 5),
(12, '08:00 - 10:00', '02:00:00', '2024-02-01', '2024-06-30', 6, 6, 6),
(18, '10:00 - 12:00', '02:00:00', '2024-02-01', '2024-06-30', 7, 7, 7);

-- Inserindo dados na tabela telefone
INSERT INTO `escolaInformatica`.`telefone` (`tipo`, `numeroTelefone`, `professor_idprofessor`, `aluno_idaluno`) VALUES
('Celular', '21987654321', 1, NULL),
('Residencial', '2134567890', 2, NULL),
('Contato', '21987654322', NULL, 1),
('Celular', '21987654323', NULL, 2),
('Residencial', '2134567891', NULL, 3),
('Celular', '21987654324', 3, NULL),
('Residencial', '2134567892', 4, NULL),
('Contato', '21987654325', NULL, 4),
('Celular', '21987654326', NULL, 5),
('Residencial', '2134567893', NULL, 6),
('Celular', '21987654327', 5, NULL),
('Residencial', '2134567894', 6, NULL),
('Contato', '21987654328', NULL, 7),
('Celular', '21987654329', NULL, 8),
('Residencial', '2134567895', NULL, 9);

-- Inserindo dados na tabela Endereco
INSERT INTO `escolaInformatica`.`Endereco` (`cep`, `rua`, `bairro`, `cidade`, `estado`, `aluno_idaluno`, `professor_idprofessor`) VALUES
('25953-000', 'Rua das Flores', 'Centro', 'Teresópolis', 'RJ', 1, NULL),
('25953-001', 'Avenida Brasil', 'Alto', 'Teresópolis', 'RJ', 2, NULL),
('25953-002', 'Rua das Palmeiras', 'Várzea', 'Teresópolis', 'RJ', 3, NULL),
('25953-003', 'Rua das Acácias', 'Barra', 'Teresópolis', 'RJ', NULL, 1),
('25953-004', 'Rua das Hortênsias', 'Meudon', 'Teresópolis', 'RJ', NULL, 2),
('25953-005', 'Rua das Orquídeas', 'Agriões', 'Teresópolis', 'RJ', 4, NULL),
('25953-006', 'Rua das Margaridas', 'Alto', 'Teresópolis', 'RJ', 5, NULL),
('25953-007', 'Rua das Rosas', 'Centro', 'Teresópolis', 'RJ', 6, NULL),
('25953-008', 'Rua das Violetas', 'Várzea', 'Teresópolis', 'RJ', NULL, 3),
('25953-009', 'Rua das Tulipas', 'Barra', 'Teresópolis', 'RJ', NULL, 4),
('25953-010', 'Rua das Camélias', 'Centro', 'Teresópolis', 'RJ', 7, NULL),
('25953-011', 'Rua das Azaleias', 'Alto', 'Teresópolis', 'RJ', 8, NULL),
('25953-012', 'Rua das Begônias', 'Várzea', 'Teresópolis', 'RJ', 9, NULL),
('25953-013', 'Rua das Dalias', 'Barra', 'Teresópolis', 'RJ', NULL, 5),
('25953-014', 'Rua das Gardênias', 'Centro', 'Teresópolis', 'RJ', NULL, 6);

-- Inserindo dados na tabela ausencia
INSERT INTO `escolaInformatica`.`ausencia` (`idausencia`, `dataAusencia`, `aluno_idaluno`) VALUES
(1, '2024-03-10', 1),
(2, '2024-04-15', 2),
(3, '2024-05-20', 3),
(4, '2024-06-25', 4),
(5, '2024-07-30', 5);

-- Inserindo dados na tabela aluno_turma
INSERT INTO `escolaInformatica`.`aluno_turma` (`aluno_idaluno`, `turma_idturma`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 1),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5),
(11, 6),
(12, 7),
(13, 1),
(14, 2),
(15, 3),
(16, 4),
(17, 5),
(18, 6),
(19, 7),
(20, 1),
(21, 2),
(22, 3),
(23, 4),
(24, 5),
(25, 6),
(26, 7),
(27, 1),
(28, 2),
(29, 3),
(30, 4),
(31, 5),
(32, 6),
(33, 7),
(34, 1),
(35, 2);
