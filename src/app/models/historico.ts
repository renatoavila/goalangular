export interface Historico {
    id:                 number;
    codigo_cofre:       number;
    data_operacao:      Date;
    valor_operacao:     number;
    descricao_operacao: string;
    create_time:        Date;
    update_time:        Date;
}
