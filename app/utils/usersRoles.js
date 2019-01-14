export function mapRolesToPretty(profile) {
  switch (profile) {
    case 'Admin':
      return 'Administrador';
    case 'GERENTE':
      return 'Gerente';
    case 'ANALISTA':
      return 'ANALISTA';
    case 'PRESIDENTE':
      return 'Presidente';
    case 'ASISTENTE':
      return 'Asistente';
    case 'AUXILIARADMINISTRATIVO':
      return 'Auxiliar Administrativo';
    case 'DIRECTORGENERAL':
      return 'Director General';
    case 'COORDINADOR':
      return 'Coordinador';
    case 'CHOFER':
      return 'Chofer';
    case 'MENSAJERO':
      return 'Mensajero';
    case 'AUXILIARDEPISO':
      return 'Auxiliar de Piso';
    case 'CENTRALIZADOR':
      return 'Centralizador';
    case 'SUBDIRECTOR':
      return 'Subdirector';
    case 'LIDERDELFUTURO':
      return 'Lider del Futuro';
    case 'ANALISTASR':
      return 'Analista SR';
    case 'RECEPCIONISTA':
      return 'Recepcionista';
    case 'FUNCIONAL':
      return 'Funcional';
    case 'EVENTUALINCAPACIDAD':
      return 'Eventual Incapacidad';
    case 'AUDITORSR':
      return 'Auditor SR';
    case 'AUDITORJR':
      return 'Auditor JR';
    case 'COORDINADORDEGERENTES':
      return 'Coordinador de Gerentes';
    case 'ASESOR':
      return 'Asesor';
    case 'ENTTOGERENTE':
      return 'Entrenamiento';
    case 'INSTRUCTOR':
      return 'Instructor';
    case 'PROGRAMADOR':
      return 'Programador';
    default:
      return profile;
  }
}

export function mapRolesToSendForm(profile) {
  switch (profile) {
    case 'Administrador':
      return 'administrador';
    case 'Gerente de crédito y cobranza':
    case 'Gerente':
      return 'gerente';
    case 'Promotora':
      return 'promotor';
    case 'Ejecutivo':
      return 'ejecutivo';
    default:
      return profile;
  }
}
