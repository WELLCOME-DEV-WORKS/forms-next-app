export async function POST(req: Request) {
    const { treatmentPurpose, treatmentMethod, injectionArea, sideEffects, budget, recommendedTreatment, recommendedPrice, selectedDate } = await req.json();

    // const reqJson = {treatmentPurpose, treatmentMethod, injectionArea, sideEffects, budget, recommendedTreatment, recommendedPrice, selectedDate}
    
    
    // || !recommendedTreatment || !recommendedPrice 
  // 필수 필드 검증
  if ( !treatmentPurpose || !treatmentMethod || !injectionArea || !sideEffects || !budget 
    || !selectedDate) {
    return new Response(JSON.stringify({ message: '모든 필드를 입력해야 합니다.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 성공적인 응답
  return new Response(JSON.stringify({ message: '예약이 완료되었습니다!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}