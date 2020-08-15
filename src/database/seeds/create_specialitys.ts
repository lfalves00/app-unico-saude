import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('specialitys').insert([
    { title: 'ANÁLISES CLÍNICAS' },
    { title: 'ANESTESIOLOGISTA' },
    { title: 'ANGIOLOGIA' },
    { title: 'CARDIOLOGIA' },
    { title: 'CIRURGIA BARIÁTRICA' },
    { title: 'CIRURGIA ENDOVASCULAR' },
    { title: 'CIRURGIA DE CATARATA' },
    { title: 'CIRURGIA GERAL' },
    { title: 'CIRURGIA DE GLAUCOMA' },
    { title: 'CIRURGIA DE PTERÍGIO' },
    { title: 'CIRURGIA VASCULAR' },
    { title: 'CLÍNICA MÉDICA' },
    { title: 'DERMATOLOGIA' },
    { title: 'DIAGNÓSTICO POR IMAGEM' },
    { title: 'ENDOCRINOLOGIA' },
    { title: 'ESPECIALISTA EM COLUNA' },
    { title: 'ESPECIALISTA EM JOELHO' },
    { title: 'ESPECIALISTA EM MÃO' },
    { title: 'ESPECIALISTA EM OMBRO' },
    { title: 'ESPECIALISTA EM PÉ' },
    { title: 'ESPECIALISTA EM QUADRIL' },
    { title: 'ESTÉTICA' },
    { title: 'FARMÁCIA' },
    { title: 'FISIOTERAPIA' },
    { title: 'FONOAUDIOLOGIA' },
    { title: 'GASTROENTEROLOGIA' },
    { title: 'GASTROPEDIATRIA' },
    { title: 'GERIATRIA' },
    { title: 'GINECOLOGIA' },
    { title: 'HEMATOLOGIA' },
    { title: 'HEMATOLOGIA PEDIATRIA' },
    { title: 'HEPATOLOGIA' },
    { title: 'INFECTOLOGIA' },
    { title: 'LIBERAÇÃO MIOFASCIAL' },
    { title: 'MASTOLOGIA' },
    { title: 'NEFROLOGIA' },
    { title: 'NUTRIÇÃO' },
    { title: 'NUTRIÇÃO DOMICILIAR' },
    { title: 'ÓTICA' },
    { title: 'OBSTETRÍCIA' },
    { title: 'OFTALMOLOGIA' },
    { title: 'ODONTOLOGIA' },
    { title: 'ORTOPEDIA' },
    { title: 'OTORRINOLARINGOLOGIA' },
    { title: 'PEDIATRIA' },
    { title: 'PILATES' },
    { title: 'PNEUMOLOGIA' },
    { title: 'PROCTOLOGIA' },
    { title: 'PSICOLOGIA' },
    { title: 'PSIQUIATRIA' },
    { title: 'RADIOLOGIA' },
    { title: 'REMOÇÃO' },
    { title: 'RESSONÂNCIA MAGNÉTICA' },
    { title: 'REUMATOLOGIA' },
    { title: 'RPG' },
    { title: 'TOMOGRAFIA COMPUTADORIZADA' },
    { title: 'TRAUMATOLOGIA' },
    { title: 'ULTRASSONOGRAFIA' },
    { title: 'URGÊNCIA ORTOPÉDICA 12h' },
    { title: 'URGÊNCIA PEDIÁTRICA 24h' },
    { title: 'UROLOGIA' },
    { title: 'VENTOSATERAPIA' }
  ]);
}  