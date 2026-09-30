'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
  const [selectedType, setSelectedType] = useState('59');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('관심고객 등록이 완료되었습니다. 담당자가 빠르게 연락드리겠습니다.');
  };

  // 평수별 타입 데이터
  const unitTypes = {
    '59': {
      name: '59㎡ A/B (구 25평형)',
      households: '520세대',
      structure: '3Bay 판상형 구조',
      desc: '신혼부부 및 소가족을 위한 실속 있고 쾌적한 맞통풍 공간 설계',
      features: ['채광이 우수한 3Bay 구조', '드레스룸 및 팬트리 공간 확보', 'ㄷ자형 효율적 주방 동선'],
    },
    '84': {
      name: '84㎡ A/B (구 34평형)',
      households: '780세대 (메인 타입)',
      structure: '4Bay 대형 팬트리 특화 구조',
      desc: '선호도 높은 4Bay 판상형 설계로 풍부한 채광과 압도적 수납공간 제공',
      features: ['채광과 환기가 뛰어난 4Bay 판상형', '대형 알파룸/팬트리 선택 가능', '현관 대형 수납장 적용'],
    },
    '114': {
      name: '114㎡ (구 45평형)',
      households: '200세대',
      structure: '5Bay 4룸 고품격 펜트하우스형',
      desc: '대형 평형의 여유로움과 최고급 마감재가 적용된 단지 내 랜드마크 하우스',
      features: ['5Bay 파노라마 조망 프리미엄', '마스터룸 내 대형 드레스룸 & 파우더룸', '독립된 서브 마스터룸 배치'],
    },
  };

  // 4대 입지 프리미엄 이미지 & 내용 데이터
  const locationPremiums = [
    {
      num: '01',
      tag: 'TRAFFIC',
      title: '초역세권 교통망',
      subtitle: '강남 및 주요 도심 20분대',
      desc: '지하철 주요 노선 도보 3분 및 주요 대로 인접으로 빠른 출퇴근 환경 제공',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '02',
      tag: 'EDUCATION',
      title: '명문 안심 학군',
      subtitle: '초·중·고 도보 통학권',
      desc: '단지 바로 앞 초등학교 및 유명 학원가가 인접하여 우수한 교육 프리미엄',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '03',
      tag: 'INFRASTRUCTURE',
      title: '중심 원스톱 인프라',
      subtitle: '대형쇼핑몰 & 관공서',
      desc: '백화점, 대형마트, 종합병원 및 행정 인프라가 반경 1km 내 위치',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '04',
      tag: 'NATURE',
      title: '에코 힐링 숲세권',
      subtitle: '대형공원 & 수변산책로',
      desc: '단지와 바로 연결되는 근린공원 및 수변 산책로로 쾌적한 자연환경 누림',
      img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  // 모던 타임라인 데이터
  const progressSteps = [
    { title: '정비구역 지정', date: '2021.04 완료', status: 'done', desc: '구역 지정 및 사업 계획 확정' },
    { title: '조합설립인가', date: '2022.09 완료', status: 'done', desc: '조합원 동의율 달성 및 인가' },
    { title: '사업시행인가', date: '2024.03 완료', status: 'done', desc: '건축/교통 심의 통과' },
    { title: '관리처분인가', date: '2025.11 완료', status: 'done', desc: '권리가액 및 분양계획 확정' },
    { title: '이주/철거/착공', date: '2026.03 ~ 진행 중', status: 'current', desc: '현재 단지 내 철거 작업 진행' },
    { title: '일반분양/입주', date: '2027년 예정', status: 'upcoming', desc: '착공 및 조합원/일반 분양' },
  ];

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gray-50 text-gray-800 font-['Pretendard'] break-keep">
      
      {/* 1. 상단 고정 헤더 */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 px-4 sm:px-8 py-3 flex justify-between items-center">
        <div className="text-base sm:text-xl font-extrabold text-blue-950 tracking-tight whitespace-nowrap">
          ○○구역 재개발
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="tel:1588-0000"
            className="hidden sm:inline-block text-xs text-blue-900 font-semibold border border-blue-900 px-3 py-1.5 rounded-lg"
          >
            TEL. 1588-0000
          </a>
          <a
            href="#contact"
            className="bg-blue-950 text-white hover:bg-blue-900 px-3.5 py-1.5 rounded-lg font-semibold transition text-xs sm:text-sm whitespace-nowrap shadow-sm"
          >
            상담신청
          </a>
        </div>
      </header>

      {/* 2. 메인 히어로 섹션 */}
      <section className="snap-start min-h-screen lg:h-screen w-full flex-shrink-0 relative flex flex-col justify-center items-center text-center px-5 bg-slate-900 text-white py-20 lg:py-0">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-3xl w-full mx-auto">
          <span className="inline-block text-amber-400 font-semibold text-xs sm:text-sm tracking-wider bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full mb-4">
            미래 가치의 중심
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 leading-snug tracking-tight">
            ○○구역 주택재개발 정비사업
          </h1>
          <p className="text-gray-200 text-sm sm:text-lg mb-8 font-light leading-relaxed max-w-xl mx-auto">
            자연과 첨단 인프라가 조화를 이루는 프리미엄 명품 단지<br />
            총 1,500세대 대단지의 새로운 주인이 되세요.
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition transform active:scale-95"
          >
            관심고객 등록 / 빠른 상담하기
          </a>
        </div>
      </section>

      {/* 3. 사업 개요 */}
      <section id="overview" className="snap-start min-h-screen lg:h-screen w-full flex-shrink-0 flex flex-col justify-center px-5 max-w-5xl mx-auto py-20 lg:py-0">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">OVERVIEW</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 mt-1">사업 개요</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <span className="text-xs text-gray-400 font-medium">사업명</span>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">○○구역 주택재개발 정비사업</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium">위치</span>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">서울특별시 ○○구 ○○동 OOO번지 일원</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium">구역면적</span>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">85,420㎡</p>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <span className="text-xs text-gray-400 font-medium">건축 규모</span>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">지하 3층 ~ 지상 35층 / 총 12개동</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium">세대 수</span>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">총 1,500세대 (일반분양 520세대 예정)</p>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium">시공사 / 시행사</span>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-0.5">○○건설 / ○○구역 재개발정비사업조합</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 평수별 평면도/도면 안내 (모바일 반응형 높이 & SVG 최적화) */}
      <section className="snap-start min-h-screen lg:h-screen w-full flex-shrink-0 bg-slate-100/70 flex flex-col justify-center px-5 py-20 lg:py-0">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-6">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">UNIT PLAN</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 mt-1">평수별 세대 도면</h2>
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
            {(['59', '84', '114'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 sm:px-6 py-2 rounded-xl font-bold text-xs sm:text-sm transition shadow-sm ${
                  selectedType === type
                    ? 'bg-blue-950 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {type}㎡ ({type === '59' ? '25평' : type === '84' ? '34평' : '45평'})
              </button>
            ))}
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* 왼쪽 CAD SVG 도면 (폰트 크기 및 간격 재조정) */}
            <div className="relative h-48 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 p-3 sm:p-4 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:16px_16px]" />

              <div className="relative z-10 flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-blue-400">
                <span className="bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
                  TYPE {selectedType}㎡
                </span>
                <span className="text-amber-400 font-bold">SCALE 1:100</span>
              </div>

              {/* 도면 그래픽 - 글자 크기 축소 및 수직 정렬 수정 */}
              <div className="relative z-10 my-auto flex justify-center items-center">
                <svg className="w-full max-w-[260px] h-28 sm:h-36 text-blue-400/80" viewBox="0 0 220 120" fill="none" stroke="currentColor">
                  <rect x="10" y="10" width="200" height="100" strokeWidth="2" className="text-amber-400/90" />
                  <line x1="75" y1="10" x2="75" y2="110" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="145" y1="10" x2="145" y2="110" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="75" y1="60" x2="145" y2="60" strokeWidth="1.5" />
                  <line x1="10" y1="60" x2="75" y2="60" strokeWidth="1.5" />

                  <text x="42" y="40" fill="#60a5fa" fontSize="8" textAnchor="middle" className="font-sans">침실 1</text>
                  <text x="42" y="90" fill="#60a5fa" fontSize="8" textAnchor="middle" className="font-sans">침실 2</text>
                  <text x="110" y="38" fill="#fbbf24" fontSize="9" textAnchor="middle" fontWeight="bold" className="font-sans">거실</text>
                  <text x="110" y="88" fill="#60a5fa" fontSize="8" textAnchor="middle" className="font-sans">주방</text>
                  <text x="180" y="62" fill="#60a5fa" fontSize="8" textAnchor="middle" className="font-sans">안방</text>
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-center text-[9px] sm:text-[10px] text-gray-400 font-mono border-t border-slate-800 pt-1.5">
                <span>발코니 확장형</span>
                <span className="text-blue-400">맞통풍 특화</span>
              </div>
            </div>

            {/* 오른쪽 설명 */}
            <div className="space-y-2.5 sm:space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md">
                  {unitTypes[selectedType as keyof typeof unitTypes].households}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mt-1.5">
                  {unitTypes[selectedType as keyof typeof unitTypes].name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-900">
                  {unitTypes[selectedType as keyof typeof unitTypes].structure}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-2.5">
                {unitTypes[selectedType as keyof typeof unitTypes].desc}
              </p>

              <ul className="space-y-1 pt-1">
                {unitTypes[selectedType as keyof typeof unitTypes].features.map((feat, i) => (
                  <li key={i} className="text-xs text-gray-700 flex items-center">
                    <span className="text-amber-500 font-bold mr-1.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4대 입지 프리미엄 */}
      <section className="snap-start min-h-screen lg:h-screen w-full flex-shrink-0 flex flex-col justify-center px-5 max-w-5xl mx-auto py-20 lg:py-0">
        <div className="w-full">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
              LOCATION PREMIUM
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 mt-1">4대 입지 프리미엄</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {locationPremiums.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-56 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col justify-end p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

                <div className="absolute top-4 left-4 z-10 flex items-center space-x-1.5">
                  <span className="text-amber-400 font-black text-xs font-mono bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-amber-400/30">
                    {item.num}
                  </span>
                  <span className="text-[10px] text-gray-300 font-mono tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="relative z-10 text-white space-y-1">
                  <span className="text-amber-400 text-[11px] font-semibold block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed pt-0.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 사업 진행 현황 */}
      <section className="snap-start min-h-screen lg:h-screen w-full flex-shrink-0 bg-slate-100/70 flex flex-col justify-center px-5 py-20 lg:py-0">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
              PROGRESS TIMELINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 mt-1">사업 진행 현황</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">투명하고 신속한 재개발 사업 진행 과정을 확인하세요.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {progressSteps.map((step, idx) => {
              const isCurrent = step.status === 'current';
              const isDone = step.status === 'done';

              return (
                <div
                  key={idx}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-blue-950 text-white border-blue-900 shadow-xl ring-2 ring-blue-900/30 transform -translate-y-1'
                      : 'bg-white text-gray-800 border-gray-100 shadow-sm hover:border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-amber-400' : 'text-amber-600'}`}>
                      STEP 0{idx + 1}
                    </span>

                    {isCurrent && (
                      <span className="flex items-center space-x-1.5 bg-amber-400 text-blue-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-950"></span>
                        <span>현재 단계</span>
                      </span>
                    )}
                    {isDone && (
                      <span className="text-blue-600 text-xs font-bold flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        완료
                      </span>
                    )}
                    {!isCurrent && !isDone && (
                      <span className="text-gray-400 text-[10px] bg-gray-100 px-2 py-0.5 rounded">
                        예정
                      </span>
                    )}
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold mb-1 ${isCurrent ? 'text-white' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs font-medium mb-3 ${isCurrent ? 'text-amber-300' : 'text-blue-900'}`}>
                    {step.date}
                  </p>

                  <p className={`text-[11px] leading-relaxed border-t pt-2.5 ${isCurrent ? 'text-gray-300 border-blue-900' : 'text-gray-500 border-gray-100'}`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. 상담 및 지도 + 푸터 */}
      <section id="contact" className="snap-start min-h-screen lg:h-screen w-full flex-shrink-0 flex flex-col justify-between px-5 max-w-5xl mx-auto pt-16 pb-6">
        <div className="my-auto">
          <div className="text-center mb-5">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">CONTACT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mt-1">분양 / 조합원 문의</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-3">관심고객 등록</h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">성함</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">연락처</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">관심 평수</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs text-gray-700 bg-white">
                    <option>59㎡ (25평형)</option>
                    <option>84㎡ (34평형)</option>
                    <option>114㎡ (45평형)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded-xl transition text-xs shadow-md active:scale-95"
                >
                  상담 신청하기
                </button>
              </form>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">홍보관 위치</h3>
                <div className="space-y-1.5 text-xs text-gray-600 mb-3">
                  <p><strong className="text-gray-900">주소:</strong> 서울특별시 ○○구 ○○대로 123 3층</p>
                  <p><strong className="text-gray-900">대표전화:</strong> 1588-0000</p>
                  <p><strong className="text-gray-900">운영시간:</strong> 10:00 ~ 18:00 (주말 정상 운영)</p>
                </div>
              </div>
              <div className="w-full h-32 bg-slate-100 rounded-xl border border-gray-200 flex flex-col justify-center items-center text-gray-400 text-xs">
                <span>지도 API 연동 영역</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-3 text-center text-[10px] text-gray-400 border-t border-gray-200">
          <p>Copyright © ○○구역 재개발정비사업조합. All Rights Reserved.</p>
        </footer>
      </section>

    </div>
  );
}