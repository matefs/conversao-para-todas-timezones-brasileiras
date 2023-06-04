import moment from 'moment';
import 'moment-timezone';

const inputDate = new Date().toISOString();

const acreTime = moment.utc(inputDate).tz('America/Rio_Branco').format();
const amazonTime = moment.utc(inputDate).tz('America/Manaus').format();
const brasiliaTime = moment.utc(inputDate).tz('America/Sao_Paulo').format();
const fernandoNoronhaTime = moment
  .utc(inputDate)
  .tz('America/Noronha')
  .format();

var listaHorariosLegíveis: any[] = [
  acreTime,
  amazonTime,
  brasiliaTime,
  fernandoNoronhaTime,
];

var novaLista: any[] = [];

for (var item of listaHorariosLegíveis) {
  novaLista.push(item.replaceAll('T', ' ').replaceAll('Z', '').slice(0, 19));
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
Horário utc com timezone zerada: ${inputDate}
<br><br>

Horário formatado de Fernando de Noronha (-2) conforme o padrão UTC: ${fernandoNoronhaTime}
<br><br>

Horário formatado de Brasília (-3) conforme o padrão UTC: ${brasiliaTime}
<br><br>
 
Horário formatado de Manaus (-4) conforme o padrão UTC: ${amazonTime}
<br><br>

Horário formatado do Acre (-5) conforme o padrão UTC: ${acreTime}
<br><br>

<hr>

Horários legíveis (yyy/mm/dd): 
${novaLista.map((item) => '<br>' + item )}
`;
