//Tabela sobre as principais Normas que regem o Laboratório de VSW
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'


interface Column {
    id: 'area' | 'sector' | 'responsible' | 'phone';
    label: string;
    minWidth?: string;
    maxWidth?: string;
    align?: 'left';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'area', label: 'Área' },
    { id: 'sector', label: 'Setor' },
    { id: 'responsible', label: 'Responsável' },
    { id: 'phone', label: 'Ramais' },
];

interface Data {
    area: string;
    sector: string;
    responsible: string,
    phone: string;
}

function createData(
    area: string,
    sector: string,
    responsible: string,
    phone: string,
): Data {
    return { area, sector, responsible, phone };
}

const rows = [
    createData(
        'Administrativo',
        'Diretor',
        'Israel Teixeira',
        '4317'),
    createData(
        'Administrativo',
        'Coord. de Rel. e Contratos',
        'Anderson Bandeira',
        '3707'),
    createData(
        'Administrativo',
        'Coord. de Rel. e Contratos',
        'Caio Gomes',
        '3901'),
    createData(
        'Administrativo',
        'Gerência Técnica',
        'Rodrigo Mianes',
        '4883'),
    createData(
        'Administrativo',
        'Coord. da Qualidade',
        'Luis Henrique Chrusciel',
        '7889'),
    createData(
        'Administrativo',
        'Coord. da Qualidade',
        'Giovana Giachelin',
        '6337'),
    createData(
        'Administrativo',
        'Coord. da Qualidade',
        'Gustavo Ramos',
        '8321'),
    createData(
        'Administrativo',
        'Orçamentos Ensaios',
        'Carlos Granolati',
        '6252'),
    createData(
        'Administrativo',
        'Orçamentos Ensaios',
        'Marcela Paim',
        '4186'),
    createData(
        'Administrativo',
        'Orçamentos Ensaios',
        'Matheus Cericatto',
        '6295'),
    createData(
        'Administrativo',
        'Orçamentos Ensaios',
        'Augusto Ortiz',
        '6415'),
    createData(
        'Administrativo',
        'Orçamentos Ensaios',
        'Rafael Hirt',
        '8377'),
    createData(
        'Administrativo',
        'Orçamentos Ensaios',
        'Vinicius Leal',
        '8377'),
    createData(
        'Administrativo',
        'Orçamentos Ensaios',
        'Matheus Coelho',
        '4319'),
    createData(
        'Administrativo',
        'Orçamentos Calibração',
        'Fábio Panachuk',
        '3909'),
    createData(
        'Administrativo',
        'Orçamentos Calibração',
        'Lucas Gianoni',
        '6256'),
    createData(
        'Administrativo',
        'Orçamentos Calibração',
        'Orçamentos Calibração',
        '7898'),
    createData(
        'Administrativo',
        'Secretária',
        'Cibele Munhoz',
        '3551'),
    createData(
        'Administrativo',
        'Secretária',
        'Ismael Blohem',
        '8321'),
    createData(
        'Administrativo',
        'Adm. e Financeiro',
        'Rafael Gamallo',
        '3516'),
    createData(
        'Administrativo',
        'Adm. e Financeiro',
        'Aline Gomes',
        '7857'),
    createData(
        'Administrativo',
        'Adm. e Financeiro',
        'Bruno Tarragô',
        '6253'),
    createData(
        'Administrativo',
        'RH',
        'Cristiane Bronzatto',
        '3685'),
    createData(
        'Administrativo',
        'Comunicação',
        'Gustavo Ramos',
        '8321'),
    createData(
        'Administrativo',
        'Comunicação',
        'Kerolyn Silveira',
        '8321'),
    createData(
        'Calibração',
        'Recb. de Itens de Calibração',
        'Marcelo Benfato',
        '7951'),
    createData(
        'Calibração',
        'Coord. de Calibração',
        'Renan Escobar Silva Passos',
        '3675'),
    createData(
        'Calibração',
        'Eletricidade / Tempo & Frequência',
        'Wiliam Moreira Gonçalves',
        '3791'),
    createData(
        'Calibração',
        'Eletricidade / Tempo & Frequência',
        'Daniel de Andrade Poitevin Silveira',
        '8897'),
    createData(
        'Calibração',
        'Alta Frequência',
        'Laboratório de Alta Frequência',
        '8898'),
    createData(
        'Calibração',
        'Termometria / Físico-química',
        'Andrei Pinheiro/ Juliana Kuck',
        '3678'),
    createData(
        'Calibração',
        'Eletroacústica / Fotometria',
        'Magnus La Porta',
        '8879'),
    createData(
        'Calibração',
        'Eletroacústica / Fotometria',
        'Laboratório de Eletroacústica',
        '3592'),
    createData(
        'Ensaios Prédio 30',
        'Recebimento de Itens de Ensaio',
        'Viviane Costa de Moraes Santos',
        '4845'),
    createData(
        'Ensaios Prédio 30',
        'Coord. de Saúde e Alta Tecnologia',
        'Laura depauli',
        '6384'),
    createData(
        'Ensaios Prédio 30',
        'Telecomunicações',
        'Paulo Roberto Petró',
        '8397'),
    createData(
        'Ensaios Prédio 30',
        'Telecomunicações',
        'Laboratório de Telecomunicações',
        '3764'),
    createData(
        'Ensaios Prédio 30',
        'Equipamentos Eletrodomésticos',
        'Henrique Luis Neves Duarte',
        '3745'),
    createData(
        'Ensaios Prédio 30',
        'Equipamentos Eletrodomésticos',
        'Alexandre Filho',
        '3765'),
    createData(
        'Ensaios Prédio 30',
        'Química / OMH',
        'Mariana Coelho',
        '6254'),
    createData(
        'Ensaios Prédio 30',
        'Química / OMH',
        'Bianca Schons',
        '7905'),
    createData(
        'Ensaios Prédio 30',
        'Química / OHM',
        'Geral Química',
        '4919'),
    createData(
        'Ensaios Prédio 30',
        'Coord. de Equip. de Uso Prof. e Infra.',
        'Gilvani Montenegro Santos',
        '3517'),
    createData(
        'Ensaios Prédio 30',
        'Plugues / Tomadas / Interruptores',
        'Felipe Gonçalves Suelo',
        '4670'),
    createData(
        'Ensaios Prédio 30',
        'Plugues / Tomadas / Interruptores',
        'Laboratório Pulgues / Tomadas / Interruptores',
        '3766'),
    createData(
        'Ensaios Prédiio 30',
        'Fios e Cabos',
        'Allysson Oliveira',
        '3699'),
    createData(
        'Ensaios Prédio 30',
        'Flamabilidade e Polímeros',
        'Willian Barbosa Silva',
        '8303'),
    createData(
        'Ensaios Prédio 30',
        'Medidores de Energia Elétrica',
        'Gabriel Fachinello',
        '4733'),
    createData(
        'Ensaios Prédio 30',
        'Medidores de Energia Elétrica',
        'Guilherme Machado',
        '4733'),
    createData(
        'Ensaios Prédio 30',
        'Coord. de Iluninação e Comp.',
        'Cássio Alexandre Pereira Souza',
        '4918'),
    createData(
        'Ensaios Prédio 30',
        'Rlés Fotoelétricos',
        'Augusto Lunelli Nunes',
        '3790'),
    createData(
        'Ensaios Prédio 30',
        'Reatores / Relés / Lum. / Lâmp.',
        'Iluminação',
        '3777'),
    createData(
        'Ensaios Prédio 30',
        'Reatores / Relés / Lum. / Lâmp.',
        'Iluminação - Ensaio',
        '3778'),
    createData(
        'Ensaios Prédio 30',
        'Reatores / Relés / Lum. / Lâmp.',
        'Laboratório',
        '3779'),
    createData(
        'Ensaios Prédio 30',
        'Componentes',
        'Jackson Scartezzini',
        '3652/ / 3915'),
    createData(
        'Ensaios Prédio 30',
        'Coord. de Eletrodomésticos',
        'Leandro José Weschenfelder',
        '3702'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Diego Matenbacher',
        '3780'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Marcio Pinheiro Machado',
        '8304'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Welinton Leal Scarabelot',
        '3783'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Rodrigo Mello',
        '3781'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Leonardo Soares',
        '3782'),
    createData(
        'Ensaios Prédio 30',
        'Condicionador de Ar',
        'Airton Simone',
        '7758'),
    createData(
        'Ensaios Prédio 30',
        'Condicionador de Ar',
        'Victor Moreira',
        '3784'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Segurança',
        '3786'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Rodrgo Silveira',
        '4844'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Ian Avila (Dia)',
        '3787'),
    createData(
        'Ensaios Prédio 30',
        'Máquinas de Lavar',
        'Maurício Costa / Bruno Morette (Noite)',
        '3787'),
    createData(
        'Ensaios Prédio 30',
        'Mobilidade Elétrica',
        'Carlos Nardeli',
        '7996'),
    createData(
        'Ensaios Prédio 30',
        'Mobilidade Elétrica',
        'Laboratório Mobilidade Elétrica',
        '3788'),
    createData(
        'Ensaios Prédio 13',
        'Eletrodomésticos',
        'Leonardo de Andrea Leão',
        '6040'),
    createData(
        'Ensaios Prédio 13',
        'Eletrodomésticos',
        'Thomaz Freitas Borba',
        '8887'),
    createData(
        'Ensaios Prédio 13',
        'Eletrodomésticos',
        'Rodrigo Velásquez / Tainan Pezzi / Bernardo Kummel / Giulia Dias / Gabriel Goulart',
        '8346'),
    createData(
        'Ensaios Prédio 13',
        'Eletrodomésticos ',
        'Laboratório de Eletrodomésticos',
        '8346'),
    createData(
        'Ensaios Prédio 13',
        'Telecomunicações / EMC',
        'Leandro Avila / Deivid Quevedo',
        '3916'),
    createData(
        'Ensaios Prédio 13',
        'Telecomunicações',
        'Matheus Timmers / Tiago Pinheiro',
        '8402'),
    createData(
        'Ensaios Prédio 13',
        'EMC',
        'Thiago Cardoso / Deivid Quevedo',
        '3813'),
    createData(
        'Ensaios Prédio 13',
        'Luminárias',
        'Philipe Vasques',
        '3914 / 8886'),
    createData(
        'Ensaios Prédio 13',
        'Refrigeradores - Eficiência',
        'Marcelo Slaveiro Silva',
        '3917'),
    createData(
        'Ensaios Prédio 13',
        'Ventiladores',
        'Marcio Pinheiro Machado',
        '6039'),
    createData(
        'Ensaios Prédio 13',
        'Motores',
        'João Daher',
        '7726'),
    createData(
        'Ensaios Prédio 13',
        'Goniofotômetro',
        'Laboratório de Goniofotômetro',
        '3914'),
    createData(
        'Ensaios Prédio 13',
        'Goniofotômetro',
        'Laboratório - Apoio',
        '8886'),
    createData(
        'Ensaios Prédio 13',
        'Compatibilidade Eletromagnética',
        'Laboratório de Compatibilidade Eletromagnética',
        '3813'),
    createData(
        'Ensaios Prédio 13',
        'Varificação de Software',
        'Jonathan Culau',
        '8297'),
    createData(
        'Ensaios Prédio 13',
        'Verificação de Software',
        'Felipe Prates',
        '8240'),
    createData(
        'Ensaios Prédio 13',
        'Utensílios Domésticos',
        'Eduardo Policarpo / Jackson Scartezzini',
        '3918'),
    createData(
        'Ensaios Prédio 13',
        'Ordenhadeiras',
        'Laboratório de Ordenhadeiras',
        '4242'),
    createData(
        'Ensaios Prédio 13',
        'Tanques de Combustíveis',
        'Laboratório de Tanques de Combustíveis',
        '4543'),
    createData(
        'Ensaios Prédio 13',
        'Verificação Metrológica',
        'Talles Trebi Feijo',
        '8867'),
    createData(
        'Ensaios Prédio 13',
        'Coord. Lab. de Verificação ',
        'Anderson Bandeira',
        '8866'),
    createData(
        'Ensaios Prédio 13',
        'Sala de Atendimento ao Cliente',
        'Sala de Atendimento ao Cliente Verificação Metrológica',
        '8865'),
    createData(
        'Ensaios Prédio 13',
        'Sala de Reuniões',
        'Sala de Reuniões',
        '8878'),
    createData(
        'LAIF - Prédio 93a - Sala 104',
        'Coord. LAIF',
        'Airton Monza da Silveira',
        '3717'),
    createData(
        'LAIF - Prédio 93a - Sala 104',
        'Administrativo',
        'Vilmar Junior',
        '6325'),
    createData(
        'LAIF - Prédio 93a - Sala 104',
        'Adminstrativo',
        'Vilmar Junior / Giovana Trapp / Guilherme Camargo',
        '8313'),
    createData(
        'LAIF - Prédio 93a - Sala 104',
        'Laboratório LAIF',
        'Giovana Trapp / Guilherme Camargo',
        '6323 / 6324'),
];


export default function PhonesTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(200);



    return (
        <TableContainer sx={{
            mt: '2rem',
            backgroundColor: '#161B22',
            borderRadius: '0.7rem',
            border: 'solid 3px',
            borderColor: '#DCDCDC'
        }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead >
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.maxWidth, background: '#0D1117', color: '#58A6FF', fontSize: '18px' }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.sector}>
                                    {columns.map((Data) => {
                                        const value = row[Data.id];
                                        return (
                                            <TableCell key={Data.id} align={Data.align}
                                                style={{ color: '#C9D1D9' }}
                                            >
                                                {Data.format && typeof value === 'number'
                                                    ? Data.format(value)
                                                    : value}

                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>

    );
}