INSERT INTO cargos (tituloCargo, descricao, salario)
VALUES ('Desenvolvedor', 'Resolve os problemas no programa', 10000),
	   ('Gerente', 'Gerencia a equipe'),
       ('Suporte', 'Resolve os problemas com o cliente');
DELETE FROM cargos WHERE idCargos = 1;
ALTER TABLE cargos ADD COLUMN salario DECIMAL (10,2) NOT NULL;
UPDATE cargos SET salario = 20000 WHERE idCargos = 2;
       
SELECT * FROM recurso;

ALTER TABLE cargos DROP COLUMN salario;

-- Esse comando irá remover todos os dados da tabela Cargos,
TRUNCATE TABLE `new_schema1`.`cargos`;

-- Desativar verificações de chave estrangeira
SET FOREIGN_KEY_CHECKS = 0;

-- Deletar todos os registros da tabela Cargos
DELETE FROM `new_schema1`.`Cargos`;

-- Ativar verificações de chave estrangeira novamente
SET FOREIGN_KEY_CHECKS = 1;


-- Inserts para a tabela Cargos
INSERT INTO `new_schema1`.`Cargos` (`nomeCargo`) VALUES ('Desenvolvedor');
INSERT INTO `new_schema1`.`Cargos` (`nomeCargo`) VALUES ('Analista');
INSERT INTO `new_schema1`.`Cargos` (`nomeCargo`) VALUES ('Gerente');

-- Inserts para a tabela Enderecos
INSERT INTO `new_schema1`.`Enderecos` (`rua`, `numero`, `cidade`, `estado`, `CEP`) VALUES ('Rua A', '123', 'Cidade A', 'Estado A', '12345-678');
INSERT INTO `new_schema1`.`Enderecos` (`rua`, `numero`, `cidade`, `estado`, `CEP`) VALUES ('Rua B', '456', 'Cidade B', 'Estado B', '23456-789');
INSERT INTO `new_schema1`.`Enderecos` (`rua`, `numero`, `cidade`, `estado`, `CEP`) VALUES ('Rua C', '789', 'Cidade C', 'Estado C', '34567-890');

-- Inserts para a tabela Equipes
INSERT INTO `new_schema1`.`Equipes` (`nomeEquipe`, `numeroRecursos`) VALUES ('Equipe A', 5);
INSERT INTO `new_schema1`.`Equipes` (`nomeEquipe`, `numeroRecursos`) VALUES ('Equipe B', 10);
INSERT INTO `new_schema1`.`Equipes` (`nomeEquipe`, `numeroRecursos`) VALUES ('Equipe C', 15);

-- Inserts para a tabela Recurso
INSERT INTO `new_schema1`.`Recurso` (`nomeRecurso`, `salario`, `Cargos_idCargos`, `Enderecos_idEnderecos`, `Equipes_idEquipes`) VALUES ('Recurso A', 5000.00, 1, 1, 1);
INSERT INTO `new_schema1`.`Recurso` (`nomeRecurso`, `salario`, `Cargos_idCargos`, `Enderecos_idEnderecos`, `Equipes_idEquipes`) VALUES ('Recurso B', 6000.00, 2, 2, 2);
INSERT INTO `new_schema1`.`Recurso` (`nomeRecurso`, `salario`, `Cargos_idCargos`, `Enderecos_idEnderecos`, `Equipes_idEquipes`) VALUES ('Recurso C', 7000.00, 3, 3, 3);

-- Inserts para a tabela Telefones
INSERT INTO `new_schema1`.`Telefones` (`tipoContato`, `numeroTelefone`, `Recurso_idRecurso`) VALUES ('Celular', '12345-6789', 1);
INSERT INTO `new_schema1`.`Telefones` (`tipoContato`, `numeroTelefone`, `Recurso_idRecurso`) VALUES ('Residencial', '23456-7890', 2);
INSERT INTO `new_schema1`.`Telefones` (`tipoContato`, `numeroTelefone`, `Recurso_idRecurso`) VALUES ('Comercial', '34567-8901', 3);

-- Inserts para a tabela Ferramentas
INSERT INTO `new_schema1`.`Ferramentas` (`nomeFerramenta`, `versao`) VALUES ('Ferramenta A', '1.0');
INSERT INTO `new_schema1`.`Ferramentas` (`nomeFerramenta`, `versao`) VALUES ('Ferramenta B', '2.0');
INSERT INTO `new_schema1`.`Ferramentas` (`nomeFerramenta`, `versao`) VALUES ('Ferramenta C', '3.0');
