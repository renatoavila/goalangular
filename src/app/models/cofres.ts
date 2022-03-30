export interface Cofre {
    idCofre: number;
    idConta: number;
    descricao_meta: string;
    nome: string;
    valor_meta: number; 
    valor_acumulado: number;
    vencimento_meta: Date; 
    create_time: Date; 
    update_time: Date; 
}