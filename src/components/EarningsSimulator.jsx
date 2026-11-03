import { useState } from 'react'
import { TELEGRAM } from './CtaButtons.jsx'

const PRESETS = [
  { deposit: 10000, target: 350000, label: 'Débutant' },
  { deposit: 15000, target: 500000, label: 'Intermédiaire' },
  { deposit: 25000, target: 1000000, label: 'Populaire', featured: true },
  { deposit: 30000, target: 1500000, label: 'Avancé' },
  { deposit: 50000, target: 3000000, label: 'VIP Master' },
]

export default function EarningsSimulator() {
  const [selected, setSelected] = useState(PRESETS[2])
  const profit = selected.target - selected.deposit
  const commission = profit * 0.25
  const netEarnings = profit - commission
  const formatMoney = (n) => new Intl.NumberFormat('fr-FR').format(Math.round(n)) + ' FCFA'
  const formatShort = (n) => new Intl.NumberFormat('fr-FR').format(Math.round(n)) + ' F'

  return (
    <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-card">
      <div className="border-b border-slate-100 bg-gradient-to-br from-blue-50/80 via-white to-white p-5 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <span className="badge-tag bg-brand-light text-brand-deep">Simulateur en direct</span>
            <h2 className="mt-2 text-lg font-black leading-tight text-slate-900 sm:text-xl">
              Calculez votre rentabilité nette
            </h2>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            25 % si gain
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-8">
        <p id="preset-label" className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
          Choisissez votre palier de départ
        </p>

        <div
          role="group"
          aria-labelledby="preset-label"
          className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-5"
        >
          {PRESETS.map((preset) => {
            const active = selected.deposit === preset.deposit
            return (
              <button
                key={preset.deposit}
                type="button"
                onClick={() => setSelected(preset)}
                aria-pressed={active}
                aria-label={`${preset.label} : dépôt ${formatShort(preset.deposit)}, objectif ${formatShort(preset.target)}`}
                className={`relative flex min-h-[84px] flex-col items-center justify-center rounded-2xl border px-2 py-3 text-center transition-all duration-200 ${
                  active
                    ? 'border-brand-dark bg-brand-light/70 ring-2 ring-brand-dark/15'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {preset.featured && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-dark px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                    Populaire
                  </span>
                )}
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    active ? 'text-brand-deep' : 'text-slate-500'
                  }`}
                >
                  {preset.label}
                </span>
                <span className="tnum mt-1 text-sm font-black text-slate-900">
                  {formatShort(preset.target)}
                </span>
                <span
                  className={`tnum text-[10px] font-medium ${
                    active ? 'text-brand-deep' : 'text-slate-500'
                  }`}
                >
                  dès {formatShort(preset.deposit)}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-4 sm:p-5">
          <div className="order-first col-span-2 rounded-xl border border-emerald-200 bg-white p-3 sm:order-none sm:col-span-1">
            <span className="text-[11px] font-bold text-emerald-700">Bénéfice net estimé</span>
            <p className="tnum mt-0.5 text-xl font-black leading-tight text-emerald-600 sm:text-lg">
              + {formatMoney(netEarnings)}
            </p>
          </div>
          <div>
            <span className="text-[11px] text-slate-600 sm:text-xs">Mise de départ</span>
            <p className="tnum mt-1 text-sm font-black text-slate-900 sm:text-lg">
              {formatMoney(selected.deposit)}
            </p>
          </div>
          <div>
            <span className="text-[11px] text-slate-600 sm:text-xs">Objectif visé</span>
            <p className="tnum mt-1 text-sm font-black text-slate-900 sm:text-lg">
              {formatMoney(selected.target)}
            </p>
          </div>
          <div>
            <span className="text-[11px] text-slate-600 sm:text-xs">Commission 25 %</span>
            <p className="tnum mt-1 text-sm font-black text-slate-500 sm:text-lg">
              − {formatMoney(commission)}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-relaxed text-slate-600 sm:max-w-xs sm:text-xs">
            🔐 Retrait rapide sous 5 à 10 minutes sur Mobile Money ou Crypto.
          </p>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary w-full px-6 sm:w-auto"
          >
            Valider cet objectif
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
