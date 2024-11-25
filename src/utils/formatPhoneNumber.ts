function formatPhoneNumber(phone: string | undefined | null): string {
  if (!phone) return '-';

  const cleaned = phone.replace(/\D/g, '');

  const country =
    cleaned.length > 10 ? `+${cleaned.slice(0, cleaned.length - 10)}` : '+55';
  const area = cleaned.slice(-10, -8);
  const part1 = cleaned.slice(-8, -4);
  const part2 = cleaned.slice(-4);

  return `${country} (${area}) ${part1}-${part2}`;
}

export default formatPhoneNumber;
