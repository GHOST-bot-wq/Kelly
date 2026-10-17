/**
 * =====================================================================
 * KELLY REZENDE | DIVINA DERMA — CONFIGURAÇÃO CENTRALIZADA
 * =====================================================================
 * Este arquivo centraliza todas as informações editáveis da clínica.
 * Para atualizar telefones, links, textos ou endereços, altere apenas
 * os valores abaixo sem precisar mexer na estrutura do código HTML/CSS.
 */

const CLINIC_CONFIG = {
  // Identidade da Marca
  brand: {
    professionalName: "Kelly Rezende",
    brandName: "Divina Derma",
    specialty: "Estética Facial Avançada",
    tagline: "Uma pele bem cuidada. Uma beleza que continua sendo sua.",
    subtagline: "Cuidado estético personalizado, tecnologia e atenção aos detalhes para valorizar a naturalidade da sua pele.",
    experienceYears: "9 anos",
    headlineBadge: "9 Anos Transformando Peles",
    biomedicineStatus: "Graduanda em Biomedicina (7/8)",
    credentials: [
      "9 anos de prática dedicada à transformação e saúde da pele",
      "Graduanda em Biomedicina (período 7/8)",
      "Master Laser Habilitada em tecnologias avançadas",
      "Especialista em protocolos personalizados para Melasma e Rejuvenescimento"
    ]
  },

  // Contato & WhatsApp Oficial
  contact: {
    // Insira aqui o número oficial com DDD (Ex: "5511999999999")
    whatsappNumber: "5500000000000",
    whatsappDisplay: "(00) 00000-0000 [A Confirmar]",
    defaultMessage: "Olá! Conheci o site da Kelly Rezende e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.",
    instagramUser: "@divinaderma.kellyrezende",
    instagramUrl: "https://instagram.com",
    email: "contato@divinaderma.com.br",
    
    pendingConfirmation: {
      phone: true,
      address: true,
      hours: true
    }
  },

  // Localização & Horários
  location: {
    cityState: "Atendimento com Horário Marcado",
    addressLine1: "Consultório de Estética Facial Avançada",
    addressLine2: "Endereço completo disponível após confirmação de agendamento",
    googleMapsUrl: "#",
    hoursWeekday: "Segunda a Sexta: 09h às 19h (Com agendamento prévio)",
    hoursSaturday: "Sábados: 09h às 14h (Horários especiais sob consulta)",
    hoursSunday: "Domingos e Feriados: Fechado"
  },

  // Caminhos relativos padrão para as 4 imagens originais
  images: {
    professional: {
      primary: "public/images/kelly-rezende-profissional.png",
      fallback: "images/kelly-rezende-profissional.png",
      alt: "Kelly Rezende — Especialista em Estética Facial Avançada na Divina Derma"
    },
    procedureHygiene: {
      primary: "public/images/procedimento-limpeza-massagem.png",
      fallback: "images/procedimento-limpeza-massagem.png",
      alt: "Procedimento estético em cabine: higienização e massagem facial com luvas pretas"
    },
    protocolMask: {
      primary: "public/images/protocolo-mascara-facial.png",
      fallback: "images/protocolo-mascara-facial.png",
      alt: "Protocolo de máscara calmante com protetores oculares e toalha na cabeça"
    },
    technologyLedCosmetics: {
      primary: "public/images/tecnologia-cosmobeauty-led.png",
      fallback: "images/tecnologia-cosmobeauty-led.png",
      alt: "Tecnologia facial: Máscara LED para fototerapia e dermocosméticos Cosmobeauty NAD+"
    }
  },

  // Catálogo com os 6 Tratamentos Principais
  treatments: [
    {
      id: "melasma-expert",
      category: "melasma",
      title: "Protocolo Melasma Expert",
      tag: "Tratamento Assinatura",
      shortDesc: "Abordagem multidisciplinar e progressiva para controle de hiperpigmentações, clareamento seguro e restauração da barreira cutânea sem efeito rebote.",
      target: "Controle de manchas, uniformização de tom e fortalecimento dérmico.",
      indications: "Melasma recalcitrante, hiperpigmentação pós-inflamatória e manchas solares.",
      badge: "Protocolo sob Avaliação Prévia"
    },
    {
      id: "limpeza-profunda",
      category: "essenciais",
      title: "Limpeza de Pele Profunda & Detox",
      tag: "Essencial",
      shortDesc: "Higienização profunda com emoliência térmica e química, extração cuidadosa e etapas calmantes com fototerapia para desobstrução e vitalidade.",
      target: "Oxigenar tecidos, regular oleosidade e renovar a superfície dérmica.",
      indications: "Todos os tipos de pele que necessitam de renovação e higiene pura.",
      badge: "Procedimento em Cabine"
    },
    {
      id: "peeling-peptideos",
      category: "rejuvenescimento",
      title: "Peeling de Peptídeos & Ouro Líquido",
      tag: "Alta Performance",
      shortDesc: "Protocolo com biotecnologia NAD+ e concentrado de ouro Cosmobeauty para estímulo celular, revitalização dérmica imediata e efeito tensor sutil.",
      target: "Estimular colágeno, recuperar viço e combater o envelhecimento precoce.",
      indications: "Peles opacas, cansadas ou com linhas finas aparentes.",
      badge: "Revitalização Imediata"
    },
    {
      id: "master-laser",
      category: "tecnologias",
      title: "Tecnologias a Laser & Fototerapia LED",
      tag: "Tecnologia Avançada",
      shortDesc: "Aplicação de luz terapêutica e lasers estéticos habilitados para rejuvenescimento fotoacústico, bioestimulação celular e atenuação de poros dilatados.",
      target: "Bioestimulação dérmica profunda e melhoria da textura e firmeza.",
      indications: "Flacidez incipiente, textura irregular e perda de viço celular.",
      badge: "Master Laser Habilitada"
    },
    {
      id: "hidratacao-regeneradora",
      category: "essenciais",
      title: "Hidratação Oclusiva & Regeneração de Barreira",
      tag: "Recuperação",
      shortDesc: "Terapia de reposição de lípideos essenciais, fatores de hidratação natural e máscaras biomiméticas para peles sensibilizadas ou pós-procedimentos.",
      target: "Restabelecer a integridade do manto hidrolipídico e reduzir sensibilidade.",
      indications: "Peles sensibilizadas, ressecadas ou em recuperação pós-peeling.",
      badge: "Ação Calmante Imediata"
    },
    {
      id: "rejuvenescimento-global",
      category: "rejuvenescimento",
      title: "Plano de Rejuvenescimento Facial 360°",
      tag: "Personalizado",
      shortDesc: "Planejamento integrado combinando peelings químicos, fototerapia e dermocosméticos de nanotecnologia para uma transformação gradual e natural da face.",
      target: "Longevidade da pele, firmeza progressiva e luminosidade natural.",
      indications: "Pacientes que buscam um plano continuado de prevenção e tratamento anti-idade.",
      badge: "Acompanhamento Contínuo"
    }
  ]
};

// Utilitário para gerar URL do WhatsApp
function getWhatsAppUrl(customMessage = null) {
  const number = CLINIC_CONFIG.contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(customMessage || CLINIC_CONFIG.contact.defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}

// Export para módulos ou escopo global
if (typeof module !== "undefined" && module.exports) {
  module.exports = CLINIC_CONFIG;
}
