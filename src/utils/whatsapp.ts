export const sendWhatsAppMessage = (service: string) => {
  const phoneNumber = '5511999999999'; // Replace with actual phone number
  const message = encodeURIComponent(
    `Olá! Gostaria de mais informações sobre o serviço: ${service}`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};