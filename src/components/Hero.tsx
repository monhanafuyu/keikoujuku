import React from 'react';

export const Hero: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1426] min-h-[90vh] flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_Keio_University_Library_20090725.jpg" 
          alt="Keio University Mita Campus" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-[#0B1426]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426] via-transparent to-[#0B1426]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Main Headline */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 border-2 border-[#b38f4f] text-[#b38f4f] bg-black/50 backdrop-blur-md rounded-sm text-sm md:text-base font-bold mb-6 tracking-widest shadow-xl">
            慶應義塾大学 専門指導塾
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-serif tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            一般入試も、推薦入試も。<br />
            <span className="text-[#b38f4f]">慶應合格</span>の最適解を創る。
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-bold tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/30 inline-block px-6 py-2 rounded-sm backdrop-blur-sm">
            完全個別指導 × オーダーメイド学習管理
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 mb-20 w-full max-w-sm mx-auto">
          <button 
            onClick={onOpenConsultation} 
            className="w-full py-4 bg-[#b38f4f] hover:bg-[#a07c3f] text-[#1a1a1a] font-bold text-lg transition-colors rounded-sm shadow-xl shadow-[#b38f4f]/20"
          >
            無料受験相談に申し込む
          </button>
          <a 
            href="#plans" 
            className="w-full py-4 border border-white/30 hover:bg-white/10 text-white font-bold text-lg transition-colors rounded-sm text-center bg-black/20 backdrop-blur-sm"
          >
            コースを見る
          </a>
        </div>

        {/* Divider line */}
        <div className="w-full max-w-4xl border-t border-white/20 mb-16 md:mb-20 drop-shadow-md"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center w-full max-w-6xl mx-auto">
          <div className="drop-shadow-xl bg-black/40 p-8 rounded-sm backdrop-blur-sm border border-white/10">
            <h3 className="text-[#b38f4f] font-serif text-3xl md:text-4xl mb-4 tracking-widest font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">慶應特化</h3>
            <p className="text-white font-bold text-sm md:text-base tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">慶應義塾大学 専門指導</p>
          </div>
          <div className="drop-shadow-xl bg-black/40 p-8 rounded-sm backdrop-blur-sm border border-white/10">
            <h3 className="text-[#b38f4f] font-serif text-3xl md:text-4xl mb-4 tracking-widest font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">1対1</h3>
            <p className="text-white font-bold text-sm md:text-base tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">完全個別指導体制</p>
          </div>
          <div className="drop-shadow-xl bg-black/40 p-8 rounded-sm backdrop-blur-sm border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#b38f4f]/20 rounded-full blur-[30px] pointer-events-none"></div>
            <h3 className="text-[#b38f4f] font-serif text-3xl md:text-4xl mb-4 tracking-widest font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">一般・推薦</h3>
            <p className="text-white font-bold text-sm md:text-base tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">両方式に完全対応</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};
